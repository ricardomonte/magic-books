import { CHANGE_FILTER } from '../actions/actionTypes';

const ALL = { filter: '' };

function filterReducer(state = ALL, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload === 'ALL' ? '' : action.payload,
      };
    default:
      return state;
  }
}

export default filterReducer;
