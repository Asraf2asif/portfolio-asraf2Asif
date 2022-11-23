import { images } from './images';

const { frontend, backend, maintenance } = images;

const menuList = [
  'home',
  'service',
  'work',
  'skills',
  'testimonial',
  'contact',
];
const headCircleList = [
  { name: 'Design', icon: frontend },
  { name: 'Develop', icon: backend },
  { name: 'Maintain', icon: maintenance },
];
const workCatList = ['UI/UX', 'Web app', 'Mobile app', 'React JS', 'All'];

export const variables = {
  menuList,
  headCircleList,
  workCatList,
};
