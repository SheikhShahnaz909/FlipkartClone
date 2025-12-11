import React from 'react'
import { Link } from 'react-router-dom'


export default function Home(){
return (
<div>
<div className="card" style={{padding:24}}>
<h1>Welcome to the Flipkart Clone</h1>
<p className="text-muted">A demo e-commerce app built with React + Context + localStorage.</p>
<div className="mt-4">
<Link to="/products" className="btn">Browse Products</Link>
</div>
</div>
</div>
)
}