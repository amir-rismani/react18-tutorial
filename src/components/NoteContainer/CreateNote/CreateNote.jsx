import { useState } from "react";
import "./CreateNote.css"
const CreateNote = () => {
    const [fields, setFields] = useState({
        title: '',
        description: '',
        createdAt: new Date().toISOString(),
        id: Date.now(),
        completed: false,
    })
    const handleFields = (event) => {
        setFields({
            ...fields,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div className="create-note">
            <h3>Add New Note</h3>
            <form>
                <input type="text" name="title" placeholder="Note Title" value={fields.title} onChange={handleFields} />
                <input type="text" name="description" placeholder="Note Description" value={fields.description} onChange={handleFields} />
                <button type="submit">Add New Note</button>
            </form>
        </div>
    );
}

export default CreateNote;