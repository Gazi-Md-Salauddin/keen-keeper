import React from 'react'
import { Link } from 'react-router'

const NotFoundPage = () => {
  return (
    <div className="text-center space-y-2 my-36">
      <h1 className="text-2xl font-bold">404 Page Not Found</h1>
      <Link to="/">
        <button className="btn bg-green-500 text-white">Go Back Home</button>
      </Link>
    </div>
  )
}

export default NotFoundPage