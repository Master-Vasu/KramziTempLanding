import { Star } from "lucide-react";

export default function StarRating({ rating = 0, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = rating >= star;
        const half = !filled && rating >= star - 0.5;
        return (
          <Star
            key={star}
            size={size}
            className={
              filled
                ? "fill-kramzi-purple text-kramzi-purple"
                : half
                  ? "fill-kramzi-purple/50 text-kramzi-purple"
                  : "fill-transparent text-kramzi-purple/30"
            }
            strokeWidth={filled || half ? 0 : 1.5}
          />
        );
      })}
    </div>
  );
}
