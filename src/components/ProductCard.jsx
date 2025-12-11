import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

export default function ProductCard({ p }) {
  const { addToCart } = useCart();
  return (
    <div className="card">
      <Link to={`/products/${p.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img
          src={p.image}
          alt={p.title}
          style={{ height: 160, objectFit: "cover", borderRadius: 8, width: "100%" }}
        />
        <h3 style={{ marginTop: 8 }}>{p.title}</h3>
      </Link>

      <div className="mt-2" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>₹{p.price}</div>
        <button className="btn" onClick={() => addToCart(p)}>Add</button>
      </div>
    </div>
  );
}
