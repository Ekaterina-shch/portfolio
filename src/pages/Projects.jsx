import { Link } from 'react-router-dom';
import './PageStyles.css';
import projects from '../data/projects';

const Projects = () => {
  return (
    <section className="page projects">
      <div className="container">
        <h2>Projects</h2>
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
