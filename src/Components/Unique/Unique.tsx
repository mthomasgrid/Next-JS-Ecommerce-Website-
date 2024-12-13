import React from 'react'
import './Unique.css';
import Image from 'next/image';

const Unique = () => {
  return (
    
    <div className="banner">
        
        
        <div className="banner-left">
        <div className="image-content">
                <Image src="/assets/BannerImages/Sofa.png" alt="Headphones" className="banner-Sofa" 
               width={519} height={488} /> 

              <div className="ellipse61-banner"></div>
            </div>
        </div>



        <div className="banner-right">
            <h3 className='right-content'>Unique Features Of Latest &
            Trending Poducts</h3>
            <ul className="banner-description">
                <li>All frames constructed with hardwood solids and laminates</li>
                <li>Reinforced with double wood dowels, glue, screw - nails corner </li>
                <li>Arms, backs and seats are structurally reinforced</li>
            </ul>
            <button className="cart-banner-btn" >Shop Now</button>
        </div>




    </div>
    
  )
}

export default Unique