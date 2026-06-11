import Hero from "../components/Hero";
import BusinessOverview from "../components/BusinessOverview";
import BestSellers from "../components/BestSellers";
import StrawberrySection from "../components/StrawberrySection";
import BlackberrySection from "../components/BlackberrySection";
import ShowerGelSection from "../components/ShowerGelSection";
import CleanBeauty from "../components/CleanBeauty";
import PromoBanner from "../components/PromoBanner";
import CustomersSection from "../components/CustomersSection";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessOverview />
      <BestSellers />
      <StrawberrySection />
      <BlackberrySection />
      <ShowerGelSection />
      <CleanBeauty />
      <PromoBanner />
      <CustomersSection />
    </>
  );
}
