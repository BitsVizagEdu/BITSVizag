/** @param {string} text */
export function replaceHyphenWithSpace(text) {
    if (!text) return '';
    return text.replace(/-/g, ' ');
}

// Premium department color schemes
export const departmentColors = {
	CSE: {
		primary: '#0ea5e9',
		light: '#e0f2fe',
		dark: '#0369a1',
		lightBg: 'rgba(224, 242, 254, 0.6)',
		badgeBg: '#0e7490',
		badgeText: '#ffffff',
		hoverShadow: 'rgba(14, 165, 233, 0.2)'
	},
	'CSE (CS)': {
		primary: '#0ea5e9',
		light: '#e0f2fe',
		dark: '#0369a1',
		lightBg: 'rgba(224, 242, 254, 0.6)',
		badgeBg: '#0e7490',
		badgeText: '#ffffff',
		hoverShadow: 'rgba(14, 165, 233, 0.2)'
	},
	'CSE (AI & ML)': {
		primary: '#6366f1',
		light: '#e0e7ff',
		dark: '#4f46e5',
		lightBg: 'rgba(224, 231, 255, 0.6)',
		badgeBg: '#4f46e5',
		badgeText: '#ffffff',
		hoverShadow: 'rgba(99, 102, 241, 0.2)'
	},
	ECE: {
		primary: '#a855f7',
		light: '#f3e8ff',
		dark: '#7e22ce',
		lightBg: 'rgba(243, 232, 255, 0.6)',
		badgeBg: '#7e22ce',
		badgeText: '#ffffff',
		hoverShadow: 'rgba(168, 85, 247, 0.2)'
	},
	EEE: {
		primary: '#f97316',
		light: '#ffedd5',
		dark: '#c2410c',
		lightBg: 'rgba(255, 237, 213, 0.6)',
		badgeBg: '#c2410c',
		badgeText: '#ffffff',
		hoverShadow: 'rgba(249, 115, 22, 0.2)'
	},
	Mechanical: {
		primary: '#ef4444',
		light: '#fee2e2',
		dark: '#b91c1c',
		lightBg: 'rgba(254, 226, 226, 0.6)',
		badgeBg: '#b91c1c',
		badgeText: '#ffffff',
		hoverShadow: 'rgba(239, 68, 68, 0.2)'
	},
	Civil: {
		primary: '#10b981',
		light: '#d1fae5',
		dark: '#047857',
		lightBg: 'rgba(209, 250, 229, 0.6)',
		badgeBg: '#047857',
		badgeText: '#ffffff',
		hoverShadow: 'rgba(16, 185, 129, 0.2)'
	},
	MBA: {
		primary: '#3b82f6',
		light: '#dbeafe',
		dark: '#1e40af',
		lightBg: 'rgba(219, 234, 254, 0.6)',
		badgeBg: '#1e40af',
		badgeText: '#ffffff',
		hoverShadow: 'rgba(59, 130, 246, 0.2)'
	},
	'M.Tech': {
		primary: '#14b8a6',
		light: '#ccfbf1',
		dark: '#0d9488',
		lightBg: 'rgba(204, 251, 241, 0.6)',
		badgeBg: '#0d9488',
		badgeText: '#ffffff',
		hoverShadow: 'rgba(20, 184, 166, 0.2)'
	},
	'Lab Programmers': {
		primary: '#64748b',
		light: '#f1f5f9',
		dark: '#475569',
		lightBg: 'rgba(241, 245, 249, 0.6)',
		badgeBg: '#475569',
		badgeText: '#ffffff',
		hoverShadow: 'rgba(100, 116, 139, 0.2)'
	},
	'BS&H': {
		primary: '#059669',
		light: '#d1fae5',
		dark: '#065f46',
		lightBg: 'rgba(209, 250, 229, 0.7)',
		badgeBg: '#047857',
		badgeText: '#ffffff',
		hoverShadow: 'rgba(5, 150, 105, 0.3)'
	}
};

/**
 * @param {string} department
 */
export function getDepartmentColor(department) {
	return departmentColors[department] || departmentColors['Lab Programmers'];
}

/**
 * @param {string} title
 */
export function isFemale(title) {
	return title && (title.toLowerCase() === 'ms' || title.toLowerCase() === 'mrs');
}

/**
 * Format faculty name: Each word starts with capital letter (Title Case)
 * @param {string} name
 */
export function formatFacultyName(name) {
	if (!name) return '';
	const words = name.trim().split(/\s+/);
	if (words.length === 0) return '';
	const capitalizedWords = words.map(word => 
		word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
	);
	return capitalizedWords.join(' ');
}

/**
 * Format title with dot (Mr., Mrs., Dr., etc.)
 * @param {string} title
 */
export function formatTitleWithDot(title) {
	if (!title) return '';
	const formattedTitle = title.trim();
	if (formattedTitle.endsWith('.')) return formattedTitle;
	return `${formattedTitle}.`;
}
