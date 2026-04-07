"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { ContactModal } from "@/components/ContactModal";
import { Footer } from "@/components/Footer";

export function HomeClient() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <>
      <Navigation />
      <main id="main-content" className="overflow-hidden">
        <HeroSection onContactClick={openContactModal} />
        <AboutSection />
        <ProcessSection />
        <ProjectsSection onContactClick={openContactModal} />
        <ContactSection onContactClick={openContactModal} />
      </main>
      <Footer />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </>
  );
}
