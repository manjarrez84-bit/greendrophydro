import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Comparison from "@/components/Comparison";
import GrowthTimeline from "@/components/GrowthTimeline";
import AssemblySteps from "@/components/AssemblySteps";
import BestPlants from "@/components/BestPlants";
import KitDetails from "@/components/KitDetails";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import MaintenanceTips from "@/components/MaintenanceTips";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MadeWithDyad } from "@/components/made-with-dyad";
import HowItWorks from "@/components/HowItWorks";
import BackToTopButton from "@/components/BackToTopButton"; // Import the new component

const Index = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-green-100 selection:text-green-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Comparison />
        <HowItWorks />
        <GrowthTimeline />
        <AssemblySteps />
        <BestPlants />
        <KitDetails />
        <TechnicalSpecs />
        <MaintenanceTips />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <MadeWithDyad />
      <BackToTopButton /> {/* Add the BackToTopButton here */}
    </div>
  );
};

export default Index;