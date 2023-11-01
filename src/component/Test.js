import React from 'react'
import { Outlet } from 'react-router-dom'

const Test = () => {
  return (
    <div>
      <h1> test </h1>
      <Outlet />
    </div>
  )
}

export default Test
