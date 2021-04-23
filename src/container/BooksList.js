import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter, deleteBook, loadBooks } from '../actions';

function BooksList({
  books,
  filterCategory,
  deleteBook,
  filterBooks,
  loadedBooks,
}) {
  useEffect(() => {
    loadedBooks().catch((error) => {
      alert(`loading courses failed ${error}`);
    });
  }, []);

  const handleRemoveBook = (event) => {
    deleteBook({ id: parseInt(event.target.value, 10) });
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
        <tbody className="body-book">
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
    deleteBook: (book) => dispatch(deleteBook(book)),
    filterBooks: (filter) => dispatch(changeFilter(filter)),
    loadedBooks: () => dispatch(loadBooks()),
  };
}

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  filterCategory: PropTypes.instanceOf(Object).isRequired,
  deleteBook: PropTypes.func.isRequired,
  filterBooks: PropTypes.func.isRequired,
  loadedBooks: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
