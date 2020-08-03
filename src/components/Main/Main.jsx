import React, { useEffect } from 'react'
import { compose, bindActionCreators } from 'redux';
import { Categories, SortPopup } from '../../components';
import PizzaBlock from './PizzaBlock/PizzaBlock';
import { connect } from 'react-redux';
import *as pizzasActions from '../../redux/reducers/pizzasReducer';
import { getPizzas } from '../../redux/selectors/pizzasSelectors';


const MainContainer = ({ setPizzasSuccess, ...props }) => {
  useEffect(() => {
    setPizzasSuccess();
  }, [])
  return <Main {...props} />
}

const Main = ({ pizzas }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={[
          'Мясные',
          'Вегетарианская',
          'Гриль',
          'Острые',
          'Закрытые'
        ]} />
        <SortPopup items={[
          {name:'популярности', type: 'popular'},
          {name:'цене', type: 'price'},
          {name:'алфавиту', type: 'alphabet'}
        ]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          pizzas && pizzas.map((pizza) => (
            <PizzaBlock key={pizza.id}{...pizza} />
          ))
        }
      </div>
    </div>
  )
}


const mapStateToProps = (state) => ({
  pizzas: getPizzas(state)
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(pizzasActions, dispatch)
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps))
  (MainContainer);
