"use client";
import { useRouter } from "next/navigation";
import "./Discount.css";
import Image from "next/image";

export default function DiscountItem() {
  const router = useRouter();

  const products = () => {
    router.push("/products");
  };

  return (
    <div className="discount">
      <h2 className="discount-title">Discount Item</h2>
      <ul className="discount-list">
        <li className="discount-list-item active">Headphones</li>
        <li className="discount-list-item">Laptop</li>
        <li className="discount-list-item">Other</li>
      </ul>

      <div className="discount-content">
        <div className="discount-left">
          <h3 className="discount-left-title">20% Discount Of All Products</h3>
          <p className="discount-left-subtitle">Headphones Compact</p>
          <p className="discount-left-description">
            soundcore by Anker Space One Active Noise Cancelling Bluetooth
            Headphones with Travel.
          </p>
          <div className="discount-left-groups">
            <ul className="discount-left-list">
              <li>
                <Image src="/icons/tickmark.svg" alt="Check Icon" width={24} height={25} />
                Active Noise Cancellation
              </li>
              <li>
              <Image src="/icons/tickmark.svg" alt="Check Icon" width={24} height={25} />
                Bluetooth Connectivity
              </li>
            </ul>
            <ul className="discount-left-list">
              <li>
              <Image src="/icons/tickmark.svg" alt="Check Icon" width={24} height={25} />
                Comfortable Design
              </li>
              <li>
              <Image src="/icons/tickmark.svg" alt="Check Icon" width={24} height={25} />
                Travel-Friendly
              </li>
            </ul>
          </div>
          <button className="discount-button" onClick={products}>
            Shop Now
          </button>
        </div>
        <div className="discount-right">
          <div className="image-content">
            <Image
              src="/assets/BannerImages/Headphone.png"
              alt="Headphones"
              className="headphones"
              width={448}
              height={498}
              loading="lazy"
            />

            <div className="discount-right-ellipse61"></div>
            <div className="discount-right-ellipse62"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
