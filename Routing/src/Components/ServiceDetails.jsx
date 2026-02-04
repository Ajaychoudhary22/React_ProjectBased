import React from 'react'
import { useNavigate } from 'react-router-dom'

const ServiceDetails = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>more service</h1>
      <h1>Choose service</h1>

      <button
        onClick={() => navigate(-1)}
        className='bg-blue-200 text-black px-4 py-3 rounded-md'
      >
        go back
      </button>
    </div>
  )
}

export default ServiceDetails
