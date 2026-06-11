import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";
import { videoTabs } from "../data/products";

export default function VideoPage() {
  const { id } = useParams();
  const tab = videoTabs.find((t) => t.id === id);

  if (!tab) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center">
        <p className="text-gray-600">Video not found</p>
        <Link to="/" className="mt-4 text-kramzi-purple">
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-kramzi-purple hover:underline"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-kramzi-purple md:text-4xl">
          {tab.title}
        </h1>
        <p className="mt-4 text-lg text-gray-600">{tab.description}</p>

        <div className="relative mt-8 overflow-hidden rounded-2xl shadow-lg">
          <img
            src={tab.image}
            alt={tab.title}
            className="aspect-video w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <button
              type="button"
              onClick={() => alert(`Playing: ${tab.title}`)}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-kramzi-purple shadow-xl transition hover:scale-110"
              aria-label="Play video"
            >
              <Play size={28} className="ml-1" fill="currentColor" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {videoTabs.map((t) => (
            <Link
              key={t.id}
              to={`/video/${t.id}`}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                t.id === id
                  ? "border-kramzi-purple bg-kramzi-lavender text-kramzi-purple"
                  : "border-gray-200 bg-white text-gray-600 hover:border-kramzi-purple/30"
              }`}
            >
              {t.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
