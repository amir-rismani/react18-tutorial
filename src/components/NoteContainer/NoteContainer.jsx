import { useState } from "react";

import CreateNote from "./CreateNote/CreateNote";
import NoteItems from "./NoteItems/NoteItems";
import "./NoteContainer.css"


const NoteContainer = () => {
    const [notes, setNotes] = useState([])
    const handleAddNewNote = (note) => {
        setNotes((prevNotes) => [...prevNotes, note])
    }

    const handleRemoveNote = (noteId) => {
        // const filterdNotes =  notes.filter(note => note.id !== noteId)
        // setNotes(filterdNotes)

        // or this logic
        setNotes(prevNotes=>prevNotes.filter(note=>note.id !== noteId))
    }

    return (
        <div className="note-container">
            <CreateNote onAddNewNote={handleAddNewNote} />
            <NoteItems notes={notes} onRemoveNote={handleRemoveNote} />
        </div>
    );
}

export default NoteContainer;