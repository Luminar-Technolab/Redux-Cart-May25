import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'

const Header = ({insideHeader}) => {
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  return (
    <nav className='flex justify-between p-5 text-lg bg-violet-900 text-white font-bold fixed w-full '>
        <Link to={'/'} className='text-2xl'> <i className="fa-solid fa-truck-fast me-1"></i> <span>Daily Cart</span> </Link>
        <ul className='flex'>
            {insideHeader && <li className='mx-5'><input onChange={e=>dispatch(searchProduct(e.target.value))} type="text" className="p-1 rounded border w-75" placeholder='Search products here!!!' /></li>}
            <li className='mx-5'><Link to={'/wishlist'}><i className="fa-solid fa-heart text-red-500 me-1"></i>Wishlist<span className='p-1 bg-black  rounded-full ms-1'> {userWishlist?.length} </span></Link></li>
            <li className='mx-5'><Link to={'/cart'}><i className="fa-solid fa-cart-shopping text-green-500 me-1"></i>Cart<span className='p-1 bg-black  rounded-full ms-1'>{userCart?.length}</span></Link></li>
        </ul>
    </nav>
  )
}

export default Header