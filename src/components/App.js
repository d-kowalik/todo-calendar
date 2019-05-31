import React from 'react'
import '../styles/App.css'
import ShadowTodoBlock from './ShadowTodoBlock'
import TodoBlock from './TodoBlock'
import { connect } from 'react-redux'
import { reverseDay, advanceDay } from '../actions'
import { advanceDateByDay, reverseDateByDay, assembleDate } from '../dateHelper'

function App(props) {
  return (
    <div className="App">
      <ShadowTodoBlock date={assembleDate(reverseDateByDay(new Date()))} />
      <TodoBlock />
      <ShadowTodoBlock date={assembleDate(advanceDateByDay(new Date()))} />
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
