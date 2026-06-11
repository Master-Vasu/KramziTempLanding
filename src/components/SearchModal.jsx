import { useState } from "react";
import { X, Search } from "lucide-react";
import { useCart } from "../context/CartContext";
import { allProducts } from "../data/products";
import { Link, useNavigate } from "react-router-dom";

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, addToCart } = useCart();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  if (!isSearchOpen) return null;

  const results = allProducts.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-black/40"
        onClick={() => setIsSearchOpen(false)}
        aria-hidden
      />
      <div className="fixed left-1/2 top-20 z-[70] w-full max-w-lg -translate-x-1/2 rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex items-center gap-3 border-b pb-4">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="flex-1 text-base outline-none"
            autoFocus
          />
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            className="text-gray-400 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        <ul className="mt-4 max-h-64 space-y-2 overflow-y-auto">
          {results.length === 0 ? (
            <li className="py-4 text-center text-sm text-gray-500">
              No products found
            </li>
          ) : (
            results.map((product) => (
              <li
                key={product.id}
                className="flex cursor-pointer items-center gap-3 rounded-lg p-2 hover:bg-gray-50"
                onClick={() => {
                  setIsSearchOpen(false);
                  navigate(`/product/${product.id}`);
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-12 w-12 rounded object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium">{product.name}</p>
                  <p className="text-xs text-kramzi-purple">
                    Rs. {product.price.toFixed(2)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                    setIsSearchOpen(false);
                  }}
                  className="rounded-full bg-kramzi-lavender px-3 py-1 text-xs font-medium text-kramzi-purple"
                >
                  Add
                </button>
              </li>
            ))
          )}
        </ul>

        <Link
          to="/shop"
          onClick={() => setIsSearchOpen(false)}
          className="mt-4 block text-center text-sm font-medium text-kramzi-purple hover:underline"
        >
          View all products
        </Link>
      </div>
    </>
  );
}
