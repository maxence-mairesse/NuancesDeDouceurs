import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { openMenu, CloseMenu } from '../../store/Actions/homeAction';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import logo from '../../../public/img/plume_2.png';
import { data, DataType } from '../../data';
import '../../../public/style/index.css';
import './Header.scss';

const Header = () => {
  const isOpen: boolean = useAppSelector(
    (state) => state.HomeReducer.menuIsOpen
  );
  const dispatch = useAppDispatch();
  const HandleMenu = () => {
    dispatch(openMenu());
  };
  const HandleCloseMenu = () => {
    dispatch(CloseMenu());
  };

  return (
    <div className="Header">
      <div className="btn-menu">
        <Button
          variant="outlined"
          onClick={HandleMenu}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {' '}
          <i
            className={
              isOpen
                ? '  text-black fa-solid fa-xmark '
                : ' text-black fa-solid fa-bars'
            }
          />
        </Button>
      </div>

      <div className="Header__title">
        <Link to="/">
          <img src={logo} alt="logo" />
          <h1 className="title">
            Nuances <br /> <span> de douceurs</span>
          </h1>
        </Link>
      </div>
      <div />

      <nav className={isOpen ? 'navlinks' : 'hidden'}>
        <ul className="Header__menu">
          <li onClick={HandleCloseMenu}>
            <Link to="/">Accueil</Link>
          </li>
          {data.map((item: DataType) => {
            return (
              <li key={item.id}>
                <Link
                  to={item.links.link}
                  rel="noreferrer"
                  onClick={HandleCloseMenu}
                >
                  {item.links.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
export default Header;
