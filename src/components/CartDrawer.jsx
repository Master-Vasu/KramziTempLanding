import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-black/40"
        onClick={() => setIsCartOpen(false)}
        aria-hidden
      />
      <aside className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-lg font-bold text-kramzi-purple">
            Your Cart ({items.length})
          </h2>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="text-gray-500 hover:text-gray-800"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-gray-500">
              <p className="text-lg">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="mt-4 rounded-full bg-kramzi-purple px-6 py-2 text-sm font-medium text-white"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 border-b border-gray-100 pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-kramzi-purple">
                      Rs. {item.price.toFixed(2)}
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="rounded border p-1 hover:bg-gray-50"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-medium">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="rounded border p-1 hover:bg-gray-50"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-red-500 hover:text-red-700"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t px-6 py-4">
            <div className="mb-4 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-kramzi-purple">
                Rs. {cartTotal.toFixed(2)}
              </span>
            </div>
            <button
              type="button"
              onClick={() => alert("Checkout is a demo — cart is working!")}
              className="w-full rounded-full bg-kramzi-purple py-3 text-sm font-semibold text-white transition hover:bg-kramzi-purple-dark"
            >
              Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
