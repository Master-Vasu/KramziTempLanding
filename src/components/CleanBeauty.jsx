import { Link } from "react-router-dom";
import { FlaskConical, Heart, Droplets } from "lucide-react";
import { cleanBeautyFeatures } from "../data/products";

const iconMap = {
  flask: FlaskConical,
  rabbit: Heart,
  plant: Droplets,
};

export default function CleanBeauty() {
  return (
    <section className="bg-white pb-10 pt-4">
      <p className="text-center text-base text-kramzi-purple/70">
        with uncompromised efficacy
      </p>

      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-10 px-4 sm:grid-cols-3">
        {cleanBeautyFeatures.map((feature) => {
          const Icon = iconMap[feature.icon] || FlaskConical;
          return (
            <Link
              key={feature.id}
              to={`/feature/${feature.slug}`}
              className="group flex flex-col items-center text-center transition hover:scale-105"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-kramzi-purple text-white transition group-hover:bg-kramzi-purple-dark">
                {feature.icon === "rabbit" ? (
                  <span className="text-xs font-bold leading-tight">
                    CRUELTY
                    <br />
                    FREE
                  </span>
                ) : (
                  <Icon size={32} strokeWidth={1.5} />
                )}
              </div>
              <p className="mt-4 text-xs font-semibold tracking-wide text-kramzi-purple">
                {feature.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
