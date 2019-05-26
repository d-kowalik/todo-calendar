import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import '../styles/AddTodoForm.css'

class AddTodoForm extends Component {
  state = {
    input: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.input)
    this.setState({ input: '' })
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div className="AddTodoForm">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: body => {
      dispatch(addTodo(body))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddTodoForm)
