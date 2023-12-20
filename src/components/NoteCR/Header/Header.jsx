import { useState } from 'react';
import { useNotes, useNotesDispatch } from '../Context/NoteContext';
import './Header.css'

const Header = () => {
    const notes = useNotes();
    const dispatch = useNotesDispatch();
    const [sortBy, setSortBy] = useState("latest")

    const handleSortBy = (e) => {
        setSortBy(e.target.value)
        sortNotes(e.target.value)
    }

    const sortNotes = (sortKey) => {
        let sortedNotes = notes;
        if (sortKey === 'latest') sortedNotes = [...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // a > b ? -1 : 1 
        if (sortKey === 'earliest') sortedNotes = [...notes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        if (sortKey === 'completed') sortedNotes = [...notes].sort((a, b) => Number(a.completed) - Number(b.completed))
        dispatch({ type: 'sort', payload: { notes: sortedNotes } })
    }

    return (
        <div className="header">
            <h1>My Notes ({notes.length})</h1>
            <select value={sortBy} onChange={handleSortBy}>
                <option value="latest">Sort based on newest</option>
                <option value="earliest">Sort based on earliest</option>
                <option value="completed">Sort based on completed</option>
            </select>
        </div>
    )
};
export default Header;