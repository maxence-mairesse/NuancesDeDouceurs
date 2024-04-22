export const data = [
  {
    id: 1,
    title: 'Découvrez nos soins',
    description: 'Description',
    image: '../img/palette-maquillage.png',
    links: {
      title: 'La carte des soins',
      link: '/carte-soins',
    },
  },
  {
    id: 2,
    title: 'Envie de detétente et de bien être ?',
    description: 'Description',
    image: '../img/masque-boue.png',
    links: {
      title: 'Prendre rendez-vous',
      link: '/rendez-vous',
    },
  },
  {
    id: 3,
    title: 'Explorez la galerie pour decouvrir nos réalisation',
    description: 'Description',
    image: './img/ongles.jpg',
    links: {
      title: 'Galerie',
      link: '/galerie',
    },
  },
];

export interface DataType {
  id: number;
  title: string;
  links: { title: string; link: string };
  image: string;
}
