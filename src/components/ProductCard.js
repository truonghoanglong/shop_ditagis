import React, { useContext } from 'react'
import {FaCartPlus} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { toast } from 'react-toastify';

const ProductCard = ({product}) => {
  const {addCart,setTotal,setQuantity} = useContext(CartContext)
  const handleBuy = () =>{
    const newItems = {
      hinhAnh:product.hinhAnh,
      giaBan:product.giaBan,
      tenSanPham:product.tenSanPham,
      id:product.id
    }
    addCart((item)=>[...item,newItems]);
    setTotal((total)=>(total+= product.giaBan))
    setQuantity((quan)=>(quan+=1))
    toast.success("Thêm vào giỏ hàng")
  }
  return (
    <div className='card'>
      <img src={product.hinhAnh} alt={product.hinhAnh} />

      <div className="box">
        <h3>
          <Link to={`/products/${product.id}`}>
            <span/>
            <h5>{product.tenSanPham}</h5>
          </Link>
        </h3>
        
        <div className='btn_div'>
          <h4>${product.giaBan}</h4>
          <button id="plus-cart" className="btn_delete"
            onClick={()=>handleBuy()}
          > 
            <FaCartPlus/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard