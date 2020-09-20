import React from 'react';
import { useTranslation } from 'react-i18next';

const PayButton = ({ onClickOrder }) => {
  const { t } = useTranslation();
  return (
    <div onClick={onClickOrder} className="button pay-btn">
      <span>{t('cart.cartButtonText')}</span>
    </div>
  )
}

export default PayButton;
