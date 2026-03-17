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
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = dialogRef.current.querySelectorAll<
        | HTMLButtonElement
        | HTMLInputElement
        | HTMLTextAreaElement
        | HTMLAnchorElement
      >(
        "button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled])",
      );

      if (focusableElements.length === 0) {
        return;
      }

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
        headers: {
          "Content-Type": "application/json",
        },
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
      setErrorMessage(
        error instanceof Error ? error.message : "Une erreur est survenue",
      );
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
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
            className="fixed inset-0 z-50 bg-[#040507]/70 backdrop-blur-xl"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              ref={dialogRef}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 28, scale: 0.98 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 24, scale: 0.98 }
              }
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              className="glass-panel relative w-full max-w-3xl overflow-hidden rounded-[1.5rem] border border-white/60"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),transparent_34%,rgba(255,255,255,0.08)_100%)] pointer-events-none" />

              <div className="relative border-b border-zinc-200/70 px-6 py-5 sm:px-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.34em] text-zinc-500">
                      Contact
                    </p>
                    <h2
                      id="contact-modal-title"
                      className="mt-3 text-2xl font-semibold text-zinc-950"
                    >
                      Parlons du produit.
                    </h2>
                    <p className="mt-2 max-w-xl text-base leading-7 text-zinc-600">
                      Donnez-moi le contexte, l'objectif et le niveau de
                      finition que vous visez. Je vous réponds rapidement.
                    </p>
                  </div>

                  <button
                    onClick={onClose}
                    type="button"
                    className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white/70 text-zinc-700 transition-colors duration-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Fermer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="relative max-h-[82vh] overflow-y-auto px-6 py-6 scrollbar-thin scrollbar-thumb-zinc-300 scrollbar-track-transparent sm:px-8">
                {status === "success" ? (
                  <div
                    className="flex min-h-[360px] flex-col items-center justify-center text-center"
                    aria-live="polite"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_24px_50px_rgba(16,185,129,0.28)]">
                      <CheckCircle className="h-9 w-9" />
                    </div>
                    <h3 className="mt-6 text-3xl font-semibold text-zinc-950">
                      Message envoyé
                    </h3>
                    <p className="mt-3 max-w-md text-base leading-7 text-zinc-600">
                      Merci. Je reviens vers vous rapidement avec une réponse
                      claire et des prochaines étapes concrètes.
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
                    <div className="space-y-4">
                      <div className="rounded-[1.25rem] border border-zinc-200 bg-white/[0.76] p-5 shadow-[0_20px_40px_rgba(15,23,42,0.05)]">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                          <Mail className="h-5 w-5" />
                        </div>
                        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                          Email
                        </p>
                        <a
                          href="mailto:antoningrillet@asmix.fr"
                          className="mt-2 block text-lg font-medium text-zinc-950 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          antoningrillet@asmix.fr
                        </a>
                      </div>

                      <div className="rounded-[1.25rem] border border-zinc-200 bg-white/[0.76] p-5 shadow-[0_20px_40px_rgba(15,23,42,0.05)]">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                          <Phone className="h-5 w-5" />
                        </div>
                        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
                          Téléphone
                        </p>
                        <a
                          href="tel:0760458997"
                          className="mt-2 block text-lg font-medium text-zinc-950 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          07 60 45 89 97
                        </a>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-5 md:grid-cols-2">
                        <label className="block">
                          <span className="mb-2 block text-sm font-semibold text-zinc-700">
                            Nom
                          </span>
                          <div className="relative">
                            <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                            <input
                              ref={firstFieldRef}
                              type="text"
                              id="name"
                              name="name"
                              required
                              autoComplete="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full rounded-xl border border-zinc-200 bg-white px-12 py-3.5 text-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Votre nom"
                            />
                          </div>
                        </label>

                        <label className="block">
                          <span className="mb-2 block text-sm font-semibold text-zinc-700">
                            Email
                          </span>
                          <div className="relative">
                            <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              autoComplete="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full rounded-xl border border-zinc-200 bg-white px-12 py-3.5 text-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="vous@email.com"
                            />
                          </div>
                        </label>
                      </div>

                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-zinc-700">
                          Téléphone
                        </span>
                        <div className="relative">
                          <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            autoComplete="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-zinc-200 bg-white px-12 py-3.5 text-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="06 12 34 56 78"
                          />
                        </div>
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-zinc-700">
                          Contexte du projet
                        </span>
                        <div className="relative">
                          <MessageSquare className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-zinc-400" />
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-zinc-200 bg-white px-12 py-3.5 text-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            placeholder="Quel produit voulez-vous lancer, améliorer ou repositionner ?"
                          />
                        </div>
                      </label>

                      {status === "error" && (
                        <div
                          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                          aria-live="polite"
                        >
                          {errorMessage}
                        </div>
                      )}

                      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                        <button
                          type="button"
                          onClick={onClose}
                          className="inline-flex cursor-pointer items-center justify-center rounded-full border border-zinc-200 bg-white px-5 py-3.5 text-sm font-semibold text-zinc-700 transition-colors duration-200 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          Annuler
                        </button>
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          {status === "loading" ? (
                            <>
                              <Loader2 className="h-4 w-4 animate-spin" />
                              Envoi...
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4" />
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
