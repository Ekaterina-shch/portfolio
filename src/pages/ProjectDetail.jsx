import { useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import projects from '../data/projects';
import './PageStyles.css';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === projectId);

  return (
    <section className="page project-detail">
      <div className="container">
        <button onClick={() => navigate(-1)} className="btn-back">
          <IoIosArrowBack /> Back
        </button>
        {project ? (
          <>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-detail__btn"
            >
              View Project
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
