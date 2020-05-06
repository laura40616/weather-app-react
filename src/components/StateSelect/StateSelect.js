import React from 'react'
import { STATES_ARRAY } from 'american-states-library'
const StateSelect = (props) => {
  const { name, className, onChange, value } = props
  const stateOptions = STATES_ARRAY.map((state, index) => (<option key={index} value={state.abbreviation}>{state.name}</option>))
  stateOptions.unshift(<option key='placeholder' value='' disabled>Select a State</option>)
  return (
    <select
      id='state-select'
      name={name}
      className={className}
      onChange={onChange}
      value={value}
    >
      {stateOptions}
    </select>
  )
}

export default StateSelect
