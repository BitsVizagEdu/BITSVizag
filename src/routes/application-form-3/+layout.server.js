import {redirect} from "@sveltejs/kit";


/** @type {import('./$types').LayoutServerLoad} */
export async function load({url}) {
    let result = {};
    for (let [key, value] of url.searchParams.entries()) {
        result[key] = value;
    }

    if(!result.hasOwnProperty("id") || result.id.length === 0) {
        throw redirect(302, "/application-form")
    }

    if(!result.hasOwnProperty("mobile") || result.mobile.length === 0) {
        throw redirect(302, "/application-form")
    }

    if(!result.hasOwnProperty("name") || result.name.length === 0) {
        throw redirect(302, "/application-form")
    }

    if(!result.hasOwnProperty("branch") || result.branch.length === 0) {
        throw redirect(302, "/application-form")
    }

    if(!result.hasOwnProperty("reference") || result.reference.length === 0) {
        throw redirect(302, "/application-form")
    }

    return {
        queryParams: result
    };
}
