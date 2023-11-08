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
  const [sortBy, setSortBy] = useState("latest")

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

  const handleSortBy = (e) => {
    setSortBy(e.target.value)
    sortNotes(e.target.value)
  }

  const sortNotes = (sortKey) => {
    let sortedNotes = notes;
    if (sortKey === 'latest') sortedNotes = [...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // a > b ? -1 : 1 
    if (sortKey === 'earliest') sortedNotes = [...notes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    if (sortKey === 'completed') sortedNotes = [...notes].sort((a, b) => Number(a.completed) - Number(b.completed))
    setNotes(sortedNotes)
  }

  return (
    <>
      <Header notes={notes} sortBy={sortBy} onSortBy={handleSortBy} />
      <NoteContainer notes={notes} handleAddNewNote={handleAddNewNote} handleRemoveNote={handleRemoveNote} handleCompleteNote={handleCompleteNote} />
      {/* <CourseList /> */}
      {/* <Tabs /> */}
    </>
  )
}

export default App
