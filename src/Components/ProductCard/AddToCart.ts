"use client"
import { useRouter } from "next/navigation"

export default function addToCart(){
 alert("Hello")
 // eslint-disable-next-line react-hooks/rules-of-hooks
 const router=useRouter();
 router.push("/Cart")
}

