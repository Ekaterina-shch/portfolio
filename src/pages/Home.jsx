import { Link } from 'react-router-dom';
import './PageStyles.css';

const Home = () => {
  return (
    <section className="page home">
      <div className="container">
        <div className="info">
          <h2>Добро пожаловать в&nbsp;Мое портофолио</h2>
          <p>
            Я front-end разработчица, увлеченная созданием удобного интерфейса
            в&nbsp;Интернете.
          </p>
          <div className="home-links">
            <Link to="/projects" className="home-link">
              Посмотреть проекты
            </Link>

            <Link to="/contact" className="home-link_contact">
              Связаться со мной
            </Link>
          </div>
        </div>
        <div className="home-image">{/* <img src="" alt="" /> */}</div>
      </div>
    </section>
  );
};

export default Home;
