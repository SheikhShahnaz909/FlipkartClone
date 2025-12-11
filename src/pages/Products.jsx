import React from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'


export default function Products(){
return (
<div>
<h2>All Products</h2>
<div className="mt-4 grid">
{products.map(p=> <ProductCard key={p.id} p={p} />)}
</div>
</div>
)
}