import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const View = () => {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const {id} = useParams()
  // console.log(id);
  const [product,setProduct] = useState({})
  useEffect(()=>{
    const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
    setProduct(allProducts.find(item=>item.id==id))
  },[])
  // console.log(product);
  const handleAddToWishlist = ()=>{
    //check product is in store wishlist
    const existingProduct = userWishlist?.find(item=>item.id==product.id)
    if(existingProduct){
      alert("Product already exist in your wishlist... Add another!!!")
    }else{
      dispatch(addToWishlist(product))
    }
  }

  const handleCart = ()=>{
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item.id==product.id)
    if(existingProduct){
      alert("Product Updated Successfully")
    }
  }
  
  return (
    <>
      <Header/>
      <div style={{paddingTop:'100px'}} className='mx-5'>
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          <div className='flex flex-col justify-center items-center' >
            <img width={'350px'} height={'250px'} src={product?.thumbnail} alt="product" />
            <div className="flex justify-between mt-5 w-100">
              <button onClick={handleAddToWishlist} className="rounded bg-blue-600 p-2 text-white">ADD TO WISHLIST</button>
              <button onClick={handleCart} className="rounded bg-green-600 p-2 text-white">ADD TO CART</button>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">{product?.title}</h1>
            <h2 className="text-2xl text-red-500 font-bold">$ {product?.price}</h2>
            <h3 className='text-xl mt-3'><span className='font-bold'>Brand</span> : {product?.brand}</h3>
            <h3 className='text-xl'><span className='font-bold'>Category  </span> : {product?.category}</h3>
            <h3 className='text-xl'><span className='font-bold'>Description   </span> : {product?.description}</h3>
            <h3 className="text-xl font-bold my-5">Client Reviews</h3>
            {/* review tobe duplicated */}
            {
            product?.reviews?.length>0 ?
              product?.reviews?.map(item=>(
                <div className="rounded shadow my-3 p-2">
                  <p><span className='font-bold'>{item?.reviewerName}</span> : {item?.comment}!</p>
                  <p>Rating : {item?.rating} <i className="fa-solid fa-star text-yellow-400"></i></p>
                </div>
              ))
              :
              <p>No reviews yet!!!</p>
            }
          </div>
        </div>
        
      </div>
    </>
  )
}

export default View