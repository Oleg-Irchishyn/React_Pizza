import React, { useState } from 'react';
import { compose, bindActionCreators } from 'redux';
import *as filtersActions from '../../redux/reducers/filtersReducer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cn from "classnames";
import { useTranslation } from 'react-i18next';

const Categories = React.memo(({ items, setCategoty, visibleComponent }) => {
  const [activeItem, setActiveItem] = useState(null);
  const { t } = useTranslation();

  const onSelectItem = (index) => {
    setActiveItem(index);
    setCategoty(index)
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
