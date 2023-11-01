
import LiveTradingApp from "../LiveData/LiveData";
import { Link } from "react-router-dom";

const Dashboard = () => {
  
  return (
    <div>
      <div className="flex overflow-hidden bg-dark pt-16">
        <aside
          id="sidebar"
          className="fixed hidden z-20 h-full top-0 left-16 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
          aria-label="Sidebar"
        >
          <div className="relative flex-1 flex flex-col min-h-0 bg-dark pt-0 mt-8 ml-16">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex-1 px-3 bg-slate-700 divide-y space-y-1">
                <ul className="space-y-2 pb-2">
                  <li>
                    <form action="#" method="GET" className="lg:hidden">
                      <label className="sr-only">Search</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg
                            className="w-5 h-5 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                          </svg>
                        </div>
                        <input
                          type="text"
                          name="email"
                          id="mobile-search"
                          className="bg-gray-50 border border-gray-300 bg-slate-400 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5"
                          placeholder="Search"
                        />
                      </div>
                    </form>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base bg-slate-800 font-normal rounded-lg flex items-center p-2 hover:bg-slate-500 group"
                    >
                      <svg
                        className="w-6 h-6 text-slate-200 group-hover:text-slate-300 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                      <span className="ml-3 text-slate-200">Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      className="text-base bg-slate-800 font-normal rounded-lg flex items-center p-2 hover:bg-slate-500 group"
                    >
                      <svg
                        className="w-6 h-6 text-slate-200 flex-shrink-0 group-hover:text-slate-300 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                      </svg>
                      <span className="ml-3 flex-1 whitespace-nowrap text-slate-200 group-hover:text-slate-300">
                        Kanban
                      </span>
                      <span className="bg-gray-200 text-gray-800 ml-3 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full">
                        Pro
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_blank"
                      className="text-base bg-slate-800 font-normal rounded-lg flex items-center p-2 hover:bg-slate-500 group"
                    >
                      <svg
                        className="w-6 h-6 text-slate-200 flex-shrink-0 group-hover:text-slate-300 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                        <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                      </svg>
                      <span className="ml-3 flex-1 whitespace-nowrap text-slate-200 group-hover:text-slate-300">
                        Inbox
                      </span>
                      <span className="bg-gray-200 text-gray-800 ml-3 text-sm font-medium inline-flex items-center justify-center px-2 rounded-full">
                        Pro
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base bg-slate-800 font-normal rounded-lg flex items-center p-2 hover:bg-slate-500 group"
                    >
                      <svg
                        className="w-6 h-6 text-slate-200 flex-shrink-0 group-hover:text-slate-300 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                      </svg>
                      <span className="ml-3 flex-1 whitespace-nowrap text-slate-200 group-hover:text-slate-200">
                        Users
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base bg-slate-800 font-normal rounded-lg flex items-center p-2 hover:bg-slate-500 group"
                    >
                      <svg
                        className="w-6 h-6 text-slate-200 flex-shrink-0 group-hover:text-slate-300 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"></path>
                      </svg>
                      <span className="ml-3 flex-1 whitespace-nowrap text-slate-200 group-hover:text-slate-200">
                        Products
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base bg-slate-800 font-normal rounded-lg flex items-center p-2 hover:bg-slate-500 group"
                    >
                      <svg
                        className="w-6 h-6 text-slate-200 flex-shrink-0 group-hover:text-slate-300 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"></path>
                      </svg>
                      <span className="ml-3 flex-1 whitespace-nowrap text-slate-200 group-hover:text-slate-200">
                        Sign In
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base bg-slate-800 font-normal rounded-lg flex items-center p-2 hover:bg-slate-500 group"
                    >
                      <svg
                        className="w-6 h-6 text-slate-200 flex-shrink-0 group-hover:text-slate-300 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"></path>
                      </svg>
                      <span className="ml-3 flex-1 whitespace-nowrap text-slate-200 group-hover:text-slate-200s">
                        Sign Up
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="space-y-2 pt-2">
                  <a
                    href="#"
                    className="text-base text-slate-200 font-normal rounded-lg hover:bg-slate-800 group transition duration-75 flex items-center p-2"
                  >
                    <svg
                      className="w-5 h-5 text-slate-200 flex-shrink-0 group-hover:text-slate-300 transition duration-75"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="gem"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"
                      ></path>
                    </svg>
                    <span className="ml-4">Upgrade to Pro</span>
                  </a>
                  <a
                    href="documentation"
                    target="_blank"
                    className="text-base text-slate-200 font-normal rounded-lg hover:bg-slate-800 group transition duration-75 flex items-center p-2"
                  >
                    <svg
                      className="w-6 h-6 text-slate-200 flex-shrink-0 group-hover:text-slate-300 transition duration-75"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                      <path d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"></path>
                    </svg>
                    <span className="ml-3">Documentation</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-base text-slate-200 font-normal rounded-lg hover:bg-slate-800 group transition duration-75 flex items-center p-2"
                  >
                    <svg
                      className="w-6 h-6 text-slate-200 flex-shrink-0 group-hover:text-slate-300 transition duration-75"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                    </svg>
                    <span className="ml-3">Components</span>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-base text-slate-200 font-normal rounded-lg hover:bg-slate-800 group transition duration-75 flex items-center p-2"
                  >
                    <svg
                      className="w-6 h-6 text-slate-200 flex-shrink-0 group-hover:text-slate-300 transition duration-75"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <span className="ml-3">Help</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div
          className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
          id="sidebarBackdrop"
        ></div>
        <div
          id="main-content"
          className="h-full w-full bg-slate-700 relative overflow-y-auto lg:ml-64"
        >
          <main>
            <div className="pt-6 px-4">
             <LiveTradingApp/>
              {/* --------------------- Payment ---------------------------- */}
              <Link to="payment">
                <button
                  type="button"
                  className="text-slate-900 bg-green-500 hover:bg-green-900 hover:text-slate-200 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 mr-2 -ml-1 w-7"
                    viewBox="0 0 601 360"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M359.01 179.504C359.01 278.647 278.639 359.004 179.5 359.004C80.361 359.004 0 278.643 0 179.504C0 80.3709 80.362 0.00390625 179.5 0.00390625C278.637 0.00390625 359.01 80.3749 359.01 179.504Z"
                      fill="#D9222A"
                    />
                    <path
                      d="M420.489 0C374.11 0 331.846 17.596 299.989 46.467C293.499 52.356 287.441 58.704 281.864 65.463H318.131C323.096 71.5 327.667 77.85 331.816 84.475H268.181C264.354 90.597 260.9 96.944 257.839 103.483H342.152C345.046 109.668 347.583 116.013 349.753 122.487H250.24C248.15 128.721 246.408 135.067 245.023 141.495H354.963C357.652 153.985 359.008 166.726 359.005 179.503C359.005 199.438 355.751 218.615 349.751 236.524H250.238C252.402 243.001 254.938 249.348 257.834 255.532H342.15C339.087 262.073 335.631 268.421 331.803 274.545H268.178C272.325 281.165 276.897 287.511 281.863 293.541H318.122C312.552 300.313 306.492 306.668 299.992 312.554C331.849 341.42 374.109 359.008 420.492 359.008C519.631 359.008 600.002 278.647 600.002 179.508C600.002 80.379 519.631 0.00799561 420.492 0.00799561"
                      fill="#EE9F2D"
                    />
                    <path
                      d="M576.07 279.564C576.07 276.365 578.662 273.763 581.866 273.763C585.07 273.763 587.662 276.365 587.662 279.564C587.662 282.763 585.07 285.365 581.866 285.365C578.662 285.365 576.07 282.763 576.07 279.564ZM581.866 283.972C584.3 283.971 586.273 281.998 586.274 279.564C586.274 277.132 584.303 275.162 581.872 275.16H581.866C579.437 275.157 577.466 277.123 577.462 279.551V279.565C577.46 281.998 579.43 283.971 581.862 283.973C581.863 283.972 581.865 283.972 581.866 283.972V283.972ZM581.083 282.112H579.896V277.016H582.045C582.495 277.016 582.953 277.016 583.35 277.27C583.763 277.549 583.996 278.041 583.996 278.549C583.996 279.12 583.658 279.653 583.112 279.861L584.05 282.111H582.735L581.956 280.094H581.085L581.083 282.112V282.112ZM581.083 279.222H581.741C581.987 279.222 582.246 279.243 582.467 279.122C582.662 278.997 582.763 278.763 582.763 278.538C582.758 278.329 582.651 278.136 582.475 278.02C582.268 277.891 581.939 277.919 581.717 277.919H581.083V279.222ZM137.583 199.159C135.537 198.921 134.638 198.858 133.233 198.858C122.187 198.858 116.595 202.645 116.595 210.126C116.595 214.737 119.324 217.671 123.582 217.671C131.521 217.671 137.241 210.112 137.583 199.159V199.159ZM151.754 232.155H135.608L135.979 224.479C131.053 230.544 124.483 233.428 115.553 233.428C104.99 233.428 97.7492 225.178 97.7492 213.199C97.7492 195.175 110.345 184.658 131.966 184.658C134.174 184.658 137.008 184.857 139.907 185.228C140.511 182.787 140.67 181.74 140.67 180.427C140.67 175.519 137.274 173.69 128.17 173.69C118.637 173.582 110.774 175.961 107.545 177.023C107.749 175.794 110.245 160.364 110.245 160.364C119.957 157.518 126.361 156.447 133.57 156.447C150.302 156.447 159.166 163.96 159.149 178.159C159.182 181.964 158.552 186.659 157.57 192.83C155.879 203.564 152.25 226.551 151.754 232.155V232.155ZM89.5962 232.155H70.1092L81.2712 162.158L56.3462 232.155H43.0672L41.4252 162.558L29.6922 232.155H11.4502L26.6872 141.099H54.7082L56.4082 192.067L73.5002 141.099H104.667L89.5962 232.155ZM444.566 199.159C442.529 198.921 441.625 198.858 440.224 198.858C429.183 198.858 423.59 202.645 423.59 210.126C423.59 214.737 426.316 217.671 430.573 217.671C438.513 217.671 444.237 210.112 444.566 199.159V199.159ZM458.75 232.155H442.604L442.97 224.479C438.044 230.544 431.47 233.428 422.548 233.428C411.983 233.428 404.748 225.178 404.748 213.199C404.748 195.175 417.336 184.658 438.961 184.658C441.169 184.658 443.998 184.857 446.895 185.228C447.499 182.787 447.658 181.74 447.658 180.427C447.658 175.519 444.266 173.69 435.162 173.69C425.629 173.582 417.775 175.961 414.533 177.023C414.737 175.794 417.242 160.364 417.242 160.364C426.954 157.518 433.354 156.447 440.555 156.447C457.295 156.447 466.159 163.96 466.142 178.159C466.174 181.964 465.545 186.659 464.563 192.83C462.879 203.564 459.242 226.551 458.75 232.155V232.155ZM238.36 231.03C233.027 232.709 228.869 233.428 224.36 233.428C214.398 233.428 208.961 227.703 208.961 217.161C208.819 213.89 210.394 205.281 211.632 197.424C212.757 190.507 220.081 146.895 220.081 146.895H239.452L237.189 158.103H248.888L246.246 175.899H234.504C232.254 189.982 229.05 207.524 229.013 209.849C229.013 213.665 231.05 215.332 235.684 215.332C237.905 215.332 239.624 215.105 240.938 214.632L238.36 231.03V231.03ZM297.752 230.43C291.098 232.464 284.677 233.447 277.873 233.43C256.189 233.409 244.886 222.084 244.886 200.398C244.886 175.085 259.266 156.451 278.785 156.451C294.756 156.451 304.956 166.884 304.956 183.247C304.956 188.676 304.256 193.976 302.568 201.459H263.994C262.689 212.2 269.564 216.676 280.831 216.676C287.766 216.676 294.019 215.247 300.973 212.013L297.752 230.43V230.43ZM286.864 186.53C286.971 184.987 288.919 173.313 277.851 173.313C271.68 173.313 267.268 178.017 265.471 186.53H286.864V186.53ZM163.444 181.513C163.444 190.88 167.986 197.339 178.286 202.189C186.178 205.898 187.398 206.999 187.398 210.359C187.398 214.976 183.919 217.06 176.207 217.06C170.394 217.06 164.986 216.152 158.749 214.138C158.749 214.138 156.186 230.459 156.069 231.24C160.499 232.207 164.449 233.101 176.348 233.43C196.911 233.43 206.407 225.601 206.407 208.68C206.407 198.505 202.431 192.534 192.67 188.046C184.499 184.296 183.562 183.459 183.562 180.001C183.562 175.997 186.799 173.955 193.099 173.955C196.924 173.955 202.149 174.363 207.099 175.067L209.874 157.892C204.828 157.092 197.178 156.45 192.724 156.45C170.923 156.451 163.377 167.838 163.444 181.513V181.513ZM392.534 158.397C397.946 158.397 402.992 159.818 409.946 163.318L413.134 143.555C410.28 142.434 400.23 135.855 391.717 135.855C378.676 135.855 367.652 142.326 359.897 153.005C348.588 149.259 343.939 156.83 338.24 164.372L333.177 165.551C333.56 163.068 333.906 160.601 333.789 158.105H315.893C313.448 181.022 309.115 204.233 305.722 227.18L304.838 232.156H324.334C327.588 211.013 329.371 197.476 330.455 188.314L337.796 184.23C338.893 180.152 342.325 178.772 349.213 178.939C348.287 183.947 347.824 189.03 347.83 194.123C347.83 218.348 360.9 233.431 381.88 233.431C387.284 233.431 391.921 232.719 399.101 230.773L402.531 210.014C396.073 213.195 390.772 214.691 385.972 214.691C374.643 214.691 367.788 206.328 367.788 192.506C367.788 172.455 377.984 158.397 392.534 158.397"
                      fill="black"
                    />
                    <path
                      d="M95.2095 226.744H75.7184L86.8895 156.756L61.9635 226.744H48.6805L47.0385 157.156L35.3055 226.744H17.0645L32.3015 135.702H60.3224L61.1104 192.064L80.0145 135.702H110.281L95.2095 226.744Z"
                      fill="white"
                    />
                    <path
                      d="M557.52 141.104L553.199 167.413C547.87 160.4 542.145 155.325 534.587 155.325C524.754 155.325 515.804 162.78 509.945 173.75C501.787 172.058 493.348 169.187 493.348 169.187L493.344 169.254C494.002 163.12 494.265 159.379 494.206 158.108H476.306C473.868 181.025 469.535 204.236 466.149 227.183L465.256 232.159H484.748C487.381 215.063 489.396 200.868 490.881 189.608C497.539 183.592 500.873 178.342 507.602 178.692C504.623 185.897 502.877 194.195 502.877 202.709C502.877 221.222 512.243 233.434 526.41 233.434C533.552 233.434 539.031 230.972 544.377 225.263L543.464 232.147H561.899L576.741 141.105L557.52 141.104V141.104ZM533.149 215.045C526.515 215.045 523.166 210.137 523.166 200.449C523.166 185.894 529.437 175.574 538.278 175.574C544.973 175.574 548.598 180.678 548.598 190.083C548.599 204.762 542.228 215.045 533.149 215.045V215.045Z"
                      fill="black"
                    />
                    <path
                      d="M143.19 193.764C141.148 193.528 140.244 193.465 138.844 193.465C127.798 193.465 122.21 197.252 122.21 204.731C122.21 209.335 124.939 212.278 129.189 212.278C137.136 212.277 142.857 204.719 143.19 193.764V193.764ZM157.368 226.748H141.222L141.589 219.085C136.668 225.139 130.089 228.035 121.168 228.035C110.601 228.035 103.363 219.785 103.363 207.806C103.363 189.774 115.955 179.264 137.58 179.264C139.788 179.264 142.622 179.464 145.518 179.835C146.122 177.394 146.281 176.348 146.281 175.027C146.281 170.118 142.889 168.298 133.785 168.298C124.248 168.19 116.389 170.569 113.156 171.619C113.36 170.394 115.856 154.982 115.856 154.982C125.564 152.124 131.976 151.053 139.176 151.053C155.913 151.053 164.78 158.57 164.764 172.757C164.793 176.578 164.16 181.27 163.18 187.432C161.493 198.156 157.861 221.156 157.368 226.748V226.748ZM418.748 138.156L415.557 157.923C408.607 154.427 403.557 153.003 398.15 153.003C383.599 153.003 373.4 167.061 373.4 187.109C373.4 200.93 380.257 209.29 391.584 209.29C396.384 209.29 401.68 207.798 408.138 204.615L404.717 225.365C397.533 227.322 392.901 228.035 387.492 228.035C366.515 228.035 353.441 212.951 353.441 188.726C353.441 156.176 371.5 133.426 397.329 133.426C405.836 133.427 415.89 137.035 418.748 138.156V138.156ZM450.191 193.764C448.15 193.528 447.25 193.465 445.844 193.465C434.803 193.465 429.211 197.252 429.211 204.731C429.211 209.335 431.94 212.278 436.194 212.278C444.132 212.277 449.857 204.719 450.191 193.764V193.764ZM464.369 226.748H448.219L448.59 219.085C443.665 225.139 437.09 228.035 428.169 228.035C417.606 228.035 410.365 219.785 410.365 207.806C410.365 189.774 422.961 179.264 444.577 179.264C446.79 179.264 449.619 179.464 452.518 179.835C453.119 177.394 453.281 176.348 453.281 175.027C453.281 170.118 449.888 168.298 440.786 168.298C431.253 168.19 423.39 170.569 420.156 171.619C420.36 170.394 422.86 154.982 422.86 154.982C432.569 152.124 438.976 151.053 446.176 151.053C462.917 151.053 471.78 158.57 471.759 172.757C471.792 176.578 471.163 181.27 470.18 187.432C468.498 198.156 464.857 221.156 464.369 226.748ZM243.979 225.627C238.641 227.306 234.483 228.035 229.979 228.035C220.017 228.035 214.58 222.309 214.58 211.767C214.442 208.488 216.018 199.887 217.255 192.031C218.375 185.105 225.7 141.497 225.7 141.497H245.068L242.808 152.709H252.749L250.103 170.497H240.128C237.878 184.589 234.665 202.117 234.632 204.447C234.632 208.277 236.673 209.929 241.303 209.929C243.524 209.929 245.241 209.713 246.557 209.238L243.979 225.627V225.627ZM303.37 225.035C296.72 227.068 290.291 228.047 283.491 228.035C261.806 228.014 250.504 216.689 250.504 195.002C250.504 169.681 264.883 151.052 284.403 151.052C300.374 151.052 310.574 161.481 310.574 177.852C310.574 183.286 309.874 188.585 308.19 196.064H269.616C268.31 206.805 275.185 211.286 286.453 211.286C293.383 211.286 299.641 209.851 306.591 206.609L303.37 225.035V225.035ZM292.479 181.123C292.595 179.585 294.539 167.906 283.466 167.906C277.299 167.906 272.887 172.623 271.091 181.123H292.479ZM169.059 176.118C169.059 185.485 173.601 191.936 183.901 196.793C191.793 200.502 193.013 201.605 193.013 204.965C193.013 209.581 189.53 211.664 181.825 211.664C176.009 211.664 170.6 210.756 164.358 208.743C164.358 208.743 161.804 225.064 161.687 225.844C166.108 226.811 170.062 227.694 181.962 228.035C202.528 228.035 212.021 220.206 212.021 203.289C212.021 193.109 208.05 187.139 198.284 182.652C190.117 178.893 189.171 178.068 189.171 174.606C189.171 170.606 192.417 168.547 198.713 168.547C202.534 168.547 207.759 168.968 212.717 169.672L215.488 152.493C210.446 151.693 202.796 151.052 198.342 151.052C176.538 151.052 168.996 162.431 169.059 176.118V176.118ZM567.509 226.748H549.071L549.988 219.855C544.641 225.572 539.163 228.035 532.02 228.035C517.854 228.035 508.492 215.822 508.492 197.309C508.492 172.679 523.013 151.917 540.2 151.917C547.759 151.917 553.479 155.004 558.804 162.013L563.129 135.705H582.35L567.509 226.748V226.748ZM538.763 209.639C547.838 209.639 554.213 199.356 554.213 184.686C554.213 175.281 550.584 170.177 543.888 170.177C535.051 170.177 528.773 180.492 528.773 195.052C528.772 204.738 532.13 209.639 538.763 209.639ZM481.921 152.71C479.48 175.627 475.148 198.84 471.759 221.773L470.867 226.749H490.358C497.33 181.474 499.016 172.632 509.946 173.74C511.688 164.473 514.928 156.357 517.345 152.261C509.182 150.561 504.624 155.174 498.657 163.936C499.128 160.148 499.99 156.469 499.819 152.711L481.921 152.71V152.71ZM321.501 152.71C319.055 175.627 314.722 198.84 311.334 221.773L310.446 226.749H329.946C336.909 181.474 338.592 172.632 349.516 173.74C351.266 164.473 354.507 156.357 356.915 152.261C348.761 150.561 344.198 155.174 338.236 163.936C338.707 160.148 339.56 156.469 339.398 152.711L321.501 152.71V152.71ZM576.071 220.951C576.067 217.752 578.657 215.156 581.855 215.152H581.867C585.064 215.148 587.66 217.738 587.663 220.935V220.951C587.662 224.152 585.068 226.746 581.867 226.748C578.666 226.746 576.072 224.152 576.071 220.951V220.951ZM581.867 225.356C584.298 225.358 586.269 223.387 586.27 220.957V220.953C586.273 218.52 584.302 216.547 581.871 216.545H581.867C579.432 216.546 577.46 218.519 577.459 220.953C577.461 223.385 579.434 225.356 581.867 225.356ZM581.083 223.485H579.895V218.403H582.048C582.494 218.403 582.957 218.412 583.344 218.657C583.761 218.94 583.998 219.424 583.998 219.931C583.998 220.506 583.661 221.043 583.11 221.248L584.051 223.484H582.731L581.952 221.475H581.082L581.083 223.485ZM581.083 220.606H581.736C581.982 220.606 582.249 220.625 582.465 220.506C582.661 220.381 582.761 220.145 582.761 219.918C582.752 219.708 582.647 219.514 582.474 219.395C582.27 219.278 581.932 219.311 581.711 219.311H581.082L581.083 220.606V220.606Z"
                      fill="white"
                    />
                  </svg>
                  Pay with MasterCard
                </button>
              </Link>
              {/* --------------------- Payment ---------------------------- */}
              <div className="">
                
                <div className="bg-slate-700 shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                  <h3 className="text-xl leading-none font-bold text-slate-200 mb-10">
                    Acquisition Overview
                  </h3>
                  <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full bg-slate-700 border-collapse">
                      <thead>
                        <tr>
                          <th className="px-4 bg-slate-800 text-slate-200 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                            Top Channels
                          </th>
                          <th className="px-4 bg-slate-800 text-slate-200 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                            Users
                          </th>
                          <th className="px-4 bg-slate-800 text-slate-200 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="text-slate-200">
                          <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                            Organic Search
                          </th>
                          <td className="border-t-0 px-4 align-middle text-xs font-medium text-slate-200 whitespace-nowrap p-4">
                            5,649
                          </td>
                          <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                            <div className="flex items-center">
                              <span className="mr-2 text-xs font-medium text-slate-200">
                                30%
                              </span>
                              <div className="relative w-full">
                                <div className="w-full bg-gray-200 rounded-sm h-2">
                                  <div className="bg-cyan-600 h-2 rounded-sm"></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="text-slate-200">
                          <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                            Referral
                          </th>
                          <td className="border-t-0 px-4 align-middle text-xs font-medium text-slate-200 whitespace-nowrap p-4">
                            4,025
                          </td>
                          <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                            <div className="flex items-center">
                              <span className="mr-2 text-xs font-medium">
                                24%
                              </span>
                              <div className="relative w-full">
                                <div className="w-full bg-gray-200 rounded-sm h-2">
                                  <div className="bg-orange-300 h-2 rounded-sm"></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="text-slate-200">
                          <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                            Direct
                          </th>
                          <td className="border-t-0 px-4 align-middle text-xs font-medium text-slate-200 whitespace-nowrap p-4">
                            3,105
                          </td>
                          <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                            <div className="flex items-center">
                              <span className="mr-2 text-xs font-medium">
                                18%
                              </span>
                              <div className="relative w-full">
                                <div className="w-full bg-gray-200 rounded-sm h-2">
                                  <div className="bg-teal-400 h-2 rounded-sm"></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="text-slate-200">
                          <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                            Social
                          </th>
                          <td className="border-t-0 px-4 align-middle text-xs font-medium text-slate-200 whitespace-nowrap p-4">
                            1251
                          </td>
                          <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                            <div className="flex items-center">
                              <span className="mr-2 text-xs font-medium">
                                12%
                              </span>
                              <div className="relative w-full">
                                <div className="w-full bg-gray-200 rounded-sm h-2">
                                  <div className="bg-pink-600 h-2 rounded-sm"></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="text-slate-200">
                          <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                            Other
                          </th>
                          <td className="border-t-0 px-4 align-middle text-xs font-medium text-slate-200 whitespace-nowrap p-4">
                            734
                          </td>
                          <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                            <div className="flex items-center">
                              <span className="mr-2 text-xs font-medium">
                                9%
                              </span>
                              <div className="relative w-full">
                                <div className="w-full bg-gray-200 rounded-sm h-2">
                                  <div className="bg-indigo-600 h-2 rounded-sm"></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="text-slate-200">
                          <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">
                            Email
                          </th>
                          <td className="border-t-0 align-middle text-xs font-medium text-slate-200 whitespace-nowrap p-4 pb-0">
                            456
                          </td>
                          <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                            <div className="flex items-center">
                              <span className="mr-2 text-xs font-medium">
                                7%
                              </span>
                              <div className="relative w-full">
                                <div className="w-full bg-gray-200 rounded-sm h-2">
                                  <div className="bg-purple-500 h-2 rounded-sm"></div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/* <footer className="bg-dark md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
            <ul className="flex items-center flex-wrap mb-6 md:mb-0">
              <li>
                <a
                  href="#"
                  className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                >
                  Terms and conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                >
                  Licensing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-normal text-gray-500 hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex sm:justify-center space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
                </svg>
              </a>
            </div>
          </footer> */}
          {/* <p className="text-center text-sm text-gray-500 my-10">
            &copy; 2019-2021{" "}
            <a href="#" className="hover:underline" target="_blank">
              Themesberg
            </a>
            . All rights reserved.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
