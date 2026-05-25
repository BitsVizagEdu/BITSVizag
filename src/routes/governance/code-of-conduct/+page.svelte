<script>
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  let visible = false;
  onMount(() => (visible = true));
</script>

<svelte:head>
  <title>Code of Conduct | BITS Vizag</title>
</svelte:head>

{#if visible}
  <main class="doc-container" in:fade={{ duration: 350 }}>
    <header class="page-header" in:fly={{ y: -20, duration: 500 }}>
      <div class="header-gradient"></div>
      <div class="container">
        <div class="header-inner">
          <div class="breadcrumb">Governance / Code of Conduct</div>
          <h1>Code of Conduct — Handbook</h1>
          <p class="tagline">Baba Institute of Technology and Sciences — Standards & Responsibilities</p>
        </div>
      </div>
    </header>

    <div class="container">
      <section class="bento-card" in:fly={{ y: 20, duration: 500, delay: 100 }}>
        <h2>Preamble</h2>
        <p>
          Baba Institute of Technology and Sciences is committed to a culture of excellence, inclusiveness,
          integrity and accountability. This Code of Conduct sets the behavioural standards expected of
          students, teachers, employees and administrators while on campus and in institute activities.
        </p>
      </section>

      <section class="bento-card" in:fly={{ y: 20, duration: 500, delay: 200 }}>
        <h2>Responsibilities of Students</h2>
        <ul class="tight-list">
          <li>Read, understand and comply with institute policies and accept responsibility for actions.</li>
          <li>Respect diversity across gender, caste, creed, religion, region, nationality and background.</li>
          <li>Maintain personal hygiene, wear institute identity card and dress respectfully on campus.</li>
          <li>Use institute resources lawfully and avoid misuse of facilities or equipment.</li>
        </ul>
      </section>

      <section class="bento-card" in:fly={{ y: 20, duration: 500, delay: 300 }}>
        <h2>Student Commitment</h2>
        <ol class="numbered">
          <li>Be punctual and regular; maintain at least 75% attendance to be eligible for final exams.</li>
          <li>Attend classes prepared and follow instructor directions; submit assignments on time.</li>
          <li>Maintain silence in lecture halls, labs and library; abide by lab safety rules and not damage equipment.</li>
          <li>Check institute and department notices daily and attend counselling/mentor meetings as required.</li>
          <li>Follow canteen timings, refrain from forming discriminatory groups and avoid unauthorized media statements.</li>
        </ol>
      </section>

      <section class="bento-card" in:fly={{ y: 20, duration: 500, delay: 400 }}>
        <h2>Academic Misconduct & Disciplinary Violations</h2>
        <ul class="tight-list">
          <li>Any form of examination malpractice, impersonation, or enabling dishonesty is a serious offense.</li>
          <li>Falsifying academic records or altering performance records constitutes misconduct.</li>
          <li>Violence, destruction of property, or harassment (including of female students) will be punished.</li>
          <li>Defacing campus property and damaging notices or posters is prohibited.</li>
        </ul>
      </section>

      <section class="bento-card" in:fly={{ y: 20, duration: 500, delay: 500 }}>
        <h2>Creating a Supportive Campus</h2>
        <ul class="tight-list">
          <li>Communicate respectfully and address differences directly and constructively.</li>
          <li>Avoid mobile phone usage in classrooms and respect quiet spaces such as the library.</li>
          <li>Report grievances to the Grievance Redressal Cell in writing.</li>
          <li>Sustainability and health & safety practices must be followed at all times.</li>
        </ul>
      </section>

      <section class="bento-card" in:fly={{ y: 20, duration: 500, delay: 600 }}>
        <h2>Punishments & Penalties</h2>
        <p>
          Sanctions for violations may include warning, suspension, fines, dismissal or withholding of degree.
          Serious or repeated offences may lead to rustication for a specified period.
        </p>
      </section>

      <section class="bento-card" in:fly={{ y: 20, duration: 500, delay: 700 }}>
        <h2>Code of Conduct for Teachers</h2>
        <ul class="tight-list">
          <li>Maintain professionalism, punctuality and fairness in teaching, assessment and mentorship.</li>
          <li>Prepare lesson plans, maintain course files and adhere to outcome-based education practices.</li>
          <li>Report observed misconduct to HOD/Principal and assist students' academic growth impartially.</li>
          <li>Avoid conflicts of interest, refuse gifts that may compromise integrity and follow procurement rules.</li>
        </ul>
      </section>

      <section class="bento-card" in:fly={{ y: 20, duration: 500, delay: 800 }}>
        <h2>Code of Conduct for Employees</h2>
        <ul class="tight-list">
          <li>Maintain integrity, discipline and devotion to duty; be courteous to colleagues, students and public.</li>
          <li>Observe working hours and perform duties assigned by competent authority, including beyond hours if required.</li>
          <li>Protect confidential institute information and honor non-disclosure agreements.</li>
          <li>Do not engage in politics or private trade without prior sanction from management.</li>
        </ul>
      </section>

      <section class="bento-card" in:fly={{ y: 20, duration: 500, delay: 900 }}>
        <h2>Code of Conduct for Administrators</h2>
        <p>
          Administrators are expected to sustain high ethical standards, ensure fairness, transparency and
          to prevent bullying, ragging and unsafe practices. Financial and record-keeping duties must be
          accurate, and suspected deception or corruption should be reported and investigated.
        </p>
      </section>

      <section class="bento-card" in:fly={{ y: 20, duration: 500, delay: 1000 }}>
        <h2>Women Empowerment Cell</h2>
        <ul class="tight-list">
          <li>Support dignity and self-esteem of girl students and female staff via counselling, legal aid and awareness.</li>
          <li>Prevent and prohibit sexual harassment and arrange programs on health, personality development and rights.</li>
        </ul>
      </section>

      <section class="bento-card signature" in:fly={{ y: 20, duration: 500, delay: 1100 }}>
        <p class="signed">For any non-compliance report to the Disciplinary Committee</p>
        <p class="signed">PRINCIPAL</p>
        <p class="signed muted">Baba Institute of Technology and Sciences, Bakkannapalem, Madhurawada, Visakhapatnam</p>
      </section>
    </div>
  </main>
{/if}

<style>
  :global(body) { background: #fcfcfc; }
  .doc-container { padding-bottom: 6rem; color: #334155; }
  .container { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }
  .page-header { padding: 4.5rem 0 2.5rem; background: #fff; border-bottom: 1px solid #f1f5f9; margin-bottom: 2.5rem; }
  .breadcrumb { font-size: 0.75rem; font-weight:700; text-transform:uppercase; color:#64748b; margin-bottom:.5rem }
  h1 { font-size: 2.8rem; font-weight:900; color:#0f172a; margin-bottom:.25rem }
  .tagline { color:#1e40af; font-weight:600 }
  .bento-card { background:#fff; border:1px solid #f1f5f9; border-radius:1rem; padding:1.5rem; margin-bottom:1rem }
  h2 { font-size:1.25rem; font-weight:800; color:#0f172a; margin-bottom:.5rem }
  p { line-height:1.6; color:#475569 }
  .tight-list { list-style:none; padding-left:0; display:grid; grid-template-columns:1fr; gap:.5rem }
  .tight-list li { padding:.6rem 0; font-weight:600; color:#0f172a }
  .numbered { padding-left:1.25rem }
  .signature { text-align:center; padding-top:1.25rem }
  .signed { font-weight:800; margin:0.25rem 0 }
  .muted { font-weight:600; color:#64748b }
  @media (min-width:800px) { .tight-list { grid-template-columns:1fr 1fr } }
</style>
