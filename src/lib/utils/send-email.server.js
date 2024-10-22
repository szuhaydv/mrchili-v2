import nodemailer from 'nodemailer';
import { GMAIL_USERNAME, GMAIL_PASSWORD } from '$env/dynamic/private';

export async function sendEmail(options) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: GMAIL_USERNAME,
            pass: GMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: GMAIL_USERNAME,
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html
    };

    try {
        await transporter.sendMail(mailOptions);
        return { message: 'Email sent successfully!' };
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}
