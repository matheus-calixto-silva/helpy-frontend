import axios from 'axios';

const baseUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

const getAllUfs = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

const getAllCities = async (uf: string) => {
  const request = await axios.get(`${baseUrl}/${uf}/municipios`);
  return request.data;
};

export default {
  getAllUfs,
  getAllCities,
};
