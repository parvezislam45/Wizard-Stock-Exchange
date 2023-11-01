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
  const [userShares, setUserShares] = useState([]);
  const [wallet, setWallet] = useState([]);
  //currently this state set value static.
  //Mr.parvez will set it dhynamically.please completed in the morning.
  const [userWalletId, setUserWalletId] = useState(0);

  const [inputBalance, setInputBalance] = useState("");
  const stripePromise = loadStripe(
    "pk_test_51O1C3WIXrs8l40b4FeFgjHmMpDjLoVo4IzgphFZhkZJCR6pjRKXdUf78VzXPpTPVEfEwSG7VoAKGxN4Z6pKmOvMl000km5hTLd"
  );

  const handleChangeInput = (e) => {
    setInputBalance(e.target.value);
  };
  //this is add balance
  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      amount: inputBalance,
    };

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/trade/add-balance/${userWalletId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Add any other headers as needed
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        console.log("Request was successful");
        window.location.href = "/dashboard/wallet";
      } else {
        console.error("Request failed with status:", response.status);
        console.error("Response text:", await response.text());
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  //fetch buy shares in trade
  useEffect(() => {
    const url = "http://127.0.0.1:8000/trade/buy-shares/";

    axios
      .get(url)
      .then((response) => {
        setUserShares(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {}, [userShares]);

  //fetch wallets in trade
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

    // console.log(wallet)
  }, []);

  //fetch user profile in trade
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

  useEffect(() => {
    if (user) {
      const filtered = wallet.filter((wall) => wall.user_email === user.email);
      if (filtered.length > 0) {
        const id = filtered[0].user;
        setUserWalletId(id);
        console.log(filtered[0].user); // Update state with the filtered data
      }
    }
  }, [user, wallet]);

  // if (user) {
  //   const filtered = wallet.filter(wall => wall.user_email === user.email);
  //   let id = filtered[0].user
  //   setUserWalletId(id)
  //   console.log(filtered[0].user)// Update state with the filtered data
  // }
  // {wallet.map((wall) => {
  //   if (user && wall.user_email === user.email) {
  //     userWalletId = wall.id
  //   }})}

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
          {wallet.map((wall) => {
            if (user && wall.user_email === user.email) {
              // console.log(wall.user)
              return (
                <div
                  key={wall.id}
                  className="grid grid-cols-1 mt-10 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
                >
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
                        <h3>Wallet Id : {wall.user}</h3>
                        <h3 className="text-center text-white text-lg">
                          Total Balance
                        </h3>
                        <div>
                          <h3 className="text-center text-white text-3xl mt-2 font-bold">
                            {wall.balance}
                          </h3>
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
                    <div className="absolute inset-0 bg-yellow-700  transition duration-300 ease-in-out">
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
                      <div key={wall.id} className="text-center mt-5">
                        <form onSubmit={handleSubmit}>
                          <button type="submit">
                            <div className="w-full btn btn-outline btn-secondary dark:bg-white cursor-pointer rounded-[4px] px-3 py-[6px] text-center font-semibold text-white">
                              Withdraw Balance
                            </div>
                          </button>
                        </form>
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
                    <div className="absolute inset-0 bg-yellow-700  transition duration-300 ease-in-out">
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
                      <div key={wall.id} className="text-center mt-5">
                        <form onSubmit={handleSubmit}>
                          <button type="submit">
                            <div className="w-full btn btn-outline btn-secondary dark:bg-white cursor-pointer rounded-[4px] bg-green-700 px-3 py-[6px] text-center font-semibold text-white">
                              Add Balance
                            </div>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
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
              </tr>
            </thead>
            <tbody>
              {userShares.map((wallet) => {
                if (user && wallet.user_email === user.email) {
                  console.log(wallet.id);
                  console.log(wallet.user);
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
