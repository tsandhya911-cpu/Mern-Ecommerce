
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
export const CartContext = createContext();
import { BASE_URL } from "../utils/baseURL"; 

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const addToCart = (product) => {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item._id === product._id);

  

      const updatedProduct = {
        ...product,
        qty: exist ? exist.qty + 1 : 1,
        image: product.image?.startsWith("http")
          ? product.image
          : `${BASE_URL}${product.image}`,
      };

      if (exist) {
        toast.success("Quantity increased 🔼");
        return prevCart.map((item) =>
          item._id === product._id ? updatedProduct : item
        );
      } else {
        toast.success(`${product.name} added to cart 🛒`);
        return [...prevCart, updatedProduct];
      }
    });
  };

  const removeFromCart = (id) => {
    const removedItem = cart.find((item) => item._id === id);
    setCart(cart.filter((item) => item._id !== id));
    toast.error(`${removedItem.name} removed from cart ❌`);
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item._id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item._id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // TOTAL PRICE 💰
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        totalPrice,
        clearCart   // 🔥 ADD THIS

      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;