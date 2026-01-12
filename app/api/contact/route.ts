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
    let emailSent = false;
    let emailError: any = null;

    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        // Resend vyžaduje ověřenou doménu pro "from" email
        // Použij onboarding@resend.dev pro testování (funguje bez ověření)
        // Nebo nastav RESEND_FROM_EMAIL na ověřenou emailovou adresu
        const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
        
        console.log('Odesílání emailu z:', fromEmail);
        console.log('Na adresu:', recipientEmail);
        
        const result = await resend.emails.send({
          from: fromEmail,
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
        
        emailSent = true;
        console.log('Email úspěšně odeslán:', JSON.stringify(result, null, 2));
        
        // Pokud result obsahuje error, zachytíme ho
        if (result.error) {
          throw new Error(result.error.message || 'Neznámá chyba při odesílání emailu');
        }
      } catch (err: any) {
        emailError = err;
        console.error('Chyba při odesílání emailu:', err);
        console.error('Error type:', typeof err);
        console.error('Error message:', err?.message);
        console.error('Error details:', JSON.stringify(err, null, 2));
        
        // Pokud je to Resend error, zobrazíme detailnější informace
        if (err?.response) {
          console.error('Resend API response:', JSON.stringify(err.response, null, 2));
        }
      }
    } else {
      console.log('RESEND_API_KEY není nastaven - email se neposlal');
      console.log('Email by se poslal na:', recipientEmail);
    }

    // Vrátíme response s informací o tom, zda se email poslal
    if (emailError) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Email se nepodařilo odeslat. Zkuste to prosím znovu nebo nás kontaktujte přímo na info@barakk.cz',
          details: process.env.NODE_ENV === 'development' ? emailError.message : undefined
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true,
        emailSent,
        message: emailSent 
          ? `Formulář byl úspěšně odeslán na ${recipientEmail}. Děkujeme za váš zájem!`
          : `Formulář byl zpracován, ale email se neposlal (API klíč není nastaven). Kontaktujte nás prosím přímo na ${recipientEmail}.`
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

