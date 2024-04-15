import '../../../public/style/index.css';
import './App.scss';
// eslint-disable-next-line import/order
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
// eslint-disable-next-line import/extensions
import Header from '../Header/Header';
import Error from '../Error/Error';
import RendezVous from '../RendezVous/RendezVous';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rendez-vous" element={<RendezVous />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <SpeedInsights />
    </div>
  );
}

export default App;
