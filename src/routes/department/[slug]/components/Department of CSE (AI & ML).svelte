<script>
	let faculty = [
		{
			name: 'Dr. Arun Kumar',
			designation: 'Associate Professor',
			qualification: 'M.Tech, Ph.D',
			mail: ''
		},
		{
			name: 'Mrs. S. Lakshmi',
			designation: 'Assistant Professor',
			qualification: 'M.Tech',
			mail: ''
		}
	];
</script>

<section
	class="bg-slate-50 p-6 md:p-12 rounded-[32px] border border-slate-100 shadow-sm"
	style="font-family: 'Roboto', sans-serif;"
>
	<div class="max-w-5xl mx-auto">
		<!-- Header -->
		<div class="mb-12">
			<div
				class="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-6"
			>
				<div class="w-2 h-2 rounded-full bg-[#2672d5] animate-pulse"></div>
				<span
					class="text-[#2672d5] text-[11px] font-bold uppercase tracking-widest"
					style="font-family: 'Poppins', sans-serif;">New Specialization</span
				>
			</div>
			<h1
				class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
				style="font-family: 'Poppins', sans-serif;"
			>
				Computer Science & Engineering <br />
				<span class="text-[#2672d5]">(Artificial Intelligence & Machine Learning)</span>
			</h1>
			<p class="text-lg text-slate-600 leading-relaxed max-w-3xl">
				The Department of CSE (AI & ML) is dedicated to nurturing the next generation of intelligent
				system architects. Our curriculum bridges the gap between foundational computer science and
				the cutting-edge realms of cognitive computing and predictive modeling.
			</p>
		</div>

		<!-- Hero Image -->
		<div class="relative rounded-[40px] overflow-hidden shadow-2xl mb-16 h-[400px]">
			<img
				src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
				alt="AI & ML"
				class="w-full h-full object-cover"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
			></div>
			<div class="absolute bottom-8 left-8 text-white">
				<p class="text-3xl font-bold" style="font-family: 'Poppins', sans-serif;">
					Shaping Intelligent Futures
				</p>
			</div>
		</div>

		<!-- Features Grid -->
		<div class="grid md:grid-cols-2 gap-8 mb-16">
			<div
				class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-hover hover:shadow-md duration-300"
			>
				<div
					class="w-12 h-12 bg-blue-50 text-[#2672d5] rounded-2xl flex items-center justify-center mb-6"
				>
					<i class="fa-solid fa-brain text-xl"></i>
				</div>
				<h3
					class="text-xl font-bold mb-3 text-slate-900"
					style="font-family: 'Poppins', sans-serif;"
				>
					Expertise Areas
				</h3>
				<ul class="space-y-2 text-slate-500">
					<li>• Neural Networks & Deep Learning</li>
					<li>• Natural Language Processing</li>
					<li>• Computer Vision & Robotics</li>
					<li>• Predictive Data Analytics</li>
				</ul>
			</div>
			<div
				class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-hover hover:shadow-md duration-300"
			>
				<div
					class="w-12 h-12 bg-blue-50 text-[#2672d5] rounded-2xl flex items-center justify-center mb-6"
				>
					<i class="fa-solid fa-microchip text-xl"></i>
				</div>
				<h3
					class="text-xl font-bold mb-3 text-slate-900"
					style="font-family: 'Poppins', sans-serif;"
				>
					Modern Infrastructure
				</h3>
				<ul class="space-y-2 text-slate-500">
					<li>• High-Performance GPU Labs</li>
					<li>• Specialized AI Research Center</li>
					<li>• IoT & Automation Workspace</li>
					<li>• Smart Classroom Environment</li>
				</ul>
			</div>
		</div>

		<!-- Academic Info -->
		<div class="bg-[#1e3a8a] text-white p-10 md:p-14 rounded-[40px] mb-16 relative overflow-hidden">
			<div class="relative z-10">
				<h2 class="text-3xl md:text-4xl font-bold mb-8" style="font-family: 'Poppins', sans-serif;">
					Academic Program
				</h2>
				<div class="flex flex-wrap gap-12">
					<div>
						<p class="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2">Degree</p>
						<p class="text-2xl font-bold">B.Tech : CSE (AI & ML)</p>
					</div>
					<div>
						<p class="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2">Duration</p>
						<p class="text-2xl font-bold">4 Years</p>
					</div>
					<div>
						<p class="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2">
							Accreditation
						</p>
						<p class="text-2xl font-bold">NAAC 'A' Grade</p>
					</div>
				</div>
			</div>
			<!-- Background graphic -->
			<div class="absolute right-[-50px] bottom-[-50px] opacity-10">
				<i class="fa-solid fa-graduation-cap text-[300px]"></i>
			</div>
		</div>

		<!-- Faculty -->
		<div>
			<h2
				class="text-3xl font-bold mb-10 text-slate-950"
				style="font-family: 'Poppins', sans-serif;"
			>
				Core Faculty
			</h2>
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each faculty as member}
					<div
						class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all text-center"
					>
						<div
							class="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4"
						>
							<i class="fa-solid fa-user-tie text-2xl text-slate-400"></i>
						</div>
						<h4 class="font-bold text-slate-900 mb-1">{member.name}</h4>
						<p class="text-sm text-[#2672d5] font-semibold mb-2">{member.designation}</p>
						<span class="text-xs text-slate-400 bg-slate-50 px-3 py-1 rounded-full"
							>{member.qualification}</span
						>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
