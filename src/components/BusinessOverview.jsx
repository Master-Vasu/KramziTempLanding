import { Link } from "react-router-dom";
import { businessInfo } from "../data/business";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function BusinessOverview() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-kramzi-purple">
            About Our Business
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-gray-900 md:text-4xl">
            {businessInfo.name}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            {businessInfo.description}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-kramzi-lavender bg-kramzi-lavender/30 p-6">
            <MapPin className="text-kramzi-purple" size={22} />
            <h3 className="mt-3 font-semibold text-gray-900">Address</h3>
            <p className="mt-2 text-sm text-gray-600">{businessInfo.address}</p>
          </div>
          <div className="rounded-2xl border border-kramzi-lavender bg-kramzi-lavender/30 p-6">
            <Phone className="text-kramzi-purple" size={22} />
            <h3 className="mt-3 font-semibold text-gray-900">Phone</h3>
            <a
              href={`tel:${businessInfo.phone.replace(/\s/g, "")}`}
              className="mt-2 block text-sm text-gray-600 hover:text-kramzi-purple"
            >
              {businessInfo.phone}
            </a>
          </div>
          <div className="rounded-2xl border border-kramzi-lavender bg-kramzi-lavender/30 p-6">
            <Mail className="text-kramzi-purple" size={22} />
            <h3 className="mt-3 font-semibold text-gray-900">Email</h3>
            <a
              href={`mailto:${businessInfo.email}`}
              className="mt-2 block text-sm text-gray-600 hover:text-kramzi-purple"
            >
              {businessInfo.email}
            </a>
          </div>
          <div className="rounded-2xl border border-kramzi-lavender bg-kramzi-lavender/30 p-6">
            <Clock className="text-kramzi-purple" size={22} />
            <h3 className="mt-3 font-semibold text-gray-900">Business Hours</h3>
            <p className="mt-2 text-sm text-gray-600">
              {businessInfo.businessHours}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/products-services"
            className="rounded-full bg-kramzi-purple px-8 py-3 text-sm font-semibold text-white transition hover:bg-kramzi-purple-dark"
          >
            View Products & Services
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-kramzi-purple px-8 py-3 text-sm font-semibold text-kramzi-purple transition hover:bg-kramzi-lavender"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
