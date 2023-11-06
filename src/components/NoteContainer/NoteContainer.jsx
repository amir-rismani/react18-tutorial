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

        // or this logic (best)
        setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId))
    }

    const handleCompleteNote = (event) => {
        const noteId = Number(event.target.value);
        // const newNotes = [...notes];
        // const index = newNotes.findIndex(note => note.id === noteId)
        // newNotes[index].completed = !newNotes[index].completed

        // or this logic
        // const newNotes = notes.map(note => note.id === noteId ? { ...note, completed: !note.completed } : note)
        // setNotes(newNotes);

        // best logic
        setNotes(prevNotes => prevNotes.map(note => note.id === noteId ? { ...note, completed: !note.completed } : note))
    }

    return (
        <div className="note-container">
            <CreateNote onAddNewNote={handleAddNewNote} />
            <NoteItems notes={notes} onRemove={handleRemoveNote} onComplete={handleCompleteNote} />
        </div>
    );
}

export default NoteContainer;