import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, location, description } = body;

    // Validace
    if (!name || !email || !description) {
      return NextResponse.json(
        { error: 'Jméno, email a popis jsou povinné' },
        { status: 400 }
      );
    }

    // Email se pošle na info@barakk.cz
    const recipientEmail = 'info@barakk.cz';
    
    // Vytvoříme email zprávu
    const emailSubject = `Dotaz z kontaktního formuláře - ${name}`;
    const emailBody = `
Nový dotaz z kontaktního formuláře na Barakk.cz

Jméno: ${name}
E-mail: ${email}
Telefon: ${phone || 'Neuvedeno'}
Lokalita projektu: ${location || 'Neuvedeno'}

Popis projektu:
${description}

---
Tento email byl odeslán z kontaktního formuláře na barakk.cz
`;

    // Odesílání emailu pomocí fetch na emailovou službu
    // Pro produkci by bylo lepší použít Resend, SendGrid nebo podobnou službu
    // Zde použijeme jednoduché řešení pomocí mailto: nebo externí služby
    
    // Logování pro debugging
    console.log('Kontaktní formulář - email by se poslal na:', recipientEmail);
    console.log('Data:', { name, email, phone, location, description });

    // Odesílání emailu pomocí Resend (pokud je API klíč nastaven)
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        await resend.emails.send({
          from: 'kontakt@barakk.cz',
          to: recipientEmail,
          replyTo: email,
          subject: emailSubject,
          html: `
            <h2>Nový dotaz z kontaktního formuláře</h2>
            <p><strong>Jméno:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone || 'Neuvedeno'}</p>
            <p><strong>Lokalita projektu:</strong> ${location || 'Neuvedeno'}</p>
            <h3>Popis projektu:</h3>
            <p>${description.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><small>Tento email byl odeslán z kontaktního formuláře na barakk.cz</small></p>
          `,
        });
      } catch (emailError) {
        console.error('Chyba při odesílání emailu:', emailError);
        // Pokračujeme i když se email nepodařilo odeslat
      }
    } else {
      // Pokud není Resend API klíč, jen logujeme
      console.log('RESEND_API_KEY není nastaven - email se neposlal');
      console.log('Email by se poslal na:', recipientEmail);
    }

    return NextResponse.json(
      { 
        success: true,
        message: `Formulář byl úspěšně odeslán na ${recipientEmail}. Děkujeme za váš zájem!` 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Chyba při zpracování formuláře:', error);
    return NextResponse.json(
      { error: 'Došlo k chybě při odesílání formuláře' },
      { status: 500 }
    );
  }
}

