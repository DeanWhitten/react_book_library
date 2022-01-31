import React from "react";


const Book = ({title, author, pages, book, setBook}) => {
    // events 
    const deleteHandler = () =>{
        ///this needs to be fixed the filter is removing ALL books?
        setBook(Object.values(book).filter( (el) => el.book !== book.book) );
        
    };

    return(
        <div className="book-container" key ={book.key}>
            <li className="book-item" key ={book.key}>
                {title}
                {author}
                {pages}
                <button className="read-btn">Read</button>
                <button onClick={deleteHandler} className="delete-btn">Delete</button>
            </li>
            
        </div>
    );
}

export default Book;