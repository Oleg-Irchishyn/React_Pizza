const ADD_PIZZA_TO_CART = 'react-pizza/cart/ADD_PIZZA_TO_CART';
const SET_TOTAL_PRICE = 'react-pizza/cart/SET_TOTAL_PRICE';
const SET_TOTAL_COUNT = 'react-pizza/cart/SET_TOTAL_COUNT';

let initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_TO_CART:
            return {
                ...state,
                items: {
                  [action.payload.id]: [
                      ...state.items[action.payload.id],
                      action.payload
                  ]
                }
            }
        case SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: action.price
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.count
            }
        default:
            return state;
    }
}

export const addPizzaToCart = (object) => ({
    type: SET_TOTAL_PRICE,
    payload: object
})

export const setTotalPrice = (price) => ({
    type: SET_TOTAL_PRICE,
    price
})

export const setTotalCount = (count) => ({
    type: SET_TOTAL_COUNT,
    count
})

export default cartReducer;