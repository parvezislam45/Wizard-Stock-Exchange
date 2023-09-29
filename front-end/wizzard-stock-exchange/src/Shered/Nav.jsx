import  { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Nav = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user profile data from the API
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

    fetchProfile();
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  const handleLogout = () => {
    // Clear the user's authentication token from localStorage
    localStorage.removeItem("token");
    window.location.href = "/";
    // Redirect the user to the logout page or another relevant page
    history.push("/logout"); // Replace "/logout" with your desired logout route
  };

  return (
    <div>
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a>
            <img
              className="w-80 h-20"
              src="https://i.postimg.cc/L5ZVG1v3/Screenshot-2023-09-24-015211.png"
              alt=""
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/"><a>Home</a></Link>
              
            </li>
            <li>
              <a>Buy Crypto</a>
            </li>
            <li>
            <Link to="dashboard"><a>Dashboard</a></Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Trade</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Earn</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
        {user ? (
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
          ) : (
          <div className="flex justify-center items-center gap-5 px-10">
            <Link to="login">
              <button
              type="button"
              className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-yellow-700 rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300"
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
              Login
            </button></Link>
            <Link to="register">
            <button
              type="button"
              className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-sky-900 rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-forward-fill w-6 h-5 text-white mr-2"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="m9.77 12.11 4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557z" />{" "}
              </svg>
              Register
            </button>
            </Link>
            
          </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default Nav;







