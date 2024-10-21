import { sendEmail } from '$lib/utils/send-email.server';

export async function POST({ request }) {
    try {
        const { to, subject, text, html } = await request.json();
        await sendEmail({ to, subject, text, html });
        return new Response(String("Successful"));
    } catch (error) {
        return new Response(String("Unsuccessful" + error));
    }
}
