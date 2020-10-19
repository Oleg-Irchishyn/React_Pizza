import React from 'react';
import { useTranslation } from 'react-i18next';
import { compose, bindActionCreators } from 'redux';
import *as pizzasActions from '../../../redux/reducers/pizzasReducer';
import { connect } from 'react-redux';
import { getCategory, getSortBy } from '../../../redux/selectors/filtersSelectors';

const LanguagePicker = ({ category, sortBy, setEngPizzasSuccess,  setUkrPizzasSuccess, setPizzasSuccess}) => {
  const { i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="languagepicker__wrapper">
      <nav className="languagepicker">
        <button className="languagepicker__item" onClick={() => {
          handleClick('en');
          setEngPizzasSuccess(category, sortBy);
        }}>
          Eng
         </button>
        <button className="languagepicker__item" onClick={() => {
          handleClick('uk');
          setUkrPizzasSuccess(category, sortBy);
        }}>
          Укр
         </button>
        <button className="languagepicker__item" onClick={() => {
          handleClick('ru');
          setPizzasSuccess(category, sortBy);
        }}>
          Рус
         </button>
      </nav>
    </div>
  )
}

const mapStateToProps = (state) => ({
  category: getCategory(state),
  sortBy: getSortBy(state)
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(pizzasActions, dispatch)
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps))
  (LanguagePicker);

