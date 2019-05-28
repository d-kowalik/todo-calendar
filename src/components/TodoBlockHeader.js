import React from 'react'
import { connect } from 'react-redux'

const TodoBlockHeader = ({ date }) => <h2>{date}</h2>

const mapStateToProps = state => {
  return {
    date: state.selectedDate
  }
}

export default connect(mapStateToProps)(TodoBlockHeader)
