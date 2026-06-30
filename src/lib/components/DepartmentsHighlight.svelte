<script>
	export let isActive = false;
	let expandedCardId = null;

	const programs = [
		{ 
			id: 'cse', 
			name: 'Computer Science', 
			sub: 'B.Tech CSE', 
			intake: '240', 
			icon: '💻', 
			theme: 'blue', 
			labs: 'Advanced Coding Hub, Systems Lab', 
			roles: 'SDE, Systems Architect', 
			link: '/department/Department%20of%20CSE' 
		},
		{ 
			id: 'aiml', 
			name: 'AI & Machine Learning', 
			sub: 'B.Tech AI & ML', 
			intake: '120', 
			icon: '🤖', 
			theme: 'amber', 
			labs: 'AI Research Lab, GPU Hub', 
			roles: 'AI Engineer, Data Scientist', 
			link: '/department/Department%20of%20CSE%20(AI%20&%20ML)' 
		},
		{ 
			id: 'cyber', 
			name: 'Cyber Security', 
			sub: 'B.Tech CS', 
			intake: '60', 
			icon: '🛡️', 
			theme: 'emerald', 
			labs: 'Security Ops Lab, Cyber Range', 
			roles: 'Security Analyst, Ethical Hacker', 
			link: '/department/Department%20of%20CSE%20(Cyber%20Security)' 
		},
		{ 
			id: 'ece', 
			name: 'Electronics & Comm.', 
			sub: 'B.Tech ECE', 
			intake: '120', 
			icon: '📡', 
			theme: 'indigo', 
			labs: 'VLSI Design, IoT Labs', 
			roles: 'VLSI Analyst, IoT Developer', 
			link: '/department/Department%20of%20ECE' 
		},
		{ 
			id: 'eee', 
			name: 'Electrical & Electronics', 
			sub: 'B.Tech EEE', 
			intake: '60', 
			icon: '⚡', 
			theme: 'rose', 
			labs: 'Power Systems, Machines Lab', 
			roles: 'Grid Analyst, Control Engineer', 
			link: '/department/Department%20of%20EEE' 
		},
		{ 
			id: 'mba', 
			name: 'Business Administration', 
			sub: 'MBA Program', 
			intake: '120', 
			icon: '📊', 
			theme: 'purple', 
			labs: 'Business Analytics, FinLab', 
			roles: 'Manager, Consultant', 
			link: '/department/Department%20of%20MBA' 
		}
	];

	const themeStyles = {
		blue: {
			border: 'hover:border-blue-300',
			iconBg: 'bg-blue-50 text-blue-600',
			glow: 'shadow-blue-50',
			badge: 'bg-blue-50 text-blue-700 border-blue-100',
			accentBg: 'bg-blue-600'
		},
		amber: {
			border: 'hover:border-amber-300',
			iconBg: 'bg-amber-50 text-amber-600',
			glow: 'shadow-amber-50',
			badge: 'bg-amber-50 text-amber-700 border-amber-100',
			accentBg: 'bg-amber-500'
		},
		emerald: {
			border: 'hover:border-emerald-300',
			iconBg: 'bg-emerald-50 text-emerald-600',
			glow: 'shadow-emerald-50',
			badge: 'bg-emerald-50 text-emerald-700 border-emerald-100',
			accentBg: 'bg-emerald-600'
		},
		indigo: {
			border: 'hover:border-indigo-300',
			iconBg: 'bg-indigo-50 text-indigo-600',
			glow: 'shadow-indigo-50',
			badge: 'bg-indigo-50 text-indigo-700 border-indigo-100',
			accentBg: 'bg-indigo-600'
		},
		rose: {
			border: 'hover:border-rose-300',
			iconBg: 'bg-rose-50 text-rose-600',
			glow: 'shadow-rose-50',
			badge: 'bg-rose-50 text-rose-700 border-rose-100',
			accentBg: 'bg-rose-600'
		},
		purple: {
			border: 'hover:border-purple-300',
			iconBg: 'bg-purple-50 text-purple-600',
			glow: 'shadow-purple-50',
			badge: 'bg-purple-50 text-purple-700 border-purple-100',
			accentBg: 'bg-purple-600'
		}
	};

	function toggleCard(id) {
		expandedCardId = expandedCardId === id ? null : id;
	}
