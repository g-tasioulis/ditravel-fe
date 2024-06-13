"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [basketItems, setBasketItems] = useState<any>([]);
  const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("cartItems") || "[]");
  };

  useEffect(() => {
    setBasketItems(getLocalStorage());
  }, []);

  useEffect(() => {
    console.log("Basket:", basketItems);
  }, [basketItems]);

  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg">
          <a href="#" className="text-gray-600 font-bold">
            Cart
          </a>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-2/3 bg-white p-6 rounded shadow mb-6 lg:mb-0">
          <h2 className="text-2xl font-bold mb-6">Cart items</h2>
          <div>
            {basketItems.map((item, index) => (
              <div
                key={index}
                className="border p-4 rounded flex items-center justify-between mb-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.image || "https://placehold.co/100x100"}
                    alt={`Placeholder image of ${item.name}`}
                    className="rounded mr-4"
                    style={{ height: 100, width: 100 }}
                  />
                  <div>
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p>Departure date: {item.departureDate}</p>
                    <p>Duration: {item.duration}</p>
                    <p>Base price: {item.cost}</p>
                    <button className="text-blue-600 mt-2">
                      Booking Details <i className="fas fa-chevron-down"></i>
                    </button>
                  </div>
                </div>
                <div className="text-red-600 text-2xl cursor-pointer">
                  <i className="fas fa-times"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/3 bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-6">Cart totals</h2>
          <div className="flex justify-between mb-4">
            <div className="text-lg">Subtotal</div>
            <div className="text-lg">210,00€</div>
          </div>
          <div className="flex justify-between mb-6">
            <div className="text-lg">Total</div>
            <div className="text-lg font-bold">210,00€</div>
          </div>
          <button className="bg-red-600 text-white w-full py-3 rounded font-bold text-lg">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
