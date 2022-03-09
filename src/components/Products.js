import React from 'react'
import ProductCard from './ProductCard'
import { v4 as uuidv4 } from 'uuid';
const Products = ({products}) => {
    
  return (
    <div className="products">
        {
            products && products.length > 0 && 
            products.map((product,index) =>{
                return (
                    <ProductCard key={index} product={product} index={index+1}/>
                )
            })
        }
    </div>
  )
}

export default Products