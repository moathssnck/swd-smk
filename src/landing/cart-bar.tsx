"use client"

import { useEffect } from "react"
import { useCart } from "../cartContext"


interface CartBarProps {
  onGoToCart: () => void
  setTotal: (v:string) => void
}

export function CartBar({ onGoToCart,setTotal }: CartBarProps) {
  const { totalItems, totalPrice } = useCart() as any
  useEffect(()=>{
    setTotal(totalPrice)
  },[totalPrice])

  if (totalItems === 0) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img src="/cart.svg" alt="Cart" width={24} height={24} />
            <span className="absolute -top-2 -right-2  bg-[#025380]  text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
              {totalItems}
            </span>
          </div>
          <p className="text-lg font-semibold text-gray-800">{totalPrice.toFixed(2)} BHD</p>
        </div>
        <button
          onClick={onGoToCart}
          className="px-4 py-2  bg-[#025380]  text-white text-sm font-medium rounded-md hover:bg-blue-700 flex items-center"
        >
          Go to Cart
          <img src="/go_to_checkout.b2db30ab.svg" alt="Arrow" width={12} height={12} className="ml-2" />
        </button>
      </div>
    </div>
  )
}
