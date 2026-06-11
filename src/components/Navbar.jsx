import { Link, useLocation } from "react-router-dom";
import { Search, User, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const location = useLocation();
  const { cartCount, setIsCartOpen, setIsSearchOpen } = useCart();
  const { user, openLogin } = useAuth();

  const links = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-gradient-to-r from-kramzi-purple-dark via-kramzi-purple to-kramzi-purple-light px-4 py-3 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link to="/" className="text-white">
            <div className="font-serif text-2xl font-semibold leading-tight tracking-wide md:text-3xl">
              kramzi
            </div>
            <div className="text-[10px] font-medium tracking-[0.25em] text-white/90 md:text-xs">
              ESSENTIALS
            </div>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium text-white transition hover:text-white/80 ${
                    location.pathname === link.path
                      ? "border-b border-white pb-0.5"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 text-white md:gap-5">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="transition hover:opacity-70"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              onClick={() => openLogin(user ? "login" : "login")}
              className="relative transition hover:opacity-70"
              aria-label="Account"
            >
              <User size={20} />
              {user && (
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-green-400" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative transition hover:opacity-70"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-bold text-kramzi-purple">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <ul className="mt-3 flex justify-center gap-6 border-t border-white/20 pt-3 md:hidden">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-xs font-medium text-white ${
                  location.pathname === link.path ? "underline" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
