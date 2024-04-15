export const data = [
  {
    id: 1,
    title: 'Une esthéticienne qui prend soin de vous',
    description: 'Description',
    image: '../../public/img/me-decouvrir.jpeg',
    links: {
      title: 'Me découvrir',
      link: '/galerie',
    },
  },
  {
    id: 2,
    title: 'Envie de detétente et de bien être ?',
    description: 'Description',
    image: '../../public/img/masque-boue.jpeg',
    links: {
      title: 'Prendre rendez-vous',
      link: '/rendez-vous',
    },
  },
  {
    id: 3,
    title: 'Découvrez les soins',
    description: 'Description',
    image: '../../public/img/palette-maquillage.jpeg',
    links: {
      title: 'La carte des soins',
      link: '/carte-soins',
    },
  },
];

export interface DataType {
  id: number;
  title: string;
  links: { title: string; link: string };
  image: string;
}