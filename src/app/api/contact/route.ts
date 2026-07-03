import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, budget, project, timeline } = body;

    // Validate required fields
    if (!name || !email || !project) {
      return NextResponse.json(
        { error: "Name, email, and project details are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const receiver = process.env.CONTACT_RECEIVER || "sujalwadhankar999@gmail.com";
    const sender = process.env.EMAIL_FROM || "onboarding@resend.dev";

    const isConfigured =
      apiKey &&
      apiKey !== "re_your_api_key_here" &&
      apiKey.trim() !== "";

    console.log("Contact form request received (Resend):", { name, email, budget, project, timeline });

    // HTML Email template for Agency Notification
    const agencyMailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #E8E4DC; background-color: #FFFDF9; border-radius: 16px; color: #1B1B1B;">
        <h2 style="font-size: 20px; border-bottom: 2px solid #FF8A3D; padding-bottom: 10px; color: #1B1B1B;">New Client Inquiry received</h2>
        <p style="font-size: 15px; line-height: 1.6;">You have received a new project query from the portfolio website.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr style="border-bottom: 1px solid #E8E4DC;">
            <td style="padding: 10px 0; font-weight: bold; width: 130px; font-size: 14px; color: #6D6D6D;">Client Name:</td>
            <td style="padding: 10px 0; font-size: 14px;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #E8E4DC;">
            <td style="padding: 10px 0; font-weight: bold; font-size: 14px; color: #6D6D6D;">Client Email:</td>
            <td style="padding: 10px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #FF8A3D; text-decoration: none;">${email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #E8E4DC;">
            <td style="padding: 10px 0; font-weight: bold; font-size: 14px; color: #6D6D6D;">Budget Range:</td>
            <td style="padding: 10px 0; font-size: 14px;">${budget || "Not specified"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #E8E4DC;">
            <td style="padding: 10px 0; font-weight: bold; font-size: 14px; color: #6D6D6D;">Timeline:</td>
            <td style="padding: 10px 0; font-size: 14px;">${timeline || "Not specified"}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #FAF8F4; border-radius: 8px; border: 1px solid #E8E4DC;">
          <h3 style="margin-top: 0; font-size: 14px; color: #6D6D6D;">Project Details:</h3>
          <p style="font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${project}</p>
        </div>
        
        <p style="font-size: 12px; color: #6D6D6D; margin-top: 25px; text-align: center;">Sent from CodeCrew Agency Portfolio</p>
      </div>
    `;

    // HTML Email template for Client Confirmation
    const clientMailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #E8E4DC; background-color: #FFFDF9; border-radius: 16px; color: #1B1B1B;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h2 style="font-size: 24px; font-weight: normal; margin: 0; color: #1B1B1B;">Hello ${name},</h2>
          <p style="font-size: 16px; color: #6D6D6D; margin: 5px 0 0 0;">Thanks for reaching out to CodeCrew!</p>
        </div>
        
        <p style="font-size: 15px; line-height: 1.7; color: #1B1B1B;">
          We have successfully received your project inquiry. Our team is already reviewing the details you shared, and we will get back to you with next steps within <strong>24 hours</strong>.
        </p>
        
        <div style="margin: 25px 0; padding: 20px; background-color: #FAF8F4; border-radius: 12px; border: 1px solid #E8E4DC;">
          <h4 style="margin: 0 0 10px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #6D6D6D;">Inquiry Summary</h4>
          <p style="font-size: 14px; margin: 4px 0;"><strong>Budget:</strong> ${budget || "To be discussed"}</p>
          <p style="font-size: 14px; margin: 4px 0;"><strong>Timeline:</strong> ${timeline || "To be discussed"}</p>
        </div>

        <p style="font-size: 15px; line-height: 1.7; color: #1B1B1B;">
          If you have any extra documents, references, or details you'd like to append to your request, feel free to reply directly to this email.
        </p>
        
        <hr style="border: none; border-top: 1px solid #E8E4DC; margin: 30px 0;" />
        
        <div style="text-align: center;">
          <p style="font-size: 14px; font-weight: bold; margin: 0; color: #1B1B1B;">CodeCrew Agency</p>
          <p style="font-size: 12px; color: #6D6D6D; margin: 3px 0 0 0;">We build ideas into digital products</p>
          <p style="font-size: 12px; margin: 10px 0 0 0;"><a href="mailto:sujalwadhankar999@gmail.com" style="color: #FF8A3D; text-decoration: none;">sujalwadhankar999@gmail.com</a></p>
        </div>
      </div>
    `;

    if (isConfigured) {
      const resend = new Resend(apiKey);

      // Send mail to Agency
      const agencyRes = await resend.emails.send({
        from: `CodeCrew Inquiries <${sender}>`,
        to: receiver,
        subject: `💼 New Project Inquiry: ${name}`,
        html: agencyMailHtml,
        replyTo: email, // Lets the agency reply directly to the client
      });

      if (agencyRes.error) {
        throw new Error(`Resend Agency Mail Error: ${agencyRes.error.message}`);
      }

      // Send confirmation mail to Client (Only possible on Resend if domain is verified or if client is the registered user)
      // Note: On free/unverified tier, resend will throw error if sending to unverified client emails.
      // We wrap client mail in try-catch so it doesn't fail the whole submission if client email is not verified on Resend trial accounts.
      try {
        const clientRes = await resend.emails.send({
          from: `CodeCrew <${sender}>`,
          to: email,
          subject: `👋 We've received your project inquiry — CodeCrew`,
          html: clientMailHtml,
        });

        if (clientRes.error) {
          console.warn("Client confirmation email could not be sent (likely unverified recipient in Resend sandbox):", clientRes.error.message);
        }
      } catch (clientErr) {
        console.error("Error sending client confirmation email via Resend:", clientErr);
      }

      return NextResponse.json(
        { success: true, message: "Inquiry processed successfully." },
        { status: 200 }
      );
    } else {
      // Fallback: Resend is not configured or configured with placeholders.
      console.warn("------------------------------------------------------------");
      console.warn("⚠️ Resend API Key not configured in environment variables!");
      console.warn("Running in simulation mode.");
      console.warn(`[SIMULATION] Sending notification email to agency: ${receiver}`);
      console.warn(`[SIMULATION] Sending confirmation email to client: ${email}`);
      console.warn("------------------------------------------------------------");

      // Simulate a small delay for realistic UX
      await new Promise((resolve) => setTimeout(resolve, 600));

      return NextResponse.json(
        {
          success: true,
          simulated: true,
          message: "Simulated form submission successful (Resend not configured).",
        },
        { status: 200 }
      );
    }
  } catch (error: any) {
    console.error("Error processing contact form with Resend:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to process contact query." },
      { status: 500 }
    );
  }
}
