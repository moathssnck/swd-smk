"use client"


import { useState } from "react"
import { useCart } from "../cartContext"

export function SiteHeader() {
  const { totalItems, totalPrice } = useCart() as any
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        {/* Mobile Menu Button & Logo */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mr-2 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Toggle menu"
          >
            <img src="/menu.4fcd2317.svg" alt="Menu" width={24} height={24} />
          </button>
          <a href="/" className="flex items-center">
            <img src="/22.PNG" alt="Snoonu" width={80} height={32}  />
          </a>
        </div>

        {/* Desktop Logo & Menu Button */}
        <div className="mr-4 hidden md:flex items-center">
          <a href="/" className="mr-6">
            <img src="/22.PNG" alt="Snoonu" width={100} height={40}  />
          </a>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
            <img src="/menu.4fcd2317.svg" alt="Menu Icon" width={16} height={16} className="mr-2" />
            Menu
          </button>
        </div>

        {/* Search Bar - Simplified for Desktop */}
        <div className="flex-1 items-center justify-start space-x-2 hidden md:flex">
          <div className="relative flex-grow max-w-xl">
            <div className="absolute left-0 top-0 flex h-full items-center pl-3">
              <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
                All Categories
                <img src="/chevron_down_gray.c98c600.svg" alt="Dropdown" width={12} height={12} className="ml-1" />
              </button>
              <span className="mx-2 text-gray-300">|</span>
            </div>
            <input
              type="search"
              placeholder="Search for products..."
              className="w-full pl-[160px] pr-12 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 bg-[#025380] rounded-md flex items-center justify-center hover:bg-[#02436a]"
              aria-label="Search"
            >
              <img src="/search_white.svg" alt="Search Icon" width={18} height={18} />
            </button>
          </div>
        </div>

        {/* Cart Button */}
        <div className="flex flex-1 md:flex-none items-center justify-end space-x-2">
          <button className="px-3 py-2 bg-[#025380] text-white rounded-md text-sm font-medium hover:bg-[#02436a] flex items-center">
            <img src="/cart.svg" alt="Cart" width={20} height={20} className="mr-1 sm:mr-2" />
            <span className="hidden sm:inline">{totalPrice.toFixed(2)} BHD</span>
            <span className="sm:hidden">{totalItems}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg p-4 border-t border-gray-200">
          <nav className="flex flex-col space-y-2">
            <a
              href="#categories"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Categories
            </a>
            <a
              href="#offers"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Offers
            </a>
            <a
              href="#products"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </a>
            <input
              type="search"
              placeholder="Search..."
              className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </nav>
        </div>
      )}
    </header>
  )
}
