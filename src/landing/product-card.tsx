import { PlusIcon } from 'lucide-react';
import type { Product } from "../lib/types"; // Adjusted path
import { useCart } from '../cartContext';

interface ProductCardProps {
  product: Product;
  variant?: "vertical" | "horizontal";
}

export function ProductCard({ product, variant = "vertical" }: ProductCardProps) {
  const { addToCart } = useCart();

  const commonButtonClasses =
    "px-4 py-2  bg-[#025380]  text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center";
  const iconClasses = "mr-2 h-4 w-4";

  // Default placeholder image, adjust dimensions as needed
  const placeholderImageVertical = "/placeholder.svg?width=300&height=300";
  const placeholderImageHorizontal = "/placeholder.svg?width=400&height=300";


  if (variant === "horizontal") {
    return (
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="relative w-full md:w-1/3 h-48 md:h-auto flex-shrink-0">
          <img
            src={product.image || placeholderImageHorizontal}
            alt={product.name}
            className="absolute top-0 left-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-between p-4 md:w-2/3">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">{product.name}</h3>
            {product.description && <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{product.description}</p>}
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-lg font-bold text-blue-600 dark:text-blue-500">{product.price.toFixed(2)} BHD</p>
            <button className={commonButtonClasses} onClick={() => addToCart(product)}>
              <PlusIcon className={iconClasses} aria-hidden="true" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Vertical card
  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 dark:bg-gray-800 dark:border-gray-700 h-full">
      <div className="relative w-full aspect-square">
        <img
          src={product.image || placeholderImageVertical}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-1 flex-grow">{product.name}</h3>
        <p className="text-lg font-bold text-blue-600 dark:text-blue-500 mt-1">{product.price.toFixed(2)} BHD</p>
      </div>
      <div className="p-4 pt-0">
        <button className={`${commonButtonClasses} w-full`} onClick={() => addToCart(product)}>
          <PlusIcon className={iconClasses} aria-hidden="true" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
