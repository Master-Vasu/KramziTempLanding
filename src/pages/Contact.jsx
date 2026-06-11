import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { businessInfo } from "../data/business";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="bg-gray-50 py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="mb-2 text-center text-3xl font-bold text-kramzi-purple md:text-4xl">
          Contact Information
        </h1>
        <p className="mb-2 text-center font-medium text-gray-800">
          {businessInfo.name}
        </p>
        <p className="mb-10 text-center text-gray-600">
          Reach out to us for orders, returns, or any enquiries
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-6 shadow-sm md:p-8"
          >
            <h2 className="mb-6 text-lg font-bold text-gray-900">
              Send us a Message
            </h2>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none focus:border-kramzi-purple"
              />
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none focus:border-kramzi-purple"
              />
            </div>
            <div className="mb-6">
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none focus:border-kramzi-purple"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-kramzi-purple py-3 text-sm font-semibold text-white transition hover:bg-kramzi-purple-dark"
            >
              Send Message
            </button>
            {submitted && (
              <p className="mt-3 text-center text-sm font-medium text-green-600">
                Message sent successfully! We will respond within 24 hours.
              </p>
            )}
          </form>

          <div className="space-y-6">
            <div className="flex gap-3 rounded-2xl bg-white p-5 shadow-sm">
              <MapPin className="mt-0.5 text-kramzi-purple" size={20} />
              <div>
                <h3 className="font-semibold text-gray-900">Business Address</h3>
                <p className="mt-1 text-sm text-gray-600">
                  {businessInfo.address}
                </p>
              </div>
            </div>
            <div className="flex gap-3 rounded-2xl bg-white p-5 shadow-sm">
              <Phone className="text-kramzi-purple" size={20} />
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <a
                  href={`tel:${businessInfo.phone.replace(/\s/g, "")}`}
                  className="mt-1 text-sm text-gray-600 hover:text-kramzi-purple"
                >
                  {businessInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-3 rounded-2xl bg-white p-5 shadow-sm">
              <Mail className="text-kramzi-purple" size={20} />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="mt-1 text-sm text-gray-600 hover:text-kramzi-purple"
                >
                  {businessInfo.email}
                </a>
              </div>
            </div>
            <div className="flex gap-3 rounded-2xl bg-white p-5 shadow-sm">
              <Clock className="text-kramzi-purple" size={20} />
              <div>
                <h3 className="font-semibold text-gray-900">Business Hours</h3>
                <p className="mt-1 text-sm text-gray-600">
                  {businessInfo.businessHours}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-kramzi-lavender/50 p-5">
              <p className="text-sm font-medium text-kramzi-purple">
                Legal & Policies
              </p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                <Link to="/policy/privacy" className="text-gray-700 hover:text-kramzi-purple">
                  Privacy Policy
                </Link>
                <Link to="/policy/terms" className="text-gray-700 hover:text-kramzi-purple">
                  Terms & Conditions
                </Link>
                <Link to="/policy/refund" className="text-gray-700 hover:text-kramzi-purple">
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
