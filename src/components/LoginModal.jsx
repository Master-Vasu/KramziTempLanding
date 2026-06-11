import { useState } from "react";
import { X, User, Mail, Lock } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function LoginModal() {
  const {
    isLoginOpen,
    setIsLoginOpen,
    authMode,
    setAuthMode,
    login,
    signup,
    user,
    logout,
  } = useAuth();
  const { showToast } = useCart();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!isLoginOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (authMode === "login") {
      const ok = login(email, password);
      if (ok) {
        showToast?.(`Welcome back, ${email.split("@")[0]}!`);
        resetForm();
      } else {
        setError("Please enter email and password");
      }
    } else {
      if (password.length < 4) {
        setError("Password must be at least 4 characters");
        return;
      }
      const ok = signup(name, email, password);
      if (ok) {
        showToast?.(`Account created! Welcome, ${name}!`);
        resetForm();
      } else {
        setError("Please fill all fields");
      }
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setError("");
  };

  const handleClose = () => {
    setIsLoginOpen(false);
    resetForm();
  };

  return (
    <>
      <div
        className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden
      />
      <div className="fixed left-1/2 top-1/2 z-[90] w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl md:p-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-kramzi-purple">
            {user ? "My Account" : authMode === "login" ? "Log In" : "Sign Up"}
          </h2>
          <button
            type="button"
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-700"
            aria-label="Close"
          >
            <X size={22} />
          </button>
        </div>

        {user ? (
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-kramzi-lavender">
              <User size={32} className="text-kramzi-purple" />
            </div>
            <p className="text-lg font-semibold text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
            <button
              type="button"
              onClick={() => {
                logout();
                showToast?.("Logged out successfully");
              }}
              className="mt-6 w-full rounded-full border border-kramzi-purple py-3 text-sm font-semibold text-kramzi-purple transition hover:bg-kramzi-lavender"
            >
              Log Out
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6 flex rounded-full bg-gray-100 p-1">
              <button
                type="button"
                onClick={() => {
                  setAuthMode("login");
                  setError("");
                }}
                className={`flex-1 rounded-full py-2 text-sm font-medium transition ${
                  authMode === "login"
                    ? "bg-kramzi-purple text-white shadow"
                    : "text-gray-600"
                }`}
              >
                Log In
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthMode("signup");
                  setError("");
                }}
                className={`flex-1 rounded-full py-2 text-sm font-medium transition ${
                  authMode === "signup"
                    ? "bg-kramzi-purple text-white shadow"
                    : "text-gray-600"
                }`}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {authMode === "signup" && (
                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none focus:border-kramzi-purple"
                  />
                </div>
              )}
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none focus:border-kramzi-purple"
                  required
                />
              </div>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-4 outline-none focus:border-kramzi-purple"
                  required
                />
              </div>

              {error && (
                <p className="text-center text-sm text-red-500">{error}</p>
              )}

              <button
                type="submit"
                className="w-full rounded-full bg-kramzi-purple py-3 text-sm font-semibold text-white transition hover:bg-kramzi-purple-dark"
              >
                {authMode === "login" ? "Log In" : "Create Account"}
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
}
