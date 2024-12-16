"use client"
import React from 'react'
import Image from 'next/image';

import './Hero.css'
import { useRouter } from 'next/navigation';

const Hero = () => {
 
const router=useRouter();

const products=()=>{
  router.push('/products')
}


  return (
    <>
      <section className="hero-section">
        <div className="container">




          <div className="carousel-slide" >
            <div className="left-image">
              <Image
                src="/assets/BannerImages/HangingLight.png"
                alt="Hanging Light"
                className="hanging-light"
                width={387}
                height={387}
              />

            </div>


            <div className="text-content">
              <p className="subheading">Best headphones For You</p>
              <h1 className="title">New Trendy Collection
                Headphones</h1>
              <p className="description">Enjoy premium sound quality or create music with ease..</p>
              <button className="hero-button" onClick={products}>Shop Now</button>
            </div>



            <div className="image-content">
              <Image src="/assets/BannerImages/Headphone.png" alt="Headphones"  priority className="headphones" width={519} height={620} />
              <div className="badge">50% <br /> Off</div>
              <div className="ellipse60"></div>
              <div className="ellipse61"></div>
            </div>
          </div>




        </div>
      </section>


    </>
  )
}

export default Hero