import pt from 'date-fns/locale/pt-BR';
import 'leaflet/dist/leaflet.css';
import MultiSelect from 'multiselect-react-dropdown';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';
import { useParams } from 'react-router-dom';

import { useAuth } from '@app/contexts/AuthProvider/useAuth';
import useNavigation from '@app/libs/navigate';
import ongService from '@app/services/ongs';

import { ISkill } from '../../../types';
import Button from '../Button/Button';
import Dropzone from '../Dropzone/Dropzone';

import styles from './EventForm.module.css';
import { fetchCityData, fetchSkills, fetchUfData } from './utils';

registerLocale('pt-BR', pt);

const EventForm = () => {
  const { id, token } = useAuth();
  const navigate = useNavigation();
  const routeParams = useParams();
  const { eventId } = routeParams;
  const path = window.location.pathname;

  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<ISkill[]>([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [mapPosition, setMapPosition] = useState<[number, number]>([0, 0]);
  const [selectedFile, setSelectedFile] = useState<File>();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    maxVolunteers: '',
    street: '',
  });

  useEffect(() => {
    if (path === `/conta/editar-evento/${eventId}` && eventId && id) {
      const getData = async () => {
        const data = await ongService.getEventById(id, eventId);
        setFormData({
          ...formData,
          name: data.name,
          description: data.description,
          maxVolunteers: data.maxVolunteers,
          street: data.address.street,
        });
        setSelectedUf(data.address.uf);
        setSelectedCity(data.address.city);
        setSelectedDate(new Date(data.date));
        setSelectedSkills(data.requiredSkills);

        const { eventPic } = data;
        if (eventPic) {
          const response = await fetch(
            `http://localhost:3001/uploads/${eventPic}`,
          );
          const blob = await response.blob();
          const selectedFile = new File([blob], eventPic);
          setSelectedFile(selectedFile);
        }
      };
      getData();
    } else {
      setSelectedSkills([]);
      setSelectedUf('0');
      setSelectedCity('0');
      setSelectedDate(null);
      setSelectedFile(undefined);

      setFormData({
        name: '',
        description: '',
        maxVolunteers: '',
        street: '',
      });
    }
  }, [path]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setMapPosition([latitude, longitude]);
    });
  }, []);

  useEffect(() => {
    const getData = async () => {
      if (token) {
        const data = await fetchSkills(token);
        setSkills(data);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchUfData();
      setUfs(data);
    };

    getData();
  }, []);

  useEffect(() => {
    if (selectedUf === '0') return;
    const getData = async () => {
      const data = await fetchCityData(selectedUf);
      setCities(data);
    };

    getData();
  }, [selectedUf]);

  const Markers = ({ mapPosition }: { mapPosition: [number, number] }) => {
    const [selectedPosition, setSelectedPosition] = useState(mapPosition);

    const map = useMapEvents({
      click(e) {
        setSelectedPosition([e.latlng.lat, e.latlng.lng]);
      },
    });

    return (
      <Marker
        key={selectedPosition[0]}
        position={selectedPosition}
        interactive={false}
      />
    );
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedUf(event.target.value);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedCity(event.target.value);
  }

  function handleDateChange(date: Date | null) {
    setSelectedDate(date);
  }

  function handleSelect(selectedList: ISkill[]) {
    setSelectedSkills(selectedList);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const [latitude, longitude] = mapPosition;
    const { name, description, maxVolunteers, street } = formData;
    const date = selectedDate;
    const uf = selectedUf;
    const city = selectedCity;
    const skills = selectedSkills.map((skill) => skill._id).join();
    const photo = selectedFile;

    const data = new FormData();

    data.append('name', name);
    data.append('street', street);
    data.append('city', city);
    data.append('uf', uf);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('description', description);
    data.append('skills', skills);
    data.append('maxVolunteers', String(parseInt(maxVolunteers)));

    if (photo) {
      data.append('photo', photo);
    }

    if (date) {
      data.append('date', date.toISOString());
    }

    if (eventId && id) {
      try {
        await ongService.updateOngEvent(id, eventId, data, 'update');
        navigate('/conta/meus-eventos');
      } catch (error) {
        console.log('Error:', error);
      }
    } else if (id) {
      try {
        await ongService.createOngEvent(id, data);
        navigate('/conta/meus-eventos');
      } catch (error) {
        console.log('Error:', error);
      }
    }
  }

  return (
    <form className={styles.create_event} onSubmit={handleSubmit}>
      <h1>{eventId ? 'Atualizar' : 'Cadastro de'} evento</h1>

      <fieldset>
        <legend>
          <h2>Informações gerais</h2>
        </legend>

        <div className={styles.field}>
          <label htmlFor="name">Nome do evento</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleInputChange}
            value={formData.name}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="maxVolunteers">Número de Voluntários</label>
          <input
            type="number"
            name="maxVolunteers"
            id="maxVolunteers"
            onChange={handleInputChange}
            value={formData.maxVolunteers}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="date">Data</label>
          <DatePicker
            name="date"
            id="date"
            selected={selectedDate}
            onChange={handleDateChange}
            locale="pt-BR"
            dateFormat="dd/MM/yyyy"
            className={styles['custom-datepicker']}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="skills">Habilidades</label>
          <MultiSelect
            id="skills"
            displayValue="name"
            options={skills}
            selectedValues={selectedSkills}
            onSelect={handleSelect}
            onRemove={handleSelect}
            className={styles.multiselect}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="description">Descrição</label>
          <input
            type="textarea"
            name="description"
            id="description"
            onChange={handleInputChange}
            value={formData.description}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="photo">Adicione uma foto do Evento</label>
          <Dropzone onFileUploaded={setSelectedFile} />
        </div>
      </fieldset>

      <fieldset>
        <legend>
          <h2>Endereço</h2>
        </legend>

        <div className={styles.field}>
          <label htmlFor="street">Logradouro</label>
          <input
            type="text"
            name="street"
            id="street"
            onChange={handleInputChange}
            value={formData.street}
          />
        </div>

        <div className={styles.field_group}>
          <div className={styles.field}>
            <label htmlFor="uf">Estado (UF)</label>
            <select
              name="uf"
              id="uf"
              value={selectedUf}
              onChange={handleSelectUf}
            >
              <option value="0">Selecione uma UF</option>
              {ufs.map((uf) => (
                <option key={uf} value={uf}>
                  {uf}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="city">Cidade</label>
            <select
              name="city"
              id="city"
              value={selectedCity}
              onChange={handleSelectCity}
            >
              <option value="0">Selecione uma Cidade</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="map">
            Clique no mapa para marcar um ponto de referência
          </label>
          {mapPosition[0] !== 0 && (
            <MapContainer
              style={{ height: '45rem', width: '100%' }}
              center={mapPosition}
              zoom={30}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Markers mapPosition={mapPosition} />
            </MapContainer>
          )}
        </div>
      </fieldset>
      <div className={styles.button_container}>
        <Button className={styles.button} type="submit">
          {eventId ? 'Atualizar' : 'Cadastrar'} evento
        </Button>
      </div>
    </form>
  );
};

export default EventForm;
