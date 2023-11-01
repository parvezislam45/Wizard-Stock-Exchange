
import LiveTradingApp from "../LiveData/LiveData";


const Dashboard = () => {
  
  return (
    <div>
      <div className="flex overflow-hidden bg-white pt-16">
        <aside
          id="sidebar"
          className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
          aria-label="Sidebar"
        >
          <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0 mt-8 ml-16">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex-1 px-3 bg-white divide-y space-y-1">
                <ul className="space-y-2 pb-2">
                  <li>
                    <a
                      href="dashboard"
                      className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                    >
                      <svg
                        className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                      <span className="ml-3">Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="documentation"
                      className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                    >
                      <svg
                        className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                      </svg>
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        Documentation
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="dashboard/wallet"
                      className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                    >
                      <svg
                        className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"></path>
                      </svg>
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        Wallet
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                    >
                      <svg
                        className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"></path>
                      </svg>
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        Login
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                    >
                      <svg
                        className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"></path>
                      </svg>
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        Sign Up
                      </span>
                    </a>
                  </li>
                </ul>
               
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
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        >
          <main>
            <div className="pt-6 px-4">
             <LiveTradingApp/>
              <div className="">
                
                <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                  <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">
                    Acquisition Overview
                  </h3>
                  <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                      <thead>
                        <tr>
                          <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                            Top Channels
                          </th>
                          <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                            Users
                          </th>
                          <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="text-gray-500">
                          <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                            Organic Search
                          </th>
                          <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                            5,649
                          </td>
                          <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                            <div className="flex items-center">
                              <span className="mr-2 text-xs font-medium">
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
                        <tr className="text-gray-500">
                          <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                            Referral
                          </th>
                          <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
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
                        <tr className="text-gray-500">
                          <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                            Direct
                          </th>
                          <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
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
                        <tr className="text-gray-500">
                          <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                            Social
                          </th>
                          <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
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
                        <tr className="text-gray-500">
                          <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                            Other
                          </th>
                          <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
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
                        <tr className="text-gray-500">
                          <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">
                            Email
                          </th>
                          <td className="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
