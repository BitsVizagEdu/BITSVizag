import { sendApplicationSubmittedMessage, sendWelcomeMessage } from '$lib/twilio.js';
import { env } from '$env/dynamic/private';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    // ── Authentication ──────────────────────────────────────────────────
    const providedKey = request.headers.get('x-api-key');
    const apiSecret = env.API_SECRET || '';
    if (!providedKey || (apiSecret && providedKey !== apiSecret)) {
        return new Response(JSON.stringify({ success: false, error: true, msg: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // ── Payload validation ───────────────────────────────────────────────
    try {
        const { name, branch, mobile, reference, id } = await request.json();

        if (!name || !branch || !mobile || !reference || !id) {
            return new Response(JSON.stringify({ success: false, error: true, msg: 'Data missing' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Validate mobile is numeric and 10 digits (basic sanity check)
        if (!/^\d{10}$/.test(mobile)) {
            return new Response(JSON.stringify({ success: false, error: true, msg: 'Invalid mobile number' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // ── Business logic ─────────────────────────────────────────────────
        await sendWelcomeMessage(mobile, id);
        await sendApplicationSubmittedMessage(name, branch, reference, id);

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ success: false, error: true, msg: 'Something went wrong. Please try again.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
