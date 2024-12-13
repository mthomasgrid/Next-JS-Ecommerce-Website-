"use client"

import Image from "next/image"
import './cart.css'

import { useRouter } from "next/navigation";
export default function Cart(){

const route=useRouter();
    const gotoHome=()=>{
        route.push('/products')
    }


    return(
        <>
            <div className="cartEmpty">
                <Image src="/assets/CartImages/EmptyCart.png" alt="Cart Image Empty" width={387} height={286}/>
            </div>
            <h3 className="cart-title">Your Cart is Empty</h3>
            <div className="cart-btn">
            <button className="cart-empty-btn" onClick={gotoHome}>Start Shopping</button>
            </div>

            
           
        </>
        
    )
}