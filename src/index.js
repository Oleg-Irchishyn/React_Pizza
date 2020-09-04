import store from "./redux/store"
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import 'font-awesome/css/font-awesome.min.css';
import Preloader from "./components/common/Preloader/Preloader";
import './i18next';


ReactDOM.render(
  <HashRouter /*basename={process.env.PUBLIC_URL} - это строка нужна для BrowserRouter для github pages*/>
    <Provider store={store}>
    <Suspense fallback={<Preloader/>}>
      <App />
      </Suspense>
    </Provider>
  </HashRouter>, document.getElementById('root'));
