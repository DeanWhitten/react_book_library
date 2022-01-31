import React from "react";
//Import components
import Book from "./book.js"

const BookShelf = ({book, setBook}) => {
    return(
         <div className="book-shelf-container">
             <ul className="book-shelf">
                 {book.map((book) =>(
                    <Book 
                        book={book} 
                        setBook={setBook} 
                        key={book.id} 
                        title={book.title} 
                        author={book.author} 
                        pages={book.pages} 
                        id={book.id}
                    />
                 ))}
             </ul>
         </div>
    );
}

export default BookShelf;