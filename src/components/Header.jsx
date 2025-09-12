import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  return (
    <nav className='flex justify-between p-5 text-lg bg-violet-900 text-white font-bold fixed w-full '>
        <Link to={'/'} className='text-2xl'> <i className="fa-solid fa-truck-fast me-1"></i> <span>Daily Cart</span> </Link>
        <ul className='flex'>
            <li className='mx-5'><Link to={'/wishlist'}><i className="fa-solid fa-heart text-red-500 me-1"></i>Wishlist<span className='p-1 bg-black  rounded-full ms-1'> {userWishlist?.length} </span></Link></li>
            <li className='mx-5'><Link to={'/cart'}><i className="fa-solid fa-cart-shopping text-green-500 me-1"></i>Cart<span className='p-1 bg-black  rounded-full ms-1'>20</span></Link></li>
        </ul>
    </nav>
  )
}

export default Header