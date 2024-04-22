import '../../../public/style/index.css';
import './Home.scss';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Carrousel from '../Carrousel/Carrousel';
import Infos from '../Infos/Infos';
import RendezVous from '../RendezVous/RendezVous';
import { useAppDispatch } from '../../hooks/redux';
import { fetchNews } from '../../store/Thunks/prestations';

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  return (
    <div className="Home">
      <div className="Carrousel">
        <Carrousel />
      </div>
      <div className="infoss">
        <h3>Nouveauté </h3>
        <Infos />
      </div>

      <div className="rendezVous">
        <RendezVous />
      </div>
    </div>
  );
};

export default Home;
