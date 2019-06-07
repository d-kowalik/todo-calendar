import React, { Component } from 'react'
import { NEW_TODO_STRING } from '../language'
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
            placeholder={NEW_TODO_STRING}
          />
        </form>
      </div>
    )
  }
}

export default AddTodoForm
