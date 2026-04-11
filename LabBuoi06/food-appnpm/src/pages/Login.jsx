import { useState } from "react";
import { login } from "../api/userApi";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate(); // 👈 thêm dòng này

  const handleLogin = async () => {
    try {
      const res = await login(form);

      localStorage.setItem("user", JSON.stringify(res.data));

      alert("Login success");

      navigate("/foods"); // 👈 CHÍNH LÀ DÒNG BẠN THIẾU
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div>
      <input
        placeholder="username"
        onChange={(e) =>
          setForm({ ...form, username: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;