'use client';

import { useState } from 'react';
import { ArrowUpRight, Check, ChevronDown, CircleCheck, ExternalLink, Fingerprint, LockKeyhole, Menu, Radar, ShieldCheck, X, Zap } from 'lucide-react';

const services = [
  { number: '01', icon: Radar, title: 'Basic security assessments', copy: 'A clear look at the exposed, everyday pieces of your business — from domain posture to account hygiene.', items: ['Public-facing exposure review', 'MFA, patching & backup check', 'Prioritized written report'] },
  { number: '02', icon: ShieldCheck, title: 'Vulnerability overviews', copy: 'A safe, permission-based review that turns technical signals into practical next steps your team can act on.', items: ['Common misconfiguration checks', 'Risk explained in plain language', 'Remediation roadmap'] },
  { number: '03', icon: Fingerprint, title: 'Security consultations', copy: 'A focused conversation for owners and small teams who want an experienced second set of eyes on security priorities.', items: ['Scope & permission planning', 'Security hygiene guidance', 'Questions answered without jargon'] },
];

const steps = [
  ['01', 'Scope together', 'We agree on exactly what is in scope, what is out of scope, and the written permission needed before anything begins.'],
  ['02', 'Review safely', 'I look for common, actionable gaps using a non-disruptive approach designed to keep your business moving.'],
  ['03', 'Make it useful', 'You receive a concise report with clear priorities, context, and practical recommendations — not a wall of fear.'],
];

type FormSubmitEvent = { preventDefault: () => void };

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) { return <div className={`reveal ${className}`}>{children}</div>; }

