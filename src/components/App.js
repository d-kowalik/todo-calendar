import React from 'react'
import '../styles/App.css'
import TodoBlock from './TodoBlock'

function App() {
  let date = new Date()
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
  let fullDate = `${weekdays[date.getDay()]}, ${day}-${month}-${year}`
  return (
    <div className="App">
      <TodoBlock date={fullDate} />
    </div>
  )
}

export default App
