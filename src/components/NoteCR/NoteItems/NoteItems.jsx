import Note from "./Note/Note";
import States from "./States/States";
import "./NoteItems.css"
import { useNotes } from "../Context/NoteContext";

const NoteItems = () => {
    const notes = useNotes();
    return (
        <div className="note-items">
            <States />
            <div className="notes">
                {notes.map(note => <Note key={note.id} note={note} />)}
            </div>
        </div>
    );
}

export default NoteItems;