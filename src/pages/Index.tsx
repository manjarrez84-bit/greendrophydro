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
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-green-100 selection:text-green-900">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Comparison />
        <GrowthTimeline />
        <AssemblySteps />
        <BestPlants />
        <KitDetails />
        <TechnicalSpecs />
        <MaintenanceTips />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;