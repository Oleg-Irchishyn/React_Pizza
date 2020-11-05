import React, { useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import PizzaBlockButton from './PizzaBlockButton/PizzaBlockButton';
import { useTranslation } from 'react-i18next';


const PizzaBlock = ({ id, imageUrl, name, price, types, sizes, onClickAddPizza, addedCountToCart }) => {

  const { t } = useTranslation();
  const thin = t('singlePizza.sizetypeFirst');
  const fatHeaded = t('singlePizza.sizetypeSecond');

  const pizzasNames = [
    t('pizzasNames.1'),
    t('pizzasNames.2'),
    t('pizzasNames.3'),
    t('pizzasNames.4'),
    t('pizzasNames.5'),
    t('pizzasNames.6'),
    t('pizzasNames.7'),
    t('pizzasNames.8'),
    t('pizzasNames.9'),
    t('pizzasNames.10'),
    t('pizzasNames.11'),
    t('pizzasNames.12'),
    t('pizzasNames.13')
  ]

  if (id === 0) {
    name = pizzasNames[0]
  }
  else if (id === 1) {
    name = pizzasNames[1]
  }
  else if (id === 2) {
    name = pizzasNames[2]
  }
  else if (id === 3) {
    name = pizzasNames[3]
  }
  else if (id === 4) {
    name = pizzasNames[4]
  }
  else if (id === 5) {
    name = pizzasNames[5]
  }
  else if (id === 6) {
    name = pizzasNames[6]
  }
  else if (id === 7) {
    name = pizzasNames[7]
  }
  else if (id === 8) {
    name = pizzasNames[8]
  }
  else if (id === 9) {
    name = pizzasNames[9]
  }
  else if (id === 10) {
    name = pizzasNames[10]
  }
  else if (id === 11) {
    name = pizzasNames[11]
  }
  else if (id === 12) {
    name = pizzasNames[12]
  }

  const availableTypes = [thin, fatHeaded];
  const availableSizes = [26, 30, 40];

  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  const onSelectType = (index) => {
    setActiveType(index);
  }

  const onSelectSize = (index) => {
    setActiveSize(index);
  }

  const handleOnClickAddPizza = () => {
    const pizzaObject = {
      id,
      name,
      imageUrl,
      price,
      size: availableSizes[activeSize],
      type: activeType
    }
    onClickAddPizza(pizzaObject)
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
              {size} {t('singlePizza.sizeText')}
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price"> {t('singlePizza.priceText')} {price} ₴</div>
        <PizzaBlockButton onClick={handleOnClickAddPizza} addedCountToCart={addedCountToCart} outline />
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
  onClickAddPizza: PropTypes.func,
  addedCountToCart: PropTypes.number
}

PizzaBlock.defaultProps = {
  name: '---',
  price: 0,
  types: [],
  sizes: []
}

export default PizzaBlock;
