import "./Note.css"
import { TfiTrash } from "react-icons/tfi";

const Note = ({ note }) => {
    const date = new Date(note.createdAt).toLocaleDateString('en-US', {
        year: "numeric",
        month: 'short',
        day: 'numeric'
    })
    return (
        <div className="note">
            <div className="note__content">
                <div className="meta">
                    <h3>{note.title}</h3>
                    <span className="description">{note.description}</span>
                </div>
                <div className="action">
                    <TfiTrash style={{ color: 'red' }} />
                    <input type="checkbox" name="" id="" />
                </div>
            </div>
            <div className="note__footer">{date}</div>
        </div>
    );
}

export default Note;