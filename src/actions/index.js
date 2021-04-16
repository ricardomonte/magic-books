import * as types from './actionTypes';

export function createBook(book) {
  return {
    type: types.CREATE_BOOK,
    payload: book,
  };
}

export function removeBook(book) {
  return {
    type: types.REMOVE_BOOK,
    payload: book,
  };
}
