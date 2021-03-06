import React, { useState, useEffect } from 'react';
import { compose, bindActionCreators } from 'redux';
import *as filtersActions from '../../redux/reducers/filtersReducer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cn from "classnames";
import { useTranslation } from 'react-i18next';


let anchor;
const Categories = React.memo(({ items, setCategoty, visibleComponent }) => {
  useEffect(() => {
    localStorage.setItem("categorySelectedItem", JSON.stringify(activeItem));
  })
  useEffect(() => {
    anchor = document.querySelector('#content__items');
  }, [])

  const [activeItem, setActiveItem] = useState(JSON.parse(localStorage.getItem('categorySelectedItem')));
  const { t } = useTranslation();

  const onSelectItem = (index) => {
    setActiveItem(index);
    setCategoty(index)
    anchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start'
    });
  }
  return (
    <div 
    className={cn('categories', {
      'visible': visibleComponent 
    })}
    >
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          {t('categoryItems.All')}
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={activeItem === index ? "active" : ""}
              onClick={() => onSelectItem(index)}
              key={`${item}_${index}`}>{item}
            </li>)
          )}
      </ul>
    </div>
  )
});

Categories.propTypes = {
  setCategory: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}

Categories.defaultProps = {
  items: []
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(filtersActions, dispatch)
})

export default compose(
  connect(null, mapDispatchToProps))
  (Categories);
