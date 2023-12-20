import Message from "../../../Message/Message"
import { useNotes } from "../../Context/NoteContext"
import "./States.css"
const NoteItems = () => {
    // Derived state
    const notes = useNotes();
    const allNotes = notes.length
    const completedNotes = notes.filter(note => note.completed).length
    const openNotes = allNotes - completedNotes

    if (!allNotes) return <Message>❌ No notes has already been added.</Message>
    return (
        <div className="states">
            <div className="state-item">All <span className="state-item__badge">{allNotes}</span></div>
            <div className="state-item">Completed <span className="state-item__badge">{completedNotes}</span></div>
            <div className="state-item">Open <span className="state-item__badge">{openNotes}</span></div>
        </div>
    );
}

export default NoteItems;