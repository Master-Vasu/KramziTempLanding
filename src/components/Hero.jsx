import { Link } from "react-router-dom";
import { heroImage } from "../data/products";

export default function Hero() {
  return (
    <section className="relative min-h-[420px] overflow-hidden md:min-h-[520px]">
      <img
        src={heroImage}
        alt="Kramzi Essentials — natural beauty"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-kramzi-purple-dark/80 via-kramzi-purple/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl flex-col justify-center px-6 py-14 md:min-h-[520px] md:px-12 md:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/80 md:text-sm">
          kramzi essentials
        </p>

        <h1 className="mt-3 max-w-2xl font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          Kramzi Essentials
        </h1>

        <h2 className="mt-5 max-w-xl text-xl font-semibold text-white md:text-2xl lg:text-3xl">
          Nourish Your Lips Naturally
        </h2>

        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90 md:text-base lg:text-lg">
          Infused with real fruit extracts for soft, hydrated lips
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/shop"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-kramzi-purple shadow-lg transition hover:bg-kramzi-lavender"
          >
            Shop Now
          </Link>
          <Link
            to="/contact"
            className="rounded-full border-2 border-white/80 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
