import React from 'react'
import Todo from '../components/Todo'
import { toggleTodo, deleteTodo, setMonthSelected } from '../actions'
import { connect } from 'react-redux'

class TodoContainer extends React.Component {
  setCorrectMonthState = e => {
    // Get the main MonthBlock
    const parent = document.querySelectorAll('.MonthBlock.Main')[0]

    if (e.target !== parent && parent.contains(e.target)) {
      // That means an item inside the main MonthBlock was clicked
      this.props.enableMonthSelected()
    } else {
      this.props.disableMonthSelected()
    }
  }

  onLiClick = (e, id) => {
    this.setCorrectMonthState(e)
    this.props.toggleTodo(id)
  }

  onDelete = (e, id) => {
    this.setCorrectMonthState(e)
    this.props.deleteTodo(id)
  }

  render() {
    return (
      <Todo
        todo={this.props.todo}
        onLiClick={this.onLiClick}
        onDelete={this.onDelete}
      />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => {
      console.log('toggle')
      dispatch(toggleTodo(id))
    },
    deleteTodo: id => {
      dispatch(deleteTodo(id))
    },
    enableMonthSelected: () => dispatch(setMonthSelected(true)),
    disableMonthSelected: () => dispatch(setMonthSelected(false))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(TodoContainer)
