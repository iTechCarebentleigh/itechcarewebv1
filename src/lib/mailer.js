import nodemailer from 'nodemailer';
import { MailtrapClient } from "mailtrap"

export const sendEmail = async (type, formData) => {
  const businessEmail = process.env.BUSINESS_EMAIL ;
  const noreplyBusinessEmail = process.env.EMAIL_FROM;;
  const TOKEN = process.env.MAILTRAP_TOKEN; // Mailtrap token from environment variables
  const templateUuid = "aa8d826c-5510-48d6-b3c0-615b2e9575f7"; // Mailtrap template UUID for the user email

  // Validate environment variables
  if (!process.env.MAILTRAP_HOST || !process.env.MAILTRAP_USER || !process.env.MAILTRAP_PASS) {
    throw new Error('Mailtrap configuration is not set in environment variables.');
  }

  // Validate formData
  const requiredFields = ['name', 'email', 'phone', 'device', 'issue'];
  for (const field of requiredFields) {
    if (!formData[field]) {
      return { success: false, error: `${field} is required.` };
    }
  }

  const transport = new MailtrapClient({ token: TOKEN });


  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: 587,
    secure: false,
    token: TOKEN,

    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Allow self-signed certificates
    },
  });
  

  try {
    if (type === 'Book Repair') {
      const teamMailOptions = {
        from: noreplyBusinessEmail,
        to: businessEmail,
        subject: `New Book Repair Request for ${formData.device}`,
        html: `
          <div>
            <h2>New Book Repair Request</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Device:</strong> ${formData.device}</p>
            <p><strong>Issue:</strong> ${formData.issue}</p>
           <p>Visit Date: ${formData.visitDate}</p>

            <p>Please follow up on this repair request.</p>
          </div>
        `,
      };
    
      const sender = { name: "iTechCare", email: noreplyBusinessEmail};


      const userMailOptions = {
        from: sender, // Use the sender defined
        to: [{ email: formData.email }],
        template_uuid: templateUuid, // Use the Mailtrap template UUID
        template_variables: {
          "name": formData.name,
          "email": formData.email,
          "phone": formData.phone,
          "visitDate": formData.visitDate || "Not provided",
          "brand": formData.brand || "Not specified",
          "deviceValue": formData.device,
          "issueInput": formData.issue}
      };

      await transporter.sendMail(teamMailOptions);
      console.log(`Team notified for device: ${formData.device}`);
      await transport.send(userMailOptions);
      console.log(`User notified: ${formData.email}`);
      return { success: true };
    } else if (type === 'Request a Quote') {
      const quoteMailOptions = {
        from: noreplyBusinessEmail,
        to: businessEmail,
        subject: `New Quote Request for ${formData.service}`,
        text: `
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Service: ${formData.service}
          Additional Details: ${formData.details}

          Please provide a quote for the requested service.
        `,
      };

      await transporter.sendMail(quoteMailOptions);
      console.log(`Quote request sent for service: ${formData.service}`);
      return { success: true };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
};


//env variables added and loaded with changes