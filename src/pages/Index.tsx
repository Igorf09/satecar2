import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import BenefitsSection from "@/components/BenefitsSection";
import ServicesSection from "@/components/ServicesSection";
import AppSection from "@/components/AppSection";
import PlansSection from "@/components/PlansSection";
import ServicesDetailSection from "@/components/ServicesDetailSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SegundaViaFloat from "@/components/SegundaViaFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 md:pt-28">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <BenefitsSection />
        <ServicesSection />
        <AppSection />
        <PlansSection />
        <ServicesDetailSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <SegundaViaFloat />
    </div>
  );
};

export default Index;
