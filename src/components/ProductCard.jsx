import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        {product.bestseller && (
          <span className="absolute left-3 top-3 rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            Bestseller
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-kramzi-purple">
          {product.name}
        </h3>

        {product.rating !== null && product.rating > 0 && (
          <div className="mt-1.5 flex items-center gap-1.5">
            <StarRating rating={product.rating} size={13} />
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>
        )}

        <div className="mt-2">
          <span className="text-sm font-bold text-gray-900">
            Rs. {product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="ml-2 text-xs text-gray-400 line-through">
              Rs. {product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-3 w-full rounded-lg border border-kramzi-purple/30 bg-kramzi-lavender/40 py-2.5 text-sm font-medium text-kramzi-purple transition hover:bg-kramzi-lavender"
        >
          Add to cart
        </button>
      </div>
    </Link>
  );
}
