// No changes from previous version, relies on ProductCard
import { allProductsData } from "../lib/data"
import { ProductCard } from "./product-card"

export function AllProductsSection() {
  return (
    <section id="products" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">All Products</h2>
        <div className="space-y-6">
          {allProductsData.map((product) => (
            <ProductCard key={product.id} product={product} variant="horizontal" />
          ))}
        </div>
      </div>
    </section>
  )
}
