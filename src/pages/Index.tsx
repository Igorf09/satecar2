import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import AppSection from "@/components/AppSection";
import PlansSection from "@/components/PlansSection";
import ServicesDetailSection from "@/components/ServicesDetailSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ChatbotWidget from "@/components/ChatbotWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <AppSection />
        <PlansSection />
        <ServicesDetailSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ChatbotWidget />
    </div>
  );
};

export default Index;
