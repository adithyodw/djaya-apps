import { LanguageProvider } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";
import SeoFacts from "@/components/SeoFacts";
import About from "@/components/About";
import WhyDjaya from "@/components/WhyDjaya";
import Menu from "@/components/Menu";
import Signature from "@/components/Signature";
import Booking from "@/components/Booking";
import Reviews from "@/components/Reviews";
import FaqSection from "@/components/FaqSection";
import Location from "@/components/Location";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";
import StickyBook from "@/components/StickyBook";

export default function Home() {
  return (
    <LanguageProvider>
      <div
        className="min-h-screen"
        style={{
          background: "#15100a",
          backgroundImage: "radial-gradient(circle at 50% 0%, #241810 0%, #15100a 62%)",
        }}
      >
        <div
          className="relative mx-auto max-w-app bg-cream text-ink overflow-hidden"
          style={{ minHeight: "100vh", boxShadow: "0 0 90px rgba(0,0,0,.55)" }}
        >
          <Header />
          <main className="pb-[104px]">
            <Hero />
            <PromoBanner />
            {/* SSR-readable direct-answer block for Google + AI crawlers */}
            <SeoFacts />
            <About />
            <WhyDjaya />
            <Menu />
            <Signature />
            <Booking />
            <Reviews />
            <FaqSection />
            <Location />
            <InstagramSection />
            <Footer />
          </main>
          <StickyBook />
        </div>
      </div>
    </LanguageProvider>
  );
}
