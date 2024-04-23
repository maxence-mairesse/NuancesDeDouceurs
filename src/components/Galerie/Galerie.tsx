import './galerie.scss';
import { MouseEventHandler, useEffect } from 'react';
import { fetchgalerie } from '../../store/Thunks/galerie';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { closeImg, selectImg } from '../../store/Actions/galerieAction';

const Galerie = () => {
  const dispatch = useAppDispatch();
  const imgs = useAppSelector((state) => state.GalerieReducer.img);
  const handleclick: any = (name: any) => {
    dispatch(selectImg(name));
  };

  const handleClose = () => {
    dispatch(closeImg());
  };

  const selectedImg = useAppSelector(
    (state) => state.GalerieReducer.selectedImg
  );

  useEffect(() => {
    dispatch(fetchgalerie());
  }, [dispatch]);

  return (
    <div className="galerie">
      <h2>Galerie</h2>
      <div className="images mobile">
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
                    onClick={() => handleclick(item.name)}
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
                    onClick={() => handleclick(item.name)}
                  />
                );
              }
            })}
          </div>
        </div>

        <div id="block-2" className="block-img block-2">
          <div className="block-big-img">
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index === 6) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="big-img"
                    onClick={() => handleclick(item.name)}
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
                    onClick={() => handleclick(item.name)}
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
                    onClick={() => handleclick(item.name)}
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
                    onClick={() => handleclick(item.name)}
                  />
                );
              }
            })}
          </div>
        </div>

        <div id="block-2" className="block-img block-2">
          <div className="block-big-img">
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index === 16) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="big-img"
                    onClick={() => handleclick(item.name)}
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
                    onClick={() => handleclick(item.name)}
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
                    onClick={() => handleclick(item.name)}
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
                    onClick={() => handleclick(item.name)}
                  />
                );
              }
            })}
          </div>
        </div>

        <div id="block-2" className="block-img block-2">
          <div className="block-big-img">
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index === 26) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="big-img"
                    onClick={() => handleclick(item.name)}
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
                    onClick={() => handleclick(item.name)}
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
                    onClick={() => handleclick(item.name)}
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
                    onClick={() => handleclick(item.name)}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="images computer">
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
                    onClick={() => handleclick(item.name)}
                  />
                );
              }
            })}
          </div>
          <div className="block-small-img">
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index > 1 && index < 12) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="small-img"
                    onClick={() => handleclick(item.name)}
                  />
                );
              }
            })}
          </div>
        </div>

        <div id="block-2" className="block-img block-2">
          <div className="block-big-img">
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index === 12) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="big-img"
                    onClick={() => handleclick(item.name)}
                  />
                );
              }
            })}
          </div>
          <div className="block-small-img">
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index > 12 && index < 23) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="small-img"
                    onClick={() => handleclick(item.name)}
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

              if (index === 23) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="big-img"
                    onClick={() => handleclick(item.name)}
                  />
                );
              }
            })}
          </div>
          <div className="block-small-img">
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index > 23 && index < 34) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="small-img"
                    onClick={() => handleclick(item.name)}
                  />
                );
              }
            })}
          </div>
        </div>

        <div id="block-2" className="block-img block-2">
          <div className="block-big-img">
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index === 34) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="big-img"
                    onClick={() => handleclick(item.name)}
                  />
                );
              }
            })}
          </div>
          <div className="block-small-img">
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index > 34 && index < 45) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="small-img"
                    onClick={() => handleclick(item.name)}
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

              if (index === 45) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="big-img"
                    onClick={() => handleclick(item.name)}
                  />
                );
              }
            })}
          </div>
          <div className="block-small-img">
            {imgs.map((item) => {
              const index: number = parseInt(item.name, 10);

              if (index > 45 && index < 56) {
                return (
                  <img
                    key={item.id}
                    src={`./img/img-ongle/${item.name}.jpeg`}
                    alt={item.name}
                    className="small-img"
                    onClick={() => handleclick(item.name)}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
      {selectedImg && (
        <div className="fullscreen-image">
          <div className="close" onClick={handleClose}>
            <i className="fa-solid fa-xmark" />
          </div>
          <img src={`./img/img-ongle/${selectedImg}.jpeg`} alt="fullscreen" />
        </div>
      )}
    </div>
  );
};

export default Galerie;
