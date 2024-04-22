import './infos.scss';
import { useAppSelector } from '../../hooks/redux';

const Infos = () => {
  const news = useAppSelector((state) => state.HomeReducer.news);
  return (
    <div className="info">
      {news.map((item) => {
        return (
          <div key={item.id}>
            <h4>
              {' '}
              {item.prestation}
              <span className="time"> {item.price}€</span>
            </h4>
            <p>
              {item.description}: {` ${item.time}`}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default Infos;
