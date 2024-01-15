import mailjet from 'node-mailjet';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const { email, type } = req.body;

    const emailData = {
      Messages: [
        {
          From: {
            Email: "admin@greenboost.it",
            Name: "admin@greenboost.it",
          },
          To: [
            {
              Email: "admin@greenboost.it",
            },
          ],
          Subject: "Subject of the email",
          TextPart: `Email :  ${email}, Type :  ${type}!`,
          HTMLPart: `<p>Email :  ${email}, Type :  ${type}!</p>`,
        },
      ],
    };

    const mailjetClient = mailjet.apiConnect(
      '483dd7f7f17487e32497f0b621dbf748',   // Sostituisci con process.env.MJ_APIKEY_PUBLIC
      'a6c1f7062f0499a863f8a45c1e3c6c6a'   // Sostituisci con process.env.MJ_APIKEY_PRIVATE
      );

    const result = await mailjetClient.post("send", { version: "v3.1" }).request(emailData);
    console.log(result.body);

    res.status(200).json({ success: true, message: 'Email sent successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error sending email.' });
  }
}