import * as types from '../actions/actionTypes';

function bookReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_BOOK:
      return [...state, action.payload];
    case types.REMOVE_BOOK:
      return [...state].filter((element) => element.id !== action.payload.id);
    default:
      return state;
  }
}

export default bookReducer;
