import '../../../public/style/index.css';
import './Home.scss';
import Carrousel from '../Carrousel/Carrousel';
import Infos from '../Infos/Infos';

const Home = () => {
  return (
    <div className="Home">
      <div className="Carrousel">
        <Carrousel />
      </div>
      <div className="infos">
        <h3>
          <span>
            <i className="fa-solid fa-triangle-exclamation" />
          </span>{' '}
          Annonces{' '}
          <span>
            <i className="fa-solid fa-triangle-exclamation" />
          </span>
        </h3>
        <Infos />
      </div>
    </div>
  );
};

export default Home;
