import { useCart } from "../context/CartContext";
import { CheckCircle } from "lucide-react";

export default function Toast() {
  const { toast } = useCart();
  if (!toast) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 toast-enter">
      <div className="flex items-center gap-2 rounded-full bg-kramzi-purple px-6 py-3 text-sm font-medium text-white shadow-lg">
        <CheckCircle size={18} />
        {toast}
      </div>
    </div>
  );
}
