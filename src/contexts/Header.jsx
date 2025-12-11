import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'


export default function Header(){
const { user, logout } = useAuth()
const { items } = useCart()
const nav = useNavigate()


return (
<header className="header">
<div style={{display:'flex',alignItems:'center',gap:12}}>
<Link to="/" style={{fontWeight:700,fontSize:18}}>Flipkart Clone</Link>
<Link to="/products" className="btn">Products</Link>
</div>
<div style={{display:'flex',alignItems:'center',gap:12}}>
<Link to="/cart" className="btn">Cart ({items.length})</Link>
{user ? (
<div style={{display:'flex',alignItems:'center',gap:8}}>
<div className="text-muted">Hi, {user.name}</div>
<button className="btn" onClick={()=>{ logout(); nav('/') }}>Logout</button>
</div>
) : (
<div style={{display:'flex',gap:8}}>
<Link to="/login" className="btn">Login</Link>
<Link to="/register" className="btn">Register</Link>
</div>
)}
</div>
</header>
)
}