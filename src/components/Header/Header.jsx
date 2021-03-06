import React from 'react'
import logoSvg from "../../assets/images/pizza-logo.svg";
import Button from './Button/Button';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguagePicker, Burger } from '../../components';
import { Route } from 'react-router-dom';

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="header">
      <div className="container">
        <NavLink to="/">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>{t('HeaderTitle.1')}</h1>
              <p>{t('HeaderDescription.1')}</p>
            </div>
          </div>
        </NavLink>
        <Route path="/" exact>
          <Burger />
        </Route>
        <LanguagePicker />
        <Button outline className={"button--cart"} />
      </div>
    </div>
  )
}

export default Header;
