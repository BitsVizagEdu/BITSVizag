import { error } from '@sveltejs/kit';
import {items} from "./components/utils.js";

function normalizeSlug(item){
    try {
        return decodeURIComponent(item);
    } catch {
        return item;
    }
}

function checkInArray(item){
    for(let data of items){
        if(data === item){
            return true
        }
    }
    return false
}

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const route = normalizeSlug(params.slug);

    if (checkInArray(route)) {
        return {
            route
        };
    }
    throw error(404, 'Not found');
}