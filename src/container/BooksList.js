import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

function BooksList({ books }) {
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
          <Book key={book.title} book={book} />
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

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(BooksList);
