import './PageStyles.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', description: 'Создание структурированных веб-страниц.' },
    { name: 'CSS', description: 'Стилизация и адаптивная верстка.' },
    {
      name: 'JavaScript',
      description: 'Разработка интерактивных веб-приложений.',
    },
    { name: 'React', description: 'Создание динамических интерфейсов.' },
    { name: 'Git', description: 'Управление версиями и совместная работа.' },
  ];
  const additionalSkills = [
    { name: 'UI/UX Design', description: 'Основы дизайна и работы с Figma.' },
    { name: 'Node.js', description: 'Понимание бэкенд-разработки.' },
    { name: 'SEO', description: 'Оптимизация сайтов для поисковых систем.' },
    {
      name: 'Performance Optimization',
      description: 'Улучшение скорости загрузки и производительности.',
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
