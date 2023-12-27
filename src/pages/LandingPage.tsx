import HeaderSection from "../components/LandingPage/HeaderSection";
import LoveByUserSection from "../components/LandingPage/LoveByUserSection";
import DocumentSection from "../components/LandingPage/DocumentSection";
import ProductivitySection from "../components/LandingPage/ProductivitySection";
import ChooseUs from "../components/LandingPage/ChooseUs";
import TestimonialsSection from "../components/LandingPage/TestimonialsSection";

const LandingPage = () => {
  return (
    <div className="d-flex flex-column">
      <HeaderSection />
      <LoveByUserSection />
      <DocumentSection />
      <ProductivitySection />
      <ChooseUs />
      <TestimonialsSection />
    </div>
  );
};

export default LandingPage;
