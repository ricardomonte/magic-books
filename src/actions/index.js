import * as types from './actionTypes';
import * as bookApi from '../api/ApiBooks';

export function changeFilter(filter) {
  return {
    type: types.CHANGE_FILTER,
    payload: filter,
  };
}

export function loadBooksSuccess(books) {
  return {
    type: types.LOAD_BOOK_SUCCESS,
    payload: books,
  };
}

export function createBookSuccess(book) {
  return {
    type: types.CREATE_BOOK_SUCCESS,
    payload: book,
  };
}

export function deleteBookSuccess(book) {
  return {
    type: types.DELETE_BOOK_SUCCESS,
    payload: book,
  };
}

export function loadBooks() {
  return function (dispatch) {
    return bookApi
      .GetAllBooks()
      .then((books) => {
        dispatch(loadBooksSuccess(books));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveBook(book) {
  return function (dispatch) {
    return bookApi
      .createBook(book)
      .then((savedBook) => {
        dispatch(createBookSuccess(savedBook));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function deleteBook(book) {
  return function (dispatch) {
    return bookApi.removeBook(book).then(() => {
      dispatch(deleteBookSuccess(book));
    });
  };
}
