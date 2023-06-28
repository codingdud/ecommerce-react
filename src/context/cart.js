import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      // if the item is not in the cart
      if (!prevCart[product.id]) {
        newCart[product.id] = {
          id: product.id,
          quantity: 1
        };
      } else {
        const newProduct = { ...prevCart[product.id] };
        newProduct.quantity += 1;
        newCart[product.id] = newProduct;
      }
      return newCart;
    });
  };

  const removeFromCart = (product) => {};

  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
}

export const useCartContext = () => useContext(CartContext);

export default CartContextProvider;
