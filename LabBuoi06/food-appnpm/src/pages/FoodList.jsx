// import { useEffect, useState } from "react";
// import { getFoods } from "../api/foodApi";
// import FoodItem from "../components/FoodItem";

// function FoodList() {
//   const [foods, setFoods] = useState([]);

//   useEffect(() => {
//     getFoods().then((res) => setFoods(res.data || []));
//   }, []);

//   return (
//     <div className="food-list">
//       <h2>Danh sách món ăn</h2>
//       <div className="grid">
//         {foods.map((f) => (
//           <FoodItem key={f.id} food={f} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FoodList;

import { useEffect, useState } from "react";
import { getFoods } from "../api/foodApi";
import FoodItem from "../components/FoodItem";

function FoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getFoods()
      .then((res) => setFoods(res.data))
      .catch((err) => {
        console.error("Lỗi gọi API Food Service:", err);
        // Có thể dùng mock data tạm:
        setFoods([
          { id: 1, name: "Pizza", price: 50000 },
          { id: 2, name: "Burger", price: 40000 },
          { id: 3, name: "Bún bò", price: 30000 },
        ]);
      });
  }, []);

  return (
    <div className="food-list">
      <h2>Danh sách món ăn</h2>
      <div className="grid">
        {foods.map((f) => (
          <FoodItem key={f.id} food={f} />
        ))}
      </div>
    </div>
  );
}

export default FoodList;