import React from 'react'
import '../styles/App.css'
import ShadowTodoBlock from './ShadowTodoBlock'
import TodoBlock from './TodoBlock'
import { connect } from 'react-redux'
import { reverseDay, advanceDay } from '../actions'
import {
  advanceDateByDay,
  reverseDateByDay,
  assembleDate,
  dateStringToDate
} from '../dateHelper'

function App(props) {
  return (
    <div className="App">
      {window.screen.availWidth > 600 ? (
        <ShadowTodoBlock
          date={assembleDate(reverseDateByDay(dateStringToDate(props.date)))}
          onClick={props.previousDay}
        />
      ) : null}
      <TodoBlock />
      {window.screen.availWidth > 600 ? (
        <ShadowTodoBlock
          date={assembleDate(advanceDateByDay(dateStringToDate(props.date)))}
          onClick={props.nextDay}
        />
      ) : null}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    date: state.selectedDate
  }
}

const mapDispatchToProps = dispatch => {
  return {
    previousDay: () => dispatch(reverseDay()),
    nextDay: () => dispatch(advanceDay())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
