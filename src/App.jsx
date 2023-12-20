import { useState } from 'react'
import DynamicComponent from './components/DynamicComponent'
import './App.css'

const components = [
  { id: 'greeting', title: 'Greeting (Multi useContext)' },
  { id: 'theme', title: 'Theme Mode (useContext)' },
  { id: 'notes', title: 'Note List (useReducer)' },
  { id: 'courses', title: 'Course List' },
  { id: 'accordion', title: 'Accordion' },
  { id: 'accordion2', title: 'Interdependent Accordion' },
  { id: 'tabs', title: 'Tabs' },
]
function App() {

  const [selectedComponent, setSelectedComponent] = useState(components[0])

  const handleChangeComponent = (e) => {
    setSelectedComponent(components.find(component => component.id === e.target.value))
  }

  return (
    <>
      <strong>Select a project:</strong>
      <select value={selectedComponent.id} onChange={handleChangeComponent}>
        {components.map(component => <option value={component.id} key={component.id}>{component.title}</option>)}
      </select>
      <DynamicComponent component={selectedComponent} />
    </>
  )
}

export default App
