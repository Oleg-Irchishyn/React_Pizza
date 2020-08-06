import { mainAPI } from "../../api/api";

const SET_PIZZAS = 'react-pizza/app/SET_PIZZAS';

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
    default:
      return state;
  }
}

export const setPizzas = (pizzas) => ({
  type: SET_PIZZAS,
  payload: pizzas
})

export const setPizzasSuccess = () => {
  return async (dispatch) => {
    let data = await mainAPI.getPizzas();
    dispatch(setPizzas(data));
  }
}

export default pizzasReducer;