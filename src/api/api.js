import *as axios from 'axios';

const instance = axios.create({
  /*baseURL: 'https://oleg-irchishyn.github.io/React_Pizza/./'*/
  baseURL: `/`
});


export const mainAPI = {
  getPizzas: (category, sortBy) => {
    return instance.get(`pizzas?${category !== null ? `category=${category}` : null}&_sort=${sortBy}&_order=asc`).then(response => {
      /*return response.data.pizzas;*/
      return response.data;
    });
  },
  getPizzasEng: (category, sortBy) => {
    return instance.get(`pizzasEng?${category !== null ? `category=${category}` : null}&_sort=${sortBy}&_order=asc`).then(response => {
      return response.data;
    });
  },
  getPizzasUkr: (category, sortBy) => {
    return instance.get(`pizzasUkr?${category !== null ? `category=${category}` : null}&_sort=${sortBy}&_order=asc`).then(response => {
      return response.data;
    });
  }
}
