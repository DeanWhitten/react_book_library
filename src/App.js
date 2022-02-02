import React, { useState, useEffect } from 'react';
import "./App.css";
//Importing Components 
import Form from './Components/form.js';
import BookShelf from './Components/bookShelf';

function App() {
 
  //states
  const [inputTitle, setInputTitle] = useState("");
  const [inputAuthor, setInputAuthor] = useState("");
  const [inputPages, setInputPages] = useState("");
  const [books, setBooks] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredBooks, setFilteredBooks] = useState([]);
  //use effect to run ONCE when the app loads
  useEffect( () =>{
    getLocalBooks();
  }, []);

   //use effect
   useEffect( () => {
    filterHandler();
    saveLocalBooks();
  }, [books, status]);
  //functions
  const filterHandler = () =>{
    switch(status){
      case 'read':
        setFilteredBooks(books.filter(book => book.read === true));
        break;
      case 'unread':
        setFilteredBooks(books.filter(book => book.read === false));
        break;
      default:
        setFilteredBooks(books);
        break;

    }
  }

  //save to local storage
  const saveLocalBooks = () =>{
      localStorage.setItem('books', JSON.stringify(books));
  }
  const getLocalBooks = () =>{
    if(localStorage.getItem('books') === null ){
      localStorage.setItem('books', JSON.stringify([]));
    } else {
      let booksLocal = JSON.parse(localStorage.getItem('books'));
      setBooks(booksLocal);
    }
  }


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
        setStatus={setStatus}
      />
      <BookShelf 
      books={books} 
      setBooks={setBooks}
      filteredBooks={filteredBooks}
      />
    </div>
  );
}

export default App;
