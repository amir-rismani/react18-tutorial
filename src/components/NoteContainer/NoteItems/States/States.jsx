import Message from "../../../Message/Message"
import "./States.css"
const NoteItems = ({ notes }) => {
    // Derived state
    const allNotes = notes.length
    const completedNotes = notes.filter(note => note.completed).length
    const openNotes = allNotes - completedNotes

    if (!allNotes) return <Message>❌ No notes has already been added.</Message>
    return (
        <div className="states">
            <div className="state-item">All <span className="badge">{allNotes}</span></div>
            <div className="state-item">Completed <span className="badge">{completedNotes}</span></div>
            <div className="state-item">Open <span className="badge">{openNotes}</span></div>
        </div>
    );
}

export default NoteItems;