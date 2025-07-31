// No changes from previous version, relies on ProductCard
import { offersData } from "../lib/data"
import { ProductCard } from "./product-card"
export function OffersSection() {
  return (
    <section id="offers" className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Today's Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {offersData.map((product) => (
            <ProductCard key={product.id} product={product} variant="vertical" />
          ))}
        </div>
      </div>
    </section>
  )
}
