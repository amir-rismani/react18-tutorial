import Note from "./Note/Note";
import "./NoteItems.css"

const NoteItems = ({ notes }) => {
    return (
        <div className="note-items">
            <div className="states">
                <div className="state-item">All <span className="badge">2</span></div>
                <div className="state-item">Completed <span className="badge">1</span></div>
                <div className="state-item">Open <span className="badge">1</span></div>
            </div>
            <div className="notes">
                {notes.map(note => <Note key={note.id} note={note} />)}
            </div>
        </div>
    );
}

export default NoteItems;