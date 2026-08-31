import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import projects from '../data/projects';
import './PageStyles.css';

const Projects = () => {
  return (
    <section className="page projects">
      <div className="container">
        <h2>Проекты</h2>
        {projects
          .slice()
          .reverse()
          .map((project) => (
            <div className="project" key={project.id}>
              {project.isDeveloping && (
                <span className="project-status">В разработке</span>
              )}
              <h3>{project.title}</h3>
              {project.description && <p>{project.description}</p>}
              <Link to={`/projects/${project.id}`}>Посмотреть детали</Link>
              <div className="project-image">
                <LazyLoad height={200} offset={100}>
                  <img src={project.img} alt="" />
                </LazyLoad>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Projects;
