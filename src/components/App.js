import React, { Component } from 'react'
import '../styles/App.css'
import TodoBlockList from './TodoBlockList'
import MonthBlock from './MonthBlock'
import { connect } from 'react-redux'
import { reverseDay, advanceDay } from '../actions'

class App extends Component {
  state = {
    initialPositionX: 0,
    currentPositionX: 0,
    beingTouched: false,
    didSwipe: false,
    initialPositionY: 0,
    currentPositionY: 0,
    lockedX: false,
    lockedY: false,
    isMonthVisible: false
  }

  handleSwipeStart = event => {
    this.setState({
      initialPositionX: event.changedTouches[0].clientX,
      initialPositionY: event.changedTouches[0].clientY,
      beingTouched: true
    })
  }

  handleSwipeMove = event => {
    if (this.state.beingTouched) {
      const currentX = event.changedTouches[0].clientX
      const currentY = event.changedTouches[0].clientY
      const resX = this.state.initialPositionX - currentX
      const resY = this.state.initialPositionY - currentY
      if (resX < -5 && !this.state.lockedY) {
        this.setState({ lockedX: true })
        const yesterdayShadow = document.querySelectorAll('.Shadow')[0]
        yesterdayShadow.style.right = `${Math.max(100 + resX / 5, 0)}%`
      } else if (resX > 5 && !this.state.lockedY) {
        this.setState({ lockedX: true })
        const tomorrowShadow = document.querySelectorAll('.Shadow')[1]
        tomorrowShadow.style.left = `${Math.max(100 - resX / 5, 0)}%`
      } else if (this.state.lockedX) {
        this.setState({ lockedX: false })
      }

      if (resY > 5 && !this.state.lockedX) {
        this.setState({ lockedY: true })
        if (!this.state.isMonthVisible) {
          const monthBlock = document.querySelector('.MonthBlock')
          monthBlock.style.top = `-${Math.max(resY / 5, 0)}%`
        }
      } else if (resY < -5 && !this.state.lockedX) {
        this.setState({ lockedY: true })
        if (this.state.isMonthVisible) {
          const monthBlock = document.querySelector('.MonthBlock')
          monthBlock.style.top = `-${Math.max(100 + resY / 5, 0)}%`
        }
      } else if (this.state.lockedY) {
        this.setState({ lockedY: false })
      }

      this.setState({
        currentPositionX: currentX,
        didSwipe: true,
        currentPositionY: currentY
      })
    }
  }

  resetSideDays(yesterdayShadow, tomorrowShadow) {
    yesterdayShadow.style.transition = 'none'
    yesterdayShadow.style.right = '100%'
    tomorrowShadow.style.transition = 'none'
    tomorrowShadow.style.left = '100%'
  }

  handleSwipeEnd = event => {
    if (!this.state.didSwipe) return

    const yesterdayShadow = document.querySelectorAll('.Shadow')[0]
    const tomorrowShadow = document.querySelectorAll('.Shadow')[1]

    const resX = this.state.initialPositionX - this.state.currentPositionX
    const resY = this.state.initialPositionY - this.state.currentPositionY
    console.log(resY)

    if (resX < -80 && !this.state.lockedY) {
      yesterdayShadow.style.transition = 'all 0.2s ease-in-out'
      yesterdayShadow.style.right = '0%'
      setTimeout(() => {
        yesterdayShadow.style.transition = 'none'
        yesterdayShadow.style.right = '100%'
        this.props.previousDay()
      }, 200)
    } else if (resX > 80 && !this.state.lockedY) {
      tomorrowShadow.style.left = '0%'
      tomorrowShadow.style.transition = 'all 0.2s ease-in-out'
      setTimeout(() => {
        tomorrowShadow.style.transition = 'none'
        tomorrowShadow.style.left = '100%'
        this.props.nextDay()
      }, 200)
    } else if (resY > 80) {
      this.resetSideDays(yesterdayShadow, tomorrowShadow)
      // Display month
      this.setState({ isMonthVisible: true })
      const monthBlock = document.querySelector('.MonthBlock')
      monthBlock.style.transition = 'all 0.2s ease-in-out'
      monthBlock.style.top = '-100%'
      setTimeout(() => {
        monthBlock.style.transition = 'none'
      }, 200)
    } else if (resY < -80) {
      this.resetSideDays(yesterdayShadow, tomorrowShadow)
      this.setState({ isMonthVisible: false })
      const monthBlock = document.querySelector('.MonthBlock')
      monthBlock.style.transition = 'all 0.2s ease-in-out'
      monthBlock.style.top = '0'
      setTimeout(() => {
        monthBlock.style.transition = 'none'
      }, 200)
    } else {
      this.resetSideDays(yesterdayShadow, tomorrowShadow)
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
        <TodoBlockList />
        <MonthBlock isMain={true} />
      </div>
    )
  }
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
