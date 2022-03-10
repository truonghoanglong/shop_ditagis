import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
const useCart = () => {
    const {cart,addCart,products} = useContext(CartContext)
    const handleBuy = () =>{
      const newItems = {
        hinhAnh:products.hinhAnh,
        giaBan:products.giaBan,
        tenSanPham:products.tenSanPham,
        id:products.id
      }
      addCart((item)=>[...item,newItems]);
    }


  return {handleBuy}
}

export default useCart