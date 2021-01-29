import { ADD_BOOK, REMOVE_BOOK } from '../actions';

const initialState = {
  [Math.floor(Math.random() * 100000)]: {
    title: 'The Lord Of The Rings',
    author: 'J.J.rowling',
    pages: 1000,
    pagesRead: 500,
    category: 'Science Fiction',
  },
};

const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: return {
      ...state,
      [Math.floor(Math.random() * 100000)]: {
        title: action.payload.title,
        author: action.payload.author,
        pages: action.payload.pages,
        pagesRead: action.payload.pagesRead,
        category: action.payload.category,
      },
    };

    case REMOVE_BOOK: {
      const books = state;
      delete books[action.id];
      return {
        ...books,
      };
    }
    default: return state;
  }
};

export default BooksReducer;
