import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { getProductById, getRelatedProducts } from "../data/products";
import { useCart } from "../context/CartContext";
import StarRating from "../components/StarRating";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);
  const { addToCart } = useCart();
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center px-4">
        <p className="text-lg text-gray-600">Product not found</p>
        <Link to="/shop" className="mt-4 text-kramzi-purple hover:underline">
          Back to Shop
        </Link>
      </div>
    );
  }

  const images = product.images || [product.image];
  const relatedProducts = getRelatedProducts(id);

  return (
    <section className="bg-gray-50 py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-kramzi-purple hover:underline"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="aspect-square w-full object-cover"
              />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {images.map((src, i) => (
                <button
                  key={`${product.id}-img-${i}`}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`overflow-hidden rounded-xl border-2 transition ${
                    activeImage === i
                      ? "border-kramzi-purple shadow-md"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={src}
                    alt={`${product.name} ${i + 1}`}
                    className="aspect-square w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            {product.bestseller && (
              <span className="mb-3 inline-block w-fit rounded bg-red-600 px-3 py-1 text-xs font-bold uppercase text-white">
                Bestseller
              </span>
            )}
            <p className="text-sm font-medium uppercase tracking-wide text-kramzi-purple/70">
              {product.category}
            </p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
              {product.name}
            </h1>

            {product.rating !== null && product.rating > 0 && (
              <div className="mt-3 flex items-center gap-2">
                <StarRating rating={product.rating} size={18} />
                <span className="text-sm text-gray-500">
                  ({product.reviews} reviews)
                </span>
              </div>
            )}

            <div className="mt-4">
              <span className="text-2xl font-bold text-kramzi-purple">
                Rs. {product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="ml-3 text-lg text-gray-400 line-through">
                  Rs. {product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <p className="mt-6 leading-relaxed text-gray-600">
              {product.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => addToCart(product)}
                className="flex items-center gap-2 rounded-full bg-kramzi-purple px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-kramzi-purple-dark"
              >
                <ShoppingBag size={18} />
                Add to cart
              </button>
              <Link
                to="/shop"
                className="rounded-full border border-kramzi-purple px-8 py-3.5 text-sm font-semibold text-kramzi-purple transition hover:bg-kramzi-lavender"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16 border-t border-gray-200 pt-14 md:mt-20">
            <h2 className="mb-8 text-center text-2xl font-bold text-kramzi-purple md:text-3xl">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
