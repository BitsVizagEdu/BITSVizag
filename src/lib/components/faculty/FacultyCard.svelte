<script>
	import { getDepartmentColor, isFemale, formatFacultyName, formatTitleWithDot } from '$lib/utils.js';

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
	const showTitle = !/^dr\.?$/i.test((faculty.title || '').trim());

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
	$: displayImage = hasPhoto ? faculty.photo : (female ? '/image.png' : placeholderAvatar);

</script>

<article class="faculty-card" style={`--stagger: ${index * 70}ms; --primary-color: ${departmentColor.primary}; --light-bg: ${departmentColor.lightBg}; --badge-bg: ${departmentColor.badgeBg}; --hover-shadow: ${departmentColor.hoverShadow};`}>
	<div class="card-top">
		<div class="department-tag" style={`background-color: ${departmentColor.badgeBg};`}>{faculty.department}</div>
	</div>

	<div class="avatar-wrap {female ? 'female-avatar' : ''}" aria-hidden="true">
		<div class="avatar-inner">
			<img src={displayImage} alt={formattedName} loading="lazy" class:placeholder-avatar={!hasPhoto} class:female-img={female} />
		</div>
	</div>

	<div class="content">
		<h3 class="faculty-name-styled">{showTitle ? `${formattedTitle} ` : ''}{formattedName}</h3>
		<p class="qualification-styled">{faculty.qualification}</p>
		<div class="designation-row">
			<p class="designation {isLab ? 'lab' : ''}">{formattedDesignation}</p>
			{#if experienceLabel}
				<p class="experience-pill">{experienceLabel}</p>
			{/if}
			<div class="mobile-display">
				<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<path
						d="M21 16.42V19.2C21 19.73 20.79 20.24 20.41 20.61C20.04 20.99 19.53 21.2 19 21.2C15.29 20.96 11.74 19.37 9 16.64C6.27 13.9 4.68 10.35 4.44 6.64C4.44 6.1 4.65 5.6 5.03 5.22C5.4 4.84 5.91 4.63 6.44 4.63H9.22C10.18 4.63 11 5.31 11.18 6.25L11.68 8.8C11.8 9.45 11.59 10.12 11.11 10.59L10.14 11.56C11.25 13.53 12.89 15.17 14.86 16.28L15.83 15.31C16.3 14.84 16.97 14.62 17.62 14.74L20.17 15.24C21.11 15.42 21.79 16.24 21.79 17.2"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<span>{faculty.mobile}</span>
			</div>
		</div>
	</div>

	<footer class="meta-row">
		{#if faculty.email}
			<a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer" class="meta-link email-link" title="Send email via Gmail">
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
				<span>Email</span>
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
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
				</svg>
				<span>LinkedIn</span>
			</a>
		{/if}
	</footer>
</article>

<style>
	.faculty-card {
		position: relative;
		isolation: isolate;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 0.95rem;
		border-radius: 20px;
		background: linear-gradient(170deg, rgba(255, 255, 255, 0.95), rgba(249, 250, 251, 0.92));
		border: 1.5px solid rgba(15, 23, 42, 0.06);
		box-shadow: 0 12px 28px rgba(0, 0, 0, 0.04), inset 0 1px 1px rgba(255, 255, 255, 0.9);
		backdrop-filter: blur(8px);
		min-height: auto;
		overflow: hidden;
		animation: card-enter 0.62s cubic-bezier(0.16, 1, 0.3, 1) both;
		animation-delay: var(--stagger);
		transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.faculty-card::before {
		content: '';
		position: absolute;
		inset: 0;
		padding: 1px;
		border-radius: 20px;
		background: linear-gradient(130deg, rgba(14, 165, 233, 0.1), rgba(126, 126, 126, 0.08), rgba(14, 165, 233, 0.05));
		-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		z-index: -1;
		transition: all 0.45s ease;
	}

	.faculty-card:hover {
		transform: translateY(-14px) scale(1.01);
		border-color: var(--primary-color, rgba(15, 23, 42, 0.12));
		box-shadow: 0 28px 56px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.95);
		background: linear-gradient(170deg, rgba(255, 255, 255, 0.97), rgba(248, 249, 250, 0.94));
	}

	.faculty-card:hover::before {
		background: linear-gradient(130deg, var(--primary-color, rgba(14, 165, 233, 0.1)), rgba(126, 126, 126, 0.12), var(--primary-color, rgba(14, 165, 233, 0.08)));
	}

	.card-top {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 10px;
	}

	.department-tag {
		padding: 7px 13px;
		border-radius: 999px;
		font-family: 'Roboto', 'SF Pro Text', 'Segoe UI', sans-serif;
		font-size: 0.68rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #ffffff;
		background: var(--badge-bg, #161616);
		border: none;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.faculty-card:hover .department-tag {
		transform: scale(1.05);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
	}

	.avatar-wrap {
		width: 72px;
		height: 72px;
		margin: 0.2rem auto;
		border-radius: 50%;
		padding: 3px;
		background: linear-gradient(145deg, var(--primary-color, #d2d2d2), var(--light-bg, #efefef));
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
		transition: all 0.45s ease;
		position: relative;
	}

	.avatar-wrap.female-avatar {
		background: linear-gradient(145deg, var(--primary-color, #d2d2d2), var(--light-bg, #efefef));
		box-shadow: 0 12px 32px var(--hover-shadow, rgba(0, 0, 0, 0.15));
	}

	.faculty-card:hover .avatar-wrap {
		transform: scale(1.08);
		box-shadow: 0 16px 32px var(--hover-shadow, rgba(0, 0, 0, 0.18));
	}

	.avatar-inner {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: radial-gradient(circle at 35% 30%, #f7f7f7, #e6e6e6);
		border: 2px solid rgba(255, 255, 255, 0.8);
		overflow: hidden;
		position: relative;
	}

	.avatar-gender-icon {
		display: none;
	}

	.avatar-gender-icon svg {
		display: none;
	}

	.avatar-gender-icon.female-badge {
		display: none;
	}

	.gender-icon-img {
		display: none;
	}

	.avatar-wrap img {
		width: 85%;
		height: 85%;
		object-fit: contain;
		display: block;
		transition: all 0.3s ease;
	}

	.avatar-wrap img.placeholder-avatar {
		opacity: 1;
	}

	.avatar-wrap img.female-img {
		width: 70%;
		height: 70%;
	}

	.content {
		display: grid;
		gap: 0.5rem;
		width: 100%;
	}

	.faculty-name-styled {
		margin: 0;
		font-family: 'Roboto', 'SF Pro Display', 'Segoe UI', sans-serif;
		font-size: 0.88rem;
		font-weight: 700;
		line-height: 1.2;
		color: white;
		padding: 0.5rem 0.75rem;
		border-radius: 8px;
		background: linear-gradient(135deg, var(--primary-color, #52525b), var(--primary-color, #52525b));
		box-shadow: 0 4px 12px var(--hover-shadow, rgba(0, 0, 0, 0.15));
		transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
		position: relative;
		overflow: hidden;
	}

	.faculty-name-styled::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
		transition: left 0.6s cubic-bezier(0.22, 1, 0.36, 1);
		pointer-events: none;
	}

	.faculty-card:hover .faculty-name-styled::before {
		left: 100%;
	}

	.faculty-card:hover .faculty-name-styled {
		transform: translateY(-3px);
		box-shadow: 0 8px 20px var(--hover-shadow, rgba(0, 0, 0, 0.25));
		filter: brightness(1.1);
	}

	.qualification-styled {
		margin: 0.1rem 0;
		font-family: 'Roboto', 'SF Pro Text', 'Segoe UI', sans-serif;
		font-size: 0.75rem;
		font-weight: 600;
		line-height: 1.3;
		color: #1f2937;
		padding: 0.4rem 0.75rem;
		border-radius: 12px;
		background: linear-gradient(135deg, #f3f4f6 0%, #fafbfc 100%);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
		border: 1px solid #e5e7eb;
	}

	.faculty-card:hover .qualification-styled {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
		background: linear-gradient(135deg, #f9fafb 0%, #fafafa 100%);
		border: 1px solid #e5e7eb;
	}

	.designation {
		margin: 0;
		display: inline-flex;
		width: fit-content;
		padding: 0.45rem 0.75rem;
		border-radius: 8px;
		background: transparent;
		border: 1.5px solid var(--primary-color, #52525b);
		font-family: 'Roboto', 'SF Pro Display', 'Segoe UI', sans-serif;
		font-size: 0.7rem;
		font-weight: 800;
		letter-spacing: 0.07em;
		color: var(--primary-color, #52525b);
		transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
		box-shadow: none;
		position: relative;
		overflow: hidden;
	}

	.designation::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, var(--primary-color, rgba(82, 82, 91, 0.1)), transparent);
		transition: left 0.6s cubic-bezier(0.22, 1, 0.36, 1);
		pointer-events: none;
	}

	.faculty-card:hover .designation::before {
		left: 100%;
	}

	.designation::first-letter {
		text-transform: uppercase;
	}

	.designation.lab {
		border-color: #0369a1;
		color: #0369a1;
	}

	.faculty-card:hover .designation {
		transform: translateY(-2px);
		border-color: var(--primary-color, #52525b);
		background: rgba(82, 82, 91, 0.05);
		box-shadow: 0 4px 12px rgba(82, 82, 91, 0.1);
	}

	.faculty-card:hover .designation.lab {
		border-color: #0284c7;
		color: #0284c7;
		background: rgba(3, 105, 161, 0.05);
		box-shadow: 0 4px 12px rgba(3, 105, 161, 0.1);
	}

	.designation-row {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		flex-wrap: wrap;
		margin-top: 0;
	}

	.experience-pill {
		margin: 0;
		display: inline-flex;
		align-items: center;
		padding: 5px 10px;
		border-radius: 999px;
		background: linear-gradient(135deg, #ecfeff 0%, #f0fdfa 100%);
		border: 1.2px solid #a5f3fc;
		font-family: 'Roboto', 'SF Pro Text', 'Segoe UI', sans-serif;
		font-size: 0.64rem;
		font-weight: 800;
		letter-spacing: 0.05em;
		color: #0f766e;
		white-space: nowrap;
		transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
		box-shadow: 0 2px 8px rgba(6, 182, 212, 0.08);
	}

	.faculty-card:hover .experience-pill {
		transform: translateY(-2px);
		background: linear-gradient(135deg, #f0fdfa 0%, #ffffff 100%);
		border-color: #67e8f9;
		box-shadow: 0 4px 12px rgba(6, 182, 212, 0.15);
	}

	.mobile-display {
		display: flex;
		align-items: center;
		gap: 4px;
		padding: 4px 7px;
		border-radius: 8px;
		background: #f5f5f5;
		border: 1px solid #e4e4e7;
		font-family: 'Roboto', 'SF Pro Text', 'Segoe UI', sans-serif;
		font-size: 0.68rem;
		font-weight: 600;
		color: #374151;
		transition: all 0.3s ease;
	}

	.mobile-display svg {
		width: 13px;
		height: 13px;
		stroke: currentColor;
		flex-shrink: 0;
	}

	.faculty-card:hover .mobile-display {
		background: var(--light-bg, #f5f5f5);
		border-color: var(--primary-color, #e4e4e7);
		color: var(--primary-color, #374151);
	}

	.meta-row {
		display: flex;
		flex-wrap: nowrap;
		gap: 0.8rem;
		margin-top: auto;
		padding-top: 0.35rem;
		border-top: 1px solid rgba(0, 0, 0, 0.06);
		align-items: center;
		justify-content: flex-start;
	}

	.meta-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 7px;
		padding: 6px 11px;
		border-radius: 10px;
		text-decoration: none;
		background: #f9fafb;
		border: 1.2px solid #e5e7eb;
		color: #4b5563;
		font-family: 'Roboto', 'SF Pro Text', 'Segoe UI', sans-serif;
		font-size: 0.7rem;
		font-weight: 600;
		transition: all 0.3s ease;
		white-space: nowrap;
		flex-shrink: 0;
		min-width: 68px;
	}

	.meta-link svg {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
		transition: all 0.3s ease;
	}

	.meta-link:hover {
		transform: translateY(-3px);
		border-color: var(--primary-color, #a1a1aa);
		color: var(--primary-color, #111827);
		background: var(--light-bg, #fafafa);
		box-shadow: 0 4px 12px var(--hover-shadow, rgba(0, 0, 0, 0.08));
	}

	.meta-link.linkedin-link:hover {
		color: #0a66c2;
		border-color: #0a66c2;
	}

	.meta-link.email-link:hover {
		color: #d97706;
		border-color: #d97706;
	}

	.view-profile {
		display: none;
	}

	@keyframes card-enter {
		from {
			opacity: 0;
			transform: translateY(24px) scale(0.98);
		}

		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@keyframes badge-pop {
		from {
			opacity: 0;
			transform: scale(0.6);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	@media (max-width: 640px) {
		.faculty-card {
			min-height: auto;
			padding: 1rem;
			gap: 0.55rem;
		}

		.avatar-wrap {
			width: 78px;
			height: 78px;
		}

		.meta-row {
			flex-wrap: wrap;
			gap: 0.25rem;
		}

		.meta-link {
			flex: 1;
			min-width: 0;
			justify-content: center;
			padding: 5px 6px;
			font-size: 0.68rem;
		}

		.meta-link span {
			display: none;
		}

		.meta-link svg {
			width: 13px;
			height: 13px;
		}

		.designation-row {
			gap: 0.4rem;
		}

		.mobile-display {
			padding: 4px 7px;
			font-size: 0.65rem;
			gap: 4px;
		}

		.mobile-display svg {
			width: 12px;
			height: 12px;
		}
	}
</style>