</script>

<section class="relative h-full w-full flex items-center justify-center overflow-hidden bg-[#fafcff] py-6 md:py-10">
	<div class="relative z-10 mx-auto max-w-6xl px-4 md:px-8 w-full h-full flex flex-col justify-center">
		<!-- Animating Container -->
		<div class="flex flex-col gap-5 md:gap-8 transition-all duration-[800ms] {isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}">
			
			<!-- Section Header -->
			<div class="flex flex-col items-center text-center space-y-1.5">
				<div class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-rose-50 border border-rose-100">
					<i class="fa-solid fa-layer-group text-rose-600 text-[9px]"></i>
					<span class="text-[9px] font-black uppercase tracking-wider text-rose-800">Departments</span>
				</div>
				<h2 class="text-xl sm:text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
					Academic <span class="text-rose-600">Excellence</span>
				</h2>
				<p class="text-slate-500 text-[10px] sm:text-xs font-semibold">Touch any card to reveal labs, roles & explore</p>
			</div>

			<!-- blockbuster Tap-to-Open Grid (2 Cols Mobile, 3 Cols Tablet/Desktop) -->
			<div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 max-w-4xl mx-auto w-full">
				{#each programs as prog}
					<!-- Card Container -->
					<div 
						class="program-card bg-white border border-slate-100 rounded-2xl p-3 md:p-5 flex flex-col justify-between transition-all duration-300 shadow-sm cursor-pointer select-none hover:-translate-y-1 hover:shadow-md {themeStyles[prog.theme].border} {expandedCardId === prog.id ? 'active-expanded ring-2 ring-offset-2' : ''}"
						on:click={() => toggleCard(prog.id)}
						on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleCard(prog.id)}
						role="button"
						tabindex="0"
					>
						<div>
							<!-- Header: Icon & Intake -->
							<div class="flex items-center justify-between gap-2 mb-2 md:mb-3">
								<div class="w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center font-bold text-sm md:text-lg shrink-0 shadow-sm {themeStyles[prog.theme].iconBg}">
									{prog.icon}
								</div>
								
								<div class="flex items-center gap-1 shrink-0">
									<span class="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Intake</span>
									<span class="text-xs md:text-sm font-black text-rose-600">{prog.intake}</span>
								</div>
							</div>

							<!-- Names -->
							<h3 class="text-slate-800 font-extrabold text-xs md:text-[14px] leading-tight mb-1">{prog.name}</h3>
							<p class="text-slate-400 text-[9px] md:text-[11px] font-semibold">{prog.sub}</p>
						</div>

						<!-- Smooth Expandable Segment (Touch & Open) -->
						<div class="expand-wrapper overflow-hidden transition-all duration-300" style="max-height: {expandedCardId === prog.id ? '160px' : '0px'}">
							<div class="pt-3 border-t border-slate-50 mt-3 text-[9.5px] md:text-xs text-slate-500 space-y-2">
								<div>
									<span class="block font-black text-slate-700 uppercase tracking-wider text-[8px] mb-0.5">Core Labs</span>
									<p class="leading-relaxed text-slate-500 font-medium">{prog.labs}</p>
								</div>
								<div>
									<span class="block font-black text-slate-700 uppercase tracking-wider text-[8px] mb-0.5">Top Roles</span>
									<p class="leading-relaxed text-slate-500 font-medium">{prog.roles}</p>
								</div>
								<!-- Explore Button -->
								<a 
									href={prog.link}
									class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-[9px] uppercase tracking-wider transition-colors w-full justify-center shadow-md shadow-rose-600/10 mt-1"
									on:click|stopPropagation
								>
									<span>Explore Page</span>
									<i class="fa-solid fa-arrow-right text-[8px]"></i>
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>

		</div>
	</div>
</section>

<style>
	.program-card {
		will-change: transform, box-shadow, border-color;
	}

	.active-expanded {
		background: #ffffff;
		border-color: rgba(225, 29, 72, 0.4) !important;
		box-shadow: 0 10px 25px rgba(225, 29, 72, 0.05);
	}

	.expand-wrapper {
		will-change: max-height;
	}
</style>
