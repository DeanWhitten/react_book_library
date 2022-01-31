import React from "react";


const Book = ({title, author, pages, book, setBook}) => {
    // events 
    const deleteHandler = () =>{\
        ///this needs to be fixed the filter is removing ALL books?
        book(Object.values(book)((el) => el.key !== book.key ));

    };

    return(
        <div className="book-container" id={book.key}>
            <li className="book-item">
                <h4>{title}</h4>
                <h6>{author}</h6>
                <p>{pages}</p>
                <button className="read-btn">Read</button>
                <button onClick={deleteHandler} className="delete-btn">Delete</button>
            </li>
            
        </div>
    );
}

export default Book;