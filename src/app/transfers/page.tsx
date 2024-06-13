"use client";
import React, { useState, useEffect } from "react";
import { ITransfers } from "@/firebase/dbschema";
import { transfers as transfersFunc } from "@/firebase/queries/dbquery";
const Transfers = () => {
  const [transfersState, setTransfers] = useState<ITransfers[]>([]);

  useEffect(() => {
    const fetchTransfers = async () => {
      const data = await transfersFunc();
      setTransfers(data);
    };
    fetchTransfers();
  }, []);
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <div className="flex-1 flex bg-white shadow rounded-lg overflow-hidden">
              <input
                className="form-input mt-1 block w-full pl-7 pr-12 sm:text-sm border-r border-gray-300"
                placeholder="Pick-up"
                type="text"
              />
              <input
                className="form-input mt-1 block w-full pl-7 pr-12 sm:text-sm"
                placeholder="Drop-off"
                type="text"
              />
            </div>
            <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700">
              Search
            </button>
          </div>
          <div className="flex gap-4">
            <div className="w-1/4 bg-white p-4 shadow rounded-lg">
              <div className="mb-6">
                <h2 className="font-semibold text-lg mb-2">Categories</h2>
                <div className="space-y-2">
                  <div>
                    <input id="airport" type="checkbox" />
                    <label for="airport">Airport</label>
                  </div>
                  <div>
                    <input id="athens" type="checkbox" />
                    <label for="athens">Athens</label>
                  </div>
                  <div>
                    <input id="piraeus" type="checkbox" />
                    <label for="piraeus">Piraeus</label>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-lg mb-2">Capacity</h2>
                <div className="space-y-2">
                  <div>
                    <input id="up-to-4" type="checkbox" />
                    <label for="up-to-4">Up to 4 people taxi</label>
                  </div>
                  <div>
                    <input id="up-to-7" type="checkbox" />
                    <label for="up-to-7">Up to 7 people mini-van</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-3/4">
              <div className="bg-white p-4 shadow rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {transfersState.map((transfer, key) => (
                    <div className="bg-white border rounded-lg p-4" key={key}>
                      <img
                        alt="Car image for Athens to Airport up to 4 people taxi"
                        className="mb-4"
                        height="200"
                        src={transfer.image}
                        width="300"
                      />
                      <h3 className="text-lg font-semibold">{transfer.name}</h3>
                      <div className="flex items-center my-2">
                        <i className="fas fa-user-friends"></i>
                        <span className="ml-2">4</span>
                        <i className="fas fa-suitcase ml-4"></i>
                        <span className="ml-2">4</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-900">
                        {transfer.cost}€ / journey
                      </p>
                      <button className="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700">
                        Book Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transfers;
