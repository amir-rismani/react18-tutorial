// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
// import Tabs from './components/Tabs/Tabs'
// import CourseList from './components/CourseList/CourseList'
import Header from './components/Header/Header'
import NoteContainer from './components/NoteContainer/NoteContainer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <NoteContainer />
      {/* <CourseList /> */}
      {/* <Tabs /> */}
    </>
  )
}

export default App
