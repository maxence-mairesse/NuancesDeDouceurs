import { Button, Carousel, Typography } from '@material-tailwind/react';
import type { CarouselProps } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import BlockTypo from './BlockTypo';
import { data, DataType } from '../../data/data';

const Carrousel = () => {
  return (
    <Carousel
      transition={{ duration: 1 }}
      className=""
      placeholder={undefined}
      loop
      autoplay={false}
      autoplayDelay={5000}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {data.map((item: DataType) => {
        return (
          <BlockTypo
            text={item.title}
            links={item.links}
            linkImg={item.image}
            key={item.id}
          />
        );
      })}
    </Carousel>
  );
};

export default Carrousel;
