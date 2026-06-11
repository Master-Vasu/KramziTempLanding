import { bestSellers } from "../data/products";
import ProductCard from "./ProductCard";

export default function BestSellers() {
  return (
    <section className="bg-gray-50 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-kramzi-purple md:text-4xl">
          Best Sellers
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
