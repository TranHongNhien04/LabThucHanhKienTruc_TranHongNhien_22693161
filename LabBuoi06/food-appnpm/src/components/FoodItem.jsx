import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function FoodItem({ food }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="food-card">
      <img
        src={food.imageUrl}
        alt={food.name}
        className="food-img"
      />
      <h3>{food.name}</h3>
      <p>Giá: {food.price.toLocaleString()} VND</p>
      <button onClick={() => addToCart(food)}>Thêm vào giỏ</button>
    </div>
  );
}

export default FoodItem;