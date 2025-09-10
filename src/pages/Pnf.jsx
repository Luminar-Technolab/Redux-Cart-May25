import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div style={{height:'60vh'}} className='flex flex-col justify-center items-center my-5'>
      <img width={'300px'} src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="" />
      <h1 className='text-2xl font-bold'>Page Not Found</h1>
      <h5 className='my-4'>Sorry, we couldn't find the page.</h5>
      <Link to={'/'} className="rounded p-2 bg-green-600 text-white">Back to Home</Link>
    </div>
  )
}

export default Pnf