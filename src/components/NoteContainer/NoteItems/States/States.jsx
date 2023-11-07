import "./States.css"
const NoteItems = ({ notes }) => {
    // Derived state
    const allNotes = notes.length
    const completedNotes = notes.filter(note => note.completed).length
    const openNotes = allNotes - completedNotes

    if (!allNotes) return <h2>No notes has already been added.</h2>
    return (
        <div className="states">
            <div className="state-item">All <span className="badge">{allNotes}</span></div>
            <div className="state-item">Completed <span className="badge">{completedNotes}</span></div>
            <div className="state-item">Open <span className="badge">{openNotes}</span></div>
        </div>
    );
}

export default NoteItems;