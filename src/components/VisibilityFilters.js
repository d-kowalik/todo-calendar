import React from 'react'
import { connect } from 'react-redux'
import { Filters, changeFilter } from '../actions'
import '../styles/VisibilityFilters.css'

const VisibilityFilters = ({ onClick, filter }) => (
  <div className="VisibilityFilters">
    <button
      type="button"
      disabled={filter === Filters.SHOW_ALL}
      onClick={() => onClick(Filters.SHOW_ALL)}
    >
      Show All
    </button>
    <button
      type="button"
      disabled={filter === Filters.SHOW_COMPLETED}
      onClick={() => onClick(Filters.SHOW_COMPLETED)}
    >
      Show Completed
    </button>
    <button
      type="button"
      disabled={filter === Filters.SHOW_NOT_COMPLETED}
      onClick={() => onClick(Filters.SHOW_NOT_COMPLETED)}
    >
      Show Not Completed
    </button>
  </div>
)

const mapStateToProps = state => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: filter => {
      dispatch(changeFilter(filter))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityFilters)
