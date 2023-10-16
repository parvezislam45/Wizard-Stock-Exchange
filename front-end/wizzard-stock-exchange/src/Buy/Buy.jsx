

const Buy = () => {
    return (
        <div>
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
                            className="mt-1 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                            type="text"
                            placeholder="Stock Name"
                          />
                        </div>
                        <div>
                          <input
                            className="mt-3 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                            type="text"
                            placeholder="Stock Symbol"
                          />
                          <input
                            className="mt-3 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                            type="number"
                            placeholder=" Price"
                          />
                          <input
                            className="mt-3 w-full rounded-[4px] border border-[#A0ABBB] p-2"
                            type="number"
                            placeholder="Quantity"
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
                        <div className="w-full cursor-pointer rounded-[4px] bg-green-700 px-3 py-[6px] text-center font-semibold text-white">
                          Buy
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                  Close
                </label>
              </div>
        </div>
    );
};

export default Buy;