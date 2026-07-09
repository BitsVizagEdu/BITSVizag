import * as cookie from 'cookie';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	event.locals.userid = cookies['userid'] || crypto.randomUUID();

	const response = await resolve(event, {
		// Transform the HTML to inject performance-critical attributes
		transformPageChunk: ({ html }) => html
	});

	// Set userid cookie if it's a new visitor
	if (!cookies['userid']) {
		const isProduction = process.env.NODE_ENV === 'production';
		response.headers.set(
			'set-cookie',
			cookie.serialize('userid', event.locals.userid, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: isProduction, // only enforce HTTPS in production
				maxAge: 60 * 60 * 24 * 365 // 1 year
			})
		);
	}

	const url = new URL(event.request.url);
	const path = url.pathname;

	// Aggressive caching for static assets (images, fonts, icons)
	if (/\.(png|jpg|jpeg|webp|avif|svg|gif|ico|woff2?|ttf|otf)$/i.test(path)) {
		response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
		response.headers.set('Vary', 'Accept-Encoding');
	}
	// Cache CSS/JS chunks (Vite hashes them, so safe to cache immutably)
	else if (/\.(css|js)$/i.test(path) && path.includes('/_app/')) {
		response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
	}
	// HTML pages: allow serving stale while revalidating
	else if (response.headers.get('content-type')?.includes('text/html')) {
		response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');

		// ── Security headers for every HTML response ─────────────────────
		response.headers.set('X-Content-Type-Options', 'nosniff');
		response.headers.set('X-Frame-Options', 'SAMEORIGIN');
		response.headers.set('X-XSS-Protection', '1; mode=block');
		response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
		response.headers.set(
			'Permissions-Policy',
			'camera=(), microphone=(), geolocation=(), payment=()'
		);
		response.headers.set(
			'Content-Security-Policy',
			[
				"default-src 'self'",
				// SvelteKit inline scripts use nonces — allow 'unsafe-inline' for now; tighten with nonces later
				"script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://script.google.com",
				"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
				"font-src 'self' https://fonts.gstatic.com",
				"img-src 'self' data: blob:",
				// Allow connecting to Google Apps Script (form submissions) and Twilio (via server)
				"connect-src 'self' https://script.google.com",
				"frame-ancestors 'none'",
				"base-uri 'self'",
				"form-action 'self' https://script.google.com"
			].join('; ')
		);
	}

	return response;
};
