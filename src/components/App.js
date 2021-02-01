import React from 'react';
import BookList from './booklist';
import BookForm from './bookform';
import Navbar from './navbar';

function App() {
  return (
    <div className="app">
      <div className="modall">
        {}
      </div>
      <Navbar />
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
