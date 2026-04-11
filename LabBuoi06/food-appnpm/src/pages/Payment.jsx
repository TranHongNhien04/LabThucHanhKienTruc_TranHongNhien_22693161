import { useLocation, useNavigate } from "react-router-dom";
import { payment } from "../api/paymentApi";

function Payment() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handlePayment = async (method) => {
    await payment({ orderId: state.orderId, method });
    alert("Thanh toán thành công!");
    navigate("/foods");
  };

  return (
    <div className="payment-page">
      <h2>Thanh toán đơn #{state.orderId}</h2>
      <div className="payment-buttons">
        <button onClick={() => handlePayment("COD")}>COD</button>
        <button onClick={() => handlePayment("BANKING")}>Banking</button>
      </div>
    </div>
  );
}

export default Payment;