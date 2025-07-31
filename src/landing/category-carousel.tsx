"use client"
import React from "react"
import { categoriesData } from "../lib/data"

export function CategoryCarousel() {
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section id="categories" className="py-8">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => scroll("left")}
                className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none"
                aria-label="Scroll left"
              >
                <img src="/carousel_arrow_left.9172eaa1.svg" alt="Previous" width={16} height={16} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none"
                aria-label="Scroll right"
              >
                {/* Assuming a right arrow exists, or flipping the left one */}
                <img
                  src="/carousel_arrow_left.9172eaa1.svg"
                  alt="Next"
                  width={16}
                  height={16}
                  className="transform rotate-180"
                />
              </button>
            </div>
          </div>
          <div ref={scrollRef} className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {categoriesData.map((category) => (
              <div key={category.id} className="min-w-[100px] sm:min-w-[120px] text-center cursor-pointer group">
                <div className="p-1 border border-transparent group-hover:border-gray-300 rounded-lg">
                  <div className="bg-gray-100 rounded-full w-20 h-20 sm:w-24 sm:h-24 mx-auto flex items-center justify-center overflow-hidden mb-2 group-hover:shadow-md transition-shadow">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      width={80}
                      height={80}
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600">{category.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
