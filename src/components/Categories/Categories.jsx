import React, { useState } from 'react';
import { compose, bindActionCreators } from 'redux';
import *as filtersActions from '../../redux/reducers/filtersReducer';
import { connect } from 'react-redux';
import { getCategory } from '../../redux/selectors/filtersSelectors';

const Categories = React.memo(({ items, category, setCategoty }) => {
  const [activeItem, setActiveItem] = useState(null);
  const onSelectItem = (index) => {
    setActiveItem(index);
    setCategoty(index)
  }
  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => onSelectItem(null)}
        >
          Все
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

const mapStateToProps = (state) => ({
  category: getCategory(state)
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(filtersActions, dispatch)
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps))
  (Categories);
