import React, { useState } from 'react';
import "./App.css";
//Importing Components 
import Form from './Components/form.js';
import BookShelf from './Components/bookShelf';

function App() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAuthor, setInputAuthor] = useState("");
  const [inputPages, setInputPages] = useState("");
  const [books, setBooks] = useState([]);


  return (
    <div className="App">
      <header>
        <h1>Library</h1>
      </header>
      <Form 
        inputTitle={inputTitle} 
        inputAuthor={inputAuthor} 
        inputPages={inputPages}
        setInputTitle={setInputTitle} 
        setInputAuthor={setInputAuthor} 
        setInputPages={setInputPages}
        books={books}
        setBooks={setBooks}
      />
      <BookShelf books={books} setBooks={setBooks}/>
    </div>
  );
}

export default App;