function FounderPortrait() {
  const [imageFailed, setImageFailed] = useState(false);

  return <div className="founder-portrait-frame"><div className="portrait-media"><img src={imageFailed ? '/connor-headshot-placeholder.svg' : '/connor-headshot.jpg'} alt={imageFailed ? 'Portrait placeholder for Connor, founder of Norivex Cyber.' : 'Connor, founder of Norivex Cyber.'} loading="lazy" decoding="async" onError={() => setImageFailed(true)} /></div><div className="portrait-caption"><span>Founder / Norivex Cyber</span><span>Martinsville, Virginia</span></div></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormSubmitEvent) { event.preventDefault(); setSent(true); }

  return (
    <main className="site-shell">
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Norivex Cyber home"><span className="brand-mark" aria-hidden="true"><span /></span><span>Norivex<span className="brand-muted"> Cyber</span></span></a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#process" onClick={() => setMenuOpen(false)}>Process</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Start a conversation <ArrowUpRight size={15} /></a>
        </div>
        <button className="menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </nav>

      <section id="top" className="hero section-pad">
        <div className="hero-copy">
          <Reveal><p className="eyebrow"><span className="status-dot" /> Practical security for growing businesses</p></Reveal>
          <Reveal className="delay-1"><h1>See what’s exposed.<br /><em>Know what to do next.</em></h1></Reveal>
          <Reveal className="delay-2"><p className="hero-sub">Norivex Cyber provides straightforward, permission-based security assessments for local businesses — at no cost while I build practical experience.</p></Reveal>
          <Reveal className="delay-3"><div className="hero-actions"><a className="button button-primary" href="#contact">Request a free assessment <ArrowUpRight size={17} /></a><a className="text-link" href="#services">Explore services <ChevronDown size={16} /></a></div></Reveal>
          <Reveal className="delay-4"><p className="hero-note"><LockKeyhole size={14} /> Safe, non-disruptive & confidential</p></Reveal>
        </div>
        <Reveal className="hero-visual delay-2"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="visual-grid" /><div className="visual-core"><span className="core-pulse" /><ShieldCheck size={34} strokeWidth={1.4} /></div><div className="signal signal-top"><span className="signal-line" /><span>surface map</span><strong>ready</strong></div><div className="signal signal-right"><span className="signal-line" /><span>permission</span><strong className="cyan">required</strong></div><div className="signal signal-bottom"><span className="signal-line" /><span>report</span><strong>actionable</strong></div><div className="coordinates">36°43&apos; N&nbsp;&nbsp; 81°06&apos; W</div></Reveal>
      </section>

      <section className="trust-strip" aria-label="Assessment principles"><div><Check size={15} /> Written permission first</div><div><Check size={15} /> No-cost pilot projects</div><div><Check size={15} /> Findings stay confidential</div></section>

      <section id="services" className="section-pad services-section"><Reveal><div className="section-kicker"><span>What I look for</span><span className="kicker-line" /></div></Reveal><div className="section-heading-row"><Reveal><h2>Small gaps can create<br /><span>big questions.</span></h2></Reveal><Reveal className="delay-1"><p className="section-intro">Security doesn’t have to be mysterious or overwhelming. The goal is a calm, focused view of the basics that matter most to your business.</p></Reveal></div><div className="service-grid">{services.map((service, index) => { const Icon = service.icon; return <Reveal key={service.number} className={`delay-${index + 1}`}><article className="service-card"><div className="card-top"><span className="card-number">{service.number}</span><Icon size={22} strokeWidth={1.5} /></div><h3>{service.title}</h3><p>{service.copy}</p><ul>{service.items.map(item => <li key={item}><CircleCheck size={15} />{item}</li>)}</ul><a href="#contact" className="card-link">Talk about this <ArrowUpRight size={15} /></a></article></Reveal>; })}</div></section>

      <section id="process" className="process-section"><div className="section-pad process-inner"><Reveal><div className="section-kicker"><span>How it works</span><span className="kicker-line" /></div><h2>A better first step<br /><span>starts with clarity.</span></h2></Reveal><div className="steps-list">{steps.map(([number, title, copy], index) => <Reveal key={number} className={`step delay-${index + 1}`}><div className="step-number">{number}</div><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight className="step-arrow" size={20} /></Reveal>)}</div></div></section>

      <section id="about" className="section-pad about-section"><Reveal className="about-panel"><div className="about-badge"><Zap size={18} /> Meet the founder <span className="about-location">Rooted in Martinsville, Virginia</span></div><div className="founder-layout"><FounderPortrait /><div className="founder-copy"><p className="founder-lede">Hi, I’m Connor — founder of Norivex Cyber.</p><p>I grew up in Martinsville, Virginia, and graduated from Martinsville High School in 2025. While I was there, I played basketball and stayed involved in the community through local volunteering, including the Martinsville-Henry County Warming Shelter and community outreach events.</p><p>After high school, I attended Radford University to study cybersecurity. I’ve continued developing my skills through independent study, hands-on labs, and practical security projects. My interest in cybersecurity began around the start of the COVID-19 pandemic and has continued to grow ever since.</p><p>I started Norivex Cyber because I want local businesses to have access to clear, practical security guidance. Norivex Cyber currently offers free, permission-based introductory assessments while I continue my own training. I’m working toward the TryHackMe SEC-0 / Pre-Security certification and continuing to build hands-on experience.</p><p>Long term, I hope to build a career in cybersecurity working with organizations in the private or public sector while continuing to help businesses understand and reduce their security risks.</p><a className="text-link" href="#contact">Start with a conversation <ArrowUpRight size={16} /></a></div></div></Reveal></section>

      <section id="contact" className="contact-section section-pad"><div className="contact-grid"><Reveal><div className="section-kicker"><span>Start here</span><span className="kicker-line" /></div><h2>Let’s make security<br /><em>less intimidating.</em></h2><p className="contact-intro">Tell me a little about your business and what you’d like to understand better. There’s no cost and no obligation.</p><div className="contact-details"><a href="tel:+12768060921"><span>Phone</span>276-806-0921</a><a href="mailto:hello@norivexcyber.com"><span>Email</span>hello@norivexcyber.com</a></div><div className="social-links"><a href="#contact" aria-label="Norivex Cyber on LinkedIn"><ExternalLink size={17} /> LinkedIn</a><a href="#contact" aria-label="Norivex Cyber on GitHub"><ExternalLink size={17} /> GitHub</a></div></Reveal><Reveal className="delay-2"><div className="contact-form-card">{sent ? <div className="success-state"><span className="success-icon"><Check size={23} /></span><h3>Thanks — message received.</h3><p>This demo form is ready to connect to your preferred inbox or form service. For now, you can also reach Connor directly by phone or email.</p><button className="button button-outline" type="button" onClick={() => setSent(false)}>Send another message</button></div> : <form onSubmit={handleSubmit}><div className="form-heading"><span>Free assessment inquiry</span><span className="required-note">All fields required</span></div><label>Name<input required name="name" placeholder="Your name" /></label><label>Business email<input required type="email" name="email" placeholder="you@business.com" /></label><label>What would you like to assess?<textarea required name="message" rows={4} placeholder="A website, domain, account setup, or general security questions..." /></label><label className="consent"><input required type="checkbox" name="permission" /><span>I understand this is an introductory conversation and no assessment begins without written permission and an agreed scope.</span></label><button className="button button-primary form-submit" type="submit">Request a conversation <ArrowUpRight size={17} /></button></form>}</div></Reveal></div></section>

      <footer className="footer section-pad"><a className="brand" href="#top"><span className="brand-mark" aria-hidden="true"><span /></span><span>Norivex<span className="brand-muted"> Cyber</span></span></a><p>Cybersecurity assessments for modern businesses.</p><span className="footer-meta">© 2026 Norivex Cyber · Built with care</span></footer>
    </main>
  );
}
