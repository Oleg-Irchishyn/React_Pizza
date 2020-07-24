import React, { useEffect } from 'react';
import "./styles/scss/app.scss";
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import *as appActions from './redux/reducers/appReducer';
import { initializeAppSelector } from './redux/selectors/appSelectors';
import Preloader from './components/common/Preloader/Preloader';
import PropTypes from 'prop-types';
import { Header, Cart, MainContainer } from './components';


const App = ({ initialized, initializeApp }) => {
  useEffect(() => {
    initializeApp();
  }, [])

  if (!initialized) {
    return <Preloader />
  }
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/" render={() => <MainContainer />} />
          <Route path="/cart" render={() => <Cart />} />
        </Switch>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  initialized: initializeAppSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(appActions, dispatch)
})

App.propTypes = {
  initialized: PropTypes.bool.isRequired,
  initializeApp: PropTypes.func.isRequired
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter)
  (App);

