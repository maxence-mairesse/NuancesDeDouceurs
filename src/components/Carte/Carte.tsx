import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCategory } from '../../store/Thunks/categories';
import { fetchPrestations } from '../../store/Thunks/prestations';
import './Carte.scss';
import { openCarteMenu } from '../../store/Actions/homeAction';
import soins from '../../../public/img/soins.png';

const Carte = () => {
  const dispatch = useAppDispatch();
  const StateCategories: [{ id: number | null; name: string }] = useAppSelector(
    (state) => state.CategoryReducer.ArrayCategory
  );
  const menuHeader = useAppSelector((state) => state.HomeReducer.menuIsOpen);
  const Presations: [
    {
      id: number | null;
      prestation: string;
      description: string;
      price: number;
      time: string;
      categorie_id: number | null;
    }
  ] = useAppSelector((state) => state.CategoryReducer.ArrayPrestations);

  const menuOpen: [boolean, boolean, boolean, boolean, boolean] =
    useAppSelector((state) => state.CategoryReducer.menuOpen);

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchPrestations());
  }, [dispatch]);

  return (
    <div className="Carte">
      <div className={menuHeader ? 'h-full' : 'img-cover'}>
        <img src={soins} alt="photocouverture" />
        <h2 className={menuHeader ? 'cache' : ''}>La carte des soins</h2>
      </div>
      <ul>
        {StateCategories.map((item: { id: any; name: string }) => {
          return (
            <li key={item.id} className={menuHeader ? 'cache' : ''}>
              <div
                className={menuHeader ? 'cache' : 'title-category'}
                onClick={() => {
                  dispatch(openCarteMenu(item.id));
                }}
              >
                <h3>{item.name}</h3>
                <i
                  className={
                    menuOpen[item.id]
                      ? 'fa-solid fa-chevron-down'
                      : 'fa-solid fa-chevron-up'
                  }
                />
              </div>

              <div
                className={
                  menuHeader
                    ? 'cache'
                    : menuOpen[item.id]
                    ? 'category-open'
                    : 'category-close'
                }
              >
                {/* Liste la liste des prestation */}
                {Presations.map(
                  (item2: {
                    id: number | null;
                    prestation: string;
                    description: string;
                    price: number;
                    time: string;
                    categorie_id: number | null;
                  }) => {
                    if (item.id === item2.categorie_id) {
                      return (
                        <ul>
                          <li key={item2.id}>
                            <div className="prestation">
                              <h4>{item2.prestation}</h4>
                              <p>{item2.price} €</p>
                            </div>
                            <div className="description">
                              <p className="desc">
                                {`${item2.description}: `}{' '}
                              </p>
                              <p className="time"> {item2.time}</p>
                            </div>
                          </li>
                        </ul>
                      );
                    }
                    return '';
                  }
                )}
              </div>
            </li>
          );
        })}
      </ul>

      <Button
        variant="outlined"
        className="mt-10"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Link to="/rendez-vous">Contact</Link>
      </Button>
    </div>
  );
};
export default Carte;
