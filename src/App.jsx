import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
// import Tabs from './components/Tabs/Tabs'
// import CourseList from './components/CourseList/CourseList'
import Header from './components/Header/Header'
import NoteContainer from './components/NoteContainer/NoteContainer'

function App() {
  // const [count, setCount] = useState(0)
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
    <>
      <Header notes={notes} />
      <NoteContainer notes={notes} handleAddNewNote={handleAddNewNote} handleRemoveNote={handleRemoveNote} handleCompleteNote={handleCompleteNote} />
      {/* <CourseList /> */}
      {/* <Tabs /> */}
    </>
  )
}

export default App
