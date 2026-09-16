import { useEffect, useRef, useState } from 'react';
import { siteConfig } from './data/siteConfig';

function Icon({ name, size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  const paths = {
    arrow: <><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></>,
    calendar: <><rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M7 3v4M17 3v4M3.5 9.5h17" /><path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01" /></>,
    moon: <><path d="M20 15.4A7.6 7.6 0 0 1 8.6 4 7.6 7.6 0 1 0 20 15.4Z" /><path d="M17 4v3M15.5 5.5h3" /></>,
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></>,
    pack: <><path d="M7 7h10l1.5 13h-13L7 7Z" /><path d="M9 7V5a3 3 0 0 1 6 0v2M5.5 11H18.5M12 11v3" /></>,
    shoe: <><path d="M4 17c2.7 1 5.3.5 7.6-1.5l1.9-1.7 1.2 1.4c1.3 1.5 3.1 2.3 5.3 2.3v2H4v-2.5Z" /><path d="m10 9 2.6 4.1M7.5 11.5l2.1 2.7" /></>,
    heart: <path d="M20.8 8.7c0 5.3-8.8 10-8.8 10s-8.8-4.7-8.8-10A4.7 4.7 0 0 1 12 6a4.7 4.7 0 0 1 8.8 2.7Z" />,
    muscle: <><path d="M7 12.5c-1.7.2-3.2 1.6-3.2 3.5 0 2.1 1.6 3.5 4.1 3.5h5.8c3.3 0 5.5-1.9 5.5-4.6 0-2-1.1-3.5-2.7-4.1" /><path d="M9 12V7.5a2 2 0 0 1 4 0V12M13 10V6.5a2 2 0 0 1 4 0v5" /></>,
    water: <><path d="M12 3S6.5 9.3 6.5 13.5a5.5 5.5 0 0 0 11 0C17.5 9.3 12 3 12 3Z" /><path d="M9.5 14.5a2.6 2.6 0 0 0 2.5 2" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  };

  return <svg {...common}>{paths[name] || paths.arrow}</svg>;
}

function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(element);
      }
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>{children}</div>;
}

