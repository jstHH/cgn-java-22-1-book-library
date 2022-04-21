import {Book} from "../model/Book";

type BookEntryProps = {
    book: Book
}

export default function BookEntry ({book}: BookEntryProps) {
    return <div>
        <h1>Title: {book.title}</h1>
        <p>ISBN: {book.isbn}</p>
    </div>

}