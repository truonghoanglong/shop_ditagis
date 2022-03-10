import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";

const CartCard = ({ cartitem,total }) => {
  return (
    <>
      <div className="card">
        <img src={cartitem.hinhAnh} alt={cartitem.hinhAnh} />

        <div className="box">
          <h5 id="ten">{cartitem.tenSanPham}</h5>

          <div className="btn_div">
            <h4>${cartitem.giaBan}</h4>
            <button id="plus-cart" className="btn_delete">
              <BsFillCartCheckFill />
            </button>
          </div>
        </div>
      </div>
  
    </>
  );
};

export default CartCard;
