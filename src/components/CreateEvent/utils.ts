import ibge from '../../services/ibge';
import skillService from '../../services/skills';


import { City, Uf } from '../../types';

export const fetchUfData = async () => {
  const apiData = await ibge.getAllUfs();
  const ufInitials = apiData.map((uf: Uf) => uf.sigla);
  return ufInitials;
};

export const fetchCityData = async (UfId: string) => {
  const apiData = await ibge.getAllCities(UfId);
  const cityInitials = apiData.map((city: City) => city.nome);
  return cityInitials;
};

export const fetchSkills = async (token: string) => {
  const skills = await skillService.getAllSkills(token);
  return skills;
};