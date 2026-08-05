export async function GET() {
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<!-- Primary Static Routes -->
	<url>
		<loc>https://bitsvizag.edu.in</loc>
		<priority>1.0</priority>
		<changefreq>weekly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/best-engineering-college-in-vizag</loc>
		<priority>0.9</priority>
		<changefreq>weekly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/b-tech-admissions-vizag</loc>
		<priority>0.9</priority>
		<changefreq>weekly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/cse-college-vizag</loc>
		<priority>0.9</priority>
		<changefreq>weekly</changefreq>
	</url>

	<!-- About Us Pages -->
	<url>
		<loc>https://bitsvizag.edu.in/aboutus/About-BITS</loc>
		<priority>0.9</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/aboutus/About-ABWEC</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/aboutus/Message-from-Secretary-&-Correspondent</loc>
		<priority>0.7</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/aboutus/Message-from-Principal</loc>
		<priority>0.7</priority>
		<changefreq>monthly</changefreq>
	</url>

	<!-- Departments - Primary Keyword -->
	<url>
		<loc>https://bitsvizag.edu.in/department/Department of BS&H</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/department/Department of CSE</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/department/Department of CSE (AI & ML)</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/department/Department of CSE (Cyber Security)</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/department/Department of ECE</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/department/Department of EEE</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<!-- Department of CIVIL removed from sitemap per request -->
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/department/Department of MECH</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/department/Department of MBA</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>

	<!-- Courses - Primary Keyword -->
	<url>
		<loc>https://bitsvizag.edu.in/courses/Under-Graduation</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/courses/Post-Graduation</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>

	<!-- Facilities - Primary Keyword -->
	<url>
		<loc>https://bitsvizag.edu.in/facilities/Knowledge-Resource-Center</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/facilities/Sports</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/facilities/Laboratories</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/facilities/Cafeteria</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/facilities/Accomidation</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/facilities/Transport</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>

	<!-- Placements/Jobmela - Primary Keyword -->
	<url>
		<loc>https://bitsvizag.edu.in/placements</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>

	<!-- Contact Us -->
	<url>
		<loc>https://bitsvizag.edu.in/contactus</loc>
		<priority>0.7</priority>
		<changefreq>monthly</changefreq>
	</url>

	<!-- Gallery -->
	<url>
		<loc>https://bitsvizag.edu.in/gallery</loc>
		<priority>0.7</priority>
		<changefreq>monthly</changefreq>
	</url>

	<!-- Exam Cell -->
	<url>
		<loc>https://bitsvizag.edu.in/examcell/BTECH</loc>
		<priority>0.7</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/examcell/MBA</loc>
		<priority>0.7</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/examcell/MTECH</loc>
		<priority>0.7</priority>
		<changefreq>monthly</changefreq>
	</url>

	<!-- Accreditation & Reports -->
	<url>
		<loc>https://bitsvizag.edu.in/naac</loc>
		<priority>0.6</priority>
		<changefreq>quarterly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/NIRF</loc>
		<priority>0.6</priority>
		<changefreq>quarterly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/IQAC</loc>
		<priority>0.6</priority>
		<changefreq>quarterly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/governance/mandatory-disclosure</loc>
		<priority>0.6</priority>
		<changefreq>quarterly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/governance/strategic-plan-2025-30</loc>
		<priority>0.6</priority>
		<changefreq>quarterly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/governance/best-practices</loc>
		<priority>0.6</priority>
		<changefreq>quarterly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/affilation-reports</loc>
		<priority>0.6</priority>
		<changefreq>quarterly</changefreq>
	</url>

	<!-- Other Pages -->
	<url>
		<loc>https://bitsvizag.edu.in/feedback</loc>
		<priority>0.5</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.edu.in/alumini-data</loc>
		<priority>0.5</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/Online-Grievances</loc>
		<priority>0.5</priority>
		<changefreq>monthly</changefreq>
	</url>
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
