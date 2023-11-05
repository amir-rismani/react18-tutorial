import CreateNote from "./CreateNote/CreateNote";
import NoteItems from "./NoteItems/NoteItems";
import "./NoteContainer.css"
const NoteContainer = () => {
    return (
        <div className="note-container">
            <CreateNote />
            <NoteItems />
        </div>
    );
}

export default NoteContainer;