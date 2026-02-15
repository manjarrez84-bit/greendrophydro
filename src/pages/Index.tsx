import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import KitDetails from "@/components/KitDetails";
import MaintenanceTips from "@/components/MaintenanceTips";
import Footer from "@/components/Footer";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-green-100 selection:text-green-900">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <KitDetails />
        <MaintenanceTips />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;