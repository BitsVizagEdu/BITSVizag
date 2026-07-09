import { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER, TWILIO_JOSHUA_NUMBER, TWILIO_SECRETARY_NUMBER } from '$env/static/private';
import twilio from 'twilio';

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

/**
 * Send a welcome WhatsApp message to the applicant.
 * @param {string} contact - Applicant phone number (without country code)
 * @param {string} applicationId - The generated application ID
 */
export async function sendWelcomeMessage(contact, applicationId) {
    try {
        await client.messages.create({
            body: 'Thankyou for choosing BITS Vizag. We are happy to Welcome you to the BITS Family. For info, visit www.bitsvizag.com\n\nYour application ID: ' + applicationId,
            from: 'whatsapp:' + TWILIO_FROM_NUMBER,
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
        await client.messages.create({
            body,
            from: 'whatsapp:' + TWILIO_FROM_NUMBER,
            to: 'whatsapp:+91' + TWILIO_JOSHUA_NUMBER
        });
        console.log('Sent application details to joshua');

        await client.messages.create({
            body,
            from: 'whatsapp:' + TWILIO_FROM_NUMBER,
            to: 'whatsapp:+91' + TWILIO_SECRETARY_NUMBER
        });
        console.log('Sent application details to secretary');

        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}