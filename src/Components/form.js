import React from "react";

const Form = ({ inputTitle, inputAuthor, inputPages, setInputTitle, setInputAuthor, setInputPages, book, setBook}) => {
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
        setBook([
            ...book, {title: inputTitle, author: inputAuthor, pages: inputPages, read: false, id: Math.floor(Math.random() * 1000)}
        ]);
        setInputTitle("");
        setInputAuthor(""); 
        setInputPages("");
    };

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
                <select name="Books" className="filter-books">
                    <option value="all">All</option>
                    <option value="read">Read</option>
                    <option value="unread">UnRead</option>
                </select>
            </div>

        </form>
    );
}

export default Form;