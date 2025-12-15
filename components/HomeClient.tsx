"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TechStackSection } from "@/components/TechStackSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
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
			<main>
				<HeroSection onContactClick={openContactModal} />
				<ProjectsSection onContactClick={openContactModal} />
				<TestimonialsSection />
				<TechStackSection onContactClick={openContactModal} />
				<ContactSection onContactClick={openContactModal} />
			</main>
			<Footer />
			<ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
		</>
	);
}
