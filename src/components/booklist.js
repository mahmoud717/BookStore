/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-key */

import { connect } from 'react-redux';
import Book from './book';

const booklist = props => {
//   const books = props.books.map(book => <Book book={book} />);
  let books = [];
  for (const [, value] of Object.entries(props.books)) {
    books.push(value);
  }
  books = books.map(newBook => (
    <Book book={newBook} />
  ));
  return (
    <div className="booklist d-flex flex-column m-4">
      {books}
    </div>
  );
};
const mapStateToProps = state => ({
  books: state.Books,
});
export default connect(
  mapStateToProps, null,
)(booklist);
