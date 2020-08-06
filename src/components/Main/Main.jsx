import React from 'react'
import { compose, bindActionCreators } from 'redux';
import { Categories, SortPopup } from '../../components';
import PizzaBlock from './PizzaBlock/PizzaBlock';
import { connect } from 'react-redux';
import *as pizzasActions from '../../redux/reducers/pizzasReducer';
import { getPizzas, isLoading } from '../../redux/selectors/pizzasSelectors';
import PizzaPreloader from '../common/PizzaPreloader/PizzaPreloader';


const MainContainer = ({ ...props }) => {
  return <Main {...props} />
}

const Main = ({ pizzas, isLoaded }) => {
  const categoryNames = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
  ];

  const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' }
  ];

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoaded ? pizzas.map((pizza) => (
            <PizzaBlock key={pizza.id} {...pizza} isLoaded={true} />
          )) : Array(10).fill(<PizzaPreloader />)
        }
      </div>
    </div>
  )
}


const mapStateToProps = (state) => ({
  pizzas: getPizzas(state),
  isLoaded: isLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(pizzasActions, dispatch)
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps))
  (MainContainer);
