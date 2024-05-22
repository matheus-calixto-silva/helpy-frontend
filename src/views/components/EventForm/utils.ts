import ibge from '@app/services/ibge';
import skillService from '@app/services/skills';

import { ICity, IUf } from '../../../types';

export const fetchUfData = async () => {
  const apiData = await ibge.getAllUfs();
  const ufInitials = apiData.map((uf: IUf) => uf.sigla);
  return ufInitials;
};

export const fetchCityData = async (UfId: string) => {
  const apiData = await ibge.getAllCities(UfId);
  const cityInitials = apiData.map((city: ICity) => city.nome);
  return cityInitials;
};

export const fetchSkills = async (token: string) => {
  const skills = await skillService.getAllSkills(token);
  return skills;
};
