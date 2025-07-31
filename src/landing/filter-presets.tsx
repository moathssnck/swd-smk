
export function FilterPresets() {
  const filters = [
    { id: "free-delivery", label: "Free Delivery", icon: "/free_delivery.33e8a802.svg" },
    { id: "fast-delivery", label: "Within 40 Minutes" },
    { id: "special-delivery", label: "Special Delivery" },
  ]

  return (
    <section className="py-4 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className="px-4 py-2 border border-gray-300 bg-white rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center"
            >
              {filter.icon && (
                <img src={filter.icon || "/placeholder.svg"} alt="" width={16} height={16} className="mr-2" />
              )}
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
