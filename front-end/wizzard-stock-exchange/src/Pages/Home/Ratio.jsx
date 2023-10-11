const Ratio = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
          <div className="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2">
            <div>
              <h1 className="mb-1 text-xl text-center font-bold tracking-wide uppercase">
                Market Comparison
              </h1>

              <div
                className="flex justify-center items-center rounded-md shadow-sm mt-5"
                role="group"
              >
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-yellow-600 border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  DAVID
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-sky-700 border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  SAYEED
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-blue-900 border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  RASEL
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-pink-500 border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  JISAN
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-green-600 border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  HOSSAIN
                </button>
              </div>

              <div className="relative overflow-x-auto mt-6">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-center">
                        Today
                      </th>
                      <th scope="col" className="px-6 py-3"></th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Yesterday
                      </th>
                      <th scope="col" className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Index
                      </th>
                      <td className="px-6 py-4">1035.7687</td>
                      <td className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                        Index
                      </td>
                      <td className="px-6 py-4">3465.7623</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        %
                      </th>
                      <td className="px-6 py-4">-0.7634</td>
                      <td className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                        %
                      </td>
                      <td className="px-6 py-4">0.0076</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Trade
                      </th>
                      <td className="px-6 py-4">3215</td>
                      <td className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                        Trade
                      </td>
                      <td className="px-6 py-4">5423</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Volume
                      </th>
                      <td className="px-6 py-4">3876543</td>
                      <td className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                        Volume
                      </td>
                      <td className="px-6 py-4">4321654</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Value
                      </th>
                      <td className="px-6 py-4">143,765,345</td>
                      <td className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                        Value
                      </td>
                      <td className="px-6 py-4">176,543,8754</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <h1 className="mb-1 text-xl text-center font-bold tracking-wide uppercase">
                MARKET MOVER
              </h1>
              <div
                className="flex justify-center items-center rounded-md shadow-sm mt-5"
                role="group"
              >
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-yellow-600 border border-gray-900 rounded-l-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  BUY VOLUME
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-sky-700 border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  BUY VALUE
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-blue-900 border border-gray-900 rounded-r-md hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  BUY TRADE
                </button>
                
              </div>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-6">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Company
                    </th>
                    <th scope="col" className="px-6 py-3">
                      LTP
                    </th>
                    <th scope="col" className="px-6 py-3">
                      High
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Low
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      David Trade
                    </th>
                    <td className="px-4 py-4">590.00</td>
                    <td className="px-4 py-4">590.00</td>
                    <td className="px-4 py-4">590.00</td>
                    <td className="px-4 py-4">324567365.00</td>
                  </tr>
                  <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Sayeed Co.
                    </th>
                    <td className="px-4 py-4">170.00</td>
                    <td className="px-4 py-4">170.00</td>
                    <td className="px-4 py-4">170.00</td>
                    <td className="px-4 py-4">65432785.87</td>
                  </tr>

                  <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Zisan Trade
                    </th>
                    <td className="px-4 py-4">270.00</td>
                    <td className="px-4 py-4">270.00</td>
                    <td className="px-4 py-4">220.00</td>
                    <td className="px-4 py-4">875345765.78</td>
                  </tr>
                  <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Rasel Ltd.
                    </th>
                    <td className="px-4 py-4">170.00</td>
                    <td className="px-4 py-4">170.00</td>
                    <td className="px-4 py-4">170.00</td>
                    <td className="px-4 py-4">98754379.65</td>
                  </tr>
                  <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Hossain Co.
                    </th>
                    <td className="px-4 py-4">190.00</td>
                    <td className="px-4 py-4">190.00</td>
                    <td className="px-4 py-4">190.00</td>
                    <td className="px-4 py-4">76424885.0986</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratio;
