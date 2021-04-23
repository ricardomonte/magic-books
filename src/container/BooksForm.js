import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveBook, loadBooks } from '../actions';

function BooksForm({ action, loadedBooks }) {
  const [book, setBook] = useState({
    title: '',
    category: '',
  });

  const handleChange = (event) => {
    const updateState = { ...book, [event.target.name]: event.target.value };
    setBook(updateState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    action(book);
    loadedBooks();
    const removeState = { ...book };
    removeState.title = '';
    removeState.category = '';
    setBook(removeState);
  };
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <>
      <h2 className="add-book">add new Book</h2>
      <form onSubmit={handleSubmit} className="form-book">
        <div className="search-book">
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            value={book.title}
            placeholder="Book Title"
          />
        </div>
        <div className="select-book">
          <select
            id="category"
            name="category"
            value={book.category}
            onChange={handleChange}
          >
            <option value="" disabled>
              Categories...
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button className="button-save__book" type="submit">
          Save Book
        </button>
      </form>
    </>
  );
}

BooksForm.propTypes = {
  action: PropTypes.func.isRequired,
  loadedBooks: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    action: (book) => dispatch(saveBook(book)),
    loadedBooks: () => dispatch(loadBooks()),
  };
}

export default connect(null, mapDispatchToProps)(BooksForm);
