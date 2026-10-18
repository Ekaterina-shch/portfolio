import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';

import projects from '../data/projects';

import './PageStyles.css';

const INITIAL_COUNT = 6;
const STEP = 6;

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  // разворачиваем один раз, а не на каждом рендере
  const reversedProjects = useMemo(() => projects.slice().reverse(), []);

  const visibleProjects = reversedProjects.slice(0, visibleCount);
  const hasMore = visibleCount < reversedProjects.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + STEP);
  };

  return (
    <section className="page projects">
      <div className="container">
        <h2>Проекты</h2>
        {visibleProjects.map((project, index) => (
          <div className="project" key={project.id}>
            {project.isDeveloping && (
              <span className="project-status">В разработке</span>
            )}
            <h3>{project.title}</h3>
            {project.description && <p>{project.description}</p>}
            <Link to={`/projects/${project.id}`}>Посмотреть детали</Link>
            <div className="project-image">
              <img
                src={project.img}
                alt=""
                width="240"
                height="150"
                loading={index < 6 ? 'eager' : 'lazy'}
              />
            </div>
          </div>
        ))}

        {hasMore && (
          <div className="show-more">
            <button
              type="button"
              className="show-more-btn"
              onClick={handleShowMore}
            >
              Показать еще
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
