import { useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack, IoLogoGithub } from 'react-icons/io';
import { LuExternalLink } from 'react-icons/lu';
import LazyLoad from 'react-lazyload';
import projects from '../data/projects';
import './PageStyles.css';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === projectId);
  const stack = project.stack;

  return (
    <section className="page project-detail">
      <div className="container">
        <button onClick={() => navigate(-1)} className="btn-back">
          <IoIosArrowBack /> Назад к списку проектов
        </button>
        {project ? (
          <>
            <h2>{project.title}</h2>
            <div className="project-image__wrapper">
              <LazyLoad height={200} offset={100}>
                <img src={project.img} alt="" width="1000" height="550" />
              </LazyLoad>
            </div>

            {project.description && <p>{project.description}</p>}
            <ul className="stack-list">
              {stack.map((item, index) => {
                return (
                  <li className="stack-item" key={index}>
                    {item}
                  </li>
                );
              })}
            </ul>

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-detail__link"
              >
                <IoLogoGithub /> GutHub
              </a>
            )}

            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-detail__btn"
              >
                Посмотреть проект <LuExternalLink />
              </a>
            ) : (
              <p>У проекта пока нет демонстрационной версии</p>
            )}
          </>
        ) : (
          <p>Project not found.</p>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
