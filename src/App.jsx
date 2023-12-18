import { useReducer, useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
// import Tabs from './components/Tabs/Tabs'
// import CourseList from './components/CourseList/CourseList'
// import Header from './components/Header/Header'
import NoteContainer from './components/NoteContainer/NoteContainer'
// import Accordion from './components/Accordion/Accordion'
// import AccordionDepends from './components/AccordionDepends/AccordionDepends'

function reducer(state, { type, payload }) {
  switch (type) {
    case 'add':
      return [...state, payload.note]
    case 'remove':
      return state.filter(note => note.id !== payload.noteId)
    case 'complete':
      return state.map(note => note.id === payload.noteId ? { ...note, completed: !note.completed } : note)
    default:
      return state
  }
}
function App() {
  // const [count, setCount] = useState(0)
  // const [notes, setNotes] =
  useState([])
  // const [sortBy, setSortBy] = useState("latest")

  const [notes, dispatch] = useReducer(reducer, [])
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

  // const handleSortBy = (e) => {
  //   setSortBy(e.target.value)
  //   sortNotes(e.target.value)
  // }

  // const sortNotes = (sortKey) => {
  //   let sortedNotes = notes;
  //   if (sortKey === 'latest') sortedNotes = [...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // a > b ? -1 : 1 
  //   if (sortKey === 'earliest') sortedNotes = [...notes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
  //   if (sortKey === 'completed') sortedNotes = [...notes].sort((a, b) => Number(a.completed) - Number(b.completed))
  //   setNotes(sortedNotes)
  // }

  return (
    <>
      {/* <Header notes={notes} sortBy={sortBy} onSortBy={handleSortBy} /> */}
      {/* <CourseList /> */}
      {/* <Tabs /> */}
      {/* <Accordion /> */}
      {/* <AccordionDepends /> */}
      <NoteContainer notes={notes} handleAddNewNote={handleAddNewNote} handleRemoveNote={handleRemoveNote} handleCompleteNote={handleCompleteNote} />
    </>
  )
}

export default App
