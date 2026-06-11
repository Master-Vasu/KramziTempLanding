import { Star } from "lucide-react";
import { galleryImages, testimonials } from "../data/products";

function TestimonialCard({ testimonial }) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-2xl">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-5 pt-12 text-center">
        {testimonial.rating > 0 ? (
          <div className="mb-1 flex justify-center gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={14}
                className={
                  s <= testimonial.rating
                    ? "fill-white text-white"
                    : "fill-transparent text-white/60"
                }
                strokeWidth={s <= testimonial.rating ? 0 : 1.5}
              />
            ))}
          </div>
        ) : (
          <div className="mb-1 flex justify-center gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={14}
                className="fill-transparent text-white/60"
                strokeWidth={1.5}
              />
            ))}
          </div>
        )}
        <p className="text-sm font-semibold text-white">{testimonial.name}</p>
      </div>
    </div>
  );
}

export default function CustomersSection() {
  return (
    <section className="bg-slate-50 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex gap-3 overflow-x-auto pb-2">
          {galleryImages.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              className="h-28 w-28 flex-shrink-0 rounded-2xl object-cover md:h-36 md:w-36"
            />
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-medium text-gray-900">
            From our customers
          </h2>
          <div className="mt-2 flex items-center justify-center gap-1.5">
            <span className="text-lg font-medium">4.1</span>
            <Star size={16} className="fill-gray-900 text-gray-900" />
            <span className="text-sm text-gray-500">(16)</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
