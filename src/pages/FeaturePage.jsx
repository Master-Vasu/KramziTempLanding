import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { featurePages } from "../data/products";

export default function FeaturePage() {
  const { slug } = useParams();
  const feature = featurePages[slug];

  if (!feature) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center">
        <p className="text-gray-600">Page not found</p>
        <Link to="/" className="mt-4 text-kramzi-purple">
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-kramzi-purple hover:underline"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold text-kramzi-purple md:text-4xl">
              {feature.title}
            </h1>
            <p className="mt-6 leading-relaxed text-gray-600">
              {feature.content}
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-block rounded-full bg-kramzi-purple px-8 py-3 text-sm font-semibold text-white transition hover:bg-kramzi-purple-dark"
            >
              Shop Now
            </Link>
          </div>
          <img
            src={feature.image}
            alt={feature.title}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
