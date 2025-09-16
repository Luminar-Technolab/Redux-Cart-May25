import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const Wishlist = () => {
  const ourWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()

  const handleCart = (product)=>{
      dispatch(removeWishlistItem(product?.id))
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
        <h1 className="text-3xl font-bold text-center text-red-600 my-5">My Wishlist</h1>
        <div className="grid grid-cols-4 gap-4 my-10">
          {/* duplicate div according to the product array */}
          {
            ourWishlist?.length>0?
              ourWishlist?.map(product=>(
                <div className="rounded  p-2 shadow">
                  {/* image */}
                  <img height={'200px'} src={product?.thumbnail} alt="product" />
                  <div className='text-center'>
                    {/* title */}
                    <h3 className='font-bold text-xl'>{product?.title}</h3>
                    <div className="flex justify-evenly my-2">
                      <button><i onClick={()=>dispatch(removeWishlistItem(product?.id))} className="fa-solid fa-heart-circle-xmark text-2xl text-red-600"></i></button>
                      <button><i onClick={()=>handleCart(product)} className="fa-solid fa-cart-plus text-2xl text-green-600"></i></button>
                    </div>
                  </div>
                </div>
              ))
              :
              <p className='font-bold  text-xl my-10'>Your Wishlist is Empty!!!</p>
          }
        </div>
      </div>
    </>
  )
}

export default Wishlist