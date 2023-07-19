<script>

let details = [
	{
		name: "Sandeep",
		job: "Infinite Proxies",
		branch: "CSE"
	},
	{
		name: "Rahul",
		job: "TCS",
		branch: "CSE"
	},
	{
		name: "Chaitanya",
		job: "TCS",
		branch: "CSE"
	},
	{
		name: "Keerthana",
		job: "TCS",
		branch: "CSE"
	},
	{
		name: "Sai Prasad",
		job: "TCS",
		branch: "CSE"
	},
	{
		name: "Sunitha",
		job: "TCS",
		branch: "CSE"
	},
	{
		name: "Manikanta",
		job: "Infosys",
		branch: "CSE"
	},
	{
		name: "Dan Alfred",
		job: "Infosys",
		branch: "CSE"
	},
	{
		name: "Tejaswini",
		job: "Infosys",
		branch: "CSE"
	},
	{
		name: "Mounika",
		job: "Infosys",
		branch: "ECE"
	},
	{
		name: "Ramesh",
		job: "Tech Mahindra",
		branch: "MECH"
	},
	{
		name: "Kishore",
		job: "Tech Mahindra",
		branch: "MECH"
	},
	{
		name: "Satish",
		job: "Tech Mahindra",
		branch: "MECH"
	},
	{
		name: "Jyothi",
		job: "Tech Mahindra",
		branch: "MECH"
	},
	{
		name: "Divya",
		job: "Tech Mahindra",
		branch: "MECH"
	},
	{
		name: "Ankith",
		job: "Teleperformance",
		branch: "ECE"
	},
	{
		name: "Nihal",
		job: "Teleperformance",
		branch: "ECE"
	},
	{
		name: "Naveen",
		job: "Teleperformance",
		branch: "ECE"
	},
	{
		name: "Srinivas Rao",
		job: "Teleperformance",
		branch: "ECE"
	},

]
</script>

<section class="lg:flex-row justify-evenly items-center 3xs:flex-col flex ">
	<div class="container flex flex-col px-4 sm:px-12 py-8 3xs:w-full lg:w-1/2 justify-between items-center basis-1/2 min-h-[10vh]">
		<h3 class="text-3xl font-semibold p-4">COMPANY VISITED</h3>
		<div class="slider lg:min-h-[30vh]">
			<div class="slide-track ">
				<div class="slide "><img src="/logo-150/1.png" alt="" /></div>
				<div class="slide "><img src="/logo-150/2.png" alt="" /></div>
				<div class="slide "><img src="/logo-150/3.png" alt="" /></div>
				<div class="slide "><img src="/logo-150/4.png" alt="" /></div>
				<div class="slide "><img src="/logo-150/5.png" alt="" /></div>
				<div class="slide "><img src="/logo-150/6.png" alt="" /></div>
				<div class="slide "><img src="/logo-150/7.png" alt="" /></div>
				<div class="slide "><img src="/logo-150/8.png" alt="" /></div>
				<div class="slide "><img src="/logo-150/9.png" alt="" /></div>
				<div class="slide "><img src="/logo-150/10.png" alt="" /></div>
				<!-- same 9 slides doubled (duplicate) -->
				<div class="slide "><img src="/logo-150/1.png" alt="" /></div>
				<div class="slide "><img src="/logo-150/2.png" alt="" /></div>
				<div class="slide "><img src="/logo-150/3.png" alt="" /></div>
				<div class="slide "><img src="/logo-150/4.png" alt="" /></div>
				<div class="slide "><img src="/logo-150/5.png" alt="" /></div>
				<div class="slide "><img src="/logo-150/6.png" alt="" /></div>
				<div class="slide "><img src="/logo-150/7.png" alt="" /></div>
				<div class="slide "><img src="/logo-150/8.png" alt="" /></div>
				<div class="slide "><img src="/logo-150/9.png" alt="" /></div>
				<div class="slide "><img src="/logo-150/10.png" alt="" /></div>
			</div>
		</div>
	</div>

	<div class="w-full p-4">
		<h3 class="pb-4 text-3xl font-semibold text-center">Placement Info</h3>
		<div class="overflow-x-auto relative shadow-md sm:rounded-lg h-[30vh]">
			<table class="w-full text-sm text-left text-blue-100">
				<thead class="text-xs text-gray-800 uppercase bg-gray-200">
				<tr>
					<th scope="col" class="py-3 px-6">
						Name
					</th>
					<th scope="col" class="py-3 px-6">
						Job
					</th>
					<th scope="col" class="py-3 px-6">
						Branch
					</th>
				</tr>
				</thead>
				<tbody>
					{#each details as item, i}
					<tr class="bg-gray-500 border-b border-gray-700">
						<th scope="row" class="py-4 px-6 font-medium text-gray-50 whitespace-nowrap">
							{item.name}
						</th>
						<td class="py-4 px-6 text-gray-50">
							{item.job}
						</td>
						<td class="py-4 px-6 text-gray-50">
							{item.branch}
						</td>
					</tr>
                                {/each}
				

				<tr class="item-center text text-center ">
					<th></th>
					<a href="/placements"><td colspan="3" class="text-slate-800 text-center justify-center items-center font-bold"> More Info</td></a>
				</tr>

				</tbody>
			</table>
		</div>
	</div>
</section>
