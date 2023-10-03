import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Nav = () => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/account/profile/", {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div>
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            {/* ... Dropdown content */}
          </div>
          <Link to="/">
            <img
              className="w-80 h-20"
              src="https://i.postimg.cc/L5ZVG1v3/Screenshot-2023-09-24-015211.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/documentation">Documentation</Link>
            </li>
            {user || token ? (
              <>
                <li>
                  <a href="/buy-crypto">Buy Crypto</a>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li tabIndex={0}>
                  <details>
                    <summary>Trade</summary>
                    <ul className="p-2">
                      <li>
                        <a href="/submenu-1">Submenu 1</a>
                      </li>
                      <li>
                        <a href="/submenu-2">Submenu 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a href="/features">Features</a>
                </li>
                <li>
                  <a href="/earn">Earn</a>
                </li>
              </>
            ) : null}
          </ul>
        </div>
        <div className="navbar-end">
          {user || token ? (
            <div className="dropdown dropdown-end">
              {/* ... Dropdown content for authenticated user */}
              <button onClick={handleLogout} type="button">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-5 px-10">
              <Link to="/login">
                <button type="button">Login</button>
              </Link>
              <Link to="/register">
                <button type="button">Register</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