function MountainIllustration({ quiet = false }) {
  const prefix = quiet ? 'quiet' : 'hero';
  return (
    <svg className="mountain-art" viewBox="0 0 1600 900" role="img" aria-label="Ilustrasi sunrise dan pendaki di Gunung Andong" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`${prefix}Sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={quiet ? '#112a42' : '#3b9fc4'} />
          <stop offset=".58" stopColor={quiet ? '#3d6276' : '#8ed1df'} />
          <stop offset="1" stopColor={quiet ? '#cba46f' : '#f4cf8d'} />
        </linearGradient>
        <linearGradient id={`${prefix}Mountain`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={quiet ? '#254d65' : '#397784'} />
          <stop offset="1" stopColor="#102f4a" />
        </linearGradient>
        <radialGradient id={`${prefix}Glow`}>
          <stop offset="0" stopColor="#fff0b2" stopOpacity=".96" />
          <stop offset=".45" stopColor="#f5c46e" stopOpacity=".34" />
          <stop offset="1" stopColor="#f5c46e" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1600" height="900" fill={`url(#${prefix}Sky)`} />
      <circle cx="1190" cy="350" r="320" fill={`url(#${prefix}Glow)`} />
      <circle cx="1190" cy="350" r="76" fill="#ffe8a1" opacity=".94" />
      <g className="clouds" fill="#f5fcf7" opacity=".45">
        <path d="M-50 265c98-86 178-30 212-6 88-85 240-46 260 39 103-16 148 29 181 92H-50v-125Z" />
        <path d="M1010 185c77-54 137-25 161 7 66-50 169-15 178 44 83-12 144 18 178 76h-543c-8-48 3-94 26-127Z" />
      </g>
      <path d="M0 640 270 405l154 148 305-315 351 337 260-253 260 318v260H0Z" fill={`url(#${prefix}Mountain)`} />
      <path d="m570 538 159-300 79 98 89-52 182 241-214-105-93 46-102-62Z" fill="#dcece7" opacity=".42" />
      <path d="M0 716c196-102 349-67 493-17 214 73 342-46 532-23 183 21 291 124 575 5v219H0Z" fill="#16445b" />
      <path d="M0 797c178-72 348-15 479 21 181 51 328-78 516-49 252 38 337 76 605-19v150H0Z" fill="#0c2944" />
      <g className="tree-line" fill="#0b2b43">
        <path d="m98 825 38-177 39 177h-77Zm28-112 50 57H76l50-57Zm0-54 33 45H93l33-45ZM244 843l31-143 31 143h-62Zm22-93 41 48h-82l41-48Zm0-48 28 38h-56l28-38ZM1434 834l34-162 34 162h-68Zm27-105 45 51h-90l45-51Zm0-57 30 41h-60l30-41ZM1528 842l25-116 26 116h-51Zm21-78 36 40h-72l36-40Z" />
      </g>
      <g className="hikers" fill="#ffe1a2">
        <circle cx="684" cy="632" r="9" /><path d="m678 643 13 2 7 44-13 1-10-25-15 25-9-5 15-37Z" /><path d="m682 648-22 18-6-7 23-23ZM690 649l21 17-5 7-26-14Z" />
        <circle cx="758" cy="674" r="7" /><path d="m753 682 11 2 5 34-10 1-8-20-13 21-8-4 14-29Z" /><path d="m755 686-18 14-5-6 19-18ZM764 687l16 13-5 6-20-12Z" />
      </g>
      <g className="mountain-cross" fill="#ffe2a0" opacity=".8"><path d="M1030 540h9v43h-9z" /><path d="M1019 553h31v8h-31z" /></g>
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = [['#healing', 'Ajakan'], ['#andong', 'Gunung Andong'], ['#info', 'Info'], ['#persiapan', 'Persiapan']];

  return (
    <div className="site-shell">
      <header className="hero" id="home">
        <MountainIllustration />
        <div className="hero-shade" />
        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navigasi utama">
           <a className="nav-brand" href="#home" onClick={closeMenu}>{siteConfig.organisation}</a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><Icon name={menuOpen ? 'close' : 'menu'} size={22} /></button>
          <div className="nav-links">
            {navItems.map(([href, label]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
            <a className="nav-button" href={siteConfig.formUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Ikut gaskeun <span>⛰️</span></a>
          </div>
        </nav>
        <div className="hero-content page-width">
           <div className="hero-kicker"><span>{siteConfig.organisation}</span><i /> <span>EVENT 2026</span></div>
          <h1>KMK <em>SEHAT</em><br /><span>2026</span></h1>
          <p className="hero-event">{siteConfig.eventTitle}</p>
          <p className="hero-tagline">{siteConfig.tagline}</p>
          <div className="hero-facts" aria-label="Informasi singkat acara">
            <span><Icon name="calendar" size={17} />{siteConfig.date}</span>
            <span><Icon name="pin" size={17} />{siteConfig.location}</span>
          </div>
          <div className="hero-actions">
            <a className="button button--sun" href={siteConfig.formUrl} target="_blank" rel="noreferrer">Ikut Sekarang <span>⛰️</span></a>
            <a className="text-link text-link--light" href={siteConfig.participantDataUrl} target="_blank" rel="noreferrer">Lihat peserta <Icon name="arrow" size={16} /></a>
          </div>
        </div>
        <div className="hero-footer page-width"><span>Gunung Andong · Magelang</span><span className="scroll-hint"><span className="scroll-line" /> Gulir pelan-pelan</span></div>
      </header>

      <main>
        <section className="healing section-pad" id="healing">
          <div className="page-width">
            <div className="healing-header">
              <Reveal><p className="eyebrow"><span /> Ajakan untuk kamu</p><h2>Katanya mau<br /><em>healing? 🌿</em></h2></Reveal>
              <Reveal className="healing-copy"><p>Katanya mau healing?<br />Katanya mau olahraga?<br />Katanya mau dekat dengan alam? 🌱</p><p className="punchline">Daripada cuma dekat dengan deadline, yuk kita dekat-dekat dengan Gunung Andong! <span>😆</span></p></Reveal>
            </div>
             <div className="healing-strip">
               <Reveal className="healing-chip healing-chip--gerak"><span className="chip-icon">☀</span><strong>Gerak</strong><small>Biar badan nggak cuma rebahan</small></Reveal>
               <Reveal className="healing-chip healing-chip--alam"><span className="chip-icon">✦</span><strong>Alam</strong><small>Keindahan alam yang gaada duanya</small></Reveal>
               <Reveal className="healing-chip healing-chip--rame"><span className="chip-icon">♥</span><strong>Rame-rame</strong><small>Healing paling enak bareng keluarga</small></Reveal>
             </div>
          </div>
        </section>

        <section className="andong-section" id="andong">
          <div className="andong-visual"><MountainIllustration quiet /><div className="andong-sticker">BUKAN<br /><strong>EVEREST</strong><br />KOK 😭</div></div>
          <div className="page-width andong-content"><Reveal><p className="eyebrow eyebrow--light"><span /> Kenalan dulu</p><h2>Gunung Andong,<br /><em>bukan Everest. 😭</em></h2><p className="andong-copy">Tenang… ini Gunung Andong, bukan Everest.</p><p className="andong-copy">Kalau dibilang gunung mungkin agak sombong, karena jalurnya lebih berasa bukit yang sedang naik level. <span>🤏🏻😂</span></p><a className="text-link text-link--light" href="#info">Lihat info acara <Icon name="arrow" size={16} /></a></Reveal></div>
        </section>

        <section className="information section-pad" id="info">
          <div className="page-width"><Reveal className="section-heading"><div><p className="eyebrow"><span /> Catat baik-baik</p><h2>Hal-hal<br /><em>penting.</em></h2></div><p className="heading-note">Biar yang naik bukan cuma semangatnya, tapi kamu juga sampai tujuan dengan persiapan yang oke.</p></Reveal>
             <div className="details-grid">{siteConfig.details.map((detail, index) => <Reveal key={detail.label} className={`detail-card detail-card--${index + 1}`}><div className="detail-top"><span className="detail-icon"><Icon name={detail.icon} size={22} /></span><span>0{index + 1}</span></div><div className="detail-copy"><p>{detail.label}</p><strong>{detail.value}</strong></div></Reveal>)}</div>
          </div>
        </section>

         <section className="participants section-pad" id="peserta">
           <div className="page-width participant-layout"><Reveal><p className="eyebrow"><span /> Cek teman seperjalanan</p><h2>Siapa aja<br /><em>yang ikut? 👀</em></h2></Reveal><Reveal className="participant-copy"><p>Sudah daftar? Cek siapa saja yang bakal ikut naik bareng!</p><a className="button button--navy" href={siteConfig.participantDataUrl} target="_blank" rel="noreferrer">Lihat Daftar Peserta <Icon name="arrow" size={16} /></a><small>Daftar peserta tersedia melalui spreadsheet publik.</small></Reveal></div>
         </section>

         <section className="story section-pad" id="perjalanan">
            <div className="page-width story-note"><Reveal><p className="eyebrow"><span /> Perjalanan bersama</p><h2>Naik bareng,<br /><em>cerita bareng.</em></h2><p className="story-note-copy">Kegiatan ini bukan cuma soal sampai di atas. Kita berangkat sebagai teman, saling menemani di perjalanan, dan pulang membawa cerita yang bisa dikenang bersama.</p></Reveal><Reveal className="story-statement"><span className="story-mark">“</span><p>Kita bukan cuma akan membawa tas ke atas, tapi juga membawa semangat, tawa, dan kebersamaan KMK SV.</p><small>Sehat badannya, hangat keluarganya!</small></Reveal></div>
        </section>

         <section className="spiritual"><div className="spiritual-sun" /><div className="page-width spiritual-inner"><Reveal><p className="eyebrow eyebrow--light"><span /> Bertumbuh bersama</p><h2>Bukan cuma badan<br />yang diajak <em>sehat.</em></h2><p>Kegiatan ini menjadi bagian dari {siteConfig.name}, jadi bukan cuma badan yang diajak sehat, tapi semoga relasi dan kebersamaan kita juga ikut naik sampai puncak.</p><div className="spiritual-sign"><strong>{siteConfig.organisation}</strong><span>{siteConfig.organisationTagline}</span></div></Reveal></div></section>

         <section className="preparation section-pad" id="persiapan"><div className="page-width"><Reveal className="section-heading"><div><p className="eyebrow"><span /> Sebelum berangkat 🎒</p><h2>Jangan cuma<br />niatnya yang <em>siap.</em></h2></div><p className="heading-note">Jangan sampai yang kuat cuma niatnya, tapi fisiknya belum diajak kompromi 😭</p></Reveal><div className="prep-grid">{siteConfig.preparationItems.map((item, index) => <Reveal key={item.label} className="prep-item"><span className="prep-number">0{index + 1}</span><span className="prep-icon"><Icon name={item.icon} size={24} /></span><strong>{item.label}</strong></Reveal>)}</div><Reveal className="preparation-closing"><p>Karena kita bukan cuma akan membawa tas ke atas, tapi juga membawa semangat, tawa, dan kebersamaan KMK SV! ✨</p></Reveal></div></section>

         <section className="call-to-action"><div className="cta-orbit cta-orbit--one" /><div className="cta-orbit cta-orbit--two" /><div className="page-width cta-inner"><Reveal><p className="eyebrow eyebrow--light"><span /> Jangan cuma lihat story</p><h2>Siapa ikut?<br /><em>Gaskeun!</em></h2><p>Jangan sampai yang kuat cuma niatnya,<br />tapi fisiknya belum diajak kompromi 😭</p><a className="button button--sun" href={siteConfig.formUrl} target="_blank" rel="noreferrer">Ikut Sekarang <span>⛰️</span></a></Reveal></div></section>
      </main>

        <footer className="site-footer"><div className="page-width footer-main"><div className="footer-copy"><strong>{siteConfig.name}</strong><span>{siteConfig.eventTitle}</span><p>{siteConfig.organisation}<br />{siteConfig.organisationTagline}</p></div></div><div className="page-width footer-bottom"><span>© 2026 {siteConfig.organisation}</span><span>{siteConfig.tagline} ❤️</span></div></footer>
    </div>
  );
}

export default App;
