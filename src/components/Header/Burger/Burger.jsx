import React, {useState, useRef} from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import *as headerActions from '../../../redux/reducers/headerReducer';
import cn from "classnames";

const Burger = ({ toggleOpenBurger}) => {
const [openClass, setOpenClass] = useState(false);
const burgerRef = useRef();
const toggleBurgerClass = () => {
    toggleOpenBurger();
     setOpenClass(!openClass);
}
    return (
        <div 
        ref={burgerRef}
        id="burger" 
        className={cn('header__burger', {
            'open': openClass
          })}
        onClick={toggleBurgerClass}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
  
  const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(headerActions, dispatch)
  })

  export default compose(
    connect(null, mapDispatchToProps))
    (Burger);

