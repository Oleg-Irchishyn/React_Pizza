import { mainAPI } from "../../api/api";

const SET_PIZZAS = 'react-pizza/pizzas/SET_PIZZAS';
const SET_LOADED = 'react-pizza/pizzas/SET_LOADED';

let initialState = {
  items: null,
  isLoaded: false
}

const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      }
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.value
      }
    default:
      return state;
  }
}

export const setPizzas = (pizzas) => ({
  type: SET_PIZZAS,
  payload: pizzas
})

export const setLoaded = (value) => ({
  type: SET_LOADED,
  value
})

export const setPizzasSuccess = (category, sortBy) => {
  return async (dispatch) => {
    dispatch(setLoaded(false))
    let data = await mainAPI.getPizzas(category, sortBy);
    dispatch(setPizzas(data));
  }
}

export default pizzasReducer;