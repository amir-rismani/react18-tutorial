import { useState } from "react";

import CreateNote from "./CreateNote/CreateNote";
import NoteItems from "./NoteItems/NoteItems";
import "./NoteContainer.css"


const NoteContainer = () => {
    const [notes, setNotes] = useState([])
    const handleAddNewNote = (note) => {
        setNotes((prevNotes) => [...prevNotes, note])
    }
    return (
        <div className="note-container">
            <CreateNote onAddNewNote={handleAddNewNote} />
            <NoteItems notes={notes} />
        </div>
    );
}

export default NoteContainer;