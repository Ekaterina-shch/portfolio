import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import './PageStyles.css';

const Home = () => {
  return (
    <section className="page home">
      <div className="container">
        <div className="info">
          <h1>Добро пожаловать в&nbsp;Мое портофолио</h1>
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
        <div className="home-image">
          <LazyLoad height={200} offset={100}>
            <img
              src={import.meta.env.BASE_URL + '/android-chrome-512x512.png'}
              alt=""
            />
          </LazyLoad>
        </div>
      </div>
    </section>
  );
};

export default Home;
