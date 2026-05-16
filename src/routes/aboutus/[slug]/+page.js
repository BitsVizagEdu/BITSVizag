import { error } from '@sveltejs/kit';
import { items } from "./components/utils.js";

const legacySlugMap = {
    'About-Trust': 'About-AEWS',
    'About-ABWS': 'About-AEWS',
    'Message-from-Chairman': 'Message-from-Secretary-&-Correspondent',
    'Message-from-Secretary': 'Message-from-Secretary-&-Correspondent'
};

function normalizeSlug(item) {
    try {
        return decodeURIComponent(item);
    } catch {
        return item;
    }
}

function checkInArray(item) {
    for (let data of items) {
        if (data === item) {
            return true
        }
    }
    return false
}

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const normalized = normalizeSlug(params.slug);
    const route = legacySlugMap[normalized] || normalized;

    if (checkInArray(route)) {
        return {
            route
        };
    }
    throw error(404, 'Not found');
}