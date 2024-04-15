import '../../../public/style/index.css';
import './Home.scss';
import Carrousel from '../Carrousel/Carrousel';

const Home = () => {
  return (
    <div className="Home">
      <div className="Carrousel">
        <Carrousel />
      </div>
    </div>
  );
};

export default Home;
