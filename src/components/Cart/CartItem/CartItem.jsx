import React from 'react';
import { RemoveItemButton } from '../../../components';
import { useTranslation } from 'react-i18next';

const CartItem = ({ id, name, type, size, imageUrl, totalPrice, totalCount, onRemovePizza, onPlusItem, onMinusItem }) => {

  const { t } = useTranslation();

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

  const thin = t('singlePizza.sizetypeFirst');
  const fatHeaded = t('singlePizza.sizetypeSecond');

  const handleRemoveClick = () => {
    onRemovePizza(id)
  }

  const handlePlusCartItem = () => {
    onPlusItem(id)
  }

  const handleMinusCartItem = () => {
    onMinusItem(id)
  }

  if (type === 0) {
    type = thin;
  }
  else if (type === 1) {
    type = fatHeaded;
  }

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img
          className="pizza-block__image"
          src={imageUrl}
          alt="Pizza"
        />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>{type} {t('cartItem.dough')}, {size} {t('cartItem.size')}</p>
      </div>
      <div className="cart__item-count">
        <div onClick={handleMinusCartItem} className="button button--outline button--circle cart__item-count-minus">
          <svg
            width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E" />
            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E" />
          </svg>
        </div>
        <b>{totalCount}</b>
        <div onClick={handlePlusCartItem} className="button button--outline button--circle cart__item-count-plus">
          <svg
            width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E" />
            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E" />
          </svg>
        </div>
      </div>
      <div className="cart__item-price">
        <b>{totalPrice} ₴</b>
      </div>
      <RemoveItemButton onClick={handleRemoveClick} />
    </div>
  )
}

export default CartItem
