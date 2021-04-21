import React from 'react';

const Chapter = () => (
  <div className="container-button">
    <h2>Current Chapter</h2>
    <p>
      Chapter
      {Math.floor(Math.random() * 20)}
    </p>
    <button className="btn-chapter" type="button">
      Update Chapter
    </button>
  </div>
);

export default Chapter;
