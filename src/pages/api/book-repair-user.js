import { sendEmail } from '../../lib/mailer';

export default async function handler(req, res) {
  // Check for POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { formData } = req.body;

  // Log the received formData for debugging
  console.log('Received formData:', formData);

  // Validate formData
  const requiredFields = ['name', 'email', 'phone', 'device', 'issue'];
  if (!formData || typeof formData !== 'object') {
    return res.status(400).json({ message: 'Invalid request body' });
  }

  for (const field of requiredFields) {
    if (!formData[field]) {
      return res.status(400).json({ message: `${field} is required.` });
    }
  }

  try {
    // Send an email to the user
    const result = await sendEmail('Book Repair', formData);
    
    // Return a success response with a success flag
    if (result.success) {
      return res.status(200).json({ success: true, message: 'Email sent to the user successfully' });
    } else {
      return res.status(500).json({ success: false, message: 'Failed to send email to the user', error: result.error });
    }
  } catch (error) {
    console.error('Error in API route:', error); // Log the error for debugging
    return res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
}
