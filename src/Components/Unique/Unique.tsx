"use client"
import React from "react";
import "./Unique.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Unique = () => {

  const router = useRouter();

  const products = () => {
    router.push("/products");
  };

  return (
    <div className="banner">
      <div className="banner-left">
        <div className="image-content">
          <Image
            src="/assets/BannerImages/Sofa.png"
            alt="Headphones"
            className="banner-Sofa"
            width={519}
            height={488}
            loading="lazy"
          />

          <div className="ellipse61-banner"></div>
        </div>
      </div>

      <div className="banner-right">
        <h3 className="right-content">
          Unique Features Of Latest & Trending Poducts
        </h3>
        <ul className="banner-description">
          <li> 
            <Image src="/icons/reddot.svg" alt="red dot" width={11} height={12} className="list-dot"/>
            All frames constructed with hardwood solids and laminates</li>
        <li>
            <Image src="/icons/violetdot.svg" alt="maroon dot" width={11} height={12} className="list-dot"/>
            Reinforced with double wood dowels, glue, screw - nails corner{" "}
          </li>
          <li>
          <Image src="/icons/greendot.svg" alt="Green dot" width={11} height={12} className="list-dot"/>Arms, backs and seats are structurally reinforced</li>
        </ul>
        <button className="cart-banner-btn" onClick={products}>Shop Now</button>
      </div>
    </div>
  );
};

export default Unique;
