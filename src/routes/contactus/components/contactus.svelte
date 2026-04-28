<script>
	const contacts = [
		{
			name: 'Principal',
			person: 'Dr. M. Rajan Babu',
			email: 'principal@bitsvizag.com',
			icon: 'fa-user-tie',
			accent: 'from-amber-500 to-orange-500'
		},
		{
			name: 'Dean - Academics',
			person: 'Dr. B. Poorna Satyanarayana',
			email: 'deanacademics@bitsvizag.com',
			icon: 'fa-graduation-cap',
			accent: 'from-sky-500 to-blue-500'
		},
		{
			name: 'Administrative Officer',
			person: 'Mr. T. Kiran Kumar',
			email: 'ao@bitsvizag.com',
			icon: 'fa-clipboard-check',
			accent: 'from-emerald-500 to-teal-500'
		},
		{
			name: 'Exam Cell',
			person: 'Prof. D. N. Murti',
			email: 'examcellinfo@bitsvizag.com',
			icon: 'fa-file-lines',
			accent: 'from-violet-500 to-indigo-500'
		}
	];

	const quickLinks = [
		{ label: 'Admissions', href: '/admissions', icon: 'fa-arrow-right' },
		{ label: 'Courses', href: '/courses', icon: 'fa-arrow-right' },
		{ label: 'Placements', href: '/placements', icon: 'fa-arrow-right' }
	];
</script>

<section class="relative overflow-hidden bg-[#f5f8ff]">
	<div
		class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.10),transparent_30%)]"
	></div>
	<div class="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
		<div class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
			<div class="space-y-8">
				<div
					class="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-blue-700 shadow-sm backdrop-blur"
				>
					<span class="h-2 w-2 rounded-full bg-blue-500"></span>
					CONTACT BITS VIZAG
				</div>

				<div class="max-w-2xl space-y-5">
					<h1 class="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
						Contact Us
					</h1>
					<p class="text-base leading-8 text-slate-600 sm:text-lg">
						Reach the right office quickly. Whether it is admissions, academics, administration, or
						examination support, our team is ready to help.
					</p>
				</div>

				<div class="grid gap-4 sm:grid-cols-2">
					<div
						class="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
					>
						<p class="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Address</p>
						<p class="mt-3 text-sm leading-7 text-slate-700">
							Baba college, Lake, near Pothinamallayyapalem,<br />Visakhapatnam, AP - 530048
						</p>
					</div>
					<div
						class="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
					>
						<p class="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Email</p>
						<a
							class="mt-3 block text-sm font-semibold text-blue-700 hover:text-blue-800"
							href="mailto:principal@bitsvizag.com"
						>
							principal@bitsvizag.com
						</a>
						<p class="mt-2 text-sm text-slate-500">
							For general correspondence and official queries.
						</p>
					</div>
				</div>

				<div class="grid gap-4 sm:grid-cols-2">
					{#each contacts as contact}
						<div
							class="group rounded-3xl border border-white/80 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1"
						>
							<div class="flex items-start gap-4">
								<div
									class={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${contact.accent} text-white shadow-lg`}
								>
									<i class={`fa-solid ${contact.icon} text-sm`}></i>
								</div>
								<div class="min-w-0">
									<p class="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
										{contact.name}
									</p>
									<h2 class="mt-1 text-base font-semibold text-slate-900">{contact.person}</h2>
									<a
										class="mt-2 block break-all text-sm font-medium text-blue-700 transition-colors group-hover:text-blue-800"
										href={`mailto:${contact.email}`}
									>
										{contact.email}
									</a>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<div class="flex flex-wrap gap-3">
					{#each quickLinks as link}
						<a
							href={link.href}
							class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-blue-200 hover:text-blue-700 hover:shadow-md"
						>
							{link.label}
							<i class={`fa-solid ${link.icon} text-[11px]`}></i>
						</a>
					{/each}
				</div>
			</div>

			<div class="space-y-8">
				<!-- MESSAGE FORM -->
				<div
					class="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.1)]"
				>
					<div class="bg-gradient-to-r from-slate-900 to-blue-900 px-8 py-8 text-white">
						<p class="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
							Direct Message
						</p>
						<h2 class="mt-2 text-2xl font-semibold">Send us a Message</h2>
						<p class="mt-2 text-sm text-slate-400">We typically respond within 24 hours.</p>
					</div>

					<form class="space-y-5 px-8 py-8">
						<div class="grid gap-5 sm:grid-cols-2">
							<div class="space-y-1.5">
								<label
									for="name"
									class="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1"
									>Full Name</label
								>
								<input
									type="text"
									id="name"
									placeholder="Your Name"
									class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/5"
								/>
							</div>
							<div class="space-y-1.5">
								<label
									for="email"
									class="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1"
									>Email Address</label
								>
								<input
									type="email"
									id="email"
									placeholder="Your Email"
									class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/5"
								/>
							</div>
						</div>

						<div class="space-y-1.5">
							<label
								for="subject"
								class="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1"
								>Subject</label
							>
							<select
								id="subject"
								class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/5"
							>
								<option>General Inquiry</option>
								<option>Admissions</option>
								<option>Academics</option>
								<option>Placements</option>
								<option>Other</option>
							</select>
						</div>

						<div class="space-y-1.5">
							<label
								for="message"
								class="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1"
								>Your Message</label
							>
							<textarea
								id="message"
								rows="4"
								placeholder="How can we help you?"
								class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm transition-all focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/5"
							></textarea>
						</div>

						<button
							type="submit"
							class="group flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-700 py-4 text-sm font-bold text-white transition-all hover:bg-blue-800 hover:shadow-lg active:scale-[0.98]"
						>
							Send Message
							<i
								class="fa-solid fa-paper-plane text-xs transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
							></i>
						</button>
					</form>
				</div>

				<div
					class="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
				>
					<div class="flex items-center gap-3">
						<div
							class="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700"
						>
							<i class="fa-solid fa-location-dot"></i>
						</div>
						<div>
							<p class="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
								Campus Location
							</p>
							<p class="text-base font-semibold text-slate-900">Visakhapatnam, Andhra Pradesh</p>
						</div>
					</div>
					<div
						class="mt-5 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,rgba(37,99,235,0.09),rgba(251,191,36,0.08))] p-6"
					>
						<div class="flex items-center justify-between gap-4">
							<div>
								<p class="text-sm font-semibold text-slate-900">BITS Vizag</p>
								<p class="mt-2 text-sm leading-7 text-slate-600">
									Baba college, Lake, near Pothinamallayyapalem,<br />Visakhapatnam, AP - 530048
								</p>
							</div>
							<div
								class="hidden sm:flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm"
							>
								<i class="fa-solid fa-building-columns text-2xl"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	:global(body) {
		font-family: 'Inter', sans-serif;
	}
</style>
