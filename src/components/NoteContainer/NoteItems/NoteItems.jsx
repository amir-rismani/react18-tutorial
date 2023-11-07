import Note from "./Note/Note";
import States from "./States/States";
import "./NoteItems.css"

const NoteItems = ({ notes, onRemove, onComplete }) => {
    return (
        <div className="note-items">
            <States notes={notes} />
            <div className="notes">
                {notes.map(note => <Note key={note.id} note={note} onRemove={onRemove} onComplete={onComplete} />)}
            </div>
        </div>
    );
}

export default NoteItems;