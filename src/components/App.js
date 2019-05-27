import React from 'react'
import '../styles/App.css'
import TodoBlock from './TodoBlock'

function assembleDate(date) {
  let day = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()
  let weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  return `${weekdays[date.getDay()]}, ${day}-${month}-${year}`
}

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
