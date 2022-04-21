import {useState} from "react";
import {Book} from "../model/Book";
import {postNewBook} from "../service/BookApiService";


export default function BookAddForm () {
    const [title, setTitle] = useState('');
    const [isbn, setISBN] = useState('');

    function onSubmit() {
        const newBook:Book = {title, isbn}

        postNewBook(newBook);
    }


    return <div>
        <form onSubmit={onSubmit}>
            <label>Title:</label>
            <input type={"title"} required value={title} onChange={(e) => setTitle(e.target.value) }/>
            <label>ISBN:</label>
            <input type={"isbn"} required value={isbn} onChange={(e) => setISBN(e.target.value) }/>
            <button type={"submit"}>Submit</button>
        </form>
    </div>
}