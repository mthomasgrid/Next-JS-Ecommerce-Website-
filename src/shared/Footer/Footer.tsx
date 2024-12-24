import Image from "next/image";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-section-top">
        <div className="footer-section-top-left">
          <Image
            src="/assets/Hekto.png"
            alt="Website Logo"
            width={103}
            height={30}
          />
          <div className="footer-text">
            <div className="input-wrapper">
              <input
                type="text"
                name="text"
                placeholder="Enter Email Address"
              />
              <button className="btn">Sign Up</button>
            </div>
          </div>
          <p className="footer-address">
            17 Princess Road, London, Greater London <br /> NW1 8JR, UK
          </p>
        </div>
        <div className="footer-section-top-right">
          <div className="footer-section-top-right-1">
            <p className="footer-title">Categories</p>
            <ul className="footer-links">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>WaterProof HeadPhones</li>
            </ul>
          </div>
          <div className="footer-section-top-right-2">
            <p className="footer-title">Customer Care</p>
            <ul className="footer-links">
              <li>My Account</li>
              <li>Discount</li>
              <li>Return</li>
              <li>Order History</li>
              <li>Order Tracking</li>
            </ul>
          </div>
          <div className="footer-section-top-right-3">
            <p className="footer-title">Pages</p>
            <ul className="footer-links">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-section-bottom">
        <div className="footer-content">
          <p>&#169;Webecy - All Rights Reserved</p>
        </div>
        <div className="footer-logos">
        <Image
                  src="/icons/fb.svg"
                  alt="facebook"
                  width={24}
                  height={24}
                  className="foot-logo"
                />
          <Image
                  src="/icons/twitter.svg"
                  alt="twitter"
                  width={24}
                  height={24}
                  className="foot-logo"
                />
          <Image
                  src="/icons/insta.svg"
                  alt="instagram"
                  width={24}
                  height={24}
                  className="foot-logo"
                />
        </div>
      </div>
    </footer>
  );
}
