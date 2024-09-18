import { createContext, useState } from "react";
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addItem = (item, cant) => {
    const newItems = Array(cant).fill(item);
    setCart([...cart, ...newItems]);
  };
  const deleteItem = (id) => {
    const index = cart.findIndex((c) => c.id === id);
    if (index !== -1) {
      const newCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
      setCart(newCart);
    }
  };
  const clear = () => {
    setCart([]);
  };
  const cant = (id) => {
    let count = 0;
    cart.forEach((c) => {
      if (c.id === id) {
        count++;
      }
    });
    return count;
  };
  const deleteItemComplete = (id) =>{
    const cartFilter = cart.filter((c) => c.id !== id);
    setCart(cartFilter); 
  }

  return (
    <CartContext.Provider
      value={[cart, setCart, addItem, deleteItem, clear, cant, deleteItemComplete]}
    >
      {children}
    </CartContext.Provider>
  );
}
