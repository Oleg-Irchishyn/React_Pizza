const ADD_PIZZA_TO_CART = 'react-pizza/cart/ADD_PIZZA_TO_CART';
const CLEAR_CART = 'react-pizza/cart/CLEAR_CART';
const REMOVE_CART_ITEM = 'react-pizza/cart/REMOVE_CART_ITEM';

let initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0
}

const getTotalPrice = arr => {
  return arr.reduce((totalSum, obj) => obj.price + totalSum, 0)
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_TO_CART:
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems)
        }
      };
      const items = Object.values(newItems).map(obj => obj.items);
      const allPizzas = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allPizzas);
      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: totalPrice
      };
      case CLEAR_CART :
        return {
          items: {},
          totalPrice: 0,
          totalCount: 0
        }
        case REMOVE_CART_ITEM:
          const newCartItems = {
            ...state.items
          }
          delete newCartItems[action.payload]
          return {
            ...state,
            items: newItems
          }
      default:
      return state;
  }
}

export const addPizzaToCart = (object) => ({
  type: ADD_PIZZA_TO_CART,
  payload: object
})

export const clearCart = () => ({
  type: CLEAR_CART
})

export const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id
})

export default cartReducer;