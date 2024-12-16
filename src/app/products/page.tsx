import ProductCard from '@/Components/ProductCard/ProductCard'
import Sidebar from '@/Components/sidebar/Sidebar'
import React from 'react'


import './product.css'
import Link from 'next/link'

const Productspage = () => {
  return (
    <>
    <h1 className='product-title'>Products</h1>
    <div className="product-links">
     
     
      <ul>
        <li> <Link href="/">Home</Link></li>
        <li > <Link href="/products">Products</Link></li>
      </ul>
   
    


    </div>
    
    <div className="product-lister">
    <Sidebar/> 
    <ProductCard/>

    </div>
      
    
    </>
  )
}

export default Productspage