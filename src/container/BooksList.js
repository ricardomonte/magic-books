import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

function BooksList({ books, deleteBook }) {
  const handleRemoveBook = (event) => {
    deleteBook({ id: event.target.value });
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Book Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <Book key={book.title} book={book} onRemoveBook={handleRemoveBook} />
        ))}
      </tbody>
    </table>
  );
}

function mapStateToProps(state) {
  return {
    books: state.book,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteBook: (book) => dispatch(removeBook(book)),
  };
}

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
