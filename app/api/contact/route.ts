import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const { name, email, phone, message } = await request.json();

		// Validation
		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: "Les champs nom, email et message sont requis" },
				{ status: 400 }
			);
		}

		// Envoyer l'email avec Resend
		const { data, error } = await resend.emails.send({
			from: "Portfolio Antonin <contact@gchb.fr>",
			to: "anto73grillet@gmail.com",
			replyTo: email,
			subject: `Nouveau message de ${name} - Portfolio`,
			html: `
				<!DOCTYPE html>
				<html>
					<head>
						<meta charset="utf-8">
						<style>
							body {
								font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
								line-height: 1.6;
								color: #333;
								max-width: 600px;
								margin: 0 auto;
								padding: 20px;
							}
							.header {
								background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
								color: white;
								padding: 30px;
								border-radius: 10px 10px 0 0;
							}
							.content {
								background: #f9fafb;
								padding: 30px;
								border-radius: 0 0 10px 10px;
							}
							.info-block {
								background: white;
								padding: 15px;
								margin: 10px 0;
								border-radius: 8px;
								border-left: 4px solid #667eea;
							}
							.label {
								color: #667eea;
								font-weight: 600;
								font-size: 12px;
								text-transform: uppercase;
								letter-spacing: 0.5px;
							}
							.value {
								margin-top: 5px;
								color: #1f2937;
							}
							.message-box {
								background: white;
								padding: 20px;
								margin: 20px 0;
								border-radius: 8px;
								border: 1px solid #e5e7eb;
								white-space: pre-wrap;
							}
							.footer {
								text-align: center;
								margin-top: 30px;
								color: #6b7280;
								font-size: 14px;
							}
						</style>
					</head>
					<body>
						<div class="header">
							<h1 style="margin: 0; font-size: 24px;">Nouveau message du portfolio</h1>
							<p style="margin: 10px 0 0 0; opacity: 0.9;">Vous avez reçu un nouveau message de contact</p>
						</div>
						<div class="content">
							<div class="info-block">
								<div class="label">Nom</div>
								<div class="value">${name}</div>
							</div>

							<div class="info-block">
								<div class="label">Email</div>
								<div class="value"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></div>
							</div>

							${
								phone
									? `
							<div class="info-block">
								<div class="label">Téléphone</div>
								<div class="value"><a href="tel:${phone}" style="color: #667eea; text-decoration: none;">${phone}</a></div>
							</div>
							`
									: ""
							}

							<div class="info-block">
								<div class="label">Message</div>
								<div class="message-box">${message.replace(/\n/g, "<br>")}</div>
							</div>
						</div>

						<div class="footer">
							<p>Ce message a été envoyé depuis le formulaire de contact de votre portfolio</p>
							<p style="margin-top: 10px;">
								<a href="mailto:${email}" style="color: #667eea; text-decoration: none;">Répondre directement</a>
								${phone ? ` • <a href="tel:${phone}" style="color: #667eea; text-decoration: none;">Appeler</a>` : ""}
							</p>
						</div>
					</body>
				</html>
			`,
		});

		if (error) {
			console.error("Erreur Resend:", error);
			return NextResponse.json(
				{ error: "Erreur lors de l'envoi de l'email" },
				{ status: 500 }
			);
		}

		return NextResponse.json(
			{ success: true, messageId: data?.id },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Erreur serveur:", error);
		return NextResponse.json(
			{ error: "Erreur serveur" },
			{ status: 500 }
		);
	}
}
