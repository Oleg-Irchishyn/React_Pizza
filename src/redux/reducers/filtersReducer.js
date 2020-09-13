const SET_SORT_BY = 'react-pizza/filters/SET_SORT_BY';
const SET_CATEGORY = 'react-pizza/filters/SET_CATEGORY';


let initialState = {
  sortBy: 'rating',
  category: null,
  sortItems: [
    { name: 'популярности', type: 'rating' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'name' }
  ],
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload
      }
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload
      }
    default:
      return state;
  }
}

export const setSortBy = (type) => ({
  type: SET_SORT_BY,
  payload: type
})

export const setCategoty = (catIndex) => ({
  type: SET_CATEGORY,
  payload: catIndex
})

export default filtersReducer;