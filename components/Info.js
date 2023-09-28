import React from 'react'
import { useBeers } from '../hooks/useReactQuery'
function Info() {
  const { data } = useBeers()

  return (
    <div>
      Info
      <h1>{data && data[0]?.name}</h1>
      <h3>{data && data[0]?.tagline}</h3>
    </div>
  )
}

export default Info
