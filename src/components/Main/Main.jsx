import React from 'react'
import { compose, bindActionCreators } from 'redux';
import { Categories, SortPopup } from '../../components';
import PizzaBlock from './PizzaBlock/PizzaBlock';
import { connect } from 'react-redux';
import *as pizzasActions from '../../redux/reducers/pizzasReducer';
import *as filtersActions from '../../redux/reducers/filtersReducer';
import *as cartActions from '../../redux/reducers/cartReducer';
import { getPizzas, isLoading } from '../../redux/selectors/pizzasSelectors';
import { getCategory, getSortBy } from '../../redux/selectors/filtersSelectors';
import PizzaPreloader from '../common/PizzaPreloader/PizzaPreloader';
import { getAllItems } from '../../redux/selectors/cartSelectors';
import { useTranslation } from 'react-i18next';
import { toggleBurgerState } from '../../redux/selectors/headerSelectors';


const MainContainer = React.memo(({ ...props }) => {
  const { t } = useTranslation();
  const categoryItems = [
    t('categoryItems.Meat'),
    t('categoryItems.Vegetarian'),
    t('categoryItems.Grill'),
    t('categoryItems.Spicy'),
    t('categoryItems.Closed')
  ]
  const sortItems = [
    {
      name: t('sortItemsName.popular'), type: 'rating'
    },
    {
      name: t('sortItemsName.price'), type: 'price'
    },
    {
      name: t('sortItemsName.alphabet'), type: 'name'
    }
  ]
  return <Main {...props} categoryItems={categoryItems} sortItems={sortItems} />
});

const Main = ({ pizzas, isLoaded, setSortBy, sortBy, sortItems, categoryItems, addPizzaToCart, cartItems, openedBurger }) => {
  const { t } = useTranslation();

  const handleAddPizzaToCart = (object) => {
    addPizzaToCart(object)
  }

  return (
    <div className="container">
      <div className="content__top">
       <Categories visibleComponent={openedBurger} items={categoryItems} />
        <SortPopup visibleComponent={openedBurger} activeSortType={sortBy} items={sortItems} setSortBy={setSortBy} />
      </div>
      <h2 className="content__title">{t('ContentTitle.title')}</h2>
      <div className="content__items" id="content__items">
        {
          isLoaded ? pizzas.map((pizza) => (
            <PizzaBlock
              key={pizza.id}
              {...pizza}
              isLoaded={true}
              onClickAddPizza={handleAddPizzaToCart}
              addedCountToCart={cartItems[pizza.id] && cartItems[pizza.id].items.length} />
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
  cartItems: getAllItems(state),
  openedBurger: toggleBurgerState(state)
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(pizzasActions, dispatch),
  ...bindActionCreators(filtersActions, dispatch),
  ...bindActionCreators(cartActions, dispatch)
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps))
  (MainContainer);
