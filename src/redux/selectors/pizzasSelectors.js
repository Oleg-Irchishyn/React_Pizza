export const getPizzas = (state) => {
  return state.pizzas.items;
}

export const isLoading = (state) => {
  return state.pizzas.isLoaded;
}
