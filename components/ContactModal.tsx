"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Loader2, CheckCircle, Mail, Phone, User, MessageSquare } from "lucide-react";

interface ContactModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
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

			if (!response.ok) {
				throw new Error("Erreur lors de l'envoi du message");
			}

			setStatus("success");
			setFormData({ name: "", email: "", phone: "", message: "" });

			// Fermer le modal après 2 secondes
			setTimeout(() => {
				onClose();
				setStatus("idle");
			}, 2000);
		} catch (error) {
			setStatus("error");
			setErrorMessage(
				error instanceof Error ? error.message : "Une erreur est survenue"
			);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className="fixed inset-0 bg-gradient-to-br from-black/70 via-blue-950/50 to-purple-950/50 backdrop-blur-md z-50"
					/>

					{/* Modal */}
					<div className="fixed inset-0 flex items-center justify-center z-50 p-4">
						<motion.div
							initial={{ opacity: 0, scale: 0.9, y: 30 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.9, y: 30 }}
							transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
							className="bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-zinc-200/50 dark:border-zinc-700/50 relative"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Gradient overlay for visual interest */}
							<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
							{/* Header */}
							<div className="sticky top-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-700/50 px-6 py-5 flex items-center justify-between z-10">
								<div>
									<h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
										Me contacter
									</h2>
									<p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
										Je vous répondrai dans les plus brefs délais
									</p>
								</div>
								<button
									onClick={onClose}
									className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all hover:scale-110"
									aria-label="Fermer"
								>
									<X className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
								</button>
							</div>

							{/* Content */}
							<div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)] scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700 scrollbar-track-transparent">
								{status === "success" ? (
									<motion.div
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ type: "spring", duration: 0.6, bounce: 0.4 }}
										className="text-center py-12"
									>
										<motion.div
											initial={{ scale: 0 }}
											animate={{ scale: 1 }}
											transition={{ delay: 0.2, type: "spring", duration: 0.6, bounce: 0.5 }}
											className="relative inline-block mb-6"
										>
											<div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full" />
											<div className="relative p-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-xl shadow-green-500/30">
												<CheckCircle className="h-16 w-16 text-white" />
											</div>
										</motion.div>
										<motion.h3
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.3 }}
											className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3"
										>
											Message envoyé !
										</motion.h3>
										<motion.p
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.4 }}
											className="text-zinc-600 dark:text-zinc-400 text-lg"
										>
											Merci pour votre message. Je vous répondrai rapidement.
										</motion.p>
									</motion.div>
								) : (
									<>
										{/* Contact Info */}
										<div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
											<motion.div
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: 0.1 }}
												className="group relative overflow-hidden"
											>
												<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl transition-all group-hover:from-blue-500/20 group-hover:to-blue-600/20" />
												<div className="relative flex items-center gap-4 p-5 rounded-xl border border-blue-200/50 dark:border-blue-800/50 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm transition-all group-hover:border-blue-300 dark:group-hover:border-blue-700 group-hover:shadow-lg">
													<div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
														<Mail className="h-5 w-5 text-white" />
													</div>
													<div className="min-w-0 flex-1">
														<p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1 uppercase tracking-wider">
															Email
														</p>
														<a
															href="mailto:antoningrillet@asmix.fr"
															className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline truncate block"
														>
															antoningrillet@asmix.fr
														</a>
													</div>
												</div>
											</motion.div>

											<motion.div
												initial={{ opacity: 0, x: 20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: 0.2 }}
												className="group relative overflow-hidden"
											>
												<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl transition-all group-hover:from-purple-500/20 group-hover:to-purple-600/20" />
												<div className="relative flex items-center gap-4 p-5 rounded-xl border border-purple-200/50 dark:border-purple-800/50 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm transition-all group-hover:border-purple-300 dark:group-hover:border-purple-700 group-hover:shadow-lg">
													<div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
														<Phone className="h-5 w-5 text-white" />
													</div>
													<div className="min-w-0 flex-1">
														<p className="text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-1 uppercase tracking-wider">
															Téléphone
														</p>
														<a
															href="tel:0760458997"
															className="text-sm font-semibold text-purple-600 dark:text-purple-400 hover:underline"
														>
															07 60 45 89 97
														</a>
													</div>
												</div>
											</motion.div>
										</div>

										{/* Form */}
										<form onSubmit={handleSubmit} className="space-y-5">
											<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
												<motion.div
													initial={{ opacity: 0, y: 10 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{ delay: 0.3 }}
												>
													<label
														htmlFor="name"
														className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
													>
														Nom *
													</label>
													<div className="relative group">
														<User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400 group-focus-within:text-blue-500 transition-colors" />
														<input
															type="text"
															id="name"
															name="name"
															required
															value={formData.name}
															onChange={handleChange}
															className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-500 transition-all placeholder:text-zinc-400"
															placeholder="Votre nom"
														/>
													</div>
												</motion.div>
												<motion.div
													initial={{ opacity: 0, y: 10 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{ delay: 0.4 }}
												>
													<label
														htmlFor="email"
														className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
													>
														Email *
													</label>
													<div className="relative group">
														<Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400 group-focus-within:text-blue-500 transition-colors" />
														<input
															type="email"
															id="email"
															name="email"
															required
															value={formData.email}
															onChange={handleChange}
															className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-500 transition-all placeholder:text-zinc-400"
															placeholder="votre@email.com"
														/>
													</div>
												</motion.div>
											</div>

											<motion.div
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ delay: 0.5 }}
											>
												<label
													htmlFor="phone"
													className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
												>
													Téléphone <span className="text-zinc-400 font-normal">(optionnel)</span>
												</label>
												<div className="relative group">
													<Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400 group-focus-within:text-blue-500 transition-colors" />
													<input
														type="tel"
														id="phone"
														name="phone"
														value={formData.phone}
														onChange={handleChange}
														className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-500 transition-all placeholder:text-zinc-400"
														placeholder="06 12 34 56 78"
													/>
												</div>
											</motion.div>

											<motion.div
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ delay: 0.6 }}
											>
												<label
													htmlFor="message"
													className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2"
												>
													Message *
												</label>
												<div className="relative group">
													<MessageSquare className="absolute left-4 top-4 h-5 w-5 text-zinc-400 group-focus-within:text-blue-500 transition-colors" />
													<textarea
														id="message"
														name="message"
														required
														value={formData.message}
														onChange={handleChange}
														rows={5}
														className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-500 transition-all resize-none placeholder:text-zinc-400"
														placeholder="Décrivez votre projet ou votre demande..."
													/>
												</div>
											</motion.div>

											{status === "error" && (
												<motion.div
													initial={{ opacity: 0, y: -10 }}
													animate={{ opacity: 1, y: 0 }}
													className="p-4 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl"
												>
													<p className="text-sm font-medium text-red-700 dark:text-red-400">
														{errorMessage}
													</p>
												</motion.div>
											)}

											<div className="flex gap-4 pt-4">
												<motion.button
													initial={{ opacity: 0, y: 10 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{ delay: 0.7 }}
													type="button"
													onClick={onClose}
													className="flex-1 px-6 py-3.5 rounded-xl border-2 border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all hover:scale-[1.02]"
												>
													Annuler
												</motion.button>
												<motion.button
													initial={{ opacity: 0, y: 10 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{ delay: 0.8 }}
													type="submit"
													disabled={status === "loading"}
													className="flex-1 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 hover:scale-[1.02]"
												>
													{status === "loading" ? (
														<>
															<Loader2 className="h-5 w-5 animate-spin" />
															Envoi en cours...
														</>
													) : (
														<>
															<Send className="h-5 w-5" />
															Envoyer
														</>
													)}
												</motion.button>
											</div>
										</form>
									</>
								)}
							</div>
						</motion.div>
					</div>
				</>
			)}
		</AnimatePresence>
	);
}
