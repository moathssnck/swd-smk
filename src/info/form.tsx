"use client"

import type React from "react"
import { useState } from "react"
import { InfoFormProps } from "../lib/types"

export default function InfoForm({ handleNextPage, setName, setPhone,total }: InfoFormProps) {
  const [paymentOption, setPaymentOption] = useState<"payfull" | "partial">("payfull")
  const [selectedLocationType, setSelectedLocationType] = useState<string>("home")
  const [isPaymentMethodSelected, setIsPaymentMethodSelected] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isPaymentMethodSelected) {
      alert("Please select a payment method.")
      return
    }
   
    handleNextPage()

  }


  const locationTypes = [
    { id: "home", label: "Home", icon: "/home.png" },
    { id: "work", label: "Work", icon: "./work2.png" },
    { id: "customer", label: "Customer", icon: "/loc.png" },
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        <form onSubmit={handleSubmit} method="post" className="bg-white shadow-xl rounded-lg p-6 md:p-8">
          {/* Delivery Location Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Delivery Location</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-sm"
                  placeholder="Enter your full name"
                  required
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-sm"
                  placeholder="Street address, P.O. box, etc."
                  required
                  autoComplete="street-address"
                />
              </div>
              <div>
                <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-1">
                  Apartment/Building (Optional)
                </label>
                <input
                  id="apartment"
                  name="apartment"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-sm"
                  placeholder="Apartment, suite, unit, building, floor, etc."
                  autoComplete="address-line2"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-sm"
                  placeholder="+973 XXXX XXXX"
                  required
                  autoComplete="tel"
                />
              </div>
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Instructions (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-sm"
                  placeholder="E.g., leave at front door, call upon arrival"
                />
              </div>
            </div>
          </div>

          {/* Select Location Type Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Select Your Location Type</h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {locationTypes.map((locType) => (
                <button
                  key={locType.id}
                  type="button"
                  onClick={() => setSelectedLocationType(locType.id)}
                  className={`p-3 rounded-lg border flex flex-col sm:flex-row items-center justify-center text-sm transition-all duration-150
                    ${
                      selectedLocationType === locType.id
                        ? " bg-[#025380]  text-white border-blue-600 shadow-md"
                        : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 hover:border-gray-400"
                    }`}
                >
                  <img
                    src={locType.icon || "/placeholder.svg"}
                    alt={locType.label}
                    width={20}
                    height={20}
                    className="mb-1 sm:mb-0 sm:mr-2"
                  />
                  {locType.label}
                </button>
              ))}
            </div>
          </div>

          {/* Payment Method Section */}
          <div className="mb-8 relative">
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Payment Method</h3>
            <span className="block text-xs text-center text-white font-medium mb-3  bg-[#025380] -100 border border-green-300 rounded-md py-1 px-2 w-fit mx-auto">
              20% cashback on card payments!
            </span>
            <button
              type="button"
              onClick={() => setIsPaymentMethodSelected(!isPaymentMethodSelected)}
              className={`w-full p-4 border rounded-lg flex items-center justify-between cursor-pointer transition-all duration-150
                ${
                  isPaymentMethodSelected
                    ? " bg-gray-100 border-2 border-green-500 shadow-lg"
                    : "bg-gray-100 border-gray-300 hover:bg-gray-200"
                }`}
            >
              <div className="flex items-center">
                <img src="/visa.svg" alt="Visa" width={40} height={25} className="mr-2 object-contain" />
                <img src="/mass.svg" alt="Mastercard" width={40} height={25} className="object-contain" />
              </div>
              <span
                className={`h-5 w-5 rounded-full border-2 flex items-center justify-center
                  ${isPaymentMethodSelected ? " bg-[#025380] -500 border-green-500" : "border-gray-400"}`}
              >
                {isPaymentMethodSelected && (
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </button>
            <p className="text-xs text-gray-500 mt-2">Select to pay with Credit/Debit Card.</p>
          </div>

          {/* Order Summary & Payment Options */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h4>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <p className="text-gray-600">Products </p>
                <p className="text-gray-800 font-medium">{total} BHD</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Delivery Fee</p>
                <p className="text-gray-800 font-medium">0.00 BHD</p>
              </div>
            </div>

            <hr className="my-4 border-gray-200" />

            <h4 className="text-lg font-semibold text-gray-800 mb-3">Choose Payment Option</h4>
            <div className="space-y-3">
              <label
                htmlFor="payfull"
                className={`flex items-start p-4 border rounded-lg cursor-pointer transition-all duration-150 ${
                  paymentOption === "payfull"
                    ? "bg-blue-50 border-2 border-blue-500"
                    : "bg-white border-gray-300 hover:bg-gray-50"
                }`}
              >
                <input
                  id="payfull"
                  type="radio"
                  name="paymentOption"
                  value="payfull"
                  checked={paymentOption === "payfull"}
                  onChange={() => setPaymentOption("payfull")}
                  className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500 mt-0.5"
                />
                <div className="ml-3 text-sm">
                  <span className="font-medium text-gray-800">Pay Full Order Amount</span>
                  <p className="text-gray-500">Pay the total order amount now with your card and get free delivery.</p>
                </div>
              </label>
              <label
                htmlFor="partial"
                className={`flex items-start p-4 border rounded-lg cursor-pointer transition-all duration-150 ${
                  paymentOption === "partial"
                    ? "bg-blue-50 border-2 border-blue-500"
                    : "bg-white border-gray-300 hover:bg-gray-50"
                }`}
              >
                <input
                  id="partial"
                  type="radio"
                  name="paymentOption"
                  value="partial"
                  checked={paymentOption === "partial"}
                  onChange={() => setPaymentOption("partial")}
                  className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500 mt-0.5"
                />
                <div className="ml-3 text-sm">
                  <span className="font-medium text-gray-800">Pay only 10 BHD to confirm your order</span>
                  <p className="text-gray-500">
                    This will be deducted from the order total. You'll pay the rest upon delivery (delivery fee of 10
                    BHD applies).
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Total Amount & Submit Button */}
          <div className="sticky bottom-0 bg-white py-4 -mx-6 -mb-8 md:-mx-8 md:-mb-8 px-6 md:px-8 border-t border-gray-200 rounded-b-lg">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-gray-800">Total Amount</h3>
              <h3 className="text-2xl font-bold text-blue-600">{paymentOption === "payfull"?total:10} BHD</h3>
            </div>
            <button
              type="submit"
              className="w-full  bg-[#025380] -600 text-white py-3 px-4 rounded-lg font-semibold hover: bg-[#025380] -700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors"
            >
              Continue to Payment ({paymentOption === "payfull"?total:10} BHD)
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
