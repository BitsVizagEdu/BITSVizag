<script>
	import {
		getDepartmentColor,
		isFemale,
		formatFacultyName,
		formatTitleWithDot
	} from '$lib/utils.js';

	export let faculty;
	export let isLab = false;
	export let index = 0;

	const placeholderAvatar = '/faculty.svg';
	const hasPhoto = Boolean(faculty.photo);
	const female = isFemale(faculty.title);
	const departmentColor = getDepartmentColor(faculty.department);

	/** @param {string} value */
	function removeDoctorPrefix(value = '') {
		return value.replace(/^\s*dr\.?\s+/i, '');
	}

	const cleanedName = removeDoctorPrefix(faculty.name || '');
	const formattedName = formatFacultyName(cleanedName);
	const formattedDesignation = formatFacultyName(faculty.designation);
	const formattedTitle = formatTitleWithDot(faculty.title);
	const showTitle = Boolean(faculty.title);

	/** @param {number | string | null | undefined} value */
	function formatExperience(value) {
		if (value === null || value === undefined || value === '') {
			return '';
		}
		const years = Number(value);
		if (Number.isNaN(years)) {
			return `${value} Years Exp`;
		}
		const unit = years === 1 ? 'Year' : 'Years';
		return `${years} ${unit} Exp`;
	}

	/** @param {string} url */
	function normalizeLinkedIn(url) {
		if (!url) {
			return '';
		}
		if (url.startsWith('http://') || url.startsWith('https://')) {
			return url;
		}
		if (url.startsWith('www.')) {
			return `https://${url}`;
		}
		return '';
	}

	/** @param {string} email */
	function getGmailComposeUrl(email) {
		if (!email) {
			return '';
		}
		return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
	}

	$: linkedInUrl = normalizeLinkedIn(faculty.linkedin);
	$: gmailComposeUrl = getGmailComposeUrl(faculty.email);
	$: experienceLabel = formatExperience(faculty.experience);
	$: displayImage = hasPhoto ? faculty.photo : female ? '/image.png' : placeholderAvatar;
</script>

<article
	class="faculty-card"
	style={`--stagger: ${index * 70}ms; --primary-color: ${departmentColor.primary}; --light-bg: ${departmentColor.lightBg}; --badge-bg: ${departmentColor.badgeBg}; --badge-text: ${departmentColor.badgeText || '#ffffff'};`}
