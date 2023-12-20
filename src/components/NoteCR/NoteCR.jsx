import Header from "./Header/Header"
import CreateNote from "./CreateNote/CreateNote";
import NoteItems from "./NoteItems/NoteItems";
import "./NoteCR.css"
import NotesProvider from "./Context/NoteContext";


const NoteCR = () => {
    return (
        <NotesProvider>
            <Header />
            <div className="note-container">
                <CreateNote />
                <NoteItems />
            </div>
        </NotesProvider>
    );
}

export default NoteCR;