import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import faker from 'faker';
import App from './components/App';
import configureStore from './configureStore';

const State = {
  book: [
    {
      id: faker.finance.routingNumber(),
      title: 'La inevitable levedad del ser',
      category: 'Philosophy',
    },
    {
      id: faker.finance.routingNumber(),
      title: 'IT',
      category: 'Horror',
    },
    {
      id: faker.finance.routingNumber(),
      title: 'React for Dummies',
      category: 'Learning',
    },
    {
      id: faker.finance.routingNumber(),
      title: 'Redux for Dummies',
      category: 'Learning',
    },
  ],
};

const store = configureStore(State);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
