import '../../../public/style/index.css';
import './Home.scss';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import Carrousel from '../Carrousel/Carrousel';
import Infos from '../Infos/Infos';
import RendezVous from '../RendezVous/RendezVous';

const Home = () => {
  return (
    <div className="Home">
      <div className="Carrousel">
        <Carrousel />
      </div>
      <div className="infoss">
        <h3>News </h3>
        <Infos />
      </div>

      <div className="rendezVous">
        <RendezVous />
      </div>
    </div>
  );
};

export default Home;
