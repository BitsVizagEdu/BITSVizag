import {sendApplicationSubmittedMessage, sendWelcomeMessage} from "$lib/twilio.js";

/** @type {import('./$types').RequestHandler} */
export async function POST({request}) {
    try {
        const {
            name,
            branch,
            mobile,
            reference, id
        } = await request.json()
        if (!name || !branch || !mobile || !reference || !id) {
            return new Response(JSON.stringify({
                success: false,
                error: true,
                msg: "Data missing"
            }), {
                status: 400, headers: {
                    "Content-Type": "application/json"
                }
            })
        }

        await sendWelcomeMessage(mobile, id)
        await sendApplicationSubmittedMessage(name, branch, reference, id)

        return new Response(JSON.stringify({success: true}), {headers: { "Content-Type": "application/json"}, status: 200});
    } catch (err) {
        console.error(err)
        return new Response(JSON.stringify({
            success: false,
            error: true,
            msg: "something went wrong. please try again"
        }), {
            status: 500, headers: {
                "Content-Type": "application/json"
            }
        })
    }
}
