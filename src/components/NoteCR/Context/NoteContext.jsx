import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext()
const NoteContextDispatch = createContext();

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

const NotesProvider = ({ children }) => {
    const [notes, dispatch] = useReducer(reducer, []);

    return (
        <NotesContext.Provider value={notes}>
            <NoteContextDispatch.Provider value={dispatch}>
                {children}
            </NoteContextDispatch.Provider>
        </NotesContext.Provider>
    );
}

export default NotesProvider;

export const useNotes = () => {
    const context = useContext(NotesContext);
    if (!context) throw new Error('NotesContext was used outside of NotesProvider.')
    return context
}

export const useNotesDispatch = () => {
    const context = useContext(NoteContextDispatch);
    if (!context) throw new Error('NoteContextDispatch was used outside of NoteDispatchProvider.')
    return context
}