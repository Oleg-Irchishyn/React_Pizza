import { setPizzasSuccess, setEngPizzasSuccess, setUkrPizzasSuccess } from "./pizzasReducer";

const INITIALIZED_SUCCESS = 'react-pizza/app/INITIALIZED_SUCCESS';

let initialState = {
  initialized: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
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
  let secondPromise = dispatch(setEngPizzasSuccess());
  let thirdPromise = dispatch(  setUkrPizzasSuccess());

  Promise.all([promise, secondPromise, thirdPromise])
    .then(() => {
      dispatch(initializedSuccess());
    })
}


export default appReducer;