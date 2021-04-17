import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import App from './components/App';
import configureStore from './configureStore';

const State = {
  book: [
    {
      id: uuidv4(),
      title: 'La inevitable levedad del ser',
      category: 'Philosophy',
    },
    {
      id: uuidv4(),
      title: 'IT',
      category: 'Horror',
    },
    {
      id: uuidv4(),
      title: 'React for Dummies',
      category: 'Learning',
    },
    {
      id: uuidv4(),
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
