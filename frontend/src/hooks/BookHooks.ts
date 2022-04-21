import {useEffect, useState} from "react";
import {Book} from "../model/Book";
import {getAllBooks} from "../service/BookApiService";


export function useBooks () {
    const [books, setBooks] = useState<Book[]>([])

    useEffect(() => {
        getAllBooks()
            .then(body => setBooks(body))
    },[])

    return books;
}