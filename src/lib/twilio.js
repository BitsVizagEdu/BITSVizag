import { env } from '$env/dynamic/private';
import twilio from 'twilio';

/**
 * Helper to safely instantiate Twilio client.
 */
function getClient() {
    const accountSid = env.TWILIO_ACCOUNT_SID;
    const authToken = env.TWILIO_AUTH_TOKEN;
    if (!accountSid || !authToken) {
        return null;
    }
    return twilio(accountSid, authToken);
}

/**
 * Send a welcome WhatsApp message to the applicant.
 * @param {string} contact - Applicant phone number (without country code)
 * @param {string} applicationId - The generated application ID
 */
export async function sendWelcomeMessage(contact, applicationId) {
    try {
        const client = getClient();
        if (!client) {
            console.warn('Twilio credentials not configured; skipping sendWelcomeMessage');
            return false;
        }

        await client.messages.create({
            body: 'Thankyou for choosing BITS Vizag. We are happy to Welcome you to the BITS Family. For info, visit www.bitsvizag.com\n\nYour application ID: ' + applicationId,
            from: 'whatsapp:' + (env.TWILIO_FROM_NUMBER || ''),
            to: 'whatsapp:+91' + contact
        });

        console.log(`Sent welcome message to ${contact}`);
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}

/**
 * Notify admin numbers that a new application has been submitted.
 * @param {string} name
 * @param {string} department
 * @param {string} reference
 * @param {string} applicationId
 */
export async function sendApplicationSubmittedMessage(name, department, reference, applicationId) {
    const body = 'Application is submitted, Here is the details:-\n' +
        `Name: ${name}\n` +
        `Department: ${department}\n` +
        `Reference: ${reference}\n` +
        `Application ID: ${applicationId}`;

    try {
        const client = getClient();
        if (!client) {
            console.warn('Twilio credentials not configured; skipping sendApplicationSubmittedMessage');
            return false;
        }

        if (env.TWILIO_JOSHUA_NUMBER) {
            await client.messages.create({
                body,
                from: 'whatsapp:' + (env.TWILIO_FROM_NUMBER || ''),
                to: 'whatsapp:+91' + env.TWILIO_JOSHUA_NUMBER
            });
            console.log('Sent application details to joshua');
        }

        if (env.TWILIO_SECRETARY_NUMBER) {
            await client.messages.create({
                body,
                from: 'whatsapp:' + (env.TWILIO_FROM_NUMBER || ''),
                to: 'whatsapp:+91' + env.TWILIO_SECRETARY_NUMBER
            });
            console.log('Sent application details to secretary');
        }

        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}