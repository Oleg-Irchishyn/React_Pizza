const TOGGLE_BURGER = 'react-pizza/header/TOGGLE_BURGER';

let initialState = {
  openedBurger: false
}

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BURGER:
      return {
        ...state,
        openedBurger: !state.openedBurger
      }
    default:
      return state;
  }
}

export const toggleOpenBurger = () => ({
  type: TOGGLE_BURGER
})

export default headerReducer;