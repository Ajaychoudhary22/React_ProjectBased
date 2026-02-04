import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Service = () => {
  const navigate = useNavigate()

  const navigateHandler = () => {
    navigate(`/service/details`)
  }

  return (
    <div>
      <h1 className='text-5xl font-thin mb-5'>Services</h1>

      <div className='mb-10'>
        <h1 className='text-3xl font-thin mb-4'>Service 1</h1>
        <button
          onClick={navigateHandler}
          className='bg-blue-200 text-black px-4 py-3 rounded-md'
        >
          SEE more details
        </button>
      </div>

      <div className='mb-10'>
        <h1 className='text-3xl font-thin mb-4'>Service 2</h1>
        <button
          onClick={navigateHandler}
          className='bg-blue-200 text-black px-4 py-3 rounded-md'
        >
          SEE details
        </button>
      </div>

      <div className='mb-10'>
        <h1 className='text-3xl font-thin mb-4'>Service 3</h1>
        <button
          onClick={navigateHandler}
          className='bg-blue-200 text-black px-4 py-3 rounded-md'
        >
          SEE details
        </button>
      </div>
      <hr  className='my-10'/>
      <hr />
      <Outlet/>
    </div>
  )
}

export default Service
