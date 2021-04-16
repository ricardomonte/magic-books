import React from 'react';
import PropTypes from 'prop-types';

function Book({ book }) {
  const { id, title, category } = book;
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
