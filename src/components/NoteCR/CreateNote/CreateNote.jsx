import { useRef, useState } from "react";
import "./CreateNote.css"
import { useNotesDispatch } from "../Context/NoteContext";
const CreateNote = () => {
    const dispatch = useNotesDispatch();
    const titleRef = useRef("title");
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
        dispatch({ type: 'add', payload: { note } })
        setNote({
            title: '',
            description: '',
            createdAt: new Date().toISOString(),
            id: Date.now(),
            completed: false,
        })
        titleRef.current.focus();
    }

    return (
        <div className="create-note">
            <h3>Add New Note</h3>
            <form className="form" onSubmit={handleSubmit}>
                <input className="input" type="text" name="title" placeholder="Note Title" value={note.title} onChange={handleFields} ref={titleRef} />
                <input className="input" type="text" name="description" placeholder="Note Description" value={note.description} onChange={handleFields} />
                <button type="submit" className="button">Add New Note</button>
            </form>
        </div>
    );
}

export default CreateNote;