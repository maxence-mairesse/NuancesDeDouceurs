import './galerie.scss';
import { useEffect } from 'react';
import { fetchgalerie } from '../../store/Thunks/galerie';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const Galerie = () => {
  const dispatch = useAppDispatch();
  const imgs = useAppSelector((state) => state.GalerieReducer.img);
  useEffect(() => {
    dispatch(fetchgalerie());
  }, [dispatch]);
  return (
    <div className="galerie">
      <h2>Galerie</h2>
      <div className="block" />
      <div className="images">
        <div id="block-1" className="block-img block-1">
          <div className="block-big-img">
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index === 1) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="big-img"
                  />
                );
              }
            })}
          </div>
          <div className="block-small-img">
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index > 1 && index < 6) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="small-img"
                  />
                );
              }
            })}
          </div>
        </div>

        <div id="block-2" className="block-img block-2">
          <div>
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index === 6) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="big-img"
                  />
                );
              }
            })}
          </div>
          <div className="block-small-img">
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index > 6 && index < 11) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="small-img"
                  />
                );
              }
            })}
          </div>
        </div>

        <div id="block-1" className="block-img block-1">
          <div className="block-big-img">
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index === 11) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="big-img"
                  />
                );
              }
            })}
          </div>
          <div className="block-small-img">
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index > 11 && index < 16) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="small-img"
                  />
                );
              }
            })}
          </div>
        </div>

        <div id="block-2" className="block-img block-2">
          <div>
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index === 16) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="big-img"
                  />
                );
              }
            })}
          </div>
          <div className="block-small-img">
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index > 16 && index < 21) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="small-img"
                  />
                );
              }
            })}
          </div>
        </div>

        <div id="block-1" className="block-img block-1">
          <div className="block-big-img">
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index === 21) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="big-img"
                  />
                );
              }
            })}
          </div>
          <div className="block-small-img">
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index > 21 && index < 26) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="small-img"
                  />
                );
              }
            })}
          </div>
        </div>

        <div id="block-2" className="block-img block-2">
          <div>
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index === 26) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="big-img"
                  />
                );
              }
            })}
          </div>
          <div className="block-small-img">
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index > 26 && index < 31) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="small-img"
                  />
                );
              }
            })}
          </div>
        </div>
        <div id="block-1" className="block-img block-1">
          <div className="block-big-img">
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index === 31) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="big-img"
                  />
                );
              }
            })}
          </div>
          <div className="block-small-img">
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index > 31 && index < 36) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="small-img"
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galerie;
