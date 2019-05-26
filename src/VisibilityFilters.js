import React from 'react'
import { connect } from 'react-redux'
import { Filters, changeFilter } from './actions'

const VisibilityFilters = ({ onClick }) => (
  <div>
    <button type="button" onClick={() => onClick(Filters.SHOW_ALL)}>
      Show All
    </button>
    <button type="button" onClick={() => onClick(Filters.SHOW_COMPLETED)}>
      Show Completed
    </button>
    <button type="button" onClick={() => onClick(Filters.SHOW_NOT_COMPLETED)}>
      Show Not Completed
    </button>
  </div>
)

const mapDispatchToProps = dispatch => {
  return {
    onClick: filter => {
      dispatch(changeFilter(filter))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(VisibilityFilters)
