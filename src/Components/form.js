import React from "react";

const Form = ({ inputTitle, inputAuthor, inputPages, setInputTitle, setInputAuthor, setInputPages, books, setBooks, setStatus}) => {
    // events handlers
    const titleInputHandler = (e) =>{
        setInputTitle(e.target.value);
    };
    const authorInputHandler = (e) =>{
        setInputAuthor(e.target.value);
    };
    const pagesInputHandler = (e) =>{
        setInputPages(e.target.value);
    };
    const submitBookHandler = (e) =>{
        e.preventDefault();
        setBooks([
            ...books, {title: inputTitle, author: inputAuthor, pages: inputPages, read: false, id: Math.floor(Math.random() * 1000)}
        ]);
        setInputTitle("");
        setInputAuthor(""); 
        setInputPages("");
    };
    const statusHandler = (e) =>{
        setStatus(e.target.value);
    }

    return(
        <form>
            Title:
            <input value={inputTitle} onChange={titleInputHandler} type="text" className="title-input" />
            Author:
            <input value={inputAuthor} onChange={authorInputHandler} type="text" className="author-input" />
            Number of Pages:
            <input value={inputPages} onChange={pagesInputHandler} type="number" className="pages-input" />
            <button onClick={submitBookHandler} className="add-book-btn" type="submit">+</button>
            <div className="select">
                <select onClick={statusHandler} name="book_status_filter" className="books-filter">
                    <option value="all">All</option>
                    <option value="read">Read</option>
                    <option value="unread">UnRead</option>
                </select>
            </div>

        </form>
    );
}
export default Form;