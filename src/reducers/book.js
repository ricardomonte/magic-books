import * as types from '../actions/actionTypes';

function bookReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_BOOK_SUCCESS:
      return action.payload;
    case types.CREATE_BOOK_SUCCESS:
      return [
        ...state,
        {
          title: action.payload.title,
          category: action.payload.category,
        },
      ];
    case types.DELETE_BOOK_SUCCESS:
      return [...state].filter((element) => element.id !== action.payload.id);
    default:
      return state;
  }
}

export default bookReducer;
