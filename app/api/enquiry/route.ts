import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, programme, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !programme) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Brevo API configuration
    const brevoApiKey = process.env.BREVO_API_KEY;
    const brevoListId = process.env.BREVO_LIST_ID;

    if (!brevoApiKey) {
      console.warn('Brevo API key not configured - form data logged but not sent to CRM');
      console.log('Form submission:', { firstName, lastName, email, phone, programme, message });
      return NextResponse.json({ success: true, warning: 'CRM not configured' });
    }

    // Create contact in Brevo
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': brevoApiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: firstName,
          LASTNAME: lastName,
          SMS: phone,
          PROGRAMME: programme,
          MESSAGE: message || '',
          SOURCE: 'AI Academy Website',
        },
        listIds: brevoListId ? [parseInt(brevoListId)] : [],
        updateEnabled: true,
      }),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.text();
      console.error('Brevo API error:', errorData);
      
      // Check if contact already exists (code 400 with specific message)
      if (brevoResponse.status === 400 && errorData.includes('already exists')) {
        return NextResponse.json({ 
          success: true, 
          message: 'Contact updated successfully' 
        });
      }
      
      throw new Error(`Brevo API error: ${errorData}`);
    }

    const data = await brevoResponse.json();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you! We\'ll be in touch within 24 hours.',
      contactId: data.id 
    });

  } catch (error) {
    console.error('Error submitting enquiry:', error);
    return NextResponse.json(
      { 
        error: 'Failed to submit enquiry. Please try again or contact us directly.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
