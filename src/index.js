import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout.js';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import BattlesReducer from './reducers/battlesReducer';
import * as actions from './actions/actions.js';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  predicate: () => process.env.NODE_ENV !== 'production'
});

const middlewares = [thunk, logger];
const store = createStore(BattlesReducer, applyMiddleware(...middlewares));
store.dispatch(actions.fetchLocations());
store.dispatch(actions.fetchKings());
store.dispatch(actions.fetchTypes());
ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Provider store={store}>
        <App />
      </Provider>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
