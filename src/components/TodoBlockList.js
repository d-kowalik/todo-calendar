import React, { Component } from 'react'
import '../styles/TodoBlockList.css'
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

class TodoBlockList extends Component {
  state = {
    renderYesterdayTwice: false,
    renderTomorrowTwice: false
  }

  getElementsForAnimation = () => {
    // First ShadowTodoBlock has first TodoBlock, main TodoBlock is thus second
    const todoBlock = document.querySelectorAll('.TodoBlock')[1]
    // Yesterday ShadowTodoBlock is first, and its first children is TodoBlock
    const yesterdayShadowTodoBlock = document.querySelectorAll('.Shadow')[0]
      .children[0]
    // Tomorrow ShadowTodoBlock is second
    const tomorrowShadowTodoBlock = document.querySelectorAll('.Shadow')[1]
      .children[0]
    return { todoBlock, yesterdayShadowTodoBlock, tomorrowShadowTodoBlock }
  }

  moveEverythingRight = (
    todoBlock,
    yesterdayShadowTodoBlock,
    tomorrowShadowTodoBlock
  ) => {
    todoBlock.style.transform = 'scale(0.8)'
    todoBlock.style.left = '36.21%'
    yesterdayShadowTodoBlock.style.transform = 'scale(1)'
    yesterdayShadowTodoBlock.style.left = '100%'
    yesterdayShadowTodoBlock.style.zIndex = 2
    tomorrowShadowTodoBlock.style.left = '36.21%'
  }

  moveEverythingLeft = (
    todoBlock,
    yesterdayShadowTodoBlock,
    tomorrowShadowTodoBlock
  ) => {
    todoBlock.style.transform = 'scale(0.8)'
    todoBlock.style.left = '-36.21%'
    tomorrowShadowTodoBlock.style.transform = 'scale(1)'
    tomorrowShadowTodoBlock.style.left = '-100%'
    tomorrowShadowTodoBlock.style.zIndex = 2
    yesterdayShadowTodoBlock.style.left = '-36.21%'
  }

  animateMoveRight = () => {
    const {
      todoBlock,
      yesterdayShadowTodoBlock,
      tomorrowShadowTodoBlock
    } = this.getElementsForAnimation()

    const todoBlockOriginalStyle = todoBlock.style
    const yesterdayShadowOriginalStyle = yesterdayShadowTodoBlock.style
    const tomorrowShadowOriginalStyle = tomorrowShadowTodoBlock.style
    this.setState({ renderTomorrowTwice: true })

    this.moveEverythingLeft(
      todoBlock,
      yesterdayShadowTodoBlock,
      tomorrowShadowTodoBlock
    )

    tomorrowShadowTodoBlock.parentElement.classList.remove('Shadow')
    todoBlock.classList.add('SideBlock')

    setTimeout(() => {
      yesterdayShadowTodoBlock.style = yesterdayShadowOriginalStyle
      todoBlock.style = todoBlockOriginalStyle
      tomorrowShadowTodoBlock.style = tomorrowShadowOriginalStyle
      tomorrowShadowTodoBlock.style.transition = 'all .5s ease-in-out'
      todoBlock.style.transition = 'all .5s ease-in-out'
      yesterdayShadowTodoBlock.style.transition = 'all .5s ease-in-out'
      const tomorrowClone = document.querySelector('.TomorrowClone')
      tomorrowClone.style.left = '110%'
      tomorrowShadowTodoBlock.parentElement.classList.add('Shadow')
      todoBlock.classList.add('SideAnim')
      todoBlock.classList.remove('SideBlock')
    }, 20)
    setTimeout(() => {
      yesterdayShadowTodoBlock.style = yesterdayShadowOriginalStyle
      todoBlock.style = todoBlockOriginalStyle
      tomorrowShadowTodoBlock.style = tomorrowShadowOriginalStyle
      this.setState({ renderTomorrowTwice: false })
      todoBlock.classList.remove('SideAnim')
    }, 510)
  }

  animateMoveLeft = () => {
    const {
      todoBlock,
      yesterdayShadowTodoBlock,
      tomorrowShadowTodoBlock
    } = this.getElementsForAnimation()

    const todoBlockOriginalStyle = todoBlock.style
    const yesterdayShadowOriginalStyle = yesterdayShadowTodoBlock.style
    const tomorrowShadowOriginalStyle = tomorrowShadowTodoBlock.style
    this.setState({ renderYesterdayTwice: true })

    this.moveEverythingRight(
      todoBlock,
      yesterdayShadowTodoBlock,
      tomorrowShadowTodoBlock
    )

    yesterdayShadowTodoBlock.parentElement.classList.remove('Shadow')
    todoBlock.classList.add('SideBlock')

    setTimeout(() => {
      yesterdayShadowTodoBlock.style = yesterdayShadowOriginalStyle
      todoBlock.style = todoBlockOriginalStyle
      tomorrowShadowTodoBlock.style = tomorrowShadowOriginalStyle
      tomorrowShadowTodoBlock.style.transition = 'all .5s ease-in-out'
      todoBlock.style.transition = 'all .5s ease-in-out'
      yesterdayShadowTodoBlock.style.transition = 'all .5s ease-in-out'
      const yesterdayClone = document.querySelector('.YesterdayClone')
      yesterdayClone.style.left = '-30%'
      yesterdayShadowTodoBlock.parentElement.classList.add('Shadow')
      todoBlock.classList.add('SideAnim')
      todoBlock.classList.remove('SideBlock')
    }, 20)
    setTimeout(() => {
      yesterdayShadowTodoBlock.style = yesterdayShadowOriginalStyle
      todoBlock.style = todoBlockOriginalStyle
      tomorrowShadowTodoBlock.style = tomorrowShadowOriginalStyle
      this.setState({ renderYesterdayTwice: false })
      todoBlock.classList.remove('SideAnim')
    }, 510)
  }

  render() {
    const yesterday = reverseDateByDay(dateStringToDate(this.props.date))
    const tomorrow = advanceDateByDay(dateStringToDate(this.props.date))
    const beforeYesterday = reverseDateByDay(yesterday)
    const afterTomorrow = advanceDateByDay(tomorrow)
    let yesterdayShadow = (
      <ShadowTodoBlock
        date={assembleDate(yesterday)}
        onClick={() => {
          this.props.previousDay()
          this.animateMoveRight()
        }}
      />
    )

    let tomorrowShadow = (
      <ShadowTodoBlock
        date={assembleDate(tomorrow)}
        onClick={() => {
          this.props.nextDay()
          this.animateMoveLeft(React.cloneElement(yesterdayShadow))
        }}
      />
    )

    return (
      <div className="TodoBlockList">
        {this.state.renderYesterdayTwice ? (
          <div
            className="YesterdayClone"
            style={{
              position: 'absolute',
              left: '.2%',
              transition: 'all 0.5s ease-in-out'
            }}
          >
            <ShadowTodoBlock date={assembleDate(beforeYesterday)} />
          </div>
        ) : null}
        {yesterdayShadow}
        <TodoBlock date={this.props.date} />
        {tomorrowShadow}
        {this.state.renderTomorrowTwice ? (
          <div
            className="TomorrowClone"
            style={{
              position: 'absolute',
              left: '72.655%',
              transition: 'all 0.5s ease-in-out'
            }}
          >
            <ShadowTodoBlock date={assembleDate(afterTomorrow)} />
          </div>
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
)(TodoBlockList)
