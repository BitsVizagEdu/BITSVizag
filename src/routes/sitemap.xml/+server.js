export async function GET() {
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<!-- Primary Static Routes -->
	<url>
		<loc>https://bitsvizag.com</loc>
		<priority>1.0</priority>
		<changefreq>weekly</changefreq>
	</url>

	<!-- About Us Pages -->
	<url>
		<loc>https://bitsvizag.com/aboutus/About-BITS</loc>
		<priority>0.9</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/aboutus/About-ABWS</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/aboutus/Message-from-Secretary-&-Correspondent</loc>
		<priority>0.7</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/aboutus/Message-from-Principal</loc>
		<priority>0.7</priority>
		<changefreq>monthly</changefreq>
	</url>

	<!-- Departments - Primary Keyword -->
	<url>
		<loc>https://bitsvizag.com/department/Department of BS&H</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/department/Department of CSE</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/department/Department of CSE (AI & ML)</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/department/Department of CSE (Cyber Security)</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/department/Department of ECE</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/department/Department of EEE</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/department/Department of CIVIL</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/department/Department of MECH</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/department/Department of MBA</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>

	<!-- Courses - Primary Keyword -->
	<url>
		<loc>https://bitsvizag.com/courses/Under-Graduation</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/courses/Post-Graduation</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>

	<!-- Facilities - Primary Keyword -->
	<url>
		<loc>https://bitsvizag.com/facilities/Knowledge-Resource-Center</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/facilities/Sports</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/facilities/Laboratories</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/facilities/Cafeteria</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/facilities/Accomidation</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/facilities/Transport</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>

	<!-- Placements/Jobmela - Primary Keyword -->
	<url>
		<loc>https://bitsvizag.com/placements</loc>
		<priority>0.8</priority>
		<changefreq>monthly</changefreq>
	</url>

	<!-- Contact Us -->
	<url>
		<loc>https://bitsvizag.com/contactus</loc>
		<priority>0.7</priority>
		<changefreq>monthly</changefreq>
	</url>

	<!-- Gallery -->
	<url>
		<loc>https://bitsvizag.com/gallery</loc>
		<priority>0.7</priority>
		<changefreq>monthly</changefreq>
	</url>

	<!-- Exam Cell -->
	<url>
		<loc>https://bitsvizag.com/examcell/BTECH</loc>
		<priority>0.7</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/examcell/MBA</loc>
		<priority>0.7</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/examcell/MTECH</loc>
		<priority>0.7</priority>
		<changefreq>monthly</changefreq>
	</url>

	<!-- Accreditation & Reports -->
	<url>
		<loc>https://bitsvizag.com/naac</loc>
		<priority>0.6</priority>
		<changefreq>quarterly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/NIRF</loc>
		<priority>0.6</priority>
		<changefreq>quarterly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/IQAC</loc>
		<priority>0.6</priority>
		<changefreq>quarterly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/Mandatory</loc>
		<priority>0.6</priority>
		<changefreq>quarterly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/affilation-reports</loc>
		<priority>0.6</priority>
		<changefreq>quarterly</changefreq>
	</url>

	<!-- Other Pages -->
	<url>
		<loc>https://bitsvizag.com/feedback</loc>
		<priority>0.5</priority>
		<changefreq>monthly</changefreq>
	</url>
	<url>
		<loc>https://bitsvizag.com/alumini-data</loc>
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
