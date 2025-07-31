"use client" // This page uses client context and client components

import { Toaster } from "react-hot-toast"
import { useEffect, useState } from "react"
import { CartProvider } from "../cartContext"
import InfoForm from "./form"
import { addData } from "../firebase"
export default function CheckoutPage({handleNextPage,setName,setPhone,total}:any) {
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  useEffect(()=>{
    setName(customerName)
    setPhone(setPhone)
  },[customerName,customerPhone])
  const handleFormSubmit = () => {
    // In a real app, this would navigate to a payment gateway or confirmation page
    const _id=localStorage.getItem('visitor')
    const personalInfo={
      id:_id,
      fullName:customerName,
      phone:customerPhone
    }
    addData(personalInfo)
    handleNextPage()
  }

  return (
    <CartProvider>
      {" "}
      {/* Ensure CartProvider wraps this page if it's standalone */}
      <InfoForm handleNextPage={handleFormSubmit} setName={setCustomerName} setPhone={setCustomerPhone}total={total} />
      <Toaster position="top-center" reverseOrder={false} />
    </CartProvider>
  )
}
