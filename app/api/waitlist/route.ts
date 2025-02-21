import { NextResponse } from 'next/server';

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

    console.log('Attempting to submit to Notion with data:', { businessName, email, plan, source });

    // Send to Notion
    const notionResponse = await fetch(`https://api.notion.com/v1/pages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        parent: { database_id: process.env.NOTION_DATABASE_ID },
        properties: {
          Name: {
            title: [
              {
                text: {
                  content: businessName
                }
              }
            ]
          },
          Email: {
            email: email
          },
          Phone: {
            phone_number: phone
          },
          Plan: {
            select: {
              name: plan || 'Not specified'
            }
          },
          Features: {
            multi_select: features.map((f: string) => ({ name: f }))
          },
          "Other Features": {
            rich_text: [
              {
                text: {
                  content: otherFeatures || 'None specified'
                }
              }
            ]
          },
          "Business Goal": {
            rich_text: [
              {
                text: {
                  content: businessGoal || ''
                }
              }
            ]
          },
          Source: {
            select: {
              name: source || 'Direct'
            }
          },
          Status: {
            status: {
              name: 'New'
            }
          }
        }
      })
    });

    const notionData = await notionResponse.json();

    if (!notionResponse.ok) {
      console.error('Notion API Error:', {
        status: notionResponse.status,
        statusText: notionResponse.statusText,
        data: notionData
      });
      throw new Error(`Notion API Error: ${notionData.message || 'Unknown error'}`);
    }

    console.log('Successfully submitted to Notion');

    // Also send a notification email
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
        console.error('Email notification failed but Notion submission succeeded');
      }
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Don't throw here, as we still want to return success if Notion submission worked
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