import React from 'react'
import { useSelector } from 'react-redux'
import FavCard from './FavCard';

const Fav = () => {
    const favItems = useSelector(state=>state.product.fav)
    console.log(favItems);
  return (
    <div className='d-flex flex-wrap gap-5 my-5 justify-content-center align-items-center'>
        {favItems?.map(product=>(
            <FavCard key={product?.id} product={product}/>
        ))}
    </div>
  )
}

export default Fav