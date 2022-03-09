import React from 'react'
import {FaCartPlus} from 'react-icons/fa'
const ProductInfo = ({product}) => {
  return (
    <div className='product_info'>
      <h1>Trang chi tiết sản phẩm</h1>
      <div className='box'>

        <div className="img"><img src={product.hinhAnh} alt={product.hinhAnh} /></div>

        <div className="content">
            <h2>{product.tenSanPham}</h2>
            <h3>${product.giaBan}</h3>
            <button> <FaCartPlus/> </button>
        </div>
      </div>
        <h2 className="mota">Mô tả:</h2>
      <div className="box2"><p className="mota2">{product.moTa}</p></div>

    </div>
  )
}

export default ProductInfo