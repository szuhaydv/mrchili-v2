import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';

const emailUsername = env.GMAIL_USERNAME;
const emailPassword = env.GMAIL_PASSWORD;

export async function sendEmail(options) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: emailUsername,
            pass: emailPassword
        }
    });

    const mailOptions = {
        from: emailUsername,
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
