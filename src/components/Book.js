import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, onRemoveBook }) {
  const { id, title, category } = book;
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button type="button" value={id} onClick={onRemoveBook}>
          Remove Book
        </button>
      </td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  onRemoveBook: PropTypes.func.isRequired,
};

export default Book;
