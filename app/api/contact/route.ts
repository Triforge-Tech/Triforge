import { NextResponse } from 'next/server'

const DISCORD_WEBHOOK_URL =
  'https://discord.com/api/webhooks/1446453156241215591/A8hwiTVLNQ-_sGHF2746SlCV2_M7AfMtZVnZNkulcSM2r7EE0jcMFq83_2dD89wdm8G9'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, phone, subject, message } = body

    // Send Discord webhook notification
    const discordMessage = {
      embeds: [
        {
          title: '📬 New Contact Form Submission',
          color: 0x6366f1, // Primary color
          fields: [
            {
              name: '👤 Name',
              value: name || 'Not provided',
              inline: true,
            },
            {
              name: '📧 Email',
              value: email || 'Not provided',
              inline: true,
            },
            {
              name: '🏢 Company',
              value: company || 'Not provided',
              inline: true,
            },
            {
              name: '📱 Phone',
              value: phone || 'Not provided',
              inline: true,
            },
            {
              name: '📋 Subject',
              value: subject || 'Not provided',
              inline: false,
            },
            {
              name: '💬 Message',
              value: message || 'Not provided',
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: 'TriForge Contact Form',
          },
        },
      ],
    }

    const discordResponse = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(discordMessage),
    })

    if (!discordResponse.ok) {
      console.error('Discord webhook error:', await discordResponse.text())
      return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
