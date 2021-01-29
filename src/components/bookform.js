import { connect } from 'react-redux';
import React, { useState } from 'react';
import { addBook } from '../actions/BookActions';

const bookForm = props => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [category, setCategory] = useState('');
  const submitHandler = e => {
    e.preventDefault();
    const book = {
      title,
      author,
      pages,
      pagesRead: 0,
      category,
    };
    props.addBook(book);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-title">
        ADD NEW BOOK
      </div>
      <div className="body">
        <input
          type="text"
          placeholder="Book title"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          name="Author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="0"
          name="pages"
          value={pages}
          onChange={e => setPages(e.target.value)}
          required
        />
        <select name="category" id="category" required onChange={e => setCategory(e.target.options[e.target.selectedIndex].value)}>
          <option value="" disabled selected>Category</option>
          <option value="Drama">Drama</option>
        </select>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  addBook: book => dispatch(addBook(book)),
});

export default connect(null,
  mapDispatchToProps)(bookForm);
