"use client"
import React, { useState } from 'react'
import ProductCard from './ProductCard'
import { Product } from '../types';
type ProductCardProps = {
  products: Product[];
};
const Display = ({ products }: ProductCardProps) => {
const [isOpen,setIsOpen]=useState(false)

function toggle(){
    setIsOpen((isOpen)=>!isOpen)
}

  return (
    <>
        <div className="product">
            {isOpen&&<ProductCard products={products}/>}
            <button onClick={toggle}>Open</button>
        </div>
    
    </>
  )
}

export default Display