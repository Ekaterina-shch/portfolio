import { useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack, IoLogoGithub } from 'react-icons/io';
import { LuExternalLink } from 'react-icons/lu';
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
              <img src={project.img} alt="" />
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

            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-detail__link"
            >
              <IoLogoGithub /> GutHub
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-detail__btn"
            >
              Посмотреть проект <LuExternalLink />
            </a>
          </>
        ) : (
          <p>Project not found.</p>
        )}
      </div>
    </section>
  );
};

export default ProjectDetail;
