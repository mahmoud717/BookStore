import { combineReducers } from 'redux';
import BooksReducer from './books';

const rootReducer = combineReducers({
  Books: BooksReducer,
});

export default rootReducer;
