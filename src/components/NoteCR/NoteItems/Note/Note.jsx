import { useNotesDispatch } from "../../Context/NoteContext"
import "./Note.css"
import { TrashIcon } from '@heroicons/react/24/outline'
const Note = ({ note }) => {
    const dispatch = useNotesDispatch();
    const date = new Date(note.createdAt).toLocaleDateString('en-US', {
        year: "numeric",
        month: 'short',
        day: 'numeric'
    })
    return (
        <div className={`note ${note.completed ? 'completed' : ''}`}>
            <div className="note__content">
                <div className="meta">
                    <h3>{note.title}</h3>
                    <span className="description">{note.description}</span>
                </div>
                <div className="action">
                    <TrashIcon className="icon red" onClick={() => dispatch({ type: 'remove', payload: { noteId: note.id } })} />
                    <input type="checkbox" name="" id="" checked={note.completed} value={note.id} onChange={() => dispatch({ type: 'complete', payload: { noteId: note.id } })} />
                </div>
            </div>
            <div className="note__footer">{date}</div>
        </div>
    );
}

export default Note;