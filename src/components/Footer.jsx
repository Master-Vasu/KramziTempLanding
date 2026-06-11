import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { footerLinks } from "../data/products";
import { businessInfo } from "../data/business";

export default function Footer() {
  return (
    <footer className="bg-kramzi-lavender">
      <div className="border-b border-kramzi-purple/10 bg-kramzi-purple/5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-4 text-xs text-gray-700">
          <span className="font-semibold text-kramzi-purple">
            {businessInfo.name}
          </span>
          <Link to="/products-services" className="hover:text-kramzi-purple">
            Products & Services
          </Link>
          <Link to="/contact" className="hover:text-kramzi-purple">
            Contact
          </Link>
          <Link to="/policy/privacy" className="hover:text-kramzi-purple">
            Privacy Policy
          </Link>
          <Link to="/policy/terms" className="hover:text-kramzi-purple">
            Terms & Conditions
          </Link>
          <Link to="/policy/refund" className="hover:text-kramzi-purple">
            Refund Policy
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 inline-block rounded bg-kramzi-purple/20 px-4 py-2">
              <span className="font-serif text-xl font-semibold text-kramzi-purple">
                kramzi
              </span>
            </div>
            <p className="text-sm font-medium text-kramzi-purple-dark">
              {businessInfo.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">
              {businessInfo.tagline}. {businessInfo.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-kramzi-purple-dark">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.quick.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-700 transition hover:text-kramzi-purple"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-kramzi-purple-dark">
              Legal & Policies
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-700 transition hover:text-kramzi-purple"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold text-kramzi-purple-dark">
              Contact Information
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm text-gray-700">
                <MapPin
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-kramzi-purple"
                />
                <span>{businessInfo.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Phone size={16} className="text-kramzi-purple" />
                <a
                  href={`tel:${businessInfo.phone.replace(/\s/g, "")}`}
                  className="hover:text-kramzi-purple"
                >
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <Mail size={16} className="text-kramzi-purple" />
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="hover:text-kramzi-purple"
                >
                  {businessInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-kramzi-purple/10 pt-6 text-center text-xs text-gray-600">
          © 2024 {businessInfo.name}. All rights reserved. | {businessInfo.legalName}
        </p>
      </div>
    </footer>
  );
}
