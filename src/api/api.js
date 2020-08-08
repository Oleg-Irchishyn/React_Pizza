import *as axios from 'axios';

const instance = axios.create({
  /*baseURL: 'https://oleg-irchishyn.github.io/React_Pizza/./'*/
  baseURL: `http://localhost:3001/`
});


export const mainAPI = {
  getPizzas: (category, sortBy) => {
    return instance.get(`pizzas?${category !== null ? `category=${category}` : null}&_sort=${sortBy}&_order=desc`).then(response => {
      /*return response.data.pizzas;*/
      return response.data;
    });
  }
}
