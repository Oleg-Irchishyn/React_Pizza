import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import PizzaBlockButton from './PizzaBlockButton/PizzaBlockButton';


const PizzaBlock = ({ id, imageUrl, name, price, types, sizes, onClickAddPizza }) => {

  const availableTypes = ["тонкое", "традиционное"];
  const availableSizes = [26, 30, 40];

  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  const onSelectType = (index) => {
    setActiveType(index);
  }

  const onSelectSize = (index) => {
    setActiveSize(index);
  }

  const handleAddPizza = () => {
    debugger
    const object = {
      id, 
      name,
      imageUrl,
      price,
      size: sizes[availableSizes],
      type: types[availableTypes]
    }
  onClickAddPizza(object)
  }

   return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((type, index) => (
            <li
              key={`${type}_${index}`}
              className={cn({
                'active': activeType === index,
                'disabled': !types.includes(index)
              })}
              onClick={() => onSelectType(index)}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, index) => (
            <li
              key={`${size}_${index}`}
              className={cn({
                'active': activeSize === index,
                'disabled': !sizes.includes(size)
              })}
              onClick={() => onSelectSize(index)}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <PizzaBlockButton onClick={handleAddPizza} className="button button--add"/> 
      </div>
    </div>
  )
}

PizzaBlock.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
  onClickAddPizza: PropTypes.func
}

PizzaBlock.defaultProps = {
  name: '---',
  price: 0,
  types: [],
  sizes: []
}

export default PizzaBlock;
