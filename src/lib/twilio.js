const accountSid = 'ACea245eb4db361e99851bbe3c41cd4cff';
const authToken = '6812e1151cae263fe3d79d0e8ac59e07';
import twilio from 'twilio';
const client = twilio(accountSid, authToken);

const joshuaNumber = '8297293834';
const secretaryNumber = '7093179090';

export async function sendWelcomeMessage(contact, applicationId) {
    try {
        await client.messages
            .create({
                body: 'Thankyou for choosing BITS Vizag. We are happy to Welcome you to the BITS Family. For info, visit www.bitsvizag.com\n\nYour application ID: ' + applicationId,
                from: 'whatsapp:+919392193834',
                to: 'whatsapp:+91' + contact
            })

        console.log(`Sent welcome message to ${contact}`)
        return true
    } catch(err) {
        console.error(err)
        return false
    }
}

export async function sendApplicationSubmittedMessage(name, department, reference, applicationId) {
    try {
        await client.messages
            .create({
                body: 'Application is submitted, Here is the details:-\n' +
                    `Name: ${name}\n` +
                    `Department: ${department}\n` +
                    `Reference: ${reference}\n` +
                    `Application ID: ${applicationId}`,
                from: 'whatsapp:+919392193834',
                to: 'whatsapp:+91' + joshuaNumber
            })

        console.log("Sent application details to joshua")

        await client.messages
            .create({
                body: 'Application is submitted, Here is the details:-\n' +
                    `Name: ${name}\n` +
                    `Department: ${department}\n` +
                    `Reference: ${reference}\n` +
                    `Application ID: ${applicationId}`,
                from: 'whatsapp:+919392193834',
                to: 'whatsapp:+91' + secretaryNumber
            })

        console.log("Sent application details to secretary")

        return true
    } catch(err) {
        console.error(err)
        return false
    }
}