import { useState } from 'react';
import { BsCopy } from 'react-icons/bs';
import './PageStyles.css';

const CopyButton = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  return (
    <div className="copy-wrapp">
      <button onClick={handleCopy} className="copy-button">
        <BsCopy />
      </button>
      {isCopied && <p className="text-success">Скопировано!</p>}
    </div>
  );
};

const Contact = () => {
  return (
    <section className="page contact">
      <div className="container">
        <h2>Свяжитесь со Мной</h2>
        <p>
          Email:{' '}
          <a href="mailto:cool.allen28@yandex.ru">cool.allen28@yandex.ru</a>
          <CopyButton textToCopy="cool.allen28@yandex.ru" />
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
          <CopyButton textToCopy="@shche_e" />
        </p>
        {/* <p>LinkedIn: </p> */}
        {/* <p>
          GitHub:{' '}
          <a
            href="https://github.com/Ekaterina-shch"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/Ekaterina-shch
          </a>{' '}
        </p> */}
      </div>
    </section>
  );
};

export default Contact;
