import React from "react";
import { useCart } from "../contexts/CartContext";

export default function Cart() {
  const { items, updateQty, removeFromCart, total, clearCart } = useCart();

  if (items.length === 0) return <div className="card">Your cart is empty</div>;

  return (
    <div>
      <h2>Your Cart</h2>
      <div className="mt-4">
        {items.map(it => (
          <div key={it.id} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img src={it.product.image} alt="" style={{ width: 96, height: 72, objectFit: "cover", borderRadius: 6 }} />
              <div>
                <div style={{ fontWeight: 600 }}>{it.product.title}</div>
                <div className="text-muted">₹{it.product.price}</div>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input type="number" value={it.qty} min={1} onChange={e => updateQty(it.id, Number(e.target.value) || 1)} style={{ width: 72, padding: 6 }} />
              <button className="btn" onClick={() => removeFromCart(it.id)}>Remove</button>
            </div>
          </div>
        ))}

        <div className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 18, fontWeight: 700 }}>Total: ₹{total}</div>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="btn" onClick={clearCart}>Clear</button>
            <button className="btn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
