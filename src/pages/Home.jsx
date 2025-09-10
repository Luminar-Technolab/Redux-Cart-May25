import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Header/>
      <div style={{paddingTop:'100px'}} className='mx-5'>
        <div className="grid grid-cols-4 gap-4">
          {/* duplicate div according to the product array */}
          <div className="rounded  p-2 shadow">
            {/* image */}
            <img height={'200px'} src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="product" />
            <div className='text-center'>
              {/* title */}
              <h3 className='font-bold text-xl'>title</h3>
              {/* link */}
              <Link to={`/id/view`} className='bg-violet-900 p-1 rounded text-white mt-3 inline-block'>View More...</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home