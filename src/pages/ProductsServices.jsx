import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { businessInfo, productServices } from "../data/business";
import { allProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductsServices() {
  return (
    <section className="bg-gray-50 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-kramzi-purple hover:underline"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-kramzi-purple md:text-4xl">
          Products & Services
        </h1>
        <p className="mt-3 max-w-3xl text-gray-600">
          {businessInfo.name} offers a curated range of premium skincare and
          wellness products. Below is a description of our product categories and
          available items.
        </p>

        <div className="mt-10 space-y-8">
          {productServices.map((service) => (
            <div
              key={service.category}
              className="rounded-2xl bg-white p-6 shadow-sm md:p-8"
            >
              <h2 className="text-xl font-bold text-kramzi-purple">
                {service.category}
              </h2>
              <p className="mt-3 text-gray-600">{service.description}</p>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-800"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-kramzi-purple" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="mt-14 text-2xl font-bold text-kramzi-purple">
          All Products
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
