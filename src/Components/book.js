import React from "react";

const Book = ({books, setBooks, book}) => {
    // events handlers
    const deleteHandler = () =>{
        setBooks(books.filter( (el) => el.id !== book.id) );
    };

    return(
        <div className="book">
            <li className="book-item" >
                <h5>{book.title}</h5>
                <h6>{book.author}</h6>
                <p>{book.pages}</p>
                <button className="read-btn">Read</button>
                <button onClick={deleteHandler} className="delete-btn">Delete</button>
            </li>
            
        </div>
    );
}

export default Book;