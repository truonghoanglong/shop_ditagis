import React from 'react'
import CartCard from '../components/CartCard'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { v4 as uuidv4 } from 'uuid';

const Cart = () => {
  const {cart,total,setTotal,addCart,setQuantity} = useContext(CartContext)
  const handleDelete = () =>{
    setTotal(0)
    addCart([])
    setQuantity(0)
  }
  return (
    <>
    <h2>Giỏ Hàng:</h2>
      <div className="carts">
        {
          cart && cart.length > 0 &&
          cart.map(cartitem=>{
            return (
              <CartCard key={uuidv4()} cartitem={cartitem}/>
            )
          })
        }
    </div>
    <h3 id="tt">Tổng tiền: {total} $</h3>
    <button id="delete" onClick={handleDelete}>Delete All</button>
    </>
    
  )
}

export default Cart