import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './configureStore';
import NavBar from './common/NavBar';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <NavBar />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
