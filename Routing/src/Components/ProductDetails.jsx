import React from 'react'
import { useNavigate ,useParams} from 'react-router-dom'

const ProductDetails = () => {
            const navigate = useNavigate()
            const param = useParams()
    console.log(param);
    
  
  return (
    <div>
      <h1 className='text-3xl font-thin mb-5'>{param.name} </h1>
      <h2  className='text-3xl font-thin mb-5'>products details </h2>
       <button onClick={()=>navigate(-1)} className='bg-blue-200 text-black px-4 py-3 rounded-md'>
          go back
        </button>
    </div>
  )
} 

export default ProductDetails
