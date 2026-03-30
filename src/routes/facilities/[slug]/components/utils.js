export let items = [
    'Knowledge-Resource-Center',
    'Accommdation',
    'Cafeteria',
    'Sports',
    'Laboratories',
    'Transport'
];

const facilityNames = {
    'Knowledge-Resource-Center': 'Knowledge Center',
    'Accommdation': 'Accommodation',
    'Cafeteria': 'Cafeteria',
    'Sports': 'Sports',
    'Laboratories': 'Laboratories',
    'Transport': 'Transport'
};

export function getFacilityLabel(slug) {
    return facilityNames[slug] || slug.replace(/-/g, ' ');
}
