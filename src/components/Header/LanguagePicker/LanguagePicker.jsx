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
    <div>
      <nav className="languagepicker">
        <button className="languagepicker__item" onClick={() => {
          handleClick('en');
          setEngPizzasSuccess(category, sortBy);
        }}>
          English
         </button>
        <button className="languagepicker__item" onClick={() => {
          handleClick('uk');
          setUkrPizzasSuccess(category, sortBy);
        }}>
          Українська
         </button>
        <button className="languagepicker__item" onClick={() => {
          handleClick('ru');
          setPizzasSuccess(category, sortBy);
        }}>
          Русский
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

