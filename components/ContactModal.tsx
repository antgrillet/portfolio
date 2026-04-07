"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  CheckCircle,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
  X,
} from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const shouldReduceMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = dialogRef.current.querySelectorAll<
        HTMLButtonElement | HTMLInputElement | HTMLTextAreaElement | HTMLAnchorElement
      >("button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled])");

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.setTimeout(() => firstFieldRef.current?.focus(), 40);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(payload?.error || "Erreur lors de l'envoi du message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });

      window.setTimeout(() => {
        onClose();
        setStatus("idle");
      }, 1800);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Une erreur est survenue");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-zinc-950/40 backdrop-blur-sm"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              ref={dialogRef}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-zinc-100 bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative border-b border-zinc-100 px-6 py-6 sm:px-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 id="contact-modal-title" className="font-display text-2xl font-medium text-zinc-950 sm:text-3xl">
                      Parlons du produit.
                    </h2>
                    <p className="mt-2 max-w-xl text-base text-zinc-600">
                      Donnez-moi le contexte, l'objectif et le niveau de finition que vous visez. Je vous réponds rapidement.
                    </p>
                  </div>

                  <button
                    onClick={onClose}
                    type="button"
                    className="inline-flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 transition-colors hover:bg-zinc-50 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="Fermer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="relative max-h-[80vh] overflow-y-auto p-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-200 sm:p-10">
                {status === "success" ? (
                  <div className="flex min-h-[360px] flex-col items-center justify-center text-center" aria-live="polite">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle className="h-10 w-10" />
                    </div>
                    <h3 className="mt-6 text-3xl font-display font-medium text-zinc-950">Message envoyé</h3>
                    <p className="mt-3 max-w-md text-lg text-zinc-600">
                      Merci. Je reviens vers vous rapidement avec une réponse claire et des prochaines étapes concrètes.
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="space-y-6">
                      <div className="rounded-[1.5rem] border border-zinc-100 bg-zinc-50 p-6">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                          <Mail className="h-5 w-5" />
                        </div>
                        <p className="text-sm font-medium text-zinc-500">Email</p>
                        <a
                          href="mailto:antoningrillet@asmix.fr"
                          className="mt-1 block text-lg font-medium text-zinc-950 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                        >
                          antoningrillet@asmix.fr
                        </a>
                      </div>

                      <div className="rounded-[1.5rem] border border-zinc-100 bg-zinc-50 p-6">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                          <Phone className="h-5 w-5" />
                        </div>
                        <p className="text-sm font-medium text-zinc-500">Téléphone</p>
                        <a
                          href="tel:0760458997"
                          className="mt-1 block text-lg font-medium text-zinc-950 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
                        >
                          07 60 45 89 97
                        </a>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <label className="block">
                          <span className="mb-2 block text-sm font-medium text-zinc-700">Nom</span>
                          <div className="relative">
                            <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
                            <input
                              ref={firstFieldRef}
                              type="text"
                              name="name"
                              required
                              autoComplete="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full rounded-xl border border-zinc-200 bg-white py-3 pl-12 pr-4 text-zinc-950 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                              placeholder="Votre nom"
                            />
                          </div>
                        </label>

                        <label className="block">
                          <span className="mb-2 block text-sm font-medium text-zinc-700">Email</span>
                          <div className="relative">
                            <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
                            <input
                              type="email"
                              name="email"
                              required
                              autoComplete="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full rounded-xl border border-zinc-200 bg-white py-3 pl-12 pr-4 text-zinc-950 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                              placeholder="vous@email.com"
                            />
                          </div>
                        </label>
                      </div>

                      <label className="block">
                        <span className="mb-2 block text-sm font-medium text-zinc-700">Téléphone</span>
                        <div className="relative">
                          <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
                          <input
                            type="tel"
                            name="phone"
                            autoComplete="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-zinc-200 bg-white py-3 pl-12 pr-4 text-zinc-950 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="06 12 34 56 78"
                          />
                        </div>
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm font-medium text-zinc-700">Contexte du projet</span>
                        <div className="relative">
                          <MessageSquare className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-zinc-400" />
                          <textarea
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full resize-none rounded-xl border border-zinc-200 bg-white py-3 pl-12 pr-4 text-zinc-950 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            placeholder="Quel produit voulez-vous lancer, améliorer ou repositionner ?"
                          />
                        </div>
                      </label>

                      {status === "error" && (
                        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700" aria-live="polite">
                          {errorMessage}
                        </div>
                      )}

                      <div className="flex flex-col gap-4 sm:flex-row sm:justify-end pt-2">
                        <button
                          type="button"
                          onClick={onClose}
                          className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3.5 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          Annuler
                        </button>
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-8 py-3.5 text-base font-medium text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          {status === "loading" ? (
                            <>
                              <Loader2 className="h-5 w-5 animate-spin" />
                              Envoi...
                            </>
                          ) : (
                            <>
                              <Send className="h-5 w-5" />
                              Envoyer
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
