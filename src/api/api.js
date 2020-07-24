import *as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://oleg-irchishyn.github.io/React_Pizza/./'
});


export const mainAPI = {
  getPizzas: () => {
    return instance.get('db.json').then(response => {
      return response.data.pizzas;
    });
  }
}
