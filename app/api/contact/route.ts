import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, phone, subject, message } = body

    // Here you would integrate with your email service
    // Examples: SendGrid, Resend, AWS SES, etc.
    
    // For now, we'll just log it
    console.log('Contact form submission:', {
      name,
      email,
      company,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Example with a hypothetical email service:
    // await sendEmail({
    //   to: process.env.EMAIL_TO,
    //   from: process.env.EMAIL_FROM,
    //   subject: `Contact Form: ${subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
    //     ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // })

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
