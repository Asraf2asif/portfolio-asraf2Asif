import { images } from './images';

const { frontend, backend, maintenance, codewars: codewarsImg } = images;

const menuList = [
  'home',
  'service',
  'work',
  'skills',
  // 'testimonial',
  'contact',
];
const headCircleList = [
  { name: 'Design', icon: frontend },
  { name: 'Develop', icon: backend },
  { name: 'Maintain', icon: maintenance },
];
const workCatList = ['UI/UX', 'Web app', 'Mobile app', 'React JS', 'All'];

const accountsList = [
  {
    name: 'Github',
    linkPart1: 'https://github.com',
    linkPart2: '/Asraf2asif',
    icon: {
      src:'fa-brands fa-github',
      type:'font',
    }
  },
  {
    name: 'FreeCodeCamp',
    linkPart1: 'https://www.freecodecamp.org',
    linkPart2: '/asraf2asif',
    icon: {
      src: 'fa-brands fa-free-code-camp',
      type: 'font',
    }
  },
  {
    name: 'Linkdin',
    linkPart1: 'https://www.linkedin.com',
    linkPart2: '/in/asraf2asif',
    icon: {
      src:'fa-brands fa-linkedin',
      type:'font',
    }
  },
  {
    name: 'Codewars',
    linkPart1: 'https://www.codewars.com',
    linkPart2: '/users/Asraf2asif',
    icon: {
      src: codewarsImg,
      type: 'img',
    }
  },
  {
    name: 'Codepen',
    linkPart1: 'https://codepen.io',
    linkPart2: '/Asraf2Asif',
    icon: {
      src: 'fa-brands fa-codepen',
      type: 'font',
    }
  },
]

export const variables = {
  menuList,
  headCircleList,
  workCatList,
  accountsList,
};

