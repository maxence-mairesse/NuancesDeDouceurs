import { Button, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

interface BlockTypoTypes {
  text: string;
  links: { title: string; link: string };
  linkImg: string;
}

const BlockTypo = ({ text, links, linkImg }: BlockTypoTypes) => {
  const MenuIsOpen = useAppSelector((state) => state.HomeReducer.menuIsOpen);
  return (
    <div className="relative h-full w-full">
      <img src={linkImg} alt={text} className="h-full w-full object-cover" />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
        <div className="w-3/4 text-center md:w-2/4">
          <Typography
            variant="h2"
            color="white"
            className=" text-3xl md:text-4xl lg:text-5xl"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {MenuIsOpen ? '' : text}
          </Typography>
          {MenuIsOpen ? (
            ''
          ) : (
            <Link to={links.link} rel="noreferrer">
              <Button
                placeholder={undefined}
                className="bg-gray-0 border mt-10 "
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {links.title}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default BlockTypo;
