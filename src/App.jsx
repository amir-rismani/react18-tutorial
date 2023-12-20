import { useState } from 'react'
import DynamicComponent from './components/DynamicComponent'
import './App.css'

const components = [
  { id: 'tabs', title: 'Tabs' },
  { id: 'courses', title: 'Course List' },
  { id: 'notes', title: 'Note List (useReducer)' },
  { id: 'accordion', title: 'Accordion' },
  { id: 'accordion2', title: 'Interdependent Accordion' },
]
function App() {

  const [selectedComponent, setSelectedComponent] = useState(components[1])

  const handleChangeComponent = (e) => {
    setSelectedComponent(components.find(component => component.id === e.target.value))
  }

  return (
    <>
      <strong>select a component:</strong>
      <select value={selectedComponent.id} onChange={handleChangeComponent}>
        {components.map(component => <option value={component.id} key={component.id}>{component.title}</option>)}
      </select>
      <DynamicComponent component={selectedComponent} />
    </>
  )
}

export default App
