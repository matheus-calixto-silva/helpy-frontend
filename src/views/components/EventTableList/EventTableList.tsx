import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '@app/contexts/AuthProvider/useAuth';
import ongService from '@app/services/ongs';
import userService from '@app/services/users';

import { IEvent, ISkill } from '../../../types';

import styles from './EventTableList.module.css';

const EventTableList = () => {
  const { id, role } = useAuth();
  const [events, setEvents] = useState<IEvent[]>([]);

  const fetchData = async () => {
    try {
      const response =
        id && role === 'ong'
          ? await ongService.getEventsByOng(id)
          : await userService.getAllEvents();
      setEvents(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function formateDate(date: Date) {
    const inputDate = new Date(date);
    const formattedDate = inputDate.toLocaleDateString('en-GB');

    return formattedDate;
  }

  function formateSkills(skills: ISkill[]) {
    if (skills.length === 1) {
      return `${skills[0].name}`;
    }

    return `${skills[0].name} e +...`;
  }

  async function removeEvent(idOng: string, idEvent: string) {
    await ongService.removeOngEvent(idOng, idEvent, 'delete');
    setEvents(events.filter((event) => event._id !== idEvent));
  }

  return (
    <table className={styles.event_table}>
      <thead>
        <tr className="b2">
          <th>Nome</th>
          <th>Data</th>
          <th>Habilidades</th>
          <th>Voluntários</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {events &&
          events.map((item) => (
            <tr className="b3" key={item._id}>
              <td>{item.name}</td>
              <td>{formateDate(item.date)}</td>
              <td>{formateSkills(item.requiredSkills)}</td>
              <td>
                {item.volunteers.length}/{item.maxVolunteers}
              </td>
              <td>
                <Link to={`/conta/meus-eventos/${item._id}`}>Ver detalhes</Link>
                <a onClick={() => removeEvent(id!, item._id!)}>
                  Excluir evento
                </a>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default EventTableList;
