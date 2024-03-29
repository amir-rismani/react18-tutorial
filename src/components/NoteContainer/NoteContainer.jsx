import Header from "./Header/Header"
import CreateNote from "./CreateNote/CreateNote";
import NoteItems from "./NoteItems/NoteItems";
import "./NoteContainer.css"
import { useReducer, useState } from 'react'

function reducer(state, { type, payload }) {
    switch (type) {
        case 'add':
            return [...state, payload.note]
        case 'remove':
            return state.filter(note => note.id !== payload.noteId)
        case 'complete':
            return state.map(note => note.id === payload.noteId ? { ...note, completed: !note.completed } : note)
        case 'sort':
            return payload.notes
        default:
            throw new Error("Unknown action: " + type)
    }
}

const NoteContainer = () => {
    // useState
    // const [notes, setNotes] = useState([]);
    const [sortBy, setSortBy] = useState("latest")

    // useReducer
    const [notes, dispatch] = useReducer(reducer, []);

    const handleAddNewNote = (note) => {
        // useState
        // setNotes((prevNotes) => [...prevNotes, note])

        // useReducer
        dispatch({ type: 'add', payload: { note } })
    }

    const handleRemoveNote = (noteId) => {
        // const filterdNotes =  notes.filter(note => note.id !== noteId)
        // setNotes(filterdNotes)

        // or this logic (best)
        // useState
        // setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId))

        // useReducer
        dispatch({ type: 'remove', payload: { noteId } })

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
        // useState
        // setNotes(prevNotes => prevNotes.map(note => note.id === noteId ? { ...note, completed: !note.completed } : note))

        // useReducer
        dispatch({ type: 'complete', payload: { noteId } })

    }



    const handleSortBy = (e) => {
        setSortBy(e.target.value)
        sortNotes(e.target.value)
    }

    const sortNotes = (sortKey) => {
        let sortedNotes = notes;
        if (sortKey === 'latest') sortedNotes = [...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // a > b ? -1 : 1 
        if (sortKey === 'earliest') sortedNotes = [...notes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        if (sortKey === 'completed') sortedNotes = [...notes].sort((a, b) => Number(a.completed) - Number(b.completed))
        // setNotes(sortedNotes)
        dispatch({ type: 'sort', payload: { notes: sortedNotes } })
    }


    return (
        <>
            <Header notes={notes} sortBy={sortBy} onSortBy={handleSortBy} />
            <div className="note-container">
                <CreateNote onAddNewNote={handleAddNewNote} />
                <NoteItems notes={notes} onRemove={handleRemoveNote} onComplete={handleCompleteNote} />
            </div>
        </>
    );
}

export default NoteContainer;