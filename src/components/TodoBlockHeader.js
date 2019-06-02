import React from 'react'
import { readableDateFromString } from '../dateHelper'

const TodoBlockHeader = ({ date }) => <h2>{readableDateFromString(date)}</h2>

export default TodoBlockHeader
