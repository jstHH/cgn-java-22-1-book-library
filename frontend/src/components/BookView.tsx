import {useBooks} from "../hooks/BookHooks";
import BookEntry from "./BookEntry";


export default function BookView () {
    const books = useBooks();

    return <div>{books.map(book => <BookEntry book={book} />)}</div>
}