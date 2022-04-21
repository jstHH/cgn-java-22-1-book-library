import axios from "axios";
import {Book} from "../model/Book";


export function getAllBooks () {
    return axios.get("http://localhost:8080/book")
        .then(response => response.data)
        .catch(console.error)
}

export function postNewBook(newBook: Book) {
    axios.post("http://localhost:8080/book", newBook)
}