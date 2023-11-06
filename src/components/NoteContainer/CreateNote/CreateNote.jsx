import { useState } from "react";
import "./CreateNote.css"
const CreateNote = ({ onAddNewNote }) => {
    const [note, setNote] = useState({
        createdAt: new Date().toISOString(),
        id: Date.now(),
        completed: false,
    })
    const handleFields = (event) => {
        setNote({
            ...note,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!note.title || !note.description) return;
        onAddNewNote(note)
        setNote({
            title: '',
            description: '',
            createdAt: new Date().toISOString(),
            id: Date.now(),
            completed: false,
        })
    }

    return (
        <div className="create-note">
            <h3>Add New Note</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Note Title" value={note.title} onChange={handleFields} />
                <input type="text" name="description" placeholder="Note Description" value={note.description} onChange={handleFields} />
                <button type="submit">Add New Note</button>
            </form>
        </div>
    );
}

export default CreateNote;