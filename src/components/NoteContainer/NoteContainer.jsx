import CreateNote from "./CreateNote/CreateNote";
import NoteItems from "./NoteItems/NoteItems";
import "./NoteContainer.css"


const NoteContainer = ({ notes, handleAddNewNote, handleRemoveNote, handleCompleteNote }) => {

    return (
        <div className="note-container">
            <CreateNote onAddNewNote={handleAddNewNote} />
            <NoteItems notes={notes} onRemove={handleRemoveNote} onComplete={handleCompleteNote} />
        </div>
    );
}

export default NoteContainer;