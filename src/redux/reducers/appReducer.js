import { setPizzasSuccess } from "./mainReducer";

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
  Promise.all([promise])
    .then(() => {
      dispatch(initializedSuccess());
    })
}


export default appReducer;