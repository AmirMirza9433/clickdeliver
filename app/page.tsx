import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { CustomOrderSection } from '@/components/sections/CustomOrderSection';
import { RideSection } from '@/components/sections/RideSection';
import { UserTypesSection } from '@/components/sections/UserTypesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { DownloadSection } from '@/components/sections/DownloadSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar';
import { CursorFollower } from '@/components/ui/CursorFollower';
import { MobileDownloadBar } from '@/components/ui/MobileDownloadBar';
import { BackToTop } from '@/components/ui/BackToTop';
import { Toaster } from 'sonner';

export default function Home() {
  return (
    <>
      {/* Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Desktop interactive cursor follower (auto-disabled on touch) */}
      <CursorFollower />

      {/* Toast notifications */}
      <Toaster position="bottom-right" richColors />

      {/* Navigation */}
      <Navbar />

      {/* Main Content strictly following requested section order */}
      <main className="relative overflow-x-hidden min-h-screen">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Stats strip */}
        <StatsSection />

        {/* 3. Features (bento grid) */}
        <FeaturesSection />

        {/* 4. How It Works */}
        <HowItWorksSection />

        {/* 5. Custom Orders */}
        <CustomOrderSection />

        {/* 6. Ride Booking */}
        <RideSection />

        {/* 7. Roles (Customer / Rider / Shopkeeper) */}
        <UserTypesSection />

        {/* 8. Testimonials */}
        <TestimonialsSection />

        {/* 9. Download */}
        <DownloadSection />

        {/* 10. FAQ */}
        <FaqSection />

        {/* 11. Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Download Button (appears past hero) */}
      <MobileDownloadBar />

      {/* Desktop Back to Top Button */}
      <BackToTop />
    </>
  );
}
