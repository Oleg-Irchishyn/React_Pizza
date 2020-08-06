import *as axios from 'axios';

const instance = axios.create({
  /*baseURL: 'https://oleg-irchishyn.github.io/React_Pizza/./'*/
  baseURL: 'http://localhost:3001/'
});


export const mainAPI = {
  getPizzas: () => {
    return instance.get('pizzas').then(response => {
      /*return response.data.pizzas;*/
      return response.data;
    });
  }
}
