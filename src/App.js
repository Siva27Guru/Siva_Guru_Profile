import React, { useEffect, useState } from 'react';
import './App.css';

const NAME = 'SIVA GURU';
const TITLE = 'Cybersecurity Engineer | Applied Cryptography';
const CONTACT = {
  phone: '+91 9855100435',
  email: 'sivaguruat27@gmail.com',
  linkedin: 'https://linkedin.com/in/siva27guru01/',
  github: 'https://github.com/Siva27Guru/',
};

const SUMMARY = `Cybersecurity software engineer specialising in applied cryptography and Public Key Infrastructure (PKI). Hands-on experience building an IoT Certificate Authority (CSR processing, X.509 issuance, revocation, CRL, OCSP) and PKCS11 with HSM. Implemented and working on a FIDO2/WebAuthn Relying Party for passkey authentication, and a PKI security monitoring prototype, all using Python and Django. Working knowledge of TLS 1.3, mutual TLS, DTLS, X.509 trust chains, OpenSSL, and MbedTLS, along with exposure to post-quantum signatures and hybrid key establishment. Experienced in working with research, firmware, and hardware teams on secure-element integration and device identity, and in documenting security designs (HLD/LLD, protocol workflows, feasibility studies).`;

const HIGHLIGHTS = [
  { label: 'Focus', value: 'PKI, Authentication, Secure Communication, PQC' },
  { label: 'Core Stack', value: 'Python, Django, OpenSSL, MbedTLS, PostgreSQL' },
  { label: 'Current Role', value: 'Project Associate II, SETS (Security Research)' },
  { label: 'Open To', value: 'Cryptography engineering roles' },
];

const SKILLS = [
  {
    category: 'Cryptography & PKI',
    items: ['X.509 certificates', 'Certificate Authority operations', 'CSR processing', 'Certificate issuance', 'Revocation', 'CRL', 'OCSP', 'Certificate trust chains & validation', 'Key management', 'Digital signatures', 'Public-key cryptography', 'OpenSSL', 'MbedTLS', 'Secure-element & HSM-backed key protection (explored)'],
  },
  {
    category: 'Secure Communication Protocols',
    items: ['TLS 1.3', 'Mutual TLS (mTLS)', 'DTLS', 'Certificate-based authentication', 'Handshake & traffic analysis', 'Network analysis tools'],
  },
  {
    category: 'Authentication',
    items: ['FIDO2', 'WebAuthn', 'Passkeys', 'Relying Party implementation', 'Challenge–response authentication', 'Credential verification & storage', 'Authenticator metadata validation', 'JWT', 'Credential management'],
  },
  {
    category: 'Post-Quantum Cryptography',
    items: ['Post-quantum digital signatures', 'Hybrid (classical + post-quantum) key-establishment', 'Secure communication'],
  },
  {
    category: 'Application Security',
    items: ['Secure backend development', 'REST API authentication', 'Access control', 'Input validation', 'Audit logging', 'Threat analysis', 'Anomaly detection on security logs (rule-based and Isolation Forest)'],
  },
  {
    category: 'Programming & Data',
    items: ['Python', 'Golang', 'JavaScript', 'Django', 'Django REST Framework', 'PostgreSQL', 'MongoDB', 'Redis', 'SQL', 'AI/ML (Hugging Face, LangChain)', 'Cloud (AWS)'],
  },
  {
    category: 'Infrastructure & Deployment',
    items: ['Linux', 'Nginx', 'Gunicorn', 'Application deployment', 'Networking', 'Service troubleshooting', 'Secure system configuration'],
  },
  {
    category: 'Security Documentation',
    items: ['HLD/LLD', 'Architecture diagrams', 'Protocol workflow diagrams', 'Feasibility studies', 'Technical security documentation'],
  },
];

