import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import storeObj from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={storeObj.store}>
    <PersistGate loading={null} persistor={storeObj.persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
