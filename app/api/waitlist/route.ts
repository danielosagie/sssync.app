import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      businessName,
      email,
      phone,
      plan,
      features,
      otherFeatures,
      businessGoal,
      source,
    } = body;

    console.log('Attempting to submit to Google Sheets:', { businessName, email, plan, source });

    // Configure Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    // Prepare the row data
    const values = [
      [
        new Date().toISOString(), // Timestamp
        businessName,
        email,
        phone,
        plan || 'Not specified',
        features.join(', '),
        otherFeatures || 'None',
        businessGoal,
        source || 'Direct',
      ],
    ];

    // Append to Google Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:I', // Assumes first sheet and columns A through I
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    if (!response.data) {
      throw new Error('Failed to submit to Google Sheets');
    }

    console.log('Successfully submitted to Google Sheets');

    // Send notification email
    try {
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'waitlist@sssync.app',
          to: process.env.NOTIFICATION_EMAIL,
          subject: `New Waitlist Signup: ${businessName}`,
          html: `
            <h2>New Waitlist Signup</h2>
            <p><strong>Business:</strong> ${businessName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Plan:</strong> ${plan || 'Not specified'}</p>
            <p><strong>Features:</strong> ${features.join(', ')}</p>
            <p><strong>Other Features:</strong> ${otherFeatures || 'None'}</p>
            <p><strong>Business Goal:</strong> ${businessGoal}</p>
            <p><strong>Source:</strong> ${source || 'Direct'}</p>
          `
        })
      });

      if (!emailResponse.ok) {
        console.error('Email notification failed but Google Sheets submission succeeded');
      }
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Don't throw here, as we still want to return success if Sheets submission worked
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in waitlist API:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to submit form',
        details: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
} 