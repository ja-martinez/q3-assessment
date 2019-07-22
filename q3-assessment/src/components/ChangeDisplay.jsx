import React from 'react'

function ChangeDisplay({ filterBy, changeFilter }) {
  return (
    <div className="changeDisplay">
      <input type="text" className="form-control" value={filterBy} onChange={e => changeFilter(e.target.value)} placeholder="Filter for what you're looking for here..."/>
    </div>
  )
}

export default ChangeDisplay