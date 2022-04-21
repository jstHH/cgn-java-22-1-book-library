import Header from "../components/Header";
import BookView from "../components/BookView";
import BookAddForm from "../components/BookAddForm";

export default function MainPage() {
    return <div>
        <Header/>
        <BookAddForm />
        <BookView/>
    </div>
}