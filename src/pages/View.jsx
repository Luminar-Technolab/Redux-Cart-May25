import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
      <Header/>
      <div style={{paddingTop:'100px'}} className='mx-5'>
        <div className="grid grid-cols-2 gap-4 items-center">
          <div className='flex flex-col justify-center items-center' >
            <img width={'350px'} height={'250px'} src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="product" />
            <div className="flex justify-between mt-5 w-100">
              <button className="rounded bg-blue-600 p-2 text-white">ADD TO WISHLIST</button>
              <button className="rounded bg-green-600 p-2 text-white">ADD TO CART</button>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">Title</h1>
            <h2 className="text-2xl text-red-500 font-bold">$ 300</h2>
            <h3 className='text-xl mt-3'><span className='font-bold'>Brand</span> : Essence</h3>
            <h3 className='text-xl'><span className='font-bold'>Category  </span> : Essence</h3>
            <h3 className='text-xl'><span className='font-bold'>Description   </span> : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem et nobis, cum, alias quae debitis nulla cupiditate temporibus officiis impedit deserunt eum perferendis fugit id? Cupiditate saepe temporibus earum cum!</h3>
            <h3 className="text-xl font-bold my-5">Client Reviews</h3>
            {/* review tobe duplicated */}
            <div className="rounded shadow my-3 p-2">
              <p><span className='font-bold'>client-name</span> : message</p>
              <p>Rating : 3 <i className="fa-solid fa-star text-yellow-400"></i></p>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default View