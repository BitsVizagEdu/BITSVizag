import { error } from '@sveltejs/kit';
import { items } from './components/utils.js';

function checkInArray(item) {
    for (let data of items) {
        if (data === item) {
            return true;
        }
    }
    return false;
}

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if (checkInArray(params.slug)) {
        return {
            route: params.slug
        };
    }
    throw error(404, 'Not found');
}
