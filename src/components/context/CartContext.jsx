import { createContext, useState } from "react";
export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const addItem = (item, cant) => {
        const newItems = Array(cant).fill(item);
        setCart([...cart, ...newItems])
    }
    const deleteItem = (id) => {
        const index = cart.findIndex(c => c.id === id);
        if (index !== -1) {
            const newCart = [
                ...cart.slice(0, index),
                ...cart.slice(index + 1)
            ];
            setCart(newCart);
        }
    }
    const clear = () => {
        setCart([]);
    }




    return (
        <CartContext.Provider value={[cart, setCart, addItem, deleteItem, clear]}>
            {children}
        </CartContext.Provider>
    )
}