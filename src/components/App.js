/* eslint-disable import/no-cycle */
import React from 'react';
import BookList from '../containers/booklist';
import BookForm from '../containers/bookform';
import Navbar from './navbar';
import {useRef} from "react"

function App() {

  return (
    <div className="app">
      <div className="modall" ref={modall}>
        {}
      </div>
      <Navbar />
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
