import { Outlet, useLocation } from "react-router-dom";

export default function AnimatedLayout() {
  const { pathname } = useLocation();
  const isProduct = pathname.startsWith("/product/");

  return (
    <div
      key={pathname}
      className={isProduct ? "page-from-top" : "page-fade-in"}
    >
      <Outlet />
    </div>
  );
}