>
	<header class="card-header">
		<div class="avatar-wrap" aria-hidden="true">
			<div class="avatar-inner">
				<img
					src={displayImage}
					alt={formattedName}
					loading="lazy"
					class:placeholder-avatar={!hasPhoto}
					class:female-avatar={female && !hasPhoto}
				/>
			</div>
		</div>
		<div class="identity">
			<h3 class="faculty-name">{showTitle ? `${formattedTitle} ` : ''}{formattedName}</h3>
			<p class="faculty-role {isLab ? 'lab' : ''}">{formattedDesignation}</p>
		</div>
	</header>

	<div class="card-body">
		<p class="faculty-qualification">{faculty.qualification}</p>
		{#if experienceLabel}
			<p class="experience-pill">{experienceLabel}</p>
		{/if}
	</div>

	<footer class="card-footer">
		<p class="department-tag">{faculty.department}</p>
		<div class="meta-row">
			{#if faculty.email}
				<a
					href={gmailComposeUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="meta-link email-link"
					title="Send email"
				>
					<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
						<path
							d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
							stroke="currentColor"
							stroke-width="1.7"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M22 6l-10 7L2 6"
							stroke="currentColor"
							stroke-width="1.7"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</a>
			{/if}

			{#if linkedInUrl}
				<a
					href={linkedInUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="meta-link linkedin-link"
					title="Open LinkedIn profile"
				>
					<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path
							d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
						/>
					</svg>
				</a>
			{/if}
		</div>
	</footer>
</article>

<style>
	.faculty-card {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
		height: 100%;
		padding: 1.05rem;
		border-radius: 14px;
		background: rgba(255, 255, 255, 0.97);
		border: 1px solid rgba(15, 23, 42, 0.07);
		border-top: 3px solid var(--primary-color, #0ea5e9);
		background:
			linear-gradient(
				180deg,
				color-mix(in srgb, var(--light-bg, rgba(224, 242, 254, 0.6)) 38%, #ffffff 62%),
				#ffffff 40%
			),
			#ffffff;
		box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
		animation: card-enter 0.56s cubic-bezier(0.16, 1, 0.3, 1) both;
		animation-delay: var(--stagger);
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease,
			border-color 0.3s ease;
	}

	.faculty-card:hover {
		transform: translateY(-6px);
		border-color: color-mix(in srgb, var(--primary-color, #0ea5e9) 46%, rgba(15, 23, 42, 0.1));
		box-shadow: 0 16px 34px rgba(15, 23, 42, 0.16);
	}

	.card-header {
		display: flex;
		align-items: center;
		gap: 0.8rem;
	}

	.avatar-wrap {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		padding: 2px;
		background: linear-gradient(160deg, var(--primary-color, #0ea5e9), rgba(15, 23, 42, 0.25));
		flex-shrink: 0;
		transition: transform 0.3s ease;
	}

	.faculty-card:hover .avatar-wrap {
		transform: scale(1.06);
	}

	.avatar-inner {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background: linear-gradient(
			145deg,
			color-mix(in srgb, var(--light-bg, rgba(224, 242, 254, 0.6)) 55%, #ffffff 45%),
			#f8fafc
		);
		display: grid;
		place-items: center;
		border: 2px solid rgba(255, 255, 255, 0.95);
		overflow: hidden;
	}

	.avatar-wrap img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.avatar-wrap img.placeholder-avatar {
		object-fit: contain;
		padding: 0.55rem;
		background: #ffffff;
	}

	.avatar-wrap img.female-avatar {
		padding: 0.45rem;
	}

	.identity {
		min-width: 0;
	}

	.faculty-name {
		margin: 0;
		font-size: 0.95rem;
		line-height: 1.2;
		font-weight: 700;
		color: #0f172a;
		white-space: nowrap;
		letter-spacing: -0.015em;
	}

	.faculty-role {
		margin: 0.3rem 0 0;
		font-size: 0.77rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: color-mix(in srgb, var(--primary-color, #0ea5e9) 65%, #334155);
	}

	.faculty-role.lab {
		color: #0369a1;
	}

	.card-body {
		display: grid;
		gap: 0.55rem;
	}

	.faculty-qualification {
		margin: 0;
		font-size: 0.84rem;
		line-height: 1.45;
		color: #6b7280;
	}

	.experience-pill {
		margin: 0;
		display: inline-flex;
		align-items: center;
		width: fit-content;
		padding: 0.28rem 0.58rem;
		border-radius: 999px;
		background: rgba(15, 118, 110, 0.08);
		border: 1px solid rgba(13, 148, 136, 0.2);
		font-size: 0.68rem;
		font-weight: 700;
		letter-spacing: 0.03em;
		color: #0f766e;
		white-space: nowrap;
		margin-top: 0.1rem;
	}

	.card-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.6rem;
		margin-top: auto;
		padding-top: 0.65rem;
		border-top: 1px solid rgba(15, 23, 42, 0.08);
	}

	.department-tag {
		margin: 0;
		padding: 0.22rem 0.52rem;
		border-radius: 999px;
		background: var(--badge-bg, #0e7490);
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--badge-text, #ffffff);
	}

	.meta-row {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
	}

	.meta-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		width: 30px;
		height: 30px;
		border-radius: 999px;
		text-decoration: none;
		background: rgba(248, 250, 252, 0.95);
		border: 1px solid #dbe4ee;
		color: #4b5563;
		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease,
			border-color 0.25s ease,
			color 0.25s ease;
	}

	.meta-link svg {
		width: 14px;
		height: 14px;
		flex-shrink: 0;
	}

	.meta-link:hover {
		transform: translateY(-2px);
		border-color: color-mix(in srgb, var(--primary-color, #0ea5e9) 55%, #94a3b8);
		color: color-mix(in srgb, var(--primary-color, #0ea5e9) 80%, #0f172a);
		box-shadow: 0 8px 16px rgba(15, 23, 42, 0.15);
	}

	.meta-link.linkedin-link:hover {
		color: #0a66c2;
		border-color: #0a66c2;
	}

	.meta-link.email-link:hover {
		color: #d97706;
		border-color: #d97706;
	}

	@keyframes card-enter {
		from {
			opacity: 0;
			transform: translateY(22px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 640px) {
		.faculty-card {
			aspect-ratio: 1 / 1.2;
			padding: 0.4rem;
			gap: 0.15rem;
			text-align: center;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			border-top-width: 2px;
		}

		.card-header {
			flex-direction: column;
			gap: 0.15rem;
			width: 100%;
			margin-bottom: 0.1rem;
		}

		.avatar-wrap {
			width: 38px;
			height: 38px;
			padding: 1px;
		}

		.faculty-name {
			font-size: 0.65rem;
			white-space: normal;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			line-height: 1.1;
			font-weight: 800;
		}

		.faculty-role {
			font-size: 0.48rem;
			margin-top: 0.05rem;
			line-height: 1.1;
			opacity: 0.9;
		}

		.card-body {
			gap: 0.1rem;
			width: 100%;
		}

		.faculty-qualification {
			font-size: 0.45rem;
			line-height: 1;
			margin: 0 auto;
			max-width: 95%;
		}

		.experience-pill {
			font-size: 0.45rem;
			padding: 0.05rem 0.25rem;
		}

		.card-footer {
			flex-direction: column;
			gap: 0.15rem;
			padding-top: 0.15rem;
			border-top: none;
			width: 100%;
		}

		.department-tag {
			font-size: 0.45rem;
			padding: 0.05rem 0.25rem;
		}

		.meta-row {
			gap: 0.3rem;
		}

		.meta-link {
			width: 18px;
			height: 18px;
			background: transparent;
			border: 0.5px solid rgba(0, 0, 0, 0.1);
		}

		.meta-link svg {
			width: 9px;
			height: 11px;
		}
	}
</style>
