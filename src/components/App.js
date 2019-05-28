import React from 'react'
import '../styles/App.css'
import TodoBlock from './TodoBlock'
import { connect } from 'react-redux'
import { reverseDay, advanceDay } from '../actions'

function App(props) {
  return (
    <div className="App">
      <button onClick={props.previousDay}>Previous Day</button>
      <TodoBlock />
      <button onClick={props.nextDay}>Next Day</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    previousDay: () => dispatch(reverseDay()),
    nextDay: () => dispatch(advanceDay())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
