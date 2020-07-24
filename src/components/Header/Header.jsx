import React from 'react'
import logoSvg from "../../assets/images/pizza-logo.svg";
import Button from './Button/Button';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <NavLink to="/">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </NavLink>
        <Button outline className={"button--cart"} />
      </div>
    </div>
  )
}

export default Header;
