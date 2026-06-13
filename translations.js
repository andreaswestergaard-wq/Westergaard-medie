const translations = {
  da: {
    // Nav
    'nav-om':       'Om',
    'nav-ydelser':  'Priser',
    'nav-proces':   'Proces',
    'nav-cases':    'Cases',
    'header-cta':   'Få et tilbud →',

    // Hero
    'hero-badge':        'LEDIG FOR NYE PROJEKTER',
    'hero-h1':           'Hjemmesider, der får<br>danske virksomheder <em>til at vækste.</em>',
    'hero-sub':          'Jeg er <strong>freelance webudvikler i København</strong>, og jeg bygger nymoderne, professionelle hjemmesider der efterlader et indtryk — hurtige, mobilvenlige og SEO-optimerede, fra <span class="hero-sub-link">4.000 kr.</span> Ingen bureau-mellemled, ingen skjulte gebyrer.',
    'trust-1':           'FAST PRIS',
    'trust-2':           'SVAR SAMME DAG',
    'trust-3':           'SEO INKLUDERET',
    'trust-4':           'HELE DANMARK',
    'hero-btn-primary':  'Kontakt mig →',
    'hero-btn-secondary':'Se ydelser',

    // Stats
    'stat-1-num':   'Fra 4.000 kr.',
    'stat-1-label': 'fast pris — ingen overraskelser',
    'stat-2-num':   'Under 2 uger',
    'stat-2-label': 'fra idé til live hjemmeside',
    'stat-3-num':   '1 person',
    'stat-3-label': 'du taler altid direkte med mig',
    'stat-4-num':   'Hele Danmark',
    'stat-4-label': 'mødes online eller fysisk',

    // Om
    'om-label':       '01 — OM',
    'om-founder':     'GRUNDLÆGGER',
    'om-badge':       'FREELANCE WEBDESIGNER',
    'om-h2':          'Jeg er <em>21 år</em>, bor i Valby,<br>og jeg laver kun én ting —<br>hjemmesider, der virker.',
    'om-p1':          'Jeg startede Westergaard Medie, fordi jeg var træt af at se små danske virksomheder betale dyre bureauer for skabelonsider, der ikke leverer kunder.',
    'om-p2':          'I stedet får du mig: én person, ét fokus, og et website bygget fra bunden — hurtigt, lækkert og konverteringsoptimeret. Ingen mellemled, ingen jargon, ingen overraskelser på regningen.',
    'om-card-1-label':'PERSONLIGT',
    'om-card-1-p':    'Du taler altid med mig — ikke en kontomanager.',
    'om-card-2-label':'HURTIGT',
    'om-card-2-p':    'De fleste sites går live på under to uger.',
    'om-card-3-label':'ÆRLIGT',
    'om-card-3-p':    'Fast pris. Ingen skjulte gebyrer.',
    'om-read-more':       'Læs mere om mig →',
    'ydelser-read-more':  'Se alle ydelser & priser →',

    // Ydelser
    'ydelser-label': '02 — YDELSER',
    'ydelser-h2':    'Tre måder jeg kan hjælpe<br>din virksomhed online.',
    'ydelse-1-h3':   'Hjemmeside design',
    'ydelse-1-p':    'Komplette virksomhedssites bygget fra bunden — designet til at konvertere besøgende til kunder.',
    'ydelse-1-li-1': 'Custom design',
    'ydelse-1-li-2': 'Mobiloptimeret',
    'ydelse-1-li-3': 'SEO-klar',
    'ydelse-1-li-4': 'CMS efter behov',
    'ydelse-2-h3':   'Landing pages',
    'ydelse-2-p':    'Skarpt fokuserede sider til kampagner, lanceringer og annoncer — bygget til ét formål: konvertering.',
    'ydelse-2-li-1': 'A/B testbar',
    'ydelse-2-li-2': 'Lynhurtig load',
    'ydelse-2-li-3': 'Tracking opsat',
    'ydelse-2-li-4': 'Klar på 5 dage',
    'ydelse-3-h3':   'Optimering &amp; redesign',
    'ydelse-3-p':    'Få mere ud af din eksisterende side. Jeg analyserer, redesigner og optimerer for fart og konvertering.',
    'ydelse-3-li-1': 'UX-audit',
    'ydelse-3-li-2': 'Performance-fix',
    'ydelse-3-li-3': 'SEO-løft',
    'ydelse-3-li-4': 'Konverterings-tweaks',

    // Priser
    'priser-label':  '03 — PRISER',
    'priser-h2':     'Fast pris. <em>Ingen overraskelser.</em>',
    'price-1-type':  'ENGANGSBELØB',
    'price-1-h3':    'Hjemmeside',
    'price-1-amount':'4.000 <span>kr. ekskl. moms</span>',
    'price-1-desc':  '2-4 landingssider bygget fra bunden. Custom design, mobiloptimeret og konverteringsklar.',
    'price-1-li-1':  '2-4 sider efter behov',
    'price-1-li-2':  'Custom design — ingen skabelon',
    'price-1-li-3':  'Mobil- og performance-optimeret',
    'price-1-li-4':  'Live på under to uger',
    'price-1-btn':   'Få et tilbud →',
    'price-2-badge': 'MEST POPULÆR',
    'price-2-type':  'ENGANGSBELØB',
    'price-2-h3':    'SEO-pakke',
    'price-2-amount':'750 <span>kr. ekskl. moms</span>',
    'price-2-desc':  'Teknisk SEO-fundament så du kan blive fundet på Google fra dag ét.',
    'price-2-li-1':  'Søgeordsanalyse',
    'price-2-li-2':  'Meta-tags &amp; struktur',
    'price-2-li-3':  'Schema/JSON-LD opsat',
    'price-2-li-4':  'Google Search Console klar',
    'price-2-btn':   'Tilføj SEO →',
    'price-3-type':  'PR. MÅNED',
    'price-3-h3':    'Drift &amp; Support',
    'price-3-amount':'299 <span>kr. ekskl. moms</span>',
    'price-3-desc':  'Hosting, opdateringer og småjusteringer — så du aldrig skal tænke på det tekniske.',
    'price-3-li-1':  'Hosting på lynhurtig server',
    'price-3-li-2':  'SSL og sikkerhedsopdateringer',
    'price-3-li-3':  'Mindre tekstændringer inkluderet',
    'price-3-li-4':  'Backup hver uge',
    'price-3-btn':   'Hold mig kørende →',
    'priser-note':   'Brug for noget mere — fx bookingsystem, webshop eller kunde-login? <a href="kontakt.html">Lad os tage en snak.</a>',

    // Proces
    'proces-label':  '04 — PROCES',
    'proces-h2':     'Fra første samtale til live<br>website på under to uger.',
    'proces-1-h3':   'Kontakt',
    'proces-1-p':    'Vi tager en uforpligtende snak om dit projekt, dine mål og din målgruppe. Du får et fast pristilbud inden for 24 timer.',
    'proces-2-h3':   'Design',
    'proces-2-p':    'Jeg laver et skarpt design baseret på din branding. Du får udkast tidligt, så vi rammer rigtigt fra start.',
    'proces-3-h3':   'Udvikling',
    'proces-3-p':    'Designet kodes til en lynhurtig, mobilvenlig hjemmeside med fokus på SEO og konvertering.',
    'proces-4-h3':   'Launch',
    'proces-4-p':    'Vi går live, måler performance og finjusterer. Du får oplæring, så du selv kan opdatere indhold.',

    // Cases
    'cases-label':     '05 — CASES',
    'cases-h2':        'Se hvad jeg kan bygge<br>til din virksomhed.',
    'cases-sub':       'Her er et udsnit af de typer hjemmesider, jeg bygger til små servicevirksomheder — fra bunden, med dit brand.',
    'cases-read-more': 'Se alle cases →',

    // Priser read-more + Proces read-more
    'priser-read-more': 'Se alle priser →',
    'proces-read-more': 'Se hele processen →',

    // FAQ
    'faq-label': '06 — FAQ',
    'faq-h2':    'Ofte stillede spørgsmål.',
    'faq-1-q':   'Hvad koster en hjemmeside?',
    'faq-1-a':   'En standard hjemmeside starter fra 4.000 kr. ekskl. moms. Prisen afhænger af omfang og kompleksitet. Du får altid et fast tilbud inden vi går i gang — ingen overraskelser.',
    'faq-2-q':   'Hvor lang tid tager det?',
    'faq-2-a':   'De fleste projekter er færdige på 1-2 uger fra godkendt design. Landing pages kan ofte leveres på 5 dage.',
    'faq-3-q':   'Hvem ejer siden, når den er færdig?',
    'faq-3-a':   'Du ejer 100% af din hjemmeside. Kode, indhold og domæne er dit — du er ikke låst til mig.',
    'faq-4-q':   'Kan jeg selv opdatere indhold?',
    'faq-4-a':   'Ja. Jeg sørger for at du kan opdatere tekst og billeder selv, og giver dig en grundig oplæring ved launch.',
    'faq-5-q':   'Hvad med hosting og domæne?',
    'faq-5-a':   'Jeg hjælper med opsætning af hosting og domæne. Drifts-pakken til 299 kr./md. dækker hosting, SSL og løbende opdateringer.',

    // CTA
    'cta-label': '07 — KOM I GANG',
    'cta-h2':    'Klar til en stærkere<br>hjemmeside?',
    'cta-sub':   'Send en kort besked, så vender jeg tilbage inden for 24 timer med et uforpligtende tilbud.',
    'cta-btn':   'Få et uforpligtende tilbud →',

    // Footer
    'nav-kontakt-footer':   'Kontakt',
    'footer-bio':           'Jeg bygger professionelle hjemmesider til danske virksomheder — hurtigt, ærligt og uden bureau-tillæg.',
    'footer-nav-heading':   'NAVIGATION',
    'footer-contact-heading':'KONTAKT',
    'footer-location':      'Valby, København',
    'footer-hours':         'Man–fre, 08.00–17.00',
    'footer-tagline':       'Freelance Webudvikler · Valby, København',
    'footer-cookie':        'Cookieindstillinger',
    'footer-privacy':       'Cookie- og privatlivspolitik',
    'footer-top':           'Til toppen',
  },

  en: {
    // Nav
    'nav-om':       'About',
    'nav-ydelser':  'Prices',
    'nav-proces':   'Process',
    'nav-cases':    'Cases',
    'header-cta':   'Get a quote →',

    // Hero
    'hero-badge':        'AVAILABLE FOR NEW PROJECTS',
    'hero-h1':           'Websites that help<br>Danish businesses <em>stand out.</em>',
    'hero-sub':          'I\'m a <strong>freelance web developer in Copenhagen</strong>, building modern, professional websites that leave a lasting impression — fast, mobile-friendly and SEO-optimised, from <span class="hero-sub-link">4,000 DKK.</span> No middlemen, no hidden fees.',
    'trust-1':           'FIXED PRICE',
    'trust-2':           'REPLY SAME DAY',
    'trust-3':           'SEO INCLUDED',
    'trust-4':           'ALL OF DENMARK',
    'hero-btn-primary':  'Contact me →',
    'hero-btn-secondary':'See services',

    // Stats
    'stat-1-num':   'From 4,000 DKK',
    'stat-1-label': 'fixed price — no surprises',
    'stat-2-num':   'Under 2 weeks',
    'stat-2-label': 'from idea to live website',
    'stat-3-num':   '1 person',
    'stat-3-label': 'you always speak directly with me',
    'stat-4-num':   'All of Denmark',
    'stat-4-label': 'meet online or in person',

    // Om
    'om-label':       '01 — ABOUT',
    'om-founder':     'FOUNDER',
    'om-badge':       'FREELANCE WEB DESIGNER',
    'om-h2':          'I\'m <em>21 years old</em>, based in Valby,<br>and I do only one thing —<br>websites that work.',
    'om-p1':          'I started Westergaard Medie because I was tired of seeing small Danish businesses pay expensive agencies for template sites that don\'t deliver customers.',
    'om-p2':          'Instead, you get me: one person, one focus, and a website built from scratch — fast, beautiful, and conversion-optimised. No middlemen, no jargon, no surprises on the bill.',
    'om-card-1-label':'PERSONAL',
    'om-card-1-p':    'You always speak directly with me — not an account manager.',
    'om-card-2-label':'FAST',
    'om-card-2-p':    'Most sites go live in under two weeks.',
    'om-card-3-label':'HONEST',
    'om-card-3-p':    'Fixed price. No hidden fees.',
    'om-read-more':       'Read more about me →',
    'ydelser-read-more':  'See all services & prices →',

    // Ydelser
    'ydelser-label': '02 — SERVICES',
    'ydelser-h2':    'Three ways I can help<br>your business online.',
    'ydelse-1-h3':   'Website design',
    'ydelse-1-p':    'Complete business sites built from scratch — designed to convert visitors into customers.',
    'ydelse-1-li-1': 'Custom design',
    'ydelse-1-li-2': 'Mobile optimised',
    'ydelse-1-li-3': 'SEO-ready',
    'ydelse-1-li-4': 'CMS if needed',
    'ydelse-2-h3':   'Landing pages',
    'ydelse-2-p':    'Sharply focused pages for campaigns, launches and ads — built for one purpose: conversion.',
    'ydelse-2-li-1': 'A/B testable',
    'ydelse-2-li-2': 'Lightning-fast load',
    'ydelse-2-li-3': 'Tracking set up',
    'ydelse-2-li-4': 'Ready in 5 days',
    'ydelse-3-h3':   'Optimisation &amp; redesign',
    'ydelse-3-p':    'Get more out of your existing site. I analyse, redesign and optimise for speed and conversion.',
    'ydelse-3-li-1': 'UX audit',
    'ydelse-3-li-2': 'Performance fix',
    'ydelse-3-li-3': 'SEO boost',
    'ydelse-3-li-4': 'Conversion tweaks',

    // Priser
    'priser-label':  '03 — PRICES',
    'priser-h2':     'Fixed price. <em>No surprises.</em>',
    'price-1-type':  'ONE-TIME FEE',
    'price-1-h3':    'Website',
    'price-1-amount':'4,000 <span>DKK excl. VAT</span>',
    'price-1-desc':  '2-4 pages built from scratch. Custom design, mobile optimised and conversion-ready.',
    'price-1-li-1':  '2-4 pages as needed',
    'price-1-li-2':  'Custom design — no templates',
    'price-1-li-3':  'Mobile and performance optimised',
    'price-1-li-4':  'Live in under two weeks',
    'price-1-btn':   'Get a quote →',
    'price-2-badge': 'MOST POPULAR',
    'price-2-type':  'ONE-TIME FEE',
    'price-2-h3':    'SEO package',
    'price-2-amount':'750 <span>DKK excl. VAT</span>',
    'price-2-desc':  'Technical SEO foundation so you can be found on Google from day one.',
    'price-2-li-1':  'Keyword analysis',
    'price-2-li-2':  'Meta-tags &amp; structure',
    'price-2-li-3':  'Schema/JSON-LD set up',
    'price-2-li-4':  'Google Search Console ready',
    'price-2-btn':   'Add SEO →',
    'price-3-type':  'PER MONTH',
    'price-3-h3':    'Hosting &amp; Support',
    'price-3-amount':'299 <span>DKK excl. VAT</span>',
    'price-3-desc':  'Hosting, updates and minor tweaks — so you never have to think about the technical side.',
    'price-3-li-1':  'Hosting on a fast server',
    'price-3-li-2':  'SSL and security updates',
    'price-3-li-3':  'Minor text changes included',
    'price-3-li-4':  'Weekly backup',
    'price-3-btn':   'Keep me running →',
    'priser-note':   'Need something more — e.g. a booking system, webshop or customer login? <a href="kontakt.html">Let\'s have a chat.</a>',

    // Proces
    'proces-label':  '04 — PROCESS',
    'proces-h2':     'From first conversation to live<br>website in under two weeks.',
    'proces-1-h3':   'Contact',
    'proces-1-p':    'We have a no-obligation chat about your project, goals and target audience. You receive a fixed quote within 24 hours.',
    'proces-2-h3':   'Design',
    'proces-2-p':    'I create a sharp design based on your branding. You see drafts early so we get it right from the start.',
    'proces-3-h3':   'Development',
    'proces-3-p':    'The design is coded into a lightning-fast, mobile-friendly website focused on SEO and conversion.',
    'proces-4-h3':   'Launch',
    'proces-4-p':    'We go live, measure performance and fine-tune. You get a walkthrough so you can update content yourself.',

    // Cases
    'cases-label':     '05 — CASES',
    'cases-h2':        'See what I can build<br>for your business.',
    'cases-sub':       'Here\'s a selection of the types of websites I build for small service businesses — from scratch, with your brand.',
    'cases-read-more': 'See all cases →',

    // Priser read-more + Proces read-more
    'priser-read-more': 'See all prices →',
    'proces-read-more': 'See the full process →',

    // FAQ
    'faq-label': '06 — FAQ',
    'faq-h2':    'Frequently asked questions.',
    'faq-1-q':   'How much does a website cost?',
    'faq-1-a':   'A standard website starts from 4,000 DKK excl. VAT. The price depends on scope and complexity. You always get a fixed quote before we start — no surprises.',
    'faq-2-q':   'How long does it take?',
    'faq-2-a':   'Most projects are finished within 1-2 weeks from approved design. Landing pages can often be delivered in 5 days.',
    'faq-3-q':   'Who owns the site when it\'s done?',
    'faq-3-a':   'You own 100% of your website. Code, content and domain are yours — you are not locked in with me.',
    'faq-4-q':   'Can I update the content myself?',
    'faq-4-a':   'Yes. I make sure you can update text and images yourself, and give you a thorough walkthrough at launch.',
    'faq-5-q':   'What about hosting and domain?',
    'faq-5-a':   'I help with setting up hosting and domain. The maintenance package at 299 DKK/mo. covers hosting, SSL and ongoing updates.',

    // CTA
    'cta-label': '07 — GET STARTED',
    'cta-h2':    'Ready for a stronger<br>website?',
    'cta-sub':   'Send a short message and I\'ll get back to you within 24 hours with a no-obligation quote.',
    'cta-btn':   'Get a free quote →',

    // Footer
    'nav-kontakt-footer':    'Contact',
    'footer-bio':            'I build professional websites for Danish businesses — fast, honest and without agency mark-ups.',
    'footer-nav-heading':    'NAVIGATION',
    'footer-contact-heading':'CONTACT',
    'footer-location':       'Valby, Copenhagen',
    'footer-hours':          'Mon–Fri, 08.00–17.00',
    'footer-tagline':        'Freelance Web Developer · Valby, Copenhagen',
    'footer-cookie':         'Cookie settings',
    'footer-privacy':        'Cookie & privacy policy',
    'footer-top':            'Back to top',
  }
};

function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'en' ? 'en' : 'da';

  // Update toggle visual
  const daEl = document.querySelector('.lang-da');
  const enEl = document.querySelector('.lang-en');
  if (daEl) daEl.classList.toggle('lang-active', lang === 'da');
  if (enEl) enEl.classList.toggle('lang-active', lang === 'en');

  localStorage.setItem('wm_lang', lang);
}

// Init
const savedLang = localStorage.getItem('wm_lang') || 'da';
applyLanguage(savedLang);

// Toggle
const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    const current = localStorage.getItem('wm_lang') || 'da';
    applyLanguage(current === 'da' ? 'en' : 'da');
  });
}
