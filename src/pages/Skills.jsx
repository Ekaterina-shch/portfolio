import './PageStyles.css';

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git'];

  return (
    <section className="page skills">
      <div className="container">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
