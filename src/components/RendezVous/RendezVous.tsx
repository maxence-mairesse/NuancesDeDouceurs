import { Link } from 'react-router-dom';
import './RendezVous.scss';
import { useAppSelector } from '../../hooks/redux';

const RendezVous = () => {
  const MenuIsOpen = useAppSelector((state) => state.HomeReducer.menuIsOpen);
  return (
    <div className={MenuIsOpen ? 'cache' : 'container'}>
      <div className="infos">
        <h2 className="title">
          Pours plus d'informations ou pour avoir un rendez-vous
        </h2>
        <h3>contactez-nous sur: </h3>
        <div className="info">
          <h3>
            <span>Tel:</span>
            <Link to="tel:06.15.11.44.40">06.15.11.44.40</Link>
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
        <h2>Horaires</h2>
        <p>Du Lundi au Samedi de 9h à 19h</p>
      </div>
    </div>
  );
};

export default RendezVous;
