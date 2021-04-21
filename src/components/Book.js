import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import Chapter from './Chapter';

function Book({ book, onRemoveBook }) {
  const { id, title, category } = book;
  return (
    <>
      <tr key={id} className="book">
        <div className="info-book">
          <td className="book-category">{category}</td>
          <td className="book-title">{title}</td>
          <td className="book-id">{id}</td>
          <td className="conteiner-button">
            <p>Comments</p>
            {' | '}
            <button type="button" value={id} onClick={onRemoveBook}>
              Remove Book
            </button>
            {' | '}
            <p>Edit</p>
          </td>
        </div>
        <td>
          <ProgressBar />
        </td>
        <td className="chapter">
          <Chapter />
        </td>
      </tr>
    </>
  );
}

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  onRemoveBook: PropTypes.func.isRequired,
};

export default Book;
