import React from 'react'
import { useBeers } from '../hooks/useReactQuery'

function Cancel() {
  const { data } = useBeers()

  return (
    <div>
      <h1>Cancel</h1>
      <div>{data && data[0]?.name}</div>
    </div>
  )
}

export default Cancel
