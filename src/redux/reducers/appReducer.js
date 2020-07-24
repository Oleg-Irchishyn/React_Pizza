import { pizzasAPI } from "../../api/api";

const INITIALIZED_SUCCESS = 'react-pizza/app/INITIALIZED_SUCCESS';
const SET_PIZZAS = 'react-pizza/app/SET_BOOKS';

let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    case SET_PIZZAS:
      return {
        ...state,
        items: action.payload,
        isReady: true
      }
    default:
      return state;
  }
}

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS
})

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(setPizzasSuccess());
  Promise.all([promise])
    .then(() => {
      dispatch(initializedSuccess());
    })
}

export const setPizzas = (pizzas) => ({
  type: SET_PIZZAS,
  payload: pizzas
})

export const setPizzasSuccess = () => {
  return async (dispatch) => {
    let data = await pizzasAPI.getPizzas();
    dispatch(setPizzas(data));
  }
}

export default appReducer;