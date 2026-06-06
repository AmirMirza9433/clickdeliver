import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
// import { StatsSection } from '@/components/sections/StatsSection';
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { UserTypesSection } from "@/components/sections/UserTypesSection";
import { CustomOrderSection } from "@/components/sections/CustomOrderSection";
import { RideSection } from "@/components/sections/RideSection";
import { DownloadSection } from "@/components/sections/DownloadSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        {/* <StatsSection /> */}
        <FeaturesSection />
        <HowItWorksSection />
        <UserTypesSection />
        <CustomOrderSection />
        <RideSection />
        <DownloadSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
