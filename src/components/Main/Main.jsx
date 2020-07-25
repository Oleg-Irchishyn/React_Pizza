import React, { useEffect } from 'react'
import { compose, bindActionCreators } from 'redux';
import { Categories, SortPopup } from '../../components';
import PizzaBlock from './PizzaBlock/PizzaBlock';
import { connect } from 'react-redux';
import *as mainActions from '../../redux/reducers/mainReducer';
import { getPizzas } from '../../redux/selectors/mainSelectors';


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
          'популярности',
          'цене',
          'алфавиту',
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
  ...bindActionCreators(mainActions, dispatch)
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps))
  (MainContainer);
