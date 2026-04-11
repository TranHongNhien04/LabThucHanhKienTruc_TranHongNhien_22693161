import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { createOrder } from "../api/orderApi";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, clearCart, getTotal } =
    useContext(CartContext);
  const navigate = useNavigate();

  const handleOrder = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const orderData = {
      userId: user.id,
      items: cart.map((item) => ({ foodId: item.id, quantity: item.quantity })),
    };

    const res = await createOrder(orderData);
    clearCart();
    navigate("/payment", { state: { orderId: res.data.id } });
  };

  return (
    <div className="cart-page">
      <h2>Giỏ hàng</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <h4>{item.name}</h4>
                <p>{item.price} x {item.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Xóa</button>
            </div>
          ))}
          <h3>Tổng: {getTotal().toLocaleString()} VND</h3>
          <button onClick={handleOrder} className="btn-order">Đặt hàng</button>
        </div>
      )}
    </div>
  );
}

export default Cart;