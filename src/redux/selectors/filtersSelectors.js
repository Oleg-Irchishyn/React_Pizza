export const getCategory = (state) => {
  return state.filters.category;
}

export const getAllCategories = (state) => {
  return state.filters.categoryItems;
}

export const getSortBy = (state) => {
  return state.filters.sortBy;
}

export const getSortItems = (state) => {
  return state.filters.sortItems;
}

