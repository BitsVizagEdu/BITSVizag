<script>
	let faculty = [
		{
			name: 'Dr. Sandeep Vardhan',
			designation: 'Professor & Lead',
			qualification: 'M.Tech, Ph.D (InfoSec)',
			mail: ''
		},
		{
			name: 'Mr. K. Rajesh',
			designation: 'Assistant Professor',
			qualification: 'M.Tech',
			mail: ''
		}
	];
</script>

<section
	class="bg-white p-6 md:p-12 rounded-[32px] border border-slate-100 shadow-sm"
	style="font-family: 'Roboto', sans-serif;"
>
	<div class="max-w-5xl mx-auto">
		<!-- Header -->
		<div class="mb-12">
			<div
				class="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-4 py-2 rounded-full mb-6"
			>
				<div class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
				<span
					class="text-red-600 text-[11px] font-bold uppercase tracking-widest"
					style="font-family: 'Poppins', sans-serif;">Security Specialist</span
				>
			</div>
			<h1
				class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
				style="font-family: 'Poppins', sans-serif;"
			>
				Computer Science & Engineering <br />
				<span class="text-red-500">(Cyber Security)</span>
			</h1>
			<p class="text-lg text-slate-600 leading-relaxed max-w-3xl">
				In an increasingly digital world, the Department of CSE (Cyber Security) stands as a
				fortress of knowledge. We train students to defend digital infrastructure, manage cyber
				risks, and pioneer next-generation encryption technologies.
			</p>
		</div>

		<!-- Hero Image -->
		<div class="relative rounded-[40px] overflow-hidden shadow-2xl mb-16 h-[400px]">
			<img
				src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
				alt="Cyber Security"
				class="w-full h-full object-cover"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
			></div>
			<div class="absolute bottom-8 left-8 text-white">
				<p class="text-3xl font-bold" style="font-family: 'Poppins', sans-serif;">
					Defending the Digital Frontier
				</p>
			</div>
		</div>

		<!-- Features Grid -->
		<div class="grid md:grid-cols-2 gap-8 mb-16">
			<div
				class="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm transition-hover hover:shadow-md duration-300"
			>
				<div
					class="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6"
				>
					<i class="fa-solid fa-shield-halved text-xl"></i>
				</div>
				<h3
					class="text-xl font-bold mb-3 text-slate-900"
					style="font-family: 'Poppins', sans-serif;"
				>
					Core Competencies
				</h3>
				<ul class="space-y-2 text-slate-500">
					<li>• Network Security & Ethical Hacking</li>
					<li>• Cryptography & Blockchain</li>
					<li>• Digital Forensics & Cyber Laws</li>
					<li>• Cloud Security Systems</li>
				</ul>
			</div>
			<div
				class="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm transition-hover hover:shadow-md duration-300"
			>
				<div
					class="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6"
				>
					<i class="fa-solid fa-terminal text-xl"></i>
				</div>
				<h3
					class="text-xl font-bold mb-3 text-slate-900"
					style="font-family: 'Poppins', sans-serif;"
				>
					Lab Environment
				</h3>
				<ul class="space-y-2 text-slate-500">
					<li>• Cyber Defense Simulation Lab</li>
					<li>• Penetration Testing Center</li>
					<li>• Security Operations Center (SOC)</li>
					<li>• Ethical Hacking Sandbox</li>
				</ul>
			</div>
		</div>

		<!-- Academic Info -->
		<div class="bg-slate-900 text-white p-10 md:p-14 rounded-[40px] mb-16 relative overflow-hidden">
			<div class="relative z-10">
				<h2 class="text-3xl md:text-4xl font-bold mb-8" style="font-family: 'Poppins', sans-serif;">
					Academic Program
				</h2>
				<div class="flex flex-wrap gap-12">
					<div>
						<p class="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Degree</p>
						<p class="text-2xl font-bold text-red-400">B.Tech : CSE (Cyber Security)</p>
					</div>
					<div>
						<p class="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Duration</p>
						<p class="text-2xl font-bold text-red-400">4 Years</p>
					</div>
					<div>
						<p class="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Focus</p>
						<p class="text-2xl font-bold text-red-400">Zero Trust Arch.</p>
					</div>
				</div>
			</div>
			<!-- Background graphic -->
			<div class="absolute right-[-20px] bottom-[-40px] opacity-10">
				<i class="fa-solid fa-key text-[250px]"></i>
			</div>
		</div>

		<!-- Faculty -->
		<div>
			<h2
				class="text-3xl font-bold mb-10 text-slate-950"
				style="font-family: 'Poppins', sans-serif;"
			>
				Specialized Faculty
			</h2>
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each faculty as member}
					<div
						class="bg-slate-50/50 p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center"
					>
						<div
							class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100"
						>
							<i class="fa-solid fa-user-shield text-2xl text-slate-400"></i>
						</div>
						<h4 class="font-bold text-slate-900 mb-1">{member.name}</h4>
						<p class="text-sm text-red-500 font-semibold mb-2">{member.designation}</p>
						<span
							class="text-xs text-slate-400 bg-white border border-slate-100 px-3 py-1 rounded-full"
							>{member.qualification}</span
						>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
