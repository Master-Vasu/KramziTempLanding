import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getProductById } from "../data/products";

const showerProduct = getProductById(6);

export default function ShowerGelSection() {
  const { addToCart } = useCart();

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:gap-16">
        <Link to={`/product/${showerProduct.id}`} className="block overflow-hidden">
          <img
            src={showerProduct.image}
            alt="Shower Gel"
            className="aspect-[4/3] w-full object-cover transition hover:scale-[1.02]"
          />
        </Link>

        <div>
          <h2 className="text-4xl font-bold text-kramzi-purple-light md:text-5xl">
            Shower Gel
          </h2>
          <h3 className="mt-3 text-lg font-semibold text-kramzi-purple-light md:text-xl">
            Revitalize Your Skin with the Essence of the Ocean
          </h3>
          <p className="mt-6 text-base leading-relaxed text-kramzi-purple-light/80">
            {showerProduct.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={`/product/${showerProduct.id}`}
              className="rounded-full bg-kramzi-purple-light px-10 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
            >
              View
            </Link>
            <button
              type="button"
              onClick={() => addToCart(showerProduct)}
              className="rounded-full border border-kramzi-purple-light px-8 py-2.5 text-sm font-medium text-kramzi-purple-light transition hover:bg-kramzi-lavender"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <h2 className="mt-20 text-center text-4xl font-extrabold uppercase tracking-wider text-kramzi-purple-light md:text-5xl">
        Clean Beauty
      </h2>
    </section>
  );
}
