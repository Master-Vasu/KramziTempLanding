import { allProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  return (
    <section className="bg-gray-50 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="mb-2 text-center text-3xl font-bold text-kramzi-purple md:text-4xl">
          Shop All Products
        </h1>
        <p className="mb-10 text-center text-gray-600">
          Discover our premium skincare essentials
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
