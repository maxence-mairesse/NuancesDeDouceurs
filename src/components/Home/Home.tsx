import '../../../public/style/index.css';
import './Home.scss';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Carrousel from '../Carrousel/Carrousel';
import Infos from '../Infos/Infos';
import RendezVous from '../RendezVous/RendezVous';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchNews } from '../../store/Thunks/prestations';
import { fetchgalerie } from '../../store/Thunks/galerie';

const Home = () => {
  const dispatch = useAppDispatch();
  const menuIsOpen = useAppSelector((state) => state.HomeReducer.menuIsOpen);
  useEffect(() => {
    dispatch(fetchNews());
    dispatch(fetchgalerie());
  }, [dispatch]);
  return (
    <div className="Home">
      <div className={menuIsOpen ? 'Carrousel headerfix' : 'Carrousel'}>
        <Carrousel />
      </div>
      <div className={menuIsOpen ? 'hidden' : 'infoss'}>
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
