import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions';

function BooksForm({ action }) {
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
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            value={book.title}
          />
        </div>
      </div>
      <div>
        <div>
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
      </div>
      <button type="submit">Save Book</button>
    </form>
  );
}

BooksForm.propTypes = {
  action: PropTypes.instanceOf(Object).isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    action: (book) => dispatch(createBook(book)),
  };
}

export default connect(null, mapDispatchToProps)(BooksForm);
