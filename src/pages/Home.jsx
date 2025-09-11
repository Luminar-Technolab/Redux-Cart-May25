import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'

const Home = () => {
  const dispatch = useDispatch()
  const {loading,error,allProducts} = useSelector((state)=>state.productReducer)
  // console.log(loading,error,allProducts);
  
  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[])

  return (
    <>
      <Header/>
      <div style={{paddingTop:'100px'}} className='mx-5'>
      {
        loading?
        <p>Loading...</p>
        :
          <div className="grid grid-cols-4 gap-4">
            {
              allProducts?.length>0?
               allProducts?.map(product=>(
                 <div key={product?.id} className="rounded  p-2 shadow">
                  {/* image */}
                  <img height={'200px'} src={product?.thumbnail} alt="product" />
                  <div className='text-center'>
                    {/* title */}
                    <h3 className='font-bold text-xl'>{product?.title}</h3>
                    {/* link */}
                    <Link to={`/${product?.id}/view`} className='bg-violet-900 p-1 rounded text-white mt-3 inline-block'>View More...</Link>
                  </div>
                  </div>
               ))
            :
            <p>Product Not Found</p>
          }
        </div>
        }
      </div>
    </>
  )
}

export default Home