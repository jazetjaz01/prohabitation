import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      civilite, lastName, firstName, email, telephone, 
      service, typeProjet, surface, codePostal, message 
    } = body;

    // Envoi de l'e-mail de notification à vous-même
    const { data, error } = await resend.emails.send({
      from: 'Site Prohabitation <devis@prohabitation.com>', // Utilisez une adresse de votre domaine
      to: ['contact@prohabitation.com'], 
      replyTo: email, // Permet de répondre directement au client en cliquant sur "Répondre"
      subject: `Nouveau Devis : ${service.toUpperCase()} - ${codePostal}`,
      html: `
        <div style="font-family: sans-serif; color: #334155; line-height: 1.6;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #0d9488; padding-bottom: 8px;">
            Nouvelle demande de devis
          </h2>
          
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #0d9488;">1. Coordonnées Client</h3>
            <p><strong>Identité :</strong> ${civilite} ${firstName} ${lastName}</p>
            <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Téléphone :</strong> <a href="tel:${telephone}">${telephone}</a></p>
          </div>

          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #0d9488;">2. Détails du Chantier</h3>
            <p><strong>Type de travaux :</strong> ${service}</p>
            <p><strong>État du bâtiment :</strong> ${typeProjet}</p>
            <p><strong>Surface estimée :</strong> ${surface} m²</p>
            <p><strong>Code Postal :</strong> ${codePostal}</p>
          </div>

          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #0d9488;">3. Message / Précisions</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <footer style="font-size: 12px; color: #64748b; margin-top: 30px;">
            Cet e-mail a été généré automatiquement depuis le formulaire de devis de prohabitation.com
          </footer>
        </div>
      `,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ message: "Devis envoyé" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}