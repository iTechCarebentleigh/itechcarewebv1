import nodemailer from 'nodemailer';

export const sendEmail = async (type, formData) => {
  const businessEmail = process.env.BUSINESS_EMAIL ;
  const noreplyBusinessEmail = process.env.EMAIL_FROM;;

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

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: 587,
    secure: false,
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
    
    

      const userMailOptions = {
        from: noreplyBusinessEmail,
        to: formData.email,
        subject: `Your Book Repair Request for ${formData.device}`,
        html: `
          <h2>Booking Confirmed</h2>
          <p>Dear ${formData.name},</p>
          <p>Thank you for booking your repair with us. Here are the details:</p>
          <ul>
            <li>Device: ${formData.device}</li>
            <li>Issue: ${formData.issue}</li>
            <li>Visit Date: ${formData.visitDate}</li>

          </ul>
          <p>We look forward to welcoming you.</p>
          <p>Best regards,<br>iTech Care</p>
        `,
      };

      await transporter.sendMail(teamMailOptions);
      console.log(`Team notified for device: ${formData.device}`);
      await transporter.sendMail(userMailOptions);
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


//env variables added and loaded