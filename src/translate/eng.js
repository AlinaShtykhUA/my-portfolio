import github from '../assets/img/github.svg';
import link from '../assets/img/portfolio/link.svg';
import mySite from '../assets/img/portfolio/mySite.png';
import quizzical from '../assets/img/portfolio/quizzical.png';
import tenzies from '../assets/img/portfolio/tenzies.png';
import gameStore from '../assets/img/portfolio/game-store.png';
import nikeStore from '../assets/img/portfolio/nike-store.png';

const engData = {
  change: 'ua',
  nav: {
    home: 'Home',
    about: 'About me',
    portfolio: 'Portfolio',
    contacts: 'Contacts',
  },
  home: {
    title: 'Hello, everyone!',
    text: 'Glad to see you on my website',
    todo: "Let's get acquainted, in the menu you can see information sections",
  },
  about: {
    title: 'A little bit about me ',
    name: 'Alina',
    country: 'Ukraine',
    city: 'Kyiv',
    more: 'I like to program, listen to music, read and learn something new. I love animals. We have 2 dogs and a cat in our family.',
    btn: { skills: 'Skills', personal: 'Personal' },
  },
  contacts: {
    title: 'Contact me',
    link: 'link to my',
  },
  portfolio: {
    title: 'My works',
    subtitle:
      '*for more information about the project - just click on the image',
  },
  footer: {
    text: 'Make with love',
    name: 'Alina Shtykh',
  },
  'projects-data': [
    {
      key: 1,
      title: 'Personal site',
      description:
        'Site-portfolio in React, make in single-page application style.',
      coverImg: mySite,
      github: {
        icon: github,
        link: 'https://github.com/AlinaShtykhUA/my-portfolio',
      },
      link: { icon: link, link: '#' },
    },
    {
      key: 2,
      title: 'Quizzical game',
      description:
        'Quizzical game in react. Solo project from Scrimba. I used trivia database API, nanoid, react create app, react hooks, SASS',
      coverImg: quizzical,
      github: {
        icon: github,
        link: 'https://github.com/AngelinaShtykh/quizzical-game',
      },
      link: {
        icon: link,
        link: 'https://remarkable-sable-3880a9.netlify.app/',
      },
    },
    {
      key: 3,
      title: 'Tenzies game',
      description: 'Classic tenzi game in react. I added timer and best score.',
      coverImg: tenzies,
      github: {
        icon: github,
        link: 'https://github.com/AlinaShtykhUA/Tenzi-game',
      },
      link: {
        icon: link,
        link: 'https://tubular-pithivier-27409e.netlify.app/',
      },
    },
    {
      key: 4,
      title: 'Game store',
      description: 'Game store, created in react, redux(toolkit), router',
      coverImg: gameStore,
      github: {
        icon: github,
        link: 'https://github.com/AlinaShtykhUA/game-store',
      },
      link: {
        icon: link,
        link: 'https://6481133e05899f0085b99f42--tiny-snickerdoodle-03d324.netlify.app/',
      },
    },
    {
      key: 5,
      title: 'Nike store',
      description:
        'Nike store, created in react, redux(toolkit). For design used Tailwind.',
      coverImg: nikeStore,
      github: {
        icon: github,
        link: 'https://github.com/AlinaShtykhUA/nike-store',
      },
      link: {
        icon: link,
        link: 'https://648cacd83722940323c63781--subtle-tanuki-7aeff2.netlify.app/',
      },
    },
  ],
};

export default engData;