const EXPERIENCE = [
  {
    role: 'Project Associate II – Security Research & Software Engineering',
    company: 'Society for Electronic Transactions and Security (SETS)',
    location: 'Chennai, India',
    period: 'July 2024 – Present',
    details: [
      'Develop security-focused software and research prototypes in PKI, applied cryptography, IoT device identity, authentication, and secure communication.',
      'Designed and implemented a Django-based IoT Certificate Authority supporting device registration, CSR processing, X.509 issuance, revocation, CRL generation, and OCSP status checking.',
      'Developed FIDO2/WebAuthn Relying Party workflows covering passkey registration, authentication challenge generation, credential verification, authenticator metadata validation, and credential management.',
      'Developing infrastructure for privacy-preserving computation across High-Performance Computing (HPC) systems using FHE schemes.',
      'Managed server infrastructure (Proxmox, GitLab, VM servers) and supported HSM administration.',
      'Investigated TLS 1.3, mutual TLS, DTLS, X.509 trust chains, and certificate-based authentication using OpenSSL and network analysis tools.',
      'Explored post-quantum digital signatures and hybrid key-establishment approaches for secure communication.',
      'Produced architecture diagrams, HLD/LLD documents, protocol workflows, feasibility studies, and technical security documentation.',
    ],
  },
  {
    role: 'Technical Engineer – Golang',
    company: 'HR365 India Private Limited',
    location: 'India',
    period: 'October 2023 – April 2024',
    details: [
      'Developed backend services and REST APIs in Golang for an enterprise Human Capital Management (HCM) application.',
      'Built employee onboarding features using Golang, Vue.js, and MongoDB across application logic, APIs, and frontend workflows.',
      'Investigated and fixed defects, supported maintenance, and improved reliability and maintainability.',
    ],
  },
  {
    role: 'Programmer Analyst Trainee',
    company: 'Cognizant',
    location: 'India',
    period: 'November 2015 – November 2016',
    details: [
      'Supported enterprise production systems through monitoring, incident management, troubleshooting, and SLA-driven operations.',
      'Performed root-cause analysis and supported deployments, version upgrades, and ETL migrations (Tidal, IBM DataStage).',
    ],
  },
];

const PROJECTS = [
  {
    title: 'IoT PKI & Certificate Lifecycle Management',
    stack: 'Python, Django, OpenSSL, PostgreSQL',
    summary: 'End-to-end IoT Certificate Authority for device identity and trust.',
    details: [
      'Device registration, CSR processing, X.509 issuance/revocation, CRL generation, and OCSP status verification.',
      'Cryptographic operations with OpenSSL: key/certificate handling, signing, validation; explored HSM-backed key protection.',
      'Certificate-based trust for authenticated and encrypted device-to-service communication.',
    ],
  },
  {
    title: 'FIDO2/WebAuthn Relying Party',
    stack: 'Python, Django, PostgreSQL, Redis, Nginx, Gunicorn',
    summary: 'Passwordless/passkey authentication platform with strong credential management.',
    details: [
      'Passkey registration and authentication with challenge–response verification and authenticator metadata validation.',
      'Secure credential storage and lifecycle management integrated with application identity and access requirements.',
      'Deployed and operated on Linux with Django, PostgreSQL, Redis, Nginx, and Gunicorn.',
    ],
  },
  {
    title: 'Privacy-Preserving Computation (FHE)',
    stack: 'Cryptography, FHE Schemes, HPC Infrastructure',
    summary: 'Infrastructure for computing on encrypted data in high-performance environments.',
    details: [
      'Developing FHE-based infrastructure for secure processing of high-volume datasets across HPC systems.',
      'Exploring methods that enable computation while preserving data confidentiality.',
    ],
  },
  {
    title: 'Secure Communication & Post-Quantum Exploration',
    stack: 'OpenSSL, Mbed TLS, Wireshark',
    summary: 'Protocol analysis and migration-aware secure communication experiments.',
    details: [
      'Studied TLS 1.3, mutual TLS, and DTLS handshakes and certificate-based authentication.',
      'Explored post-quantum digital signatures and hybrid key-establishment approaches.',
    ],
  },
  {
    title: 'Security Training & Outreach',
    stack: 'Practocrypt, Lab Setup, Technical Talks',
    summary: 'Hands-on cybersecurity education and applied research translation.',
    details: [
      'Conducted Practocrypt training for research scholars and industry professionals.',
      'Contributed to CSIC delivery, cyber defence lab setup, and technical talks for stakeholders.',
    ],
  },
];

