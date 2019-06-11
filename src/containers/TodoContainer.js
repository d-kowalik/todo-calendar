import React from 'react'
import Todo from '../components/Todo'
import { toggleTodo, deleteTodo, setCorrectMonthState } from '../actions'
import { connect } from 'react-redux'

class TodoContainer extends React.Component {
  onLiClick = (e, id) => {
    this.props.setCorrectMonthState(e)
    this.props.toggleTodo(id)
  }

  onDelete = (e, id) => {
    this.props.setCorrectMonthState(e)
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
    setCorrectMonthState: event => {
      dispatch(setCorrectMonthState(event))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(TodoContainer)
