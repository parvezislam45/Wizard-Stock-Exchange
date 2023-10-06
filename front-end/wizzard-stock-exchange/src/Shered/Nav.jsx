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
<<<<<<< HEAD
              <Link to="documentation">Documentation</Link>
=======
              <Link to="/documentation">Documentation</Link>
>>>>>>> 501a1f1f6c2b27cd44802d91cd8406f095667b44
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
<<<<<<< HEAD
       <div className="navbar-end">
        {user || token ? (
            // If user is authenticated, show "Dashboard" and "Logout" buttons
            <>
              <Link to="/dashboard">
              <button
              
              type="button"
              className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-yellow-700 rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 mr-6"
            >
              dashboard
            </button>
              </Link>
              <button
              type="button"
              className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-yellow-700 rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300"
              onClick={handleLogout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-box-arrow-in-right w-6 h-5 text-white mr-2"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />{" "}
                <path d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />{" "}
              </svg>
              Logout
            </button>
            </>
=======
        <div className="navbar-end">
          {user || token ? (
            <div className="dropdown dropdown-end">
              {/* ... Dropdown content for authenticated user */}
              <button onClick={handleLogout} type="button">
                Logout
              </button>
            </div>
>>>>>>> 501a1f1f6c2b27cd44802d91cd8406f095667b44
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
