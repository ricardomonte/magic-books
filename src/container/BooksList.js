import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter, removeBook } from '../actions';

function BooksList({
  books, filterCategory, deleteBook, filterBooks,
}) {
  const handleRemoveBook = (event) => {
    deleteBook({ id: event.target.value });
  };

  const handleFilterChange = (event) => {
    filterBooks(event.target.value);
  };

  const categoryOrder = () => books.filter((book) => book.category === filterCategory.filter);

  const filteredBooks = filterCategory.filter !== '' ? categoryOrder() : books;
  return (
    <>
      <CategoryFilter
        filter={filterCategory.filter}
        onFilterChange={handleFilterChange}
      />
      <table className="table">
        <thead>
          <tr>
            <th>Book Id</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <Book
              key={book.title}
              book={book}
              onRemoveBook={handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

function mapStateToProps(state) {
  return {
    books: state.book,
    filterCategory: state.filter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteBook: (book) => dispatch(removeBook(book)),
    filterBooks: (filter) => dispatch(changeFilter(filter)),
  };
}

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  filterCategory: PropTypes.instanceOf(Object).isRequired,
  deleteBook: PropTypes.func.isRequired,
  filterBooks: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
