import { Link } from "react-router-dom";
import { videoTabs } from "../data/products";
import { useCart } from "../context/CartContext";
import { getProductById } from "../data/products";

const blackberryProduct = getProductById(1);

export default function BlackberrySection() {
  const { addToCart } = useCart();

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-wrap gap-3 overflow-x-auto pb-2">
          {videoTabs.map((tab) => (
            <Link
              key={tab.id}
              to={`/video/${tab.id}`}
              className="whitespace-nowrap rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-medium text-kramzi-purple/70 transition hover:border-kramzi-purple/30 hover:bg-kramzi-lavender md:text-sm"
            >
              {tab.label}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl font-bold text-kramzi-purple md:text-5xl">
              Moisty Blackberry Lip Butter
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-kramzi-purple/70 md:text-lg">
              {blackberryProduct.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={`/product/${blackberryProduct.id}`}
                className="rounded-full bg-kramzi-purple px-10 py-3 text-sm font-semibold text-white transition hover:bg-kramzi-purple-dark"
              >
                View
              </Link>
              <button
                type="button"
                onClick={() => addToCart(blackberryProduct)}
                className="rounded-full border border-kramzi-purple px-8 py-3 text-sm font-semibold text-kramzi-purple transition hover:bg-kramzi-lavender"
              >
                Add to cart
              </button>
            </div>
          </div>

          <Link to={`/product/${blackberryProduct.id}`} className="block">
            <div className="relative overflow-hidden rounded-r-3xl">
              <img
                src={blackberryProduct.image}
                alt="Moisty Blackberry Lip Butter"
                className="aspect-square w-full object-cover transition hover:scale-[1.02]"
              />
              <div className="absolute inset-y-0 right-0 w-1/3 bg-kramzi-purple/40" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
