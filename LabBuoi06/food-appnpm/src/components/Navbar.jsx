import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2 className="logo" onClick={() => navigate("/foods")}>
        🍔 Food App
      </h2>

      <div className="nav-links">
        <Link to="/foods">Món ăn</Link>
        <Link to="/cart">Giỏ hàng</Link>

        {user && (
          <>
            <span className="user">Xin chào, {user.username}</span>
            <button className="btn-logout" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;