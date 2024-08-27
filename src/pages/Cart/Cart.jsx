import React, { useContext } from "react";
import "./Cart.css";
import { FoodContext } from "../../context";
function Cart() {
  const { cartValue, setCartValue } = useContext(FoodContext);
  const handleDelete = (id) => {
    const afterDeletingItem = cartValue.filter((item) => item.id !== id);
    setCartValue(afterDeletingItem);
  };
  return (
    <div className="cartPage">
      <div className="cartContent text-black">
        <ul>
          {cartValue.map((item) => (
            <li className="mb-3 list-unstyled">
              <div className="row">
                <div className="col-lg-7 d-flex flex-column">
                  <h4>Product Name:{item.name}</h4>
                  <h5>Product Price:${item.price}</h5>
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                  <a
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-danger text-white"
                  >
                    Delete
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cart;
