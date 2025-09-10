import React from 'react'
import Header from '../components/Header'

const Wishlist = () => {
  return (
    <>
      <Header/>
      <div style={{paddingTop:'100px'}} className='mx-5'>
        <h1 className="text-3xl font-bold text-center text-red-600 my-5">My Wishlist</h1>
        <div className="grid grid-cols-4 gap-4">
          {/* duplicate div according to the product array */}
          <div className="rounded  p-2 shadow">
            {/* image */}
            <img height={'200px'} src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="product" />
            <div className='text-center'>
              {/* title */}
              <h3 className='font-bold text-xl'>title</h3>
              <div className="flex justify-evenly my-2">
                <button><i className="fa-solid fa-heart-circle-xmark text-2xl text-red-600"></i></button>
                <button><i className="fa-solid fa-cart-plus text-2xl text-green-600"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist