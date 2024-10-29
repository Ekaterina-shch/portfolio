import './PageStyles.css';

const Contact = () => {
  return (
    <section className="page contact">
      <div className="container">
        <h2>Свяжитесь со Мной</h2>
        <p>
          Email:{' '}
          <a href="mailto:cool.allen28@yandex.ru">cool.allen28@yandex.ru</a>
        </p>
        <p>
          Telegram:{' '}
          <a
            href="https://t.me/shche_e"
            target="_blank"
            rel="noopener noreferrer"
          >
            @shche_e
          </a>
        </p>
        {/* <p>LinkedIn: </p> */}
        <p>
          GitHub:{' '}
          <a
            href="https://github.com/Ekaterina-shch"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/Ekaterina-shch
          </a>{' '}
        </p>
      </div>
    </section>
  );
};

export default Contact;
