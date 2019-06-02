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

  moveEverythingRight = (todoBlock, yesterdayShadowTodoBlock) => {
    todoBlock.style.transform = 'scale(0.8)'
    todoBlock.style.left = '40.75%'
    yesterdayShadowTodoBlock.style.transform = 'scale(1)'
    yesterdayShadowTodoBlock.style.left = '100%'
    yesterdayShadowTodoBlock.style.zIndex = 2
  }

  animateMoveLeft = () => {
    // First ShadowTodoBlock has first TodoBlock, main TodoBlock is thus second
    const todoBlock = document.querySelectorAll('.TodoBlock')[1]
    // Yesterday ShadowTodoBlock is first, and its first children is TodoBlock
    const yesterdayShadowTodoBlock = document.querySelectorAll('.Shadow')[0]
      .children[0]
    const todoBlockOriginalStyle = todoBlock.style
    const yesterdayShadowOriginalStyle = yesterdayShadowTodoBlock.style

    this.moveEverythingRight(todoBlock, yesterdayShadowTodoBlock)

    setTimeout(() => {
      yesterdayShadowTodoBlock.style = yesterdayShadowOriginalStyle
      todoBlock.style = todoBlockOriginalStyle
      todoBlock.style = 'transition: all .5s ease-in-out'
      yesterdayShadowTodoBlock.style = 'transition: all .5s ease-in-out'
    }, 20)
    setTimeout(() => {
      yesterdayShadowTodoBlock.style = yesterdayShadowOriginalStyle
      todoBlock.style = todoBlockOriginalStyle
    }, 510)
  }

  render() {
    const yesterday = reverseDateByDay(dateStringToDate(this.props.date))
    const tomorrow = advanceDateByDay(dateStringToDate(this.props.date))

    return (
      <div
        className="App"
        onTouchStart={this.handleSwipeStart}
        onTouchMove={this.handleSwipeMove}
        onTouchEnd={this.handleSwipeEnd}
      >
        <ShadowTodoBlock
          date={assembleDate(yesterday)}
          onClick={this.props.previousDay}
        />
        <TodoBlock date={this.props.date} />
        <ShadowTodoBlock
          date={assembleDate(tomorrow)}
          onClick={() => {
            this.props.nextDay()
            this.animateMoveLeft()
          }}
        />
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
