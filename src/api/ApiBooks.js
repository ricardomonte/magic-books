import axios from 'axios';

const url = 'https://rails-api-cms-book.herokuapp.com/api/books';

export const GetAllBooks = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createBook = async (book) => {
  try {
    const response = await axios.post(url, { ...book });
    return response;
  } catch (error) {
    return error;
  }
};

export const removeBook = async (book) => {
  const response = await axios.delete(`${url}/${book.id}`);
  return response;
};
