import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import './PageStyles.css';

const Home = () => {
  return (
    <section className="page home">
      <div className="container">
        <div className="info">
          <h1>Привет, я Екатерина!</h1>
          <p>
            Frontend-разработчик (React/TypeScript). Создаю чистый, доступный и
            поддерживаемый код для продуктов, которым важен UX и высокая
            скорость работы.
          </p>
          <div className="home-links">
            <Link to="/projects" className="home-link">
              Смотреть проекты
            </Link>

            <Link to="/contact" className="home-link_contact">
              Связаться со мной
            </Link>
          </div>
        </div>
        <div className="home-image">
          <img
            src={import.meta.env.BASE_URL + '/ava.jpg'}
            alt="Екатерина — Frontend разработчица"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
