"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface AddToCartProps {
  product: {
    id: string;
    name: string;
    price: number;
    thumbnail: string;
  };
}

export default function AddToCart({ product }: AddToCartProps) {
  const router = useRouter();
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    }
    return [];
  });

  const handleClick = () => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    router.push(`/Cart`);
  };

  return (
    <button className="productDetails-cart-btn" onClick={handleClick}>
      Add To Cart
    </button>
  );
}
