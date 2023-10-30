import React, { useEffect, useState } from "react";
import axios from "axios";

const Buy = (props) => {
  // console.log(props)
  const [priceValue, setPriceValue] = useState(props.closeData);
  const [symbolValue, setSymbolValue] = useState(props.symbol);
  const [user, setUser] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [stockName, setStockName] = useState('');
  const [stockSymbol, setStockSymbol] = useState('');
  const [price, setPrice] = useState('');
  const [Wallet, setWallet] = useState('');

  const token = localStorage.getItem("token");

  useEffect(() => {
    setPriceValue(props.closeData);
    setSymbolValue(props.symbol);

    const fetchUserProfile = async () => {
      if (token) {
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
      }
    };

    fetchUserProfile();

  }, [props.closeData, props.symbol]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input validation
    // if (!stockName || !stockSymbol || isNaN(price) || price <= 0) {
    //   alert("Please fill in all required fields with valid values.");
    //   return;
    // }

    const requestBody = {
      stock_name: symbolValue,
      stock_symbol: symbolValue,
      user_wallet : Wallet,
      price: priceValue, // Ensure the price is a valid number
      quantity: quantity,
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/trade/buy-shares/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers as needed
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        console.log('Request was successful');
        window.location.href = '/dashboard/wallet';
      } else {
        console.error('Request failed with status:', response.status);
        console.error('Response text:', await response.text());
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <div className="font-manrope flex h-screen w-full items-center justify-center">
              <div className="mx-auto box-border w-[365px] border bg-white p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#64748B]">Buy Your Stock</span>
                  <div className="cursor-pointer border rounded-[4px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#64748B]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="font-semibold">
                    How much would you like to send?
                  </div>
                  <div>
                    <input
                      className="mt-3 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                      type="text"
                      placeholder="Stock name"
                      value={symbolValue}
                      
                      // onChange={(e) => setStockName(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      className="mt-3 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                      type="text"
                      placeholder="Stock Symbol"
                      value={symbolValue}
                      onChange={(e) => setStockSymbol(e.target.value)}
                     
                      // readOnly 
                    />
                    <input
                      className="mt-3 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                      type="text"
                      placeholder="Wallet"
                      // value={user ? user.email : "Your wallet is not available yet"}
                      // readOnly 
                      onChange={(e) => setWallet(e.target.value)}
                    />
                    <input
                      className="mt-3 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                      type="number"
                      placeholder="Price"
                      value={priceValue}
                      onChange={(e) => setPrice(e.target.value)}
                      // value={priceValue}
                      // readOnly // Add the readOnly attribute
                    />
                    <input
                      className="mt-3 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                      type="number"
                      placeholder="Quantity"
                      name="quantity" // Add the name attribute here
                      min="0" // Set the minimum value as 0
                      // value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <div className="font-semibold">From</div>
                  <div className="mt-2">
                    <div className="flex w-full items-center justify-between bg-neutral-100 p-3 rounded-[4px]">
                      <div className="flex items-center gap-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-[#299D37]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-semibold">Checking</span>
                      </div>

                      <div className="flex items-center gap-x-2">
                        <div className="text-[#64748B]">
                          card ending in 6678
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 cursor-pointer"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex justify-between">
                    <span className="font-semibold text-[#191D23]">
                      Receiving
                    </span>
                    <div className="flex cursor-pointer items-center gap-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="font-semibold text-green-700">
                        Add recipient
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-[10px] bg-neutral-100 p-3 mt-2 rounded-[4px]">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1507019403270-cca502add9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt=""
                    />
                    <div>
                      <div className="font-semibold">Kathy Miller</div>
                      <div className="text-[#64748B]">@KittyKatmills</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button type="submit">
                    <div className="w-full cursor-pointer rounded-[4px] bg-green-700 px-3 py-[6px] text-center font-semibold text-white">
                      Buy
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Buy;
