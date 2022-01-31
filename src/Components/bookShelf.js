import React from "react";
//Import components
import Book from "./book.js"

const BookShelf = ({books, setBooks}) => {
    return(
         <div className="book-shelf-container">
             <ul className="book-shelf">
                 {books.map((book) =>(
                    <Book 
                        book={book}
                        books={books} 
                        setBooks={setBooks} 
                        key={book.id}
                    />
                 ))}
             </ul>
         </div>
    );
}

export default BookShelf;