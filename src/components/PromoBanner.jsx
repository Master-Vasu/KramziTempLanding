import { Link } from "react-router-dom";
import { Shield, Heart, Droplets, Smile } from "lucide-react";
import { promoBenefits, getProductById } from "../data/products";

const lipMaskProduct = getProductById(5);

const benefitIcons = {
  heart: Heart,
  droplet: Droplets,
  lips: Smile,
};

export default function PromoBanner() {
  return (
    <section className="mx-4 mb-14 md:mx-auto md:max-w-7xl">
      <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-pink-400 via-pink-200 to-pink-50 px-6 py-10 shadow-lg md:px-12 md:py-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-3 lg:gap-8">
          {/* Left — Product */}
          <Link
            to={`/product/${lipMaskProduct.id}`}
            className="group flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 h-40 w-40 rounded-full bg-pink-500/30 blur-2xl" />
              <div className="absolute -right-2 top-4 h-24 w-24 rounded-full bg-pink-300/50 blur-xl" />
              <div className="relative overflow-hidden rounded-2xl border-4 border-white/60 shadow-2xl transition group-hover:scale-[1.02]">
                <img
                  src={lipMaskProduct.image}
                  alt="Strawberry Lip Mask"
                  className="h-56 w-56 object-cover md:h-64 md:w-64"
                />
              </div>
              <p className="mt-3 text-center text-sm font-semibold text-pink-900/80 lg:text-left">
                Strawberry Lip Mask
              </p>
            </div>
          </Link>

          {/* Center — Trust Badge */}
          <div className="flex justify-center">
            <div className="w-full max-w-xs rounded-2xl border-2 border-pink-200 bg-white px-6 py-8 text-center shadow-xl md:px-10 md:py-10">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-pink-50">
                <Shield className="text-pink-500" size={32} strokeWidth={1.5} />
              </div>
              <p className="font-serif text-base italic text-gray-700">
                Trusted by
              </p>
              <p className="text-5xl font-extrabold leading-tight text-pink-500 md:text-6xl">
                3000+
              </p>
              <p className="font-serif text-2xl italic text-gray-900 md:text-3xl">
                Doctors
              </p>
              <div className="mx-auto mt-4 h-px w-16 bg-pink-200" />
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-pink-500">
                Doctor Trusted, Beauty Approved
              </p>
            </div>
          </div>

          {/* Right — Benefits + circular image */}
          <div className="flex flex-col items-center gap-6 lg:items-end">
            <ul className="w-full max-w-xs space-y-4">
              {promoBenefits.map((benefit) => {
                const Icon = benefitIcons[benefit.icon] || Heart;
                return (
                  <li
                    key={benefit.id}
                    className="flex items-center gap-3 text-sm font-medium text-gray-800"
                  >
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 border-pink-400 bg-white/70">
                      <Icon size={18} className="text-pink-500" strokeWidth={1.5} />
                    </span>
                    {benefit.text}
                  </li>
                );
              })}
            </ul>
            <img
              src="/images/makeup-flatlay.jpg"
              alt="Kramzi beauty products"
              className="h-36 w-36 rounded-full border-4 border-white object-cover shadow-xl md:h-40 md:w-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
