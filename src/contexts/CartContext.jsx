import React, { createContext, useContext, useEffect, useState } from "react";
const CartContext = createContext();
export function useCart() { return useContext(CartContext); }

export default function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem("cart_v1")) || []; }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("cart_v1", JSON.stringify(items));
  }, [items]);

  function addToCart(product, qty = 1) {
    setItems(prev => {
      const found = prev.find(i => i.id === product.id);
      if (found) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i);
      return [{ id: product.id, product, qty }, ...prev];
    });
  }

  function removeFromCart(productId) {
    setItems(prev => prev.filter(i => i.id !== productId));
  }

  function updateQty(productId, qty) {
    if (qty <= 0) return removeFromCart(productId);
    setItems(prev => prev.map(i => i.id === productId ? { ...i, qty } : i));
  }

  function clearCart() { setItems([]); }

  const total = items.reduce((s, it) => s + it.product.price * it.qty, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQty, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}
