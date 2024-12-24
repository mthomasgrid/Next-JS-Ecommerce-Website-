"use client";
import Image from "next/image";
import './cart.css';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  thumbnail: string;
}

export default function Cart() {
  const router = useRouter();
  
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const gotoHome = () => {
    router.push('/products');
  };

  const increment = (itemId: string) => {
    const updatedCart = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decrement = (itemId: string) => {
    const updatedCart = cartItems
      .map(item =>
        item.id === itemId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const cartIsEmpty = cartItems.every(item => item.quantity === 0);


  const subTotal=cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  const Total = Number(subTotal) + 100.00;

  return (
    <>
      {cartIsEmpty ? (
        <div>
          <div className="cartEmpty">
            <Image
              src="/assets/CartImages/EmptyCart.png"
              alt="Cart Image Empty"
              width={387}
              height={286}
            />
          </div>
          <h3 className="cart-title">Your Cart is Empty</h3>
          <div className="cart-btn">
            <button className="cart-empty-btn" onClick={gotoHome}>
              Start Shopping
            </button>
          </div>
        </div>
      ) : (
        <div className="cart-added">
          <div className="cart-added-left">
            {cartItems.map(item => (
              <div key={item.id} className="cart-added-item1">
                <Image
                  src={item.thumbnail}
                  alt={item.name}
                  width={149}
                  height={104}
                />
                <div className="cart-added-items-description">
                  <p className="added-items-title">{item.name.slice(0,12)}</p>
                  <p className="added-items-price">${item.price.toFixed(2)}</p>
                </div>
                <div className="counter-container">
                  <button
                    className="counter-btn"
                    onClick={() => decrement(item.id)}
                  >
                    -
                  </button>
                  <span className="counter-value">{item.quantity}</span>
                  <button
                    className="counter-btn"
                    onClick={() => increment(item.id)}
                  >
                    +
                  </button>
                </div>
                <p className="box4 added-items-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="cart-added-right">
            <div className="right-item1">
              <p>Subtotal</p>
              <p className="box4 added-items-price">
                ${subTotal}
              </p>
            </div>
            <div className="vector-line"></div>
            <div className="right-item1">
              <p>Shipping</p>
              <p className="box4 added-items-price">$100.00</p>
            </div>
            
            <div className="vector-line"></div>
            <div className="right-item1">
              <p>Total</p>
              <p className="box4 added-items-price">
                ${Total}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
