import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getProductById } from "../data/products";

const strawberryProduct = getProductById(2);

export default function StrawberrySection() {
  const { addToCart } = useCart();

  return (
    <section className="bg-slate-50 py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:gap-16">
        <Link to={`/product/${strawberryProduct.id}`} className="block">
          <div className="split-image-container aspect-[4/5] w-full md:aspect-square">
            <img
              src={strawberryProduct.images[1]}
              alt="Moisty Strawberry Lip Butter"
              className="split-image-color"
            />
            <img
              src={strawberryProduct.images[1]}
              alt=""
              aria-hidden
              className="split-image-gray"
            />
          </div>
        </Link>

        <div>
          <h2 className="text-3xl font-bold text-kramzi-purple-light md:text-4xl">
            Moisty Strawberry Lip Butter
          </h2>
          <p className="mt-6 text-base leading-relaxed text-kramzi-purple/80 md:text-lg">
            {strawberryProduct.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={`/product/${strawberryProduct.id}`}
              className="rounded-full bg-kramzi-purple-light px-10 py-3 text-sm font-semibold text-white transition hover:bg-kramzi-purple"
            >
              View
            </Link>
            <button
              type="button"
              onClick={() => addToCart(strawberryProduct)}
              className="rounded-full border border-kramzi-purple-light px-8 py-3 text-sm font-semibold text-kramzi-purple-light transition hover:bg-kramzi-lavender"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-2 gap-4 px-4 md:grid-cols-4">
        {strawberryProduct.images.slice(0, 4).map((src, i) => (
          <Link
            key={src}
            to={`/product/${strawberryProduct.id}`}
            className={`aspect-[3/4] overflow-hidden rounded-2xl ${
              i < 2 ? "bg-black" : "bg-gray-200"
            }`}
          >
            <img
              src={src}
              alt={`Strawberry product ${i + 1}`}
              className="h-full w-full object-cover object-bottom"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
