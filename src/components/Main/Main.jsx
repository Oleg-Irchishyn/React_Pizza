import React from 'react'
import { compose, bindActionCreators } from 'redux';
import { Categories, SortPopup } from '../../components';
import PizzaBlock from './PizzaBlock/PizzaBlock';
import { connect } from 'react-redux';
import *as pizzasActions from '../../redux/reducers/pizzasReducer';
import *as filtersActions from '../../redux/reducers/filtersReducer';
import { getPizzas, isLoading } from '../../redux/selectors/pizzasSelectors';
import { getCategory, getSortBy } from '../../redux/selectors/filtersSelectors';
import PizzaPreloader from '../common/PizzaPreloader/PizzaPreloader';


const MainContainer = React.memo(({ ...props }) => {
  return <Main {...props} />
});

const Main = ({ pizzas, isLoaded, setSortBy, sortBy, sortItems }) => {
  const categoryNames = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
  ];

  const onChangeSortType = (type) => {
    setSortBy(type);
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryNames} />
        <SortPopup activeSortType={sortBy} items={sortItems} onChangeSortType={onChangeSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoaded ? pizzas.map((pizza) => (
            <PizzaBlock key={pizza.id} {...pizza} isLoaded={true} />
          )) : Array(10).fill(pizzas).map((_, index) => <PizzaPreloader key={index} />)
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pizzas: getPizzas(state),
  isLoaded: isLoading(state),
  category: getCategory(state),
  sortBy: getSortBy(state),
  sortItems: state.filters.sortItems
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(pizzasActions, dispatch),
  ...bindActionCreators(filtersActions, dispatch)
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps))
  (MainContainer);
