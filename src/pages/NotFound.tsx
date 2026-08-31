import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="page not-found">
      <div className="container">
        <h1>404 - Упс! Страница не найдена</h1>
        <p>
          Кажется, страница, которую вы ищете, не существует. Возможно, она была
          перемещена или удалена.
        </p>
        <div className="not-found__buttons">
          <button onClick={() => navigate('/')}>Вернуться на главную</button>
          <button onClick={() => navigate(-1)}>Назад</button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
