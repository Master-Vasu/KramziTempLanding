import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { policyContent } from "../data/business";
import { businessInfo } from "../data/business";

const allPolicies = [
  { type: "privacy", label: "Privacy Policy" },
  { type: "terms", label: "Terms & Conditions" },
  { type: "refund", label: "Refund Policy" },
  { type: "shipping", label: "Shipping Policy" },
];

export default function PolicyPage() {
  const { type } = useParams();
  const policy = policyContent[type];

  if (!policy) {
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
    <section className="bg-gray-50 py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-kramzi-purple hover:underline"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <p className="text-sm font-medium text-kramzi-purple">
          {businessInfo.name}
        </p>
        <h1 className="mt-1 text-3xl font-bold text-kramzi-purple md:text-4xl">
          {policy.title}
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Last updated: {policy.lastUpdated}
        </p>

        <div className="mt-8 space-y-6">
          {policy.sections.map((section) => (
            <div
              key={section.heading}
              className="rounded-2xl bg-white p-6 shadow-sm md:p-8"
            >
              <h2 className="text-lg font-bold text-gray-900">
                {section.heading}
              </h2>
              <p className="mt-3 leading-relaxed text-gray-700">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-kramzi-lavender/50 p-6">
          <p className="text-sm text-gray-700">
            For any questions regarding this policy, contact us:
          </p>
          <p className="mt-2 text-sm font-medium text-kramzi-purple">
            {businessInfo.email} | {businessInfo.phone}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {allPolicies.map((p) => (
            <Link
              key={p.type}
              to={`/policy/${p.type}`}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                p.type === type
                  ? "border-kramzi-purple bg-kramzi-lavender text-kramzi-purple"
                  : "border-gray-200 bg-white text-gray-600 hover:border-kramzi-purple/30"
              }`}
            >
              {p.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
