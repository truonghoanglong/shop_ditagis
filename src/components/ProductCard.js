import React from 'react'
import {FaCartPlus} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const ProductCard = ({product,index}) => {
  return (
    <div className='card'>
      <img src={product.hinhAnh} alt={product.hinhAnh} />

      <div className="box">
        <h3>
          <Link to={`/products/${index}`}>
            <span/>
            <h5>{product.tenSanPham}</h5>
          </Link>
        </h3>
        
        <div className='btn_div'>
          <h4>${product.giaBan}</h4>
          <button id="plus-cart" className="btn_delete"><FaCartPlus/></button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard