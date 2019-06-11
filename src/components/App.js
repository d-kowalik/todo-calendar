import React from 'react'
import '../styles/App.css'
import TodoBlockList from './TodoBlockList'
import MonthBlock from './MonthBlock'

const App = () => (
  <div className="App">
    <TodoBlockList />
    <MonthBlock isMain={true} />
  </div>
)
export default App
