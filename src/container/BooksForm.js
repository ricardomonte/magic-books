import React from 'react';

function BooksForm() {
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
    <form>
      <div>
        <div>
          <input type="text" id="title" name="title" />
        </div>
      </div>
      <div>
        <div>
          <select id="category" name="category" value="">
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

export default BooksForm;
