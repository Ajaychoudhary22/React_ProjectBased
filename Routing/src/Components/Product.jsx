import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {
  const navigate = useNavigate()

  const navigateHandler = (name) => {
    navigate(`/product/details/${name}`)
  }

  return (
    <div>
      <h1 className='text-5xl font-thin mb-5'>Products</h1>

      <div className='mb-10'>
        <h1 className='text-3xl font-thin mb-4'>Product 1</h1>
        <button
          onClick={() => navigateHandler('product-1')}
          className='bg-blue-200 text-black px-4 py-3 rounded-md'
        >
          SEE details
        </button>
      </div>

      <div className='mb-10'>
        <h1 className='text-3xl font-thin mb-4'>Product 2</h1>
        <button
          onClick={() => navigateHandler('product-2')}
          className='bg-blue-200 text-black px-4 py-3 rounded-md'
        >
          SEE details
        </button>
      </div>

      <div className='mb-10'>
        <h1 className='text-3xl font-thin mb-4'>Product 3</h1>
        <button
          onClick={() => navigateHandler('product-3')}
          className='bg-blue-200 text-black px-4 py-3 rounded-md'
        >
          SEE details
        </button>
      </div>
    </div>
  )
}

export default Product
