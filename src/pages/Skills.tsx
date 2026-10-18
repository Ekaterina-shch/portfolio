import './PageStyles.css';

const Skills = () => {
  const technicalSkills = [
    {
      name: 'React / TypeScript',
      description:
        'Разработка SPA и UI-компонентов, строгая типизация, рефакторинг и перевод проектов с JS на TS для снижения ошибок.',
    },
    {
      name: 'Next.js',
      description:
        'Понимание принципов SSR, SSG, маршрутизации (App Router), оптимизации производительности и SEO-ориентированной разработки.',
    },
    {
      name: 'JavaScript (ES6+) & jQuery',
      description:
        'Чистая JS-логика, асинхронные запросы, обработка событий, поддержка и рефакторинг легаси-кода.',
    },
    {
      name: 'HTML5 / CSS3 / SCSS / Tailwind CSS',
      description:
        'Адаптивная, кроссбраузерная и Mobile First верстка, Pixel Perfect, утилитные классы, создание переиспользуемых UI-библиотек.',
    },
    {
      name: 'React Query / RTK Query',
      description:
        'Кеширование, менеджмент серверного состояния и асинхронных запросов.',
    },
    {
      name: 'REST API',
      description:
        'Интеграция фронтенда с бэкенд-сервисами и CRM-системами, обработка данных, валидация и отправка форм (включая Keitaro/Binom).',
    },
    {
      name: 'Vite',
      description:
        'Сборка и локальная разработка приложений, настройка и оптимизация итоговых бандлов.',
    },

    {
      name: 'Git & GitHub/GitLab',
      description: 'Контроль версий, ветвление.',
    },
  ];
  const additionalSkills = [
    {
      name: 'Google PageSpeed Insights & Performance',
      description:
        'Оптимизация скорости загрузки (Google PageSpeed 90+), минимизация кода, оптимизация медиафайлов (снижение среднего веса страниц до <500 Кб).',
    },
    {
      name: 'Cross-Browser & Mobile First',
      description:
        'Гарантированная корректность отображения на всех устройствах.',
    },
    {
      name: 'Figma / Photoshop',
      description:
        'Точная верстка по макетам, работа с UI-китами и дизайн-системами.',
    },
    {
      name: 'PHP (Базовый)',
      description:
        'Интеграция верстки с серверными шаблонами, настройка отправки форм.',
    },
    {
      name: 'Deployment & Hosting',
      description: 'Публикация приложений на Vercel / Netlify.',
    },
    {
      name: 'Code Review & Менторство',
      description: 'Проверка качества кода, контроль стандартов верстки.',
    },
    {
      name: 'Управление задачами',
      description: 'Распределение задач внутри направления, контроль сроков.',
    },
    {
      name: 'Кросс-функциональное взаимодействие',
      description: 'Работа с backend-разработчиками и дизайнерами.',
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
