/* eslint-disable jsx-a11y/anchor-is-valid */
// import { Link } from 'react-dom';

const book = book => {
  const handleClick = e => {

  };
  return (
    <div className="book d-flex justify-content-between p-1">
      <div className="book-left d-flex flex-column">
        <div className="category text-grey">{book.book.category}</div>
        <div className="title h3 text-black">
          {book.book.title}
        </div>
        {book.book.author}

        <div className="actions">
          <ul>
            <li>Remove</li>
            <li>Edit</li>
          </ul>
        </div>
      </div>
      <div className="book-right">
        <div className="progress">
          64%
        </div>
        <div className="current">
          <p>CURRENT CHAPTER</p>
          <p>
            CHAPTER
            {book.book.chapter}
          </p>
          <button type="button" onClick={handleClick}>UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

export default book;
