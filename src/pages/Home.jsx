import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'

const Home = () => {
  const dispatch = useDispatch()
  const {loading,error,allProducts} = useSelector((state)=>state.productReducer)
  // console.log(loading,error,allProducts);
  const productsPerPage = 8
  const totalPages = Math.ceil(allProducts?.length/productsPerPage)
  const [currentPage,setCurrentPage] = useState(1)
  const currentPageProductsLastIndex = currentPage * productsPerPage
  const currentPageProductsFirstIndex = currentPageProductsLastIndex - productsPerPage
  const visibleProductCards = allProducts?.slice(currentPageProductsFirstIndex,currentPageProductsLastIndex)
  
  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[])

  const navigatePrevPage = ()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }

  const navigateNextPage = ()=>{
    if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
    }
  }
  return (
    <>
      <Header insideHeader={true}/>
      <div style={{paddingTop:'100px'}} className='mx-5'>
      {
        loading?
        <p>Loading...</p>
        :
          <div className="grid grid-cols-4 gap-4">
            {
              allProducts?.length>0?
               visibleProductCards?.map(product=>(
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
      {/* pagination */}
      <div className="text-center mt-20 font-bold text-2xl text-blue-900">
        <button onClick={navigatePrevPage} className='cursor-pointer'> <i className="fa-solid fa-backward"></i> </button>
        <span> {currentPage} of {totalPages} </span>
        <button onClick={navigateNextPage} className='cursor-pointer'> <i className="fa-solid fa-forward"></i> </button>
      </div>
    </>
  )
}

export default Home