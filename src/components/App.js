import React from 'react'
import '../styles/App.css'
import TodoBlock from './TodoBlock'
import { assembleDate } from '../dateHelper'

function App() {
  const date = new Date()
  const fullDate = assembleDate(date)

  return (
    <div className="App">
      <TodoBlock date={fullDate} />
    </div>
  )
}

export default App
