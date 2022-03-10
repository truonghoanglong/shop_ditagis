import React from 'react'
import ProductCard from './ProductCard'
const Products = ({products}) => {
    
  return (
    <div className="products">
        {
            products && products.length > 0 && 
            products.map((product,index) =>{
                return (
                    <ProductCard key={index} product={product}/>
                )
            })
        }
    </div>
  )
}

export default Products