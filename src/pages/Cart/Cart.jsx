import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, addToCart } =
    useContext(StoreContext);

  // Calculate subtotal
  const subtotal = food_list.reduce((acc, item) => {
    const quantity = cartItems[item._id] || 0;
    return acc + item.price * quantity;
  }, 0);

  const deliveryFee = 2;
  const total = subtotal + deliveryFee;

  const hasItems = Object.keys(cartItems).some(
    (itemId) => cartItems[itemId] > 0
  );

  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {hasItems ? (
            food_list.map((item) =>
              cartItems[item._id] > 0 ? (
                <React.Fragment key={item._id}>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>$ {item.price}</p>
                    <div className="quantity">
                      <button onClick={() => removeFromCart(item._id)}>
                        -
                      </button>
                      <p>{cartItems[item._id] || 0}</p>
                      <button onClick={() => addToCart(item._id)}>+</button>
                    </div>
                    <p>$ {item.price * cartItems[item._id]}</p>
                    <p
                      className="cross"
                      onClick={() => removeFromCart(item._id)}
                    >
                      X
                    </p>
                  </div>
                  <hr />
                </React.Fragment>
              ) : null
            )
          ) : (
            <p className="no-item">
              Your cart is empty. Please add items to your cart!
            </p>
          )}
        </div>
      </div>

      {hasItems && (
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${deliveryFee}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${total.toFixed(2)}</b>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>

          <div className="cart-promo-code">
            <div>
              <p>If you have a promo code, enter it here.</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="Promo Code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
