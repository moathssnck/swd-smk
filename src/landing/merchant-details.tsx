
export function MerchantDetails() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="relative h-auto  w-full">
            <img src="/mb.jpg" alt="National Fish Menu"  />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-2 py-1 bg-red-600 text-white text-xs font-semibold rounded">30% Discount</span>
              <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs font-semibold rounded">Support Local</span>
            </div>
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm flex items-center">
              <img src="/driver-white.39436dda.svg" alt="Delivery" width={16} height={16} className="mr-1" />
              40 Minutes
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-1">National Fish Menu</h2>
            <div className="flex items-center space-x-4 text-gray-600 text-sm mb-4">
              <div className="flex items-center">
                <img src="/star_yellow.3109f807.svg" alt="Star" width={16} height={16} className="mr-1" /> 4.7
              </div>
              <span>Fresh and Imported Fish and Premium Shrimp</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
              <div>
                <p className="text-gray-500">Delivery Time</p>
                <p className="font-semibold text-gray-700">40 Minutes</p>
              </div>
              <div>
                <p className="text-gray-500">Rating</p>
                <p className="font-semibold text-gray-700">4.7</p>
              </div>
              <div>
                <p className="text-gray-500">Distance</p>
                <p className="font-semibold text-gray-700">15 km</p>
              </div>
              <div>
                <p className="text-gray-500">Working Hours</p>
                <p className="font-semibold text-green-600 flex items-center">
                  <span className="h-2 w-2  bg-[#025380] -500 rounded-full mr-2"></span> Open
                </p>
              </div>
            </div>
            <div className="relative mb-4">
              <img
                src="/search.8dc73f65.svg"
                alt="Search Icon"
                width={18}
                height={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="search"
                placeholder="Search in National Fish Menu..."
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <p className="text-gray-600 text-sm">
              Order now through our website and get fast delivery within 40 minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
