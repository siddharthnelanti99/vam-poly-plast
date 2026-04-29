import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import { AdvantagesSection } from "./components/AdvantagesSection";
import { ApplicationsGrid } from "./components/ApplicationsGrid";
import { ApplicationsSection } from "./components/ApplicationsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { IntroSection } from "./components/IntroSection";
import { Navigation } from "./components/Navigation";
import { ProductsGrid } from "./components/ProductsGrid";
import { QualityBanner } from "./components/QualityBanner";
import { QualitySection } from "./components/QualitySection";
import { ServicesSection } from "./components/ServicesSection";
import { StatsSection } from "./components/StatsSection";
import { TopBar } from "./components/TopBar";
import { WhatWeDo } from "./components/WhatWeDo";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { AdminSubmissionsPage } from "./pages/AdminSubmissionsPage";
import { BlogPage } from "./pages/BlogPage";
import { CareersPage } from "./pages/CareersPage";

export type PageType = "home" | "careers" | "blog" | "quote" | "admin";

function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <StatsSection />
      <QualitySection />
      <ProductsGrid />
      <IntroSection />
      <WhyChooseUs />
      <WhatWeDo />
      <QualityBanner />
      <ApplicationsSection />
      <AdvantagesSection />
      <ServicesSection />
      <ApplicationsGrid />
      <ContactSection />
    </main>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  const handleNavigate = (page: PageType) => {
    if (page === "quote") {
      setCurrentPage("home");
      setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#contact") {
      setCurrentPage("home");
      setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
    // Handle /admin/submissions path
    if (window.location.pathname.includes("/admin")) {
      setCurrentPage("admin");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      {currentPage === "home" && <HomePage />}
      {currentPage === "careers" && <CareersPage onNavigate={handleNavigate} />}
      {currentPage === "blog" && <BlogPage onNavigate={handleNavigate} />}
      {currentPage === "admin" && (
        <AdminSubmissionsPage onNavigate={handleNavigate} />
      )}
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
