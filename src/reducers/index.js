import { combineReducers } from 'redux';
import book from './book';
import filter from './filter';

const rootReducer = combineReducers({
  book,
  filter,
});

export default rootReducer;
