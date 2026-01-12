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

    const apiKey = process.env.RESEND_API_KEY;
    console.log('RESEND_API_KEY je nastaven:', !!apiKey);
    console.log('RESEND_API_KEY délka:', apiKey?.length || 0);
    console.log('RESEND_API_KEY začíná na:', apiKey?.substring(0, 10) || 'N/A');

    if (apiKey && apiKey.trim().length > 0) {
      try {
        console.log('Resend API klíč je nastaven, délka:', process.env.RESEND_API_KEY.length);
        
        const { Resend } = await import('resend');
        console.log('Resend modul úspěšně importován');
        
        const resend = new Resend(process.env.RESEND_API_KEY);
        console.log('Resend instance vytvořena');
        
        // Resend vyžaduje ověřenou doménu pro "from" email
        // onboarding@resend.dev může posílat pouze na email přidružený k Resend účtu
        // Pro produkci musíš ověřit doménu barakk.cz v Resend dashboardu
        // a nastavit RESEND_FROM_EMAIL na ověřenou emailovou adresu (např. kontakt@barakk.cz)
        const fromEmail = process.env.RESEND_FROM_EMAIL || 'kontakt@barakk.cz';
        
        console.log('Odesílání emailu z:', fromEmail);
        console.log('Na adresu:', recipientEmail);
        
        // Pokud používáme onboarding@resend.dev, upozorníme
        if (fromEmail === 'onboarding@resend.dev') {
          console.warn('Pozor: onboarding@resend.dev může posílat pouze na email přidružený k Resend účtu!');
        }
        
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
        
        console.log('Resend API response:', JSON.stringify(result, null, 2));
        
        // Resend vrací buď { data: {...}, error: null } nebo { data: null, error: {...} }
        if (result.error) {
          const errorMessage = result.error.message || JSON.stringify(result.error);
          console.error('Resend API vrátil chybu:', errorMessage);
          throw new Error(`Resend API chyba: ${errorMessage}`);
        }
        
        if (!result.data) {
          console.error('Resend API nevrátil data:', result);
          throw new Error('Resend API nevrátil data');
        }
        
        emailSent = true;
        console.log('Email úspěšně odeslán, ID:', result.data.id);
      } catch (err: any) {
        emailError = err;
        console.error('Chyba při odesílání emailu:', err);
        console.error('Error type:', typeof err);
        console.error('Error message:', err?.message);
        console.error('Error name:', err?.name);
        console.error('Error stack:', err?.stack);
        
        // Resend může vracet chyby v různých formátech
        if (err?.response) {
          console.error('Resend API response:', JSON.stringify(err.response, null, 2));
        }
        if (err?.message) {
          console.error('Resend error message:', err.message);
        }
        // Zkusme získat více informací o chybě
        try {
          console.error('Full error object:', JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
        } catch (e) {
          console.error('Nelze serializovat error object');
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
  } catch (error: any) {
    console.error('Chyba při zpracování formuláře:', error);
    console.error('Error type:', typeof error);
    console.error('Error message:', error?.message);
    console.error('Error stack:', error?.stack);
    
    return NextResponse.json(
      { 
        success: false,
        error: 'Došlo k chybě při odesílání formuláře',
        details: process.env.NODE_ENV === 'development' ? error?.message : undefined
      },
      { status: 500 }
    );
  }
}

