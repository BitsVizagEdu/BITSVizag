import { env } from '$env/dynamic/private';
import twilio from 'twilio';

function getClient() {
    const accountSid = env.TWILIO_ACCOUNT_SID;
    const authToken = env.TWILIO_AUTH_TOKEN;
    if (accountSid && authToken && accountSid.startsWith('AC')) {
        return twilio(accountSid, authToken);
    }
    return null;
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
            console.warn('Twilio client skipped: missing or invalid TWILIO_ACCOUNT_SID');
            return false;
        }

        const fromNumber = env.TWILIO_FROM_NUMBER || '';
        await client.messages.create({
            body: 'Thankyou for choosing BITS Vizag. We are happy to Welcome you to the BITS Family. For info, visit www.bitsvizag.com\n\nYour application ID: ' + applicationId,
            from: 'whatsapp:' + fromNumber,
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
            console.warn('Twilio client skipped: missing or invalid TWILIO_ACCOUNT_SID');
            return false;
        }

        const fromNumber = env.TWILIO_FROM_NUMBER || '';
        const joshuaNumber = env.TWILIO_JOSHUA_NUMBER || '';
        const secretaryNumber = env.TWILIO_SECRETARY_NUMBER || '';

        await client.messages.create({
            body,
            from: 'whatsapp:' + fromNumber,
            to: 'whatsapp:+91' + joshuaNumber
        });
        console.log('Sent application details to joshua');

        await client.messages.create({
            body,
            from: 'whatsapp:' + fromNumber,
            to: 'whatsapp:+91' + secretaryNumber
        });
        console.log('Sent application details to secretary');

        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}