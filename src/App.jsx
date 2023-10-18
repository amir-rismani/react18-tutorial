// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import CourseList from './components/CourseList/CourseList'
import Header from './components/Header/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <CourseList />
    </>
  )
}

export default App
