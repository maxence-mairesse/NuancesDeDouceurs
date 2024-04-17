// creer une instance d'axios avec des paramètres prédéfinis

import axios from 'axios';

const instanceAxios = axios.create({
  baseURL: 'https://nuancesdedouceurs.maxence-mairesse.fr/api/',
  timeout: 1000,
});

export default instanceAxios;
