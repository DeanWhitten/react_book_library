import React from "react";

const Book = ({books, setBooks, book}) => {
    // events handlers
    const deleteHandler = () =>{
        setBooks(books.filter( (el) => el.id !== book.id) );
    };
    const readHandler = () => {
        setBooks(books.map(item =>{
            if(item.id === book.id){
                return{
                    ...item, read: !item.read
                }
            }
            return item;
        }))
    }

    return(
        <div className="book">
            <li className={`book-container-${book.read ? "read" : ''}`} >
                <span className={`book-item-${book.read ? "read" : ''}`}>
                  <h5>{book.title}</h5>
                    <h6>{book.author}</h6>
                    <p>{book.pages} pages</p>  
                </span>
                <span className="book-btns">
                 <button onClick={readHandler}className="read-btn">Read</button>
                 <button onClick={deleteHandler} className="delete-btn">Delete</button>   
                </span>
                
            </li>
            
        </div>
    );
}

export default Book;