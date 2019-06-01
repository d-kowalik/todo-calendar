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
    currentPositionX: 0,
    beingTouched: false,
    didSwipe: false
  }

  handleSwipeStart = event => {
    this.setState({
      initialPositionX: event.changedTouches[0].clientX,
      beingTouched: true
    })
  }

  handleSwipeMove = event => {
    if (this.state.beingTouched) {
      this.setState({
        currentPositionX: event.changedTouches[0].clientX,
        didSwipe: true
      })
    }
  }

  handleSwipeEnd = event => {
    if (!this.state.didSwipe) return

    const res = this.state.initialPositionX - this.state.currentPositionX
    if (res < -80) {
      this.props.previousDay()
    } else if (res > 80) {
      this.props.nextDay()
    }

    this.setState({
      initialPositionX: 0,
      currentPositionX: 0,
      beingTouched: false,
      didSwipe: false
    })
  }

  render() {
    return (
      <div
        className="App"
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
        <TodoBlock />
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
