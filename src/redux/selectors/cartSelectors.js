export const getTotalPrice = (state) => {
  return state.cart.totalPrice;
}

export const getTotalCount = (state) => {
  return state.cart.totalCount;
}

export const getAllItems = (state) => {
  return state.cart.items;
}