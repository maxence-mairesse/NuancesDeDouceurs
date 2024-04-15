import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="legal">
        <Link to="/politque-confidentialite">
          Politique de confidentiatlité
        </Link>
        <Link to="/mention-legale">Mentions Légales</Link>
      </div>
      <div className="facebook">
        Retrouvez-nous sur
        <Link
          to="https://www.facebook.com/profile.php?id=100054586413621"
          className="link"
        >
          {' '}
          Facebook
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
