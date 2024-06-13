"use client";

import React, { createContext, useEffect, useState } from "react";

interface BasketContextType {
  basketItems: any[];
  addToBasket: (item: any, image: string) => void;
}

interface BasketProviderProps {
  children: React.ReactNode;
}

export const BasketContext = createContext<BasketContextType>({
  basketItems: [],
  addToBasket: () => {},
});

const BasketProvider: React.FC<BasketProviderProps> = ({ children }) => {
  const [basketItems, setBasketItems] = useState<any[]>(() => {
    if (typeof window !== "undefined" && localStorage.getItem("cartItems")) {
      return JSON.parse(localStorage.getItem("cartItems") || "[]");
    }
    return [];
  });

  const addToBasket = (item: any, image: string) => {
    const isItemInBasket = basketItems.find((x) => x.id === item);

    if (isItemInBasket) {
      setBasketItems(
        basketItems.map((x) =>
          x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
        )
      );
    } else {
      setBasketItems([...basketItems, { ...item, quantity: 1, image }]);
    }
  };

  const removeFromBasket = (item: any) => {
    const isItemInBasket = basketItems.find((x) => x.id === item);

    if (isItemInBasket.quantity === 1) {
      setBasketItems(basketItems.filter((x) => x.id !== item.id));
    } else {
      setBasketItems(
        basketItems.map((x) =>
          x.id === item.id ? { ...x, quantity: x.quantity - 1 } : x
        )
      );
    }
  };

  const clearCart = () => {
    setBasketItems([]);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(basketItems));
  }, [basketItems]);

  useEffect(() => {
    console.log(basketItems);
  }, [basketItems]);

  return (
    <BasketContext.Provider value={{ basketItems, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