const EDUCATION = {
  degree: 'Bachelor of Technology (B.Tech) – Computer Science and Engineering',
  institution: 'Bharathidasan University',
  location: 'Tiruchirappalli, India',
};

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);
  return [theme, setTheme];
}

function Navbar({ theme, setTheme }) {
  const links = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="wrap nav-inner">
        <a href="#home" className="brand">
          <span className="brand-mark">SG</span>
          <span className="brand-name">{NAME}</span>
        </a>
        <div className="nav-links">
          {links.map((l) => <a key={l.id} href={`#${l.id}`}>{l.label}</a>)}
        </div>
        <div className="nav-actions">
          <a href={CONTACT.github} target="_blank" rel="noreferrer" className="icon-link" aria-label="GitHub">GitHub</a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="icon-link" aria-label="LinkedIn">LinkedIn</a>
          <button className="theme-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero" id="home">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">Applied Cryptography · PKI · Authentication</div>
          <h1>{NAME}</h1>
          <p className="title">{TITLE}</p>
          <p className="hero-intro">
            I design and build security systems for device trust, passwordless authentication, and secure communication — from IoT Certificate Authorities and FIDO2 relying parties to post-quantum-ready cryptographic exploration.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn primary">View projects</a>
            <a href="#contact" className="btn">Contact me</a>
            <a href={`mailto:${CONTACT.email}`} className="btn ghost">Email</a>
          </div>
        </div>
        <div className="hero-panel">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="highlight">
              <span className="h-label">{h.label}</span>
              <span className="h-value">{h.value}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

function Section({ id, eyebrow, title, children, alt }) {
  return (
    <section id={id} className={`section ${alt ? 'alt' : ''}`}>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = useTheme();

  return (
    <div className="app">
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />

        <Section id="about" eyebrow="About" title="Engineering secure trust systems">
          <div className="about-grid">
            <p className="lead">{SUMMARY}</p>
            <div className="focus-card">
              <h3>What I work on</h3>
              <ul>
                <li>IoT PKI & certificate lifecycle (CSR, issuance, revocation, CRL, OCSP)</li>
                <li>Passwordless authentication with FIDO2/WebAuthn</li>
                <li>Secure protocols: TLS 1.3, mTLS, DTLS, X.509 trust chains</li>
                <li>Privacy-preserving computation (FHE) and post-quantum exploration</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Professional background" alt>
          <div className="timeline">
            {EXPERIENCE.map((job, i) => (
              <article key={i} className="timeline-item">
                <div className="timeline-meta">
                  <div className="period">{job.period}</div>
                  <div className="place">{job.location}</div>
                </div>
                <div className="timeline-card">
                  <h3>{job.role}</h3>
                  <p className="company">{job.company}</p>
                  <ul>
                    {job.details.map((d, j) => <li key={j}>{d}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Selected security work">
          <div className="projects-grid">
            {PROJECTS.map((p) => (
              <article key={p.title} className="project-card">
                <div className="stack">{p.stack}</div>
                <h3>{p.title}</h3>
                <p className="summary">{p.summary}</p>
                <ul>
                  {p.details.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="Technical expertise" alt>
          <div className="skills-grid">
            {SKILLS.map((s) => (
              <div key={s.category} className="skill-card">
                <h3>{s.category}</h3>
                <div className="tags">
                  {s.items.map((it) => <span key={it} className="tag">{it}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" eyebrow="Education" title="Academic background">
          <div className="edu-card">
            <h3>{EDUCATION.degree}</h3>
            <p>{EDUCATION.institution} — {EDUCATION.location}</p>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let's connect" alt>
          <div className="contact-grid">
            <div className="contact-card">
              <p className="contact-name">{NAME}</p>
              <p className="contact-role">{TITLE}</p>
              <p className="contact-open">Open to cryptography engineering roles in PKI, authentication, secure communication, or post-quantum migration.</p>
              <div className="contact-links">
                <a href={`mailto:${CONTACT.email}`}>✉ {CONTACT.email}</a>
                <a href={`tel:${CONTACT.phone}`}>☎ {CONTACT.phone}</a>
                <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
                <a href={CONTACT.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <span>{NAME} · {TITLE}</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
