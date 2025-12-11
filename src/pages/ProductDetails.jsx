import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../contexts/CartContext'


export default function ProductDetails(){
const { id } = useParams()
const product = products.find(p=>p.id===id)
const { addToCart } = useCart()
if(!product) return <div>Product not found</div>


return (
<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>
<img src={product.image} alt={product.title} style={{width:'100%',height:420,objectFit:'cover',borderRadius:8}} />
<div>
<h2>{product.title}</h2>
<p className="text-muted">{product.description}</p>
<div className="mt-4" style={{fontSize:20,fontWeight:700}}>₹{product.price}</div>
<div className="mt-4">
<button className="btn" onClick={()=> addToCart(product)}>Add to Cart</button>
</div>
</div>
</div>
)
}