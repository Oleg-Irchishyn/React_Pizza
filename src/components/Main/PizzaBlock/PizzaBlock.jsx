import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Button from './Button/Button';


const PizzaBlock = ({ imageUrl, name, price, types, sizes }) => {

  const availableTypes = ["тонкое", "традиционное"];
  const availableSizes = [26, 30, 40];

  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const onSelectType = (index) => {
    setActiveType(index);
  }

  const onSelectSize = (index) => {
    setActiveSize(index);
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
        <Button className="button--add"/> 
      </div>
    </div>
  )
}

PizzaBlock.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number)
}

PizzaBlock.defaultProps = {
  name: '---',
  price: 0,
  types: [],
  sizes: []
}

export default PizzaBlock;
