import React from 'react'
import {FaCartPlus} from 'react-icons/fa'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
const ProductInfo = ({product}) => {
  const {addCart} = useContext(CartContext)
  const handleBuy = () =>{
    const newItems = {
      hinhAnh:product.hinhAnh,
      giaBan:product.giaBan,
      tenSanPham:product.tenSanPham,
      id:product.id
    }
    addCart((item)=>[...item,newItems]);
  }
  return (
    <div className='product_info'>
      <h1>Trang chi tiết sản phẩm</h1>
      <div className='box'>

        <div className="img"><img src={product.hinhAnh} alt={product.hinhAnh} /></div>

        <div className="content">
            <h2>{product.tenSanPham}</h2>
            <h3>${product.giaBan}</h3>
            <button onClick={()=>handleBuy()}> <FaCartPlus/> </button>
        </div>
      </div>
        <h2 className="mota">Mô tả:</h2>
      <div className="box2"><p className="mota2">{product.moTa}</p></div>

    </div>
  )
}

export default ProductInfo