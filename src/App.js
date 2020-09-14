import React, { useEffect } from 'react';
import "./styles/scss/app.scss";
import { Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import *as appActions from './redux/reducers/appReducer';
import *as pizzasActions from './redux/reducers/pizzasReducer';
import { initializeAppSelector } from './redux/selectors/appSelectors';
import Preloader from './components/common/Preloader/Preloader';
import PropTypes from 'prop-types';
import { Header, MainContainer } from './components';
import { getCategory, getSortBy } from './redux/selectors/filtersSelectors';
import { withSuspense } from './hoc/WithSuspense';

const Cart = React.lazy(() => import('./components/Cart/Cart'));

const App = ({ initialized, initializeApp, category, sortBy, setPizzasSuccess }) => {
  useEffect(() => {
    initializeApp();
    setPizzasSuccess(category, sortBy);
  }, [category, sortBy])

  if (!initialized) {
    return <Preloader />
  }
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/" render={() => <MainContainer />} />
          <Route path="/cart" render={withSuspense(Cart)} />
        </Switch>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  initialized: initializeAppSelector(state),
  category: getCategory(state),
  sortBy: getSortBy(state)
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(appActions, dispatch),
  ...bindActionCreators(pizzasActions, dispatch)
})

App.propTypes = {
  initialized: PropTypes.bool.isRequired,
  initializeApp: PropTypes.func.isRequired
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter)
  (App);

