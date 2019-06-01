import React from 'react'
import { connect } from 'react-redux'
import { Filters, changeFilter } from '../actions'
import {
  SHOW_ALL_STRING,
  SHOW_COMPLETED_STRING,
  SHOW_NOT_COMPLETED_STRING
} from '../language'
import '../styles/VisibilityFilters.css'

const VisibilityFilters = ({ onClick, filter }) => (
  <div className="VisibilityFilters">
    <button
      type="button"
      className="flat"
      disabled={filter === Filters.SHOW_ALL}
      onClick={() => onClick(Filters.SHOW_ALL)}
    >
      {SHOW_ALL_STRING}
    </button>
    <button
      type="button"
      className="flat"
      disabled={filter === Filters.SHOW_COMPLETED}
      onClick={() => onClick(Filters.SHOW_COMPLETED)}
    >
      {SHOW_COMPLETED_STRING}
    </button>
    <button
      type="button"
      className="flat"
      disabled={filter === Filters.SHOW_NOT_COMPLETED}
      onClick={() => onClick(Filters.SHOW_NOT_COMPLETED)}
    >
      {SHOW_NOT_COMPLETED_STRING}
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
