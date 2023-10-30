/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../Payment/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";

const Wallet = () => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");
  const [userWallets, setUserWallets] = useState([]);
  const [wallet, setWallet] = useState([]);
  const [inputBalance, setInputBalance] = useState("");
  const stripePromise = loadStripe(
    "pk_test_51O1C3WIXrs8l40b4FeFgjHmMpDjLoVo4IzgphFZhkZJCR6pjRKXdUf78VzXPpTPVEfEwSG7VoAKGxN4Z6pKmOvMl000km5hTLd"
  );

  const handleChangeInput = (e) => {
    setInputBalance(e.target.value);
  };

  const handleAddBalance = (walletId) => {
    const updatedWallets = wallet.map((wall) => {
      if (wall.id === walletId) {
        const newBalance = parseFloat(wall.balance) + parseFloat(inputBalance);
        return { ...wall, balance: newBalance };
      }
      return wall;
    });

    setWallet(updatedWallets);
    setInputBalance("");
    const url = `http://127.0.0.1:8000/trade/user-wallets/6`;
    console.log(url)
    axios
      .put(url, { balance: updatedWallets.find(w => w.id === walletId).balance })
      .then((response) => {
        // Handle success (you may want to add error handling too)
        console.log("Balance updated on the server");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  

  useEffect(() => {
    const url = "http://127.0.0.1:8000/trade/buy-shares/";

    axios
      .get(url)
      .then((response) => {
        setUserWallets(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {}, [userWallets]);

  useEffect(() => {
    const url = "http://127.0.0.1:8000/trade/user-wallets/";

    axios
      .get(url)
      .then((response) => {
        setWallet(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  console.log(wallet);
  useEffect(() => {}, [wallet]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/account/profile/",
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, []);

  const [MainUserWallets, setMainUserWallets] = useState([]);

  useEffect(() => {
    const url = "http://127.0.0.1:8000/trade/user-wallets/";

    axios
      .get(url)
      .then((response) => {
        setMainUserWallets(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {}, []);

  console.log(MainUserWallets);
  return (
    <div>
      <main className="relative z-0 flex-1 pb-8 px-6 bg-white mt-20">
        <div className="grid pb-10  mt-4 ">
          <div className="mb-2">
            <p className="text-lg font-semibold text-gray-400">Invoices</p>
          </div>
          <div className="grid grid-cols-12 gap-6 border-b-2 pb-5">
            <div className="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-8 xxl:col-span-8">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mt-3">
                <div className="p-4">
                  <p className="text-xl font-bold">RM 45,941</p>
                  <p className="text-xs font-semibold text-gray-400">Overdue</p>
                </div>
                <div className="p-4">
                  <p className="text-xl font-bold">RM 37,500</p>
                  <p className="text-xs font-semibold text-gray-400">
                    Total Outstanding
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-xl font-bold">RM 9,200</p>
                  <p className="text-xs font-semibold text-gray-400">
                    In Process
                  </p>
                </div>
                <div className=" p-4">
                  <p className="text-xl font-bold">RM 5,700</p>
                  <p className="text-xs font-semibold text-gray-400">
                    Paid Today
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 xxl:col-span-4">
              <div className="p-4">
                <p className="text-sm text-gray-400">Outstanding Revenue</p>
                <div className="shadow w-full bg-gray-100 mt-2">
                  <div className="bg-indigo-600 text-xs leading-none py-1 text-center text-white"></div>
                </div>
                <p className="text-xs font-semibold text-gray-400 mt-2">
                  RM 45,941 Overdue
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-10 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <div
              className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
              style={{
                backgroundImage:
                  "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f868ecef-4b4a-4ddf-8239-83b2568b3a6b/de7hhu3-3eae646a-9b2e-4e42-84a4-532bff43f397.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg8OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NjhlY2VmLTRiNGEtNGRkZi04MjM5LTgzYjI1NjhiM2E2YlwvZGU3aGh1My0zZWFlNjQ2YS05YjJlLTRlNDItODRhNC01MzJiZmY0M2YzOTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0h-BS0osJSrsb1iws4-KE43bUXHMFvu5PvNfoaoi8o')",
              }}
            >
              <div className="absolute inset-0 bg-pink-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
              <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
                <div>
                  <h3 className="text-center text-white text-lg">
                    Total Balance
                  </h3>
                  {wallet.map((wall) => {
                    if (user && wall.user_email === user.email) {
                      return (
                        <div key={wall.id}>
                          <h3 className="text-center text-white text-3xl mt-2 font-bold">
                            {wall.balance}
                          </h3>
                        </div>
                      );
                    }
                  })}
                  <div></div>
                  <div className="flex space-x-4 mt-4">
                    <button
                      className="block uppercase mx-auto shadow bg-white text-indigo-600 focus:shadow-outline 
                                  focus:outline-none text-xs py-3 px-4 rounded font-bold"
                    >
                      Transfer
                    </button>
                    <button
                      className="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline 
                                   focus:outline-none text-white text-xs py-3 px-4 rounded font-bold"
                    >
                      Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
              style={{
                backgroundImage:
                  "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f868ecef-4b4a-4ddf-8239-83b2568b3a6b/de7hhu3-3eae646a-9b2e-4e42-84a4-532bff43f397.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NjhlY2VmLTRiNGEtNGRkZi04MjM5LTgzYjI1NjhiM2E2YlwvZGU3aGh1My0zZWFlNjQ2YS05YjJlLTRlNDItODRhNC01MzJiZmY0M2YzOTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0h-BS0osJSrsb1iws4-KE43bUXHMFvu5PvNfoaoi8o')",
              }}
            >
              <div className="absolute inset-0 bg-yellow-600  transition duration-300 ease-in-out">
                <div>
                  <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                  </Elements>
                </div>

                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  value={inputBalance}
                  onChange={handleChangeInput}
                />
                {wallet.map((wall) => {
                  if (user && wall.user_email === user.email) {
                    return (
                      <div key={wall.id} className="text-center mt-5">
                        <button
                          className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-md px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-green-700 dark:focus:ring-blue-800"
                          onClick={() => handleAddBalance(wall.id)}
                        >
                          Add Balance
                        </button>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-md font-bold">
                  Stock Name
                </th>
                <th scope="col" className="px-6 py-3 text-md font-bold">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3 text-md font-bold">
                  Buying Price
                </th>
                <th scope="col" className="px-6 py-3 text-md font-bold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {userWallets.map((wallet) => {
                if (user && wallet.user_email === user.email) {
                  console.log(wallet.id);
                  console.log(wallet.user)
                  return (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover-bg-gray-600"
                      key={wallet.id}
                    >
                      <td className="px-6 py-4 font-bold text-md text-gray-900 dark:text-white">
                        {wallet.stock_name}
                      </td>
                      <td className="px-6 py-4 font-semibold text-md text-gray-900 dark:text-white">
                        {wallet.quantity}
                      </td>
                      <td className="px-6 py-4 font-semibold text-md text-gray-900 dark:text-white">
                      {wallet.price}
                      </td>
                      <td className="px-6 py-4 text-md font-semibold text-gray-900 dark:text-white">
                        <Link to="/dashboard"><button className="btn btn-outline btn-secondary text-md rounded-full px-14 py-1">SELL</button></Link>
                    
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
