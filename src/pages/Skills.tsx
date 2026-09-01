import './PageStyles.css';

const Skills = () => {
  const technicalSkills = [
    {
      name: 'React / Next.js',
      description: 'Создание SPA и SSR приложений, работа с React Hooks.',
    },
    {
      name: 'TypeScript',
      description: 'Строгая типизация, интерфейсы, дженерики и безопасный код.',
    },
    {
      name: 'JavaScript (ES6+)',
      description: 'Асинхронный JS, Event Loop, DOM API, работа с промисами.',
    },
    {
      name: 'Redux Toolkit / Zustand',
      description:
        'Управление глобальным состоянием приложения (State Management).',
    },
    {
      name: 'React Query / RTK Query',
      description:
        'Кеширование, менеджмент серверного состояния и асинхронных запросов.',
    },
    {
      name: 'HTML5 & CSS3',
      description:
        'Семантическая верстка, Flexbox, Grid, адаптивный и кроссбраузерный дизайн.',
    },
    {
      name: 'Tailwind CSS / SCSS',
      description:
        'Быстрая стилизация с помощью утилитных классов и препроцессоров.',
    },
    {
      name: 'REST API & Axios',
      description:
        'Интеграция с бэкенд-сервисами, обработка ошибок и авторизация.',
    },
    {
      name: 'Vite & Webpack',
      description: 'Сборка, конфигурирование и оптимизация банндлов.',
    },
    {
      name: 'Git & GitHub/GitLab',
      description:
        'Ветвление (Git Flow), Code Review, Pull Requests и совместная работа.',
    },
  ];
  const additionalSkills = [
    {
      name: 'Testing (Jest / React Testing Library)',
      description: 'Написание Unit и интеграционных тестов для компонентов.',
    },
    {
      name: 'Performance Optimization',
      description:
        'Профилирование, Lazy Loading, Code Splitting, Memoization (useMemo/React.memo).',
    },
    {
      name: 'Figma & UI/UX Design',
      description: 'Pixel Perfect верстка по макетам, работа с UI-китами.',
    },
    {
      name: 'Web Accessibility (a11y)',
      description: 'Создание доступных интерфейсов с использованием WAI-ARIA.',
    },
    {
      name: 'Deployment & Hosting',
      description:
        'Публикация веб-приложений на Vercel/Netlify, опыт работы с FTP-серверами.',
    },
    {
      name: 'Node.js & npm',
      description:
        'Понимание экосистемы Node.js, работа с пакетными менеджерами и скриптами сборки.',
    },
  ];
  return (
    <section className="page skills">
      <div className="container">
        <h2>Навыки</h2>
        <h3>Технические навыки:</h3>

        <ul className="skills-list">
          {technicalSkills.map((skill) => (
            <li key={skill.name} className="skill-item">
              <h4>{skill.name}</h4>
              <p>{skill.description}</p>
            </li>
          ))}
        </ul>
        <h3>Дополнительные навыки:</h3>
        <ul className="skills-list">
          {additionalSkills.map((skill) => (
            <li key={skill.name} className="skill-item">
              <h4>{skill.name}</h4>
              <p>{skill.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
