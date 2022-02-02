import React from "react";
//Import components
import Book from "./book.js"

const BookShelf = ({books, setBooks, filteredBooks}) => {
    return(
         <div className="book-shelf-container">
             <ul className="book-shelf">
                 {filteredBooks.map((book) =>(
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