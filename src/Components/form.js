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
            <span>
                Title:
                <input value={inputTitle} onChange={titleInputHandler} type="text" className="title-input" />
            </span>

            <span>
                Author:
                <input value={inputAuthor} onChange={authorInputHandler} type="text" className="author-input" />
            </span>

            <span>
                Pages:
                <input value={inputPages} onChange={pagesInputHandler} type="number" className="pages-input" />
            </span>
            
            <span>
                <button onClick={submitBookHandler} className="add-book-btn" type="submit">+</button>
            </span>
<br/>
            <span>
                <div className="select">
                    <select onClick={statusHandler} name="book_status_filter" className="books-filter">
                        <option value="all">All</option>
                        <option value="read">Read</option>
                        <option value="unread">UnRead</option>
                    </select>
                </div>
            </span>

        </form>
    );
}
export default Form;