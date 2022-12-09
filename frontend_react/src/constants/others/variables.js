import { images } from "./images";

const {
  frontend,
  backend,
  maintenance,
  codewars: codewarsImg,
  logo: logoImg,
} = images;

const menuList = [
  "home",
  "service",
  "work",
  "skills",
  // 'testimonial',
  "contact",
];

const headCircleList = [
  { name: "Design", icon: frontend },
  { name: "Develop", icon: backend },
  { name: "Maintain", icon: maintenance },
];

const workCatList = ["UI/UX", "Web app", "Mobile app", "React JS", "All"];

const bioData = {
  logo: logoImg,
  textPart1: "A Programmer with a wide range of",
  textPart2: "Design Disciplines & Development Capabilities",
  info: [
    {
      name: "address",
      icon: {
        src: "fa-solid fa-location-dot",
        type: "font",
      },
      textPart1: {
        linkPart1: "",
        text: "Abdul Ali Nagar, Alonkar Circle, Pahartali",
      },
      textPart2: { linkPart1: "", text: "Chittagong 4202, Bangladesh" },
    },
    {
      name: "mail",
      icon: {
        src: "fa-solid fa-envelope",
        type: "font",
      },
      textPart1: { linkPart1: "mailto:", text: "client.asraf2asif@gmail.com" },
      textPart2: { linkPart1: "mailto:", text: "asraf2asif@gmail.com" },
    },
    {
      name: "call",
      icon: {
        src: "fa-solid fa-phone",
        type: "font",
      },
      textPart1: { linkPart1: "tel:", text: "+880-1794-207760" },
      textPart2: { linkPart1: "tel:", text: "+880-1876-078348" },
    },
    {
      name: "sms",
      icon: {
        src: "fa-solid fa-comment-sms",
        type: "font",
      },
      textPart1: { linkPart1: "sms:+880-", text: "1876-078348" },
      textPart2: { linkPart1: "sms:+880-", text: "1794-207760" },
    },
  ],
};

const accountsList = [
  {
    name: "Github",
    linkPart1: "https://github.com",
    linkPart2: "/Asraf2asif",
    icon: {
      src: "fa-brands fa-github",
      type: "font",
    },
  },
  {
    name: "FreeCodeCamp",
    linkPart1: "https://www.freecodecamp.org",
    linkPart2: "/asraf2asif",
    icon: {
      src: "fa-brands fa-free-code-camp",
      type: "font",
    },
  },
  {
    name: "Linkdin",
    linkPart1: "https://www.linkedin.com",
    linkPart2: "/in/asraf2asif",
    icon: {
      src: "fa-brands fa-linkedin",
      type: "font",
    },
  },
  {
    name: "Codewars",
    linkPart1: "https://www.codewars.com",
    linkPart2: "/users/Asraf2asif",
    icon: {
      src: codewarsImg,
      type: "img",
    },
  },
  {
    name: "Codepen",
    linkPart1: "https://codepen.io",
    linkPart2: "/Asraf2Asif",
    icon: {
      src: "fa-brands fa-codepen",
      type: "font",
    },
  },
];

export const variables = {
  menuList,
  headCircleList,
  workCatList,
  accountsList,
  bioData,
};
