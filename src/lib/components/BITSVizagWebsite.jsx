
/**
 * BITS VIZAG — Premium Production-Grade College Website
 * Single React JSX Component · Tailwind CSS · Zero External Deps
 * ------------------------------------------------------------------
 * Sections: AnnouncementBar → Header → Hero → Stats → About →
 *           Programs → WhyUs → Faculty → News → AdmissionCTA → Footer
 */

import { useState, useEffect, useRef } from 'react';

// ─────────────────────────────────────────────────────────────────
// FONT + GLOBAL STYLES INJECTION
// ─────────────────────────────────────────────────────────────────
const GlobalStyles = () => {
  useEffect(() => {
    const styleId = 'bits-global-styles';
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');

      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: 'DM Sans', sans-serif; background: #0A1628; color: #fff; }

      /* Marquee animation */
      @keyframes marquee-scroll {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .marquee-track { animation: marquee-scroll 28s linear infinite; }
      .marquee-track:hover { animation-play-state: paused; }

      /* Floating particles */
      @keyframes float-up {
        0%   { transform: translateY(0) scale(1); opacity: 0.6; }
        100% { transform: translateY(-100vh) scale(0.4); opacity: 0; }
      }
      .particle {
        position: absolute;
        border-radius: 50%;
        background: #C9A84C;
        animation: float-up linear infinite;
        pointer-events: none;
      }

      /* Fade-in-up on scroll */
      @keyframes fade-in-up {
        0%   { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .fade-in-up { animation: fade-in-up 0.7s ease forwards; }

      /* Gold shimmer */
      @keyframes shimmer {
        0%   { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
      .gold-shimmer {
        background: linear-gradient(90deg, #C9A84C 0%, #F5DFA0 40%, #C9A84C 70%, #A07B2A 100%);
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer 3s linear infinite;
      }

      /* Scroll-down bounce */
      @keyframes bounce-down {
        0%, 100% { transform: translateY(0); }
        50%       { transform: translateY(10px); }
      }
      .bounce-down { animation: bounce-down 1.4s ease-in-out infinite; }

      /* Counter number glow */
      .counter-glow { text-shadow: 0 0 20px rgba(201,168,76,0.5); }

      /* Card hover lift */
      .card-lift {
        transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
      }
      .card-lift:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 40px rgba(201,168,76,0.18);
        border-color: #C9A84C !important;
      }

      /* Playfair headings */
      .playfair { font-family: 'Playfair Display', serif; }
      .dm-sans   { font-family: 'DM Sans', sans-serif; }

      /* Nav link underline */
      .nav-link {
        position: relative;
        transition: color 0.25s;
      }
      .nav-link::after {
        content: '';
        position: absolute;
        left: 0; bottom: -4px;
        width: 0; height: 2px;
        background: #C9A84C;
        transition: width 0.3s ease;
      }
      .nav-link:hover::after { width: 100%; }
      .nav-link:hover { color: #C9A84C; }

      /* Section reveal */
      .reveal { opacity: 0; }
      .reveal.visible { animation: fade-in-up 0.75s ease forwards; }
    `;
    document.head.appendChild(style);
    return () => { style.remove(); };
  }, []);
  return null;
};

// ─────────────────────────────────────────────────────────────────
// HOOK — Scroll reveal
// ─────────────────────────────────────────────────────────────────
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

// ─────────────────────────────────────────────────────────────────
// 1. ANNOUNCEMENT BAR
// ─────────────────────────────────────────────────────────────────
const AnnouncementBar = () => {
  const notices = [
    '🎯 BITS VIZAG – PITCH-A-THON 2025 is LIVE',
    '🔐 CYBERSECURITY WORKSHOP – Register Now',
    '🎓 Admissions Open 2025–26 · B.Tech · MBA · MCA',
    '🏆 NAAC Grade A Accredited Institution',
    '📢 Annual Tech Fest "ZENITH 2025" · April 18-20',
  ];
  const repeatedText = [...notices, ...notices];

  return (
    <div
      className="relative overflow-hidden w-full py-2 z-50"
      style={{ background: 'linear-gradient(90deg, #6B1A1A 0%, #8B2020 50%, #6B1A1A 100%)' }}
      role="marquee"
      aria-label="Announcements"
    >
      {/* Marquee track */}
      <div className="flex items-center whitespace-nowrap marquee-track">
        {repeatedText.map((text, i) => (
          <span
            key={i}
            className="dm-sans text-xs sm:text-sm text-white font-medium mx-8 opacity-95"
          >
            {text}
            <span className="mx-4 text-yellow-400 opacity-60">◆</span>
          </span>
        ))}
      </div>

      {/* Contact on the right — overlaid */}
      <div
        className="absolute right-0 top-0 h-full flex items-center gap-4 px-4"
        style={{ background: 'linear-gradient(90deg, transparent, #6B1A1A 30%)' }}
      >
        <a
          href="tel:+917981234567"
          className="hidden sm:flex items-center gap-1.5 text-yellow-300 text-xs font-semibold hover:text-yellow-100 transition-colors dm-sans"
          aria-label="Phone number"
        >
          <span>📞</span>
          <span>+91 798-123-4567</span>
        </a>
        <a
          href="mailto:info@bitsvizag.com"
          className="hidden md:flex items-center gap-1.5 text-yellow-300 text-xs font-semibold hover:text-yellow-100 transition-colors dm-sans"
          aria-label="Email address"
        >
          <span>✉️</span>
          <span>info@bitsvizag.com</span>
        </a>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────
// 2. HEADER / NAVBAR
// ─────────────────────────────────────────────────────────────────
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Courses', 'Faculty', 'Exam Cell', 'Facilities', 'Research', 'CDC'];

  return (
    <header
      className="sticky top-0 z-40 w-full transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(10,22,40,0.92)'
          : 'rgba(10,22,40,0.75)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.25)' : '1px solid transparent',
        boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
      }}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between h-16 lg:h-20"
          aria-label="Main navigation"
        >
          {/* ── Logo ── */}
          <a href="#home" className="flex items-center gap-3 group" aria-label="BITS VIZAG Home">
            {/* Gear SVG seal */}
            <svg
              width="40" height="40" viewBox="0 0 48 48" fill="none"
              className="flex-shrink-0 group-hover:rotate-45 transition-transform duration-500"
              aria-hidden="true"
            >
              <circle cx="24" cy="24" r="22" fill="#C9A84C" opacity="0.15" stroke="#C9A84C" strokeWidth="1.5" />
              <circle cx="24" cy="24" r="9" fill="#C9A84C" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                <rect
                  key={i}
                  x="22" y="3" width="4" height="10" rx="2"
                  fill="#C9A84C"
                  transform={`rotate(${deg} 24 24)`}
                />
              ))}
              <circle cx="24" cy="24" r="5" fill="#0A1628" />
            </svg>
            <div>
              <div className="playfair text-lg sm:text-xl font-bold leading-tight" style={{ color: '#C9A84C' }}>
                BITS VIZAG
              </div>
              <div className="dm-sans text-[9px] text-slate-400 tracking-widest uppercase leading-tight hidden sm:block">
                Autonomous Institution
              </div>
            </div>
          </a>

          {/* ── Desktop Nav Links ── */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map(link => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="nav-link dm-sans text-sm font-medium text-slate-300 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Right side: Apply + Hamburger ── */}
          <div className="flex items-center gap-3">
            <a
              href="#admissions"
              className="dm-sans hidden sm:block text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #C9A84C, #A07B2A)',
                color: '#0A1628',
                boxShadow: '0 4px 20px rgba(201,168,76,0.35)',
              }}
              aria-label="Apply Now for admission"
            >
              Apply Now
            </a>
            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className="block w-6 h-0.5 bg-white transition-all duration-300"
                  style={{
                    transform: mobileOpen
                      ? i === 1 ? 'scaleX(0)' : i === 0 ? 'rotate(45deg) translate(4px,4px)' : 'rotate(-45deg) translate(4px,-4px)'
                      : 'none',
                    opacity: mobileOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div
            className="lg:hidden pb-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                onClick={() => setMobileOpen(false)}
                className="dm-sans block text-sm font-medium text-slate-300 hover:text-yellow-400 px-4 py-3 rounded-xl hover:bg-white/5 transition-all"
              >
                {link}
              </a>
            ))}
            <a
              href="#admissions"
              onClick={() => setMobileOpen(false)}
              className="dm-sans block text-center text-sm font-bold px-5 py-3 mt-2 rounded-full"
              style={{ background: 'linear-gradient(135deg,#C9A84C,#A07B2A)', color: '#0A1628' }}
            >
              Apply Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

// ─────────────────────────────────────────────────────────────────
// 3. HERO SECTION
// ─────────────────────────────────────────────────────────────────
const Hero = () => {
  /* Generate particles once */
  const particles = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: `${3 + Math.random() * 7}px`,
    delay: `${Math.random() * 10}s`,
    dur: `${8 + Math.random() * 12}s`,
    opacity: 0.3 + Math.random() * 0.5,
  }));

  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #040D1A 0%, #0A1628 45%, #0D1F3C 80%, #071020 100%)',
      }}
      aria-label="Hero section"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(201,168,76,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Floating gold particles */}
      {particles.map(p => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            bottom: '-20px',
            animationDuration: p.dur,
            animationDelay: p.delay,
            opacity: p.opacity,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Kicker */}
        <p className="dm-sans text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 font-medium"
          style={{ color: '#C9A84C' }}
        >
          ✦ Welcome to BITS VIZAG — Autonomous ✦
        </p>

        {/* Main headline */}
        <h1 className="playfair font-black leading-tight mb-6"
          style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)', color: '#fff' }}
        >
          Shaping Tomorrow's{' '}
          <span className="gold-shimmer">Leaders</span>{' '}
          Today
        </h1>

        {/* Tagline */}
        <p className="dm-sans text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-light">
          Empowering Futures Through Excellence — where world-class education meets industry-ready training.
        </p>

        {/* Accreditation badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10" aria-label="Accreditations">
          {['NAAC Grade A', 'AICTE Approved', 'JNTU-GV Affiliated', 'ISO 9001:2015'].map(badge => (
            <span
              key={badge}
              className="dm-sans text-xs font-bold px-4 py-1.5 rounded-full border"
              style={{
                borderColor: 'rgba(201,168,76,0.5)',
                background: 'rgba(201,168,76,0.08)',
                color: '#C9A84C',
              }}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-14">
          <a
            href="#courses"
            className="dm-sans font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg,#C9A84C,#A07B2A)',
              color: '#0A1628',
              boxShadow: '0 8px 30px rgba(201,168,76,0.4)',
            }}
            aria-label="Explore our academic programs"
          >
            Explore Programs
          </a>
          <a
            href="#about"
            className="dm-sans font-bold text-base px-8 py-4 rounded-full border-2 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: '#C9A84C',
              color: '#C9A84C',
              background: 'rgba(201,168,76,0.05)',
            }}
            aria-label="Take a virtual tour"
          >
            Virtual Tour ▶
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2" aria-label="Scroll down">
          <span className="dm-sans text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
          <div
            className="bounce-down w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
            style={{ borderColor: 'rgba(201,168,76,0.4)' }}
            aria-hidden="true"
          >
            <div className="w-1.5 h-3 rounded-full" style={{ background: '#C9A84C' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────
// 4. STATS COUNTER BAR
// ─────────────────────────────────────────────────────────────────
const Stats = () => {
  const stats = [
    { value: 18, suffix: '+', label: 'Years of Excellence' },
    { value: 5000, suffix: '+', label: 'Alumni Worldwide' },
    { value: 50, suffix: '+', label: 'Expert Faculty' },
    { value: 20, suffix: '+', label: 'Academic Programs' },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          stats.forEach((stat, i) => {
            const duration = 1800;
            const step = Math.ceil(stat.value / (duration / 30));
            let current = 0;
            const timer = setInterval(() => {
              current = Math.min(current + step, stat.value);
              setCounts(prev => {
                const next = [...prev];
                next[i] = current;
                return next;
              });
              if (current >= stat.value) clearInterval(timer);
            }, 30);
          });
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="stats"
      className="py-16"
      style={{ background: 'linear-gradient(135deg, #050E1C 0%, #0A1628 100%)' }}
      aria-label="Institution statistics"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div
              className="playfair font-black counter-glow mb-2"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#C9A84C' }}
              aria-label={`${counts[i]}${stat.suffix} ${stat.label}`}
            >
              {counts[i].toLocaleString()}{stat.suffix}
            </div>
            <div className="dm-sans text-sm text-slate-400 font-medium tracking-wide">
              {stat.label}
            </div>
            <div
              className="w-12 h-0.5 mx-auto mt-4 rounded-full"
              style={{ background: 'linear-gradient(90deg,transparent,#C9A84C,transparent)' }}
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────
// 5. ABOUT SECTION
// ─────────────────────────────────────────────────────────────────
const About = () => {
  const usps = [
    { icon: '🏛️', text: 'Autonomous academic programs with flexible curriculum' },
    { icon: '🤝', text: 'Strong industry linkages with 100+ corporate partners' },
    { icon: '🔬', text: 'Active research culture with funded DST & AICTE projects' },
    { icon: '🌍', text: 'International collaborations & student exchange programs' },
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-28"
      style={{ background: '#0C1A2E' }}
      aria-label="About BITS VIZAG"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Text */}
        <div className="reveal">
          <p className="dm-sans text-xs tracking-[0.25em] uppercase font-semibold mb-4" style={{ color: '#C9A84C' }}>
            Our Legacy
          </p>
          <h2 className="playfair font-bold leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', color: '#fff' }}>
            18 Years of Shaping{' '}
            <span style={{ color: '#C9A84C' }}>Engineering Excellence</span>
          </h2>
          <p className="dm-sans text-slate-300 leading-relaxed text-base mb-8">
            Established under ABWEC, BITS VIZAG (Autonomous) is a premier engineering institution
            affiliated to JNTU-GV Vizianagaram. With NAAC Grade A accreditation and ISO 9001:2015
            certification, we blend rigorous academics with hands-on innovation, producing graduates
            who lead industries across the globe.
          </p>
          <ul className="space-y-4 mb-8" aria-label="Key features">
            {usps.map((usp, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-xl mt-0.5 flex-shrink-0" aria-hidden="true">{usp.icon}</span>
                <span className="dm-sans text-slate-300 text-sm leading-relaxed">{usp.text}</span>
              </li>
            ))}
          </ul>
          <a
            href="#courses"
            className="dm-sans inline-block text-sm font-bold px-7 py-3.5 rounded-full border-2 transition-all duration-300 hover:scale-105"
            style={{ borderColor: '#C9A84C', color: '#C9A84C', background: 'rgba(201,168,76,0.06)' }}
          >
            Learn More →
          </a>
        </div>

        {/* Right — Visual card */}
        <div className="reveal relative flex justify-center">
          {/* Gold frame */}
          <div
            className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
            style={{ border: '2px solid rgba(201,168,76,0.4)', borderRadius: '18px' }}
            aria-hidden="true"
          />
          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{
              height: '420px',
              background: 'linear-gradient(135deg, #0D2240 0%, #1A3A5E 40%, #0D2240 100%)',
              border: '1px solid rgba(201,168,76,0.2)',
            }}
          >
            {/* Decorative content inside card */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-4xl"
                style={{ background: 'rgba(201,168,76,0.15)', border: '2px solid rgba(201,168,76,0.4)' }}
                aria-label="BITS VIZAG seal"
              >
                🎓
              </div>
              <div className="playfair text-2xl font-bold text-center" style={{ color: '#C9A84C' }}>
                BITS VIZAG
              </div>
              <div className="dm-sans text-slate-400 text-sm text-center leading-relaxed max-w-xs">
                "Knowledge is Power, Excellence is Our Standard"
              </div>
              <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                {[['NAAC', 'Grade A'], ['AICTE', 'Approved'], ['ISO', '9001:2015'], ['JNTU-GV', 'Affiliated']].map(([title, sub]) => (
                  <div
                    key={title}
                    className="text-center p-3 rounded-xl"
                    style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}
                  >
                    <div className="playfair text-base font-bold" style={{ color: '#C9A84C' }}>{title}</div>
                    <div className="dm-sans text-xs text-slate-400">{sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────
// 6. PROGRAMS / COURSES GRID
// ─────────────────────────────────────────────────────────────────
const Programs = () => {
  const courses = [
    { icon: '💻', name: 'B.Tech Computer Science & Engineering', duration: '4 Years', color: '#3B82F6' },
    { icon: '📡', name: 'B.Tech Electronics & Communication Eng.', duration: '4 Years', color: '#8B5CF6' },
    { icon: '⚡', name: 'B.Tech Electrical & Electronics Eng.', duration: '4 Years', color: '#F59E0B' },
    { icon: '⚙️', name: 'B.Tech Mechanical Engineering', duration: '4 Years', color: '#10B981' },
    { icon: '📊', name: 'Master of Business Administration', duration: '2 Years', color: '#EF4444' },
    { icon: '🖥️', name: 'Master of Computer Applications', duration: '2 Years', color: '#06B6D4' },
  ];

  return (
    <section
      id="courses"
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #0A1628 0%, #0C1A2E 100%)' }}
      aria-label="Academic programs"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="dm-sans text-xs tracking-[0.25em] uppercase font-semibold mb-4" style={{ color: '#C9A84C' }}>
            Academics
          </p>
          <h2 className="playfair font-bold mb-4" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', color: '#fff' }}>
            Our Academic Programs
          </h2>
          <p className="dm-sans text-slate-400 max-w-xl mx-auto">
            Industry-aligned curricula, autonomous flexibility, and hands-on mentorship across engineering & management disciplines.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <article
              key={i}
              className="card-lift rounded-2xl p-7 cursor-pointer reveal"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                animationDelay: `${i * 0.1}s`,
              }}
              aria-label={course.name}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: `${course.color}18`, border: `1.5px solid ${course.color}40` }}
                aria-hidden="true"
              >
                {course.icon}
              </div>
              <h3 className="playfair font-bold text-white text-lg leading-snug mb-3">
                {course.name}
              </h3>
              <span
                className="dm-sans text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: `${course.color}20`, color: course.color, border: `1px solid ${course.color}40` }}
              >
                {course.duration}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────
// 7. WHY CHOOSE US — FEATURE STRIP
// ─────────────────────────────────────────────────────────────────
const WhyUs = () => {
  const features = [
    { icon: '🏆', title: 'NAAC Grade A Accredited', desc: 'Quality-assured education recognized by national bodies.' },
    { icon: '🔬', title: 'Research Focused', desc: 'Funded research projects with DST, AICTE & industry grants.' },
    { icon: '🤝', title: 'Industry Partnerships', desc: '100+ MoUs with leading national & global organizations.' },
    { icon: '💼', title: '100% Placement Support', desc: 'Dedicated CDC ensuring career opportunities for every graduate.' },
  ];

  return (
    <section
      id="why-us"
      className="py-16"
      style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #A07B2A 50%, #C9A84C 100%)' }}
      aria-label="Why choose BITS VIZAG"
    >
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="text-center" aria-label={f.title}>
            <div className="text-4xl mb-3" aria-hidden="true">{f.icon}</div>
            <h3 className="playfair font-bold text-xl text-[#0A1628] mb-2">{f.title}</h3>
            <p className="dm-sans text-sm text-[#1A2F4A] leading-relaxed opacity-80">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────
// 8. FACULTY SPOTLIGHT
// ─────────────────────────────────────────────────────────────────
const Faculty = () => {
  const faculty = [
    { initials: 'DR', name: 'Dr. Rajesh Kumar', role: 'Professor & HOD', dept: 'Computer Science', bg: 'from-blue-900 to-blue-700' },
    { initials: 'PS', name: 'Prof. Priya Sharma', role: 'Associate Professor', dept: 'Electronics & Comm.', bg: 'from-purple-900 to-purple-700' },
    { initials: 'MR', name: 'Dr. Mohan Rao', role: 'Professor', dept: 'Mechanical Eng.', bg: 'from-emerald-900 to-emerald-700' },
  ];

  return (
    <section
      id="faculty"
      className="py-20 lg:py-28"
      style={{ background: '#0C1A2E' }}
      aria-label="Faculty spotlight"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <p className="dm-sans text-xs tracking-[0.25em] uppercase font-semibold mb-4" style={{ color: '#C9A84C' }}>
            Our Team
          </p>
          <h2 className="playfair font-bold" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', color: '#fff' }}>
            Meet Our Distinguished Faculty
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member, i) => (
            <article
              key={i}
              className="card-lift text-center rounded-2xl p-8 reveal"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                animationDelay: `${i * 0.15}s`,
              }}
              aria-label={`${member.name}, ${member.role}`}
            >
              {/* Avatar */}
              <div
                className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center bg-gradient-to-br ${member.bg}`}
                style={{ border: '3px solid rgba(201,168,76,0.4)' }}
                aria-hidden="true"
              >
                <span className="playfair font-bold text-2xl text-white">{member.initials}</span>
              </div>
              <h3 className="playfair font-bold text-white text-lg mb-1">{member.name}</h3>
              <p className="dm-sans text-sm text-slate-400 mb-3">{member.role}</p>
              <span
                className="dm-sans text-xs font-semibold px-4 py-1.5 rounded-full"
                style={{ background: 'rgba(201,168,76,0.12)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.3)' }}
              >
                {member.dept}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────
// 9. NEWS & EVENTS
// ─────────────────────────────────────────────────────────────────
const NewsEvents = () => {
  const events = [
    {
      date: 'APR 18–20',
      tag: 'Tech Fest',
      title: 'Annual Tech Fest "ZENITH 2025"',
      desc: 'Three days of hackathons, robotics competitions, cultural performances, and keynotes by industry leaders.',
      color: '#3B82F6',
    },
    {
      date: 'MAR 12',
      tag: 'Innovation',
      title: 'PITCH-A-THON 2025 — Startup Ideas Competition',
      desc: 'Students pitch disruptive startup ideas to a panel of VCs, angel investors, and serial entrepreneurs.',
      color: '#C9A84C',
    },
    {
      date: 'FEB 28',
      tag: 'Workshop',
      title: 'National Cybersecurity Summit & Workshop',
      desc: 'Hands-on cybersecurity labs, ethical hacking demos, and career workshops with ISRO & defense experts.',
      color: '#10B981',
    },
  ];

  return (
    <section
      id="news"
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #0A1628 0%, #0C1A2E 100%)' }}
      aria-label="News and events"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 reveal">
          <p className="dm-sans text-xs tracking-[0.25em] uppercase font-semibold mb-4" style={{ color: '#C9A84C' }}>
            Campus Life
          </p>
          <h2 className="playfair font-bold" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', color: '#fff' }}>
            News &amp; Events
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {events.map((e, i) => (
            <article
              key={i}
              className="card-lift rounded-2xl overflow-hidden reveal"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                animationDelay: `${i * 0.12}s`,
              }}
              aria-label={e.title}
            >
              {/* Color top bar */}
              <div className="h-1.5 w-full" style={{ background: e.color }} aria-hidden="true" />
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="dm-sans text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: `${e.color}20`, color: e.color, border: `1px solid ${e.color}40` }}
                  >
                    {e.tag}
                  </span>
                  <span className="dm-sans text-xs text-slate-500 font-semibold tracking-wide">
                    📅 {e.date}, 2025
                  </span>
                </div>
                <h3 className="playfair font-bold text-white text-lg leading-snug mb-3">{e.title}</h3>
                <p className="dm-sans text-slate-400 text-sm leading-relaxed mb-5">{e.desc}</p>
                <a
                  href="#news"
                  className="dm-sans text-xs font-bold transition-colors hover:opacity-80"
                  style={{ color: e.color }}
                  aria-label={`Read more about ${e.title}`}
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────
// 10. ADMISSIONS CTA BANNER
// ─────────────────────────────────────────────────────────────────
const AdmissionCTA = () => (
  <section
    id="admissions"
    className="py-20"
    style={{ background: 'linear-gradient(135deg, #C9A84C 0%, #F5C842 35%, #A07B2A 70%, #C9A84C 100%)' }}
    aria-label="Admissions call to action"
  >
    <div className="max-w-4xl mx-auto px-6 text-center">
      <p className="dm-sans text-xs tracking-[0.25em] uppercase font-semibold mb-4 text-amber-900 opacity-70">
        Admissions 2025–26
      </p>
      <h2 className="playfair font-black mb-4 leading-tight" style={{ fontSize: 'clamp(1.8rem,5vw,3.5rem)', color: '#0A1628' }}>
        Applications Are Now Open
      </h2>
      <p className="dm-sans text-base text-amber-900 mb-8 max-w-xl mx-auto leading-relaxed opacity-80">
        Join thousands of students who have chosen BITS VIZAG to shape their careers.
        Limited seats available. Apply before the deadline to secure your future.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="#home"
          className="dm-sans font-bold text-base px-10 py-4 rounded-full transition-all duration-300 hover:scale-105"
          style={{
            background: '#0A1628',
            color: '#C9A84C',
            boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
          }}
          aria-label="Apply now for admission"
        >
          Apply Now →
        </a>
        <a
          href="#courses"
          className="dm-sans font-bold text-base px-10 py-4 rounded-full border-2 border-[#0A1628] text-[#0A1628] transition-all duration-300 hover:scale-105 hover:bg-[#0A1628] hover:text-[#C9A84C]"
          aria-label="Download admission brochure"
        >
          Download Brochure
        </a>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────
// 11. FOOTER
// ─────────────────────────────────────────────────────────────────
const Footer = () => {
  const quickLinks = ['About Us', 'Admissions', 'Academic Calendar', 'Examination Cell', 'Research', 'IQAC'];
  const courseLinks = ['B.Tech CSE', 'B.Tech ECE', 'B.Tech EEE', 'B.Tech Mech', 'MBA', 'MCA'];
  const socials = [
    { label: 'LinkedIn', symbol: 'in', href: '#' },
    { label: 'YouTube', symbol: '▶', href: '#' },
    { label: 'Instagram', symbol: '📷', href: '#' },
    { label: 'Twitter/X', symbol: '✕', href: '#' },
  ];

  return (
    <footer
      style={{ background: '#040D1A', borderTop: '1px solid rgba(201,168,76,0.15)' }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 — Logo & tagline */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl" aria-hidden="true">⚙️</span>
            <span className="playfair font-bold text-xl" style={{ color: '#C9A84C' }}>BITS VIZAG</span>
          </div>
          <p className="dm-sans text-sm text-slate-400 leading-relaxed mb-5">
            Empowering Futures Through Excellence — shaping engineers and leaders since 2007.
          </p>
          <div className="flex gap-3">
            {socials.map(social => (
              <a
                key={social.label}
                href={social.href}
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 hover:scale-110"
                style={{ background: 'rgba(201,168,76,0.12)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.25)' }}
                aria-label={social.label}
              >
                {social.symbol}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <nav aria-label="Quick links">
          <h4 className="playfair font-bold text-white mb-5 text-lg">Quick Links</h4>
          <ul className="space-y-3" role="list">
            {quickLinks.map(link => (
              <li key={link}>
                <a
                  href="#home"
                  className="dm-sans text-sm text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span style={{ color: '#C9A84C' }}>›</span> {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 3 — Courses */}
        <nav aria-label="Course links">
          <h4 className="playfair font-bold text-white mb-5 text-lg">Programs</h4>
          <ul className="space-y-3" role="list">
            {courseLinks.map(link => (
              <li key={link}>
                <a
                  href="#courses"
                  className="dm-sans text-sm text-slate-400 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span style={{ color: '#C9A84C' }}>›</span> {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 4 — Contact */}
        <address className="not-italic">
          <h4 className="playfair font-bold text-white mb-5 text-lg">Contact Us</h4>
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="text-lg mt-0.5" aria-hidden="true">📍</span>
              <p className="dm-sans text-sm text-slate-400 leading-relaxed">
                NH-16, Beside Bheemunipatnam Municipality,<br />
                Bheemunipatnam, Visakhapatnam,<br />
                Andhra Pradesh — 531 163
              </p>
            </div>
            <a href="tel:+917981234567" className="dm-sans flex gap-3 text-sm text-slate-400 hover:text-yellow-400 transition-colors">
              <span aria-hidden="true">📞</span>
              <span>+91 798-123-4567</span>
            </a>
            <a href="mailto:info@bitsvizag.com" className="dm-sans flex gap-3 text-sm text-slate-400 hover:text-yellow-400 transition-colors">
              <span aria-hidden="true">✉️</span>
              <span>info@bitsvizag.com</span>
            </a>
          </div>
        </address>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-6 px-6"
        style={{ borderColor: 'rgba(201,168,76,0.12)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="dm-sans text-xs text-slate-500">
            © {new Date().getFullYear()} Baba Institute of Technology and Sciences (Autonomous). All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Use', 'Sitemap'].map(item => (
              <a key={item} href="#home" className="dm-sans text-xs text-slate-600 hover:text-slate-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// ─────────────────────────────────────────────────────────────────
// ROOT APP — Assembles all sections
// ─────────────────────────────────────────────────────────────────
export default function BITSVizagWebsite() {
  useScrollReveal();

  return (
    <>
      <GlobalStyles />
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Programs />
        <WhyUs />
        <Faculty />
        <NewsEvents />
        <AdmissionCTA />
      </main>
      <Footer />
    </>
  );
}
