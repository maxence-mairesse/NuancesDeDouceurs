import { Link } from 'react-router-dom';
import './RendezVous.scss';

const RendezVous = () => {
  return (
    <div className="container">
      <div className="infos">
        <h2 className="title">Prendre un Rendez-vous</h2>
        <div className="info">
          <h3>
            <span>Tel:</span>
            <Link to="tel:00.00.00.00.00">00.00.00.00.00</Link>
          </h3>
          <h3>
            <span>Facebook:</span>
            <Link to="https://www.facebook.com/profile.php?id=100054586413621">
              {' '}
              Nuances de Douceurs
            </Link>
          </h3>
        </div>
      </div>
      <div className="horaires">
        <h2>Mes Horaires</h2>
        <p>Du Lundi au Samedi de 9h à 19h</p>
      </div>
    </div>
  );
};

export default RendezVous;