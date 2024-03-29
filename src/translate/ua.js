import github from "../assets/img/github.svg";
import link from "../assets/img/portfolio/link.svg";
import mySite from "../assets/img/portfolio/mySite.webp";
import quizzical from "../assets/img/portfolio/quizzical.webp";
import tenzies from "../assets/img/portfolio/tenzies.webp";
import gameStore from "../assets/img/portfolio/game-store.webp";
import nikeStore from "../assets/img/portfolio/nike-store.webp";
import pokedex from "../assets/img/portfolio/pokedex.webp";
import iwillhelpyou from "../assets/img/portfolio/iwillhelpyou.webp";

const uaData = {
  change: "eng",
  nav: {
    home: "Головна",
    about: "Про мене",
    portfolio: "Портфоліо",
    contacts: "контакти",
  },
  home: {
    title: "Добрий день, everybody!",
    text: "Рада бачити вас на своєму сайті",
    todo: "Давайте трохи познайомимось, в меню ви можете побачити розділи з інформацією",
  },
  about: {
    title: "ТРОХИ ПРО МЕНЕ",
    name: "Аліна",
    country: "Україна",
    city: "Київ",
    more: "Люблю програмувати, слухати музику, читати та дізнаватися нове. Обожнюю тварин. В сімʼї живе 2 собаки та кішка. Чи ми всі живемо у кішки, ну ви знаєте :)",
    btn: { skills: "Навички", personal: "Персональне" },
  },
  contacts: {
    title: "ЗВʼЯЖІТЬСЯ ЗІ МНОЮ",
    link: "посилання на моє",
    link2: "посилання на мій",
    webcv:
      "https://www.canva.com/design/DAF2Cp1ILaU/50qidrEO-smezIYEDVCFsQ/view?utm_content=DAF2Cp1ILaU&utm_campaign=designshare&utm_medium=link&utm_source=editor",
  },
  portfolio: {
    title: "МОЇ РОБОТИ",
    subtitle:
      "*щоб побачити інформацію про проєкт - просто натисніть на зображення",
  },
  footer: {
    text: "Зроблено з любовʼю",
    name: "Аліна Штих",
  },
  "projects-data": [
    {
      key: 7,
      title: "I Will Help You",
      description:
        "Сайт благодійного фонду, який має функціонал менеджменду волонтерів, функцією донатів, надання освіти та юридичних послуг. В мої обовʼязки входило: Верстка головної сторінки, Оптимізація зображень, Розробка адмін-панелі: верстка, функціонал додати/видалити/редагувати информацію, Доступність. Технології: React(hooks, router), Redux-toolkit, TypeSctipt, SCSS, REST API.",
      coverImg: iwillhelpyou,
      github: {
        icon: github,
        link: "https://github.com/anpdko/i-will-help-you-client",
      },
      link: { icon: link, link: "https://iwillhelpyou.charity/" },
    },
    {
      key: 6,
      title: "Pokedex",
      description:
        "Pokedex - веб додаток для пк і планшетів, де ви можете знайти будь-якого покемона та дізнатись інформацію про нього, на основі pokeAPI. Я використовувала стек: react, typescrip, redux-toolkit, firebase для авторизації, axios, SCSS",
      coverImg: pokedex,
      github: {
        icon: github,
        link: "https://github.com/AlinaShtykhUA/pokedex",
      },
      link: { icon: link, link: "https://pokedex-pet.netlify.app/" },
    },
    {
      key: 5,
      title: "Персональний сайт",
      description:
        "Сайт-портфоліо на React, виконаний в стилі single-page application(SPA)",
      coverImg: mySite,
      github: {
        icon: github,
        link: "https://github.com/AlinaShtykhUA/my-portfolio",
      },
      link: { icon: link, link: "https://www.web-shtykh.tech/" },
    },
    {
      key: 4,
      title: "Гра Quizzical",
      description:
        "Гра quizze на React. Самостійний проект з сайту Scrimba. Я використовувала: trivia database API, nanoid, react create app, react hooks, SASS",
      coverImg: quizzical,
      github: {
        icon: github,
        link: "https://github.com/AngelinaShtykh/quizzical-game",
      },
      link: {
        icon: link,
        link: "https://remarkable-sable-3880a9.netlify.app/",
      },
    },
    {
      key: 3,
      title: "Гра Tenzies",
      description:
        "Класична гра tenzi на React. Самостійний проект із Scrimba. Я додала таймер, рахунок та кращий результат зі зберіганням у localStorage.",
      coverImg: tenzies,
      github: {
        icon: github,
        link: "https://github.com/AlinaShtykhUA/Tenzi-game",
      },
      link: {
        icon: link,
        link: "https://tubular-pithivier-27409e.netlify.app/",
      },
    },
    {
      key: 2,
      title: "Магазин ігр",
      description:
        "Сайт магазина ігр на React. З використанням redux-toolkit, router.",
      coverImg: gameStore,
      github: {
        icon: github,
        link: "https://github.com/AlinaShtykhUA/game-store",
      },
      link: {
        icon: link,
        link: "https://6481133e05899f0085b99f42--tiny-snickerdoodle-03d324.netlify.app/",
      },
    },
    {
      key: 1,
      title: "Магазин взуття Nike",
      description:
        "Магазин лімітованного взуття Nike. З використанням react, redux(toolkit). Для дизайну використовувалась бібліотека Tailwind.",
      coverImg: nikeStore,
      github: {
        icon: github,
        link: "https://github.com/AlinaShtykhUA/nike-store",
      },
      link: {
        icon: link,
        link: "https://648cacd83722940323c63781--subtle-tanuki-7aeff2.netlify.app/",
      },
    },
  ],
};

export default uaData;
