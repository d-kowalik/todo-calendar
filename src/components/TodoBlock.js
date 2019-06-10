import React from 'react'
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListContainer from '../containers/TodoListContainer'
import TodoBlockHeader from './TodoBlockHeader'
import VisibilityFilters from './VisibilityFilters'
import '../styles/TodoBlock.css'
import { connect } from 'react-redux'
import { setMonthSelected } from '../actions'

const TodoBlock = ({ date, disableMonthSelected }) => (
  <div
    className="TodoBlock Block"
    onFocus={() => {
      disableMonthSelected()
      console.log('disable month selected')
    }}
  >
    <TodoBlockHeader date={date} />
    <AddTodoContainer />
    <TodoListContainer date={date} />
    <VisibilityFilters />
  </div>
)

const mapDispatchToProps = dispatch => {
  return {
    disableMonthSelected: () => dispatch(setMonthSelected(false))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(TodoBlock)
