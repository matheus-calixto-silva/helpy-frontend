/* eslint-disable import/prefer-default-export */

export const ongRoutes = {
  ongIndex: '/',
  createEvent: '/criar-evento',
  editEvent: '/editar-evento/:eventId',
  registeredEvents: '/meus-eventos',
  eventById: '/meus-eventos/:eventId',
};

export const volunteerRoutes = {
  volunteerIndex: '/',
  myEvents: '/meus-eventos',
  eventById: '/evento-detalhes/:eventId',
};

export const adminRoutes = {
  adminIndex: '/',
  skills: '/skills',
  createSkill: '/skills',
  skillById: '/skills/:skillId',
  editSkill: '/editar-skill/:skillId',
  categories: '/categorias',
  createCategory: '/categorias',
  categoryById: '/categorias/:categoriaId',
  editCategory: '/editar-categoria/:categoriaId',
  volunteers: '/voluntarios',
  volunteerById: '/voluntarios/:voluntarioId',
  editVolunteer: '/editar-voluntario/:voluntarioId',
  ongs: '/ongs',
  ongById: '/ongs/:ongId',
  editOng: '/editar-ong/:ongId',
};

export const defaultRoutes = {
  account: '/conta/*',
  home: '/home',
  login: '/login',
  notfound: '*',
};
