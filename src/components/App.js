import React, { Component } from 'react'
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

class App extends Component {
  state = {
    initialPositionX: 0,
    currentPositionX: 0
  }

  handleSwipeStart = event => {
    event.persist()

    this.setState({ initialPositionX: event.changedTouches[0].clientX })
  }

  handleSwipeMove = event => {
    event.persist()
    this.setState({ currentPositionX: event.changedTouches[0].clientX })
  }

  handleSwipeEnd = event => {
    const res = this.state.initialPositionX - this.state.currentPositionX
    console.log(res)

    if (res < -50) {
      this.props.nextDay()
    } else if (res > 50) {
      this.props.previousDay()
    }
  }

  render() {
    return (
      <div
        className="App"
        onMouseDown={this.handleSwipeStart}
        onMouseMove={this.handleSwipeMove}
        onMouseUp={this.handleSwipeEnd}
        onTouchStart={this.handleSwipeStart}
        onTouchMove={this.handleSwipeMove}
        onTouchEnd={this.handleSwipeEnd}
      >
        {window.screen.availWidth > 600 ? (
          <ShadowTodoBlock
            date={assembleDate(
              reverseDateByDay(dateStringToDate(this.props.date))
            )}
            onClick={this.props.previousDay}
          />
        ) : null}
        <TodoBlock
          onMouseDown={this.handleSwipeStart}
          onMouseMove={this.handleSwipeMove}
          onMouseUp={this.handleSwipeEnd}
        />
        {window.screen.availWidth > 600 ? (
          <ShadowTodoBlock
            date={assembleDate(
              advanceDateByDay(dateStringToDate(this.props.date))
            )}
            onClick={this.props.nextDay}
          />
        ) : null}
      </div>
    )
  }
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
