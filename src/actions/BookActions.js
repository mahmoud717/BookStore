const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const EDIT_BOOK = 'EDIT_BOOK';
const UPDATE_PROGRESS = 'UPDATE_PROGRESS';

export const addBook = book => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = bookID => ({
  type: REMOVE_BOOK,
  payload: bookID,
});

export const editBook = (bookID, newBook) => ({
  type: EDIT_BOOK,
  payload: { bookID, newBook },
});

export const updateProgress = (bookID, newBook) => ({
  type: UPDATE_PROGRESS,
  payload: { bookID, newBook },
});

export {
  ADD_BOOK, REMOVE_BOOK, EDIT_BOOK, UPDATE_PROGRESS,
};
