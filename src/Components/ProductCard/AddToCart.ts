"use client"
import { useRouter } from "next/navigation"

export default function addToCart(){
 alert("Hello")
 const router=useRouter();
 router.push("/Cart")
}

