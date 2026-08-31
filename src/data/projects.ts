export interface Project {
  id: string;
  title: string;
  description: string;
  img: string;
  link: string;
  githubLink: string;
  stack: string[];
  isDeveloping?: boolean;
}

const projects: Project[] = [
  {
    id: 'four-horses-club',
    title: 'Клуб четырех коней',
    description: '',
    img: `${import.meta.env.BASE_URL}/img/fourHorsesClub.png`,
    link: 'https://ekaterina-shch.github.io/four-horses-club/',
    githubLink: 'https://github.com/Ekaterina-shch/four-horses-club',
    stack: ['HTML', 'JS', 'CSS'],
  },
  // {
  //   id: 'my-portfolio',
  //   title: 'My Portfolio',
  //   description: '',
  //   img: `${import.meta.env.BASE_URL}/img/my-porfolio.png`,
  //   link: '',
  //   githubLink: '',
  //   stack: ['React', 'React Router', 'HTML', 'CSS', 'React Icons'],
  // },
  {
    id: 'rosexpress',
    title: 'Мебельные туры - ROSEXPRESS',
    description: '',
    img: `${import.meta.env.BASE_URL}/img/rosexpress.png`,
    link: 'https://ekaterina-shch.github.io/test-task/',
    githubLink: 'https://github.com/Ekaterina-shch/test-task',
    stack: ['HTML', 'JS', 'CSS', 'SASS/SCSS', 'AOS'],
  },

  {
    id: 'c-solution',
    title: 'Конструктивные решения',
    description: '',
    img: `${import.meta.env.BASE_URL}/img/csolution.png`,
    link: 'https://test.csolutions.tw1.ru/',
    githubLink: '',
    stack: ['HTML', 'JS ES6+', 'CSS', 'Swiper'],
  },
  {
    id: 'bar-street',
    title: 'Bar-Street',
    description: '',
    img: `${import.meta.env.BASE_URL}/img/barStreet.png`,
    link: 'https://bar-street.ru/',
    githubLink: '',
    stack: [
      'HTML',
      'JS ES6+',
      'CSS',
      'Mapbox GL JS',
      'Perfect-scrollbar',
      'FSLightbox',
      'Swiper',
    ],
  },
  {
    id: 'c-lan',
    title: 'Компьютеры и сети',
    description: '',
    img: `${import.meta.env.BASE_URL}/img/kis.png`,
    link: 'https://c-lan.ru/',
    githubLink: '',
    stack: ['HTML', 'JS ES6+', 'CSS', 'GSAP'],
  },
  {
    id: 'cinema-club',
    title: 'После титров',
    description: '',
    img: `${import.meta.env.BASE_URL}/img/cinemaClub.png`,
    link: '',
    githubLink: 'https://github.com/Ekaterina-shch/cinema-club',
    stack: ['Next.js', 'TypeScript', 'CSS Modules', 'Swiper'],
  },
  {
    id: 'catering',
    title: 'GO-FOOD',
    description: '',
    img: `${import.meta.env.BASE_URL}/img/catering.png`,
    link: 'https://go-food.ru/',
    githubLink: '',
    stack: [
      'HTML',
      'JS ES6+',
      'CSS',
      'Mapbox GL JS',
      'Perfect-scrollbar',
      'FSLightbox',
      'Swiper',
      'Vite',
    ],
  },
  {
    id: 'msu',
    title: 'Лекции.РФ',
    description: 'Платформа для преподавателей и студентов МГУ',
    img: `${import.meta.env.BASE_URL}/img/msu.png`,
    link: '',
    githubLink: '',
    stack: ['React', 'JS ES6+', 'CSS', 'Swiper', 'Vite'],
    isDeveloping: false,
  },
  {
    id: 'fun-casino',
    title: 'Фан-казино',
    description: '',
    img: `${import.meta.env.BASE_URL}/img/funCasino.png`,
    link: '',
    githubLink: '',
    stack: [
      'HTML',
      'TS',
      'CSS',
      'Swiper',
      'Mapbox GL JS',
      'Perfect-scrollbar',
      'FSLightbox',
      'Vite',
    ],
    isDeveloping: false,
  },
];

export default projects;
