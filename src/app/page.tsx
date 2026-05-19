import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import HowItWorks from "@/components/sections/HowItWorks";
import WhoIsFor from "@/components/sections/WhoIsFor";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import Farms from "@/components/sections/Farms";
import PyaeSection from "@/components/sections/PyaeSection";
import CtaBanner from "@/components/sections/CtaBanner";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import WhatsappButton from "@/components/ui/WhatsappButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <HowItWorks />
      <WhoIsFor />
      <Benefits />
      <Testimonials />
      <Farms />
      <PyaeSection />
      <CtaBanner />
      <Contact />
      <Footer />
      <WhatsappButton />
    </>
  );
}
