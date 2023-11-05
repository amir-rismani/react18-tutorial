import Note from "./Note/Note";
import "./NoteItems.css"

const notes = [
    { id: 1, title: 'note 1', description: 'description note 1', createdAt: '2022-05-05T13:49:33.117Z', completed: false },
    { id: 2, title: 'note 2', description: 'description note 2', createdAt: '2023-08-05T13:49:33.117Z', completed: false },
    { id: 3, title: 'note 3', description: 'description note 3', createdAt: '2023-11-05T13:49:33.117Z', completed: false },
];

const NoteItems = () => {
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