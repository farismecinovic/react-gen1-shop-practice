import React, { createContext, useState } from "react";

// create context
const ShoppingCartContext = createContext();

const ShoppingCartContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [cartData, setCartData] = useState({
    items: [],
    total: 0,
  });

  const sayHello = () => {
    alert("Hello");
  };

  const values = { cartData, sayHello };

  return (
    // the Provider gives access to the context to its children
    <ShoppingCartContext.Provider value={values}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShoppingCartContextProvider };
