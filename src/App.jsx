import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import AnnouncementBar from "./components/AnnouncementBar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import SearchModal from "./components/SearchModal";
import LoginModal from "./components/LoginModal";
import Toast from "./components/Toast";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedLayout from "./components/AnimatedLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import PolicyPage from "./pages/PolicyPage";
import VideoPage from "./pages/VideoPage";
import FeaturePage from "./pages/FeaturePage";
import ProductsServices from "./pages/ProductsServices";

export default function App() {
  return (
    <CartProvider>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen bg-white">
            <Navbar />
            <AnnouncementBar />
            <main className="overflow-x-hidden">
              <Routes>
                <Route element={<AnimatedLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/products-services" element={<ProductsServices />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/policy/:type" element={<PolicyPage />} />
                  <Route path="/video/:id" element={<VideoPage />} />
                  <Route path="/feature/:slug" element={<FeaturePage />} />
                </Route>
              </Routes>
            </main>
            <Footer />
            <CartDrawer />
            <SearchModal />
            <LoginModal />
            <Toast />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </CartProvider>
  );
}
