import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Buy = (props) => {
  // console.log(props)
  const [priceValue, setPriceValue] = useState(props.closeData);
  const [symbolValue, setSymbolValue] = useState(props.symbol);
  const [user, setUser] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [stockName, setStockName] = useState("");
  const [stockSymbol, setStockSymbol] = useState("");
  const [price, setPrice] = useState("");
  const [Wallet, setWallet] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    setPriceValue(props.closeData);
    setSymbolValue(props.symbol);

    const fetchUserProfile = async () => {
      if (token) {
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
      }
    };

    fetchUserProfile();
  }, [props.closeData, props.symbol]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      stock_name: symbolValue,
      stock_symbol: symbolValue,
      user_wallet: Wallet,
      price: priceValue,
      quantity: quantity,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/trade/buy-shares/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        console.log("Request was successful");
        toast("Buy This Share Successfully");
        // window.location.href = '/dashboard/wallet';
      } else {
        console.error("Request failed with status:", response.status);
        console.error("Response text:", await response.text());
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          open modal
        </button>
        <dialog id="my_modal_2" className="modal">
          <div>
            <div className="modal-box">
              <div className="font-manrope flex h-screen w-full items-center justify-center">
                <div className="mx-auto box-border w-[365px] border bg-white p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#64748B]">Buy Your Stock</span>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
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
                        onChange={(e) => setWallet(e.target.value)}
                      />
                      <input
                        className="mt-3 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                        type="number"
                        placeholder="Price"
                        value={priceValue}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                      <input
                        className="mt-3 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                        type="number"
                        placeholder="Quantity"
                        name="quantity"
                        min="0"
                        onChange={(e) => setQuantity(e.target.value)}
                      />
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
        </dialog>
      </form>
    </div>
  );
};

export default Buy;
