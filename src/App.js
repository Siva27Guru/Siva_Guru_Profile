import React, { useMemo, useState } from 'react';
import './App.css';
import { posts } from './content/posts';

const NAME = 'SIVA GURU';
const TITLE = 'Cybersecurity Engineer | Applied Cryptography';
const CONTACT = {
  phone: '+91 9855100435',
  email: 'sivaguruat27@gmail.com',
  linkedin: 'https://linkedin.com/in/siva27guru01/',
  github: 'https://github.com/Siva27Guru/',
};

const SUMMARY = `Cybersecurity software engineer specialising in applied cryptography and Public Key Infrastructure (PKI). Hands-on experience building an IoT Certificate Authority (CSR processing, X.509 issuance, revocation, CRL, OCSP) and PKCS11 with HSM. Implemented and working on a FIDO2/WebAuthn Relying Party for passkey authentication, and a PKI security monitoring prototype, all using Python and Django. Working knowledge of TLS 1.3, mutual TLS, DTLS, X.509 trust chains, OpenSSL, and MbedTLS, along with exposure to post-quantum signatures and hybrid key establishment. Experienced in working with research, firmware, and hardware teams on secure-element integration and device identity, and in documenting security designs (HLD/LLD, protocol workflows, feasibility studies). Seeking a cryptography engineering role in PKI, authentication, secure communication, or post-quantum migration.`;

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
      'IoT PKI server: Designed and implemented a Django-based Certificate Authority supporting device registration, CSR processing, X.509 certificate issuance, revocation, CRL generation, and OCSP status checking.',
      'FIDO2/WebAuthn: Developed Relying Party workflows covering passkey registration, authentication challenge generation, credential verification, authenticator metadata validation, and credential management.',
      'Fully Homomorphic Encryption (FHE): Developing infrastructure for privacy-preserving computation across High-Performance Computing (HPC) systems.',
      'Infrastructure, Server Maintenance & HSM Administration: Managed server infrastructure hosting SETS products, including Proxmox virtualization, GitLab services, and VM servers; supported HSM administration.',
      'Application integration: Integrated authentication services using JWT-based mechanisms and relying-party services, with audit logging of security-relevant events.',
      'Secure protocols: Investigated TLS 1.3, mutual TLS, DTLS, X.509 trust chains, and certificate-based authentication using OpenSSL and network analysis tools.',
      'Post-quantum: Explored post-quantum digital signatures and hybrid key-establishment approaches for secure communication.',
      'Deployment: Deployed and maintained Linux applications using Django, Nginx, Gunicorn, PostgreSQL, and Redis; diagnosed service configuration, connectivity, and runtime issues.',
      'Hardware collaboration: Worked with hardware and firmware teams on secure-element integration and device security requirements.',
      'Documentation: Produced architecture diagrams, HLD/LLD documents, protocol workflows, feasibility studies, and technical security documentation.',
      'Industry Collaboration: Delivered translation of research into practical CCTV and cybersecurity use cases for government and private-sector organizations with SecureD Technologies.',
    ],
  },
  {
    role: 'Technical Engineer – Golang',
    company: 'HR365 India Private Limited',
    location: 'India',
    period: 'October 2023 – April 2024',
    details: [
      'Developed backend services and REST APIs in Golang for an enterprise Human Capital Management (HCM) application.',
      'Built features for the employee onboarding module using Golang, Vue.js, and MongoDB, covering application logic, APIs, database operations, and frontend workflows.',
      'Investigated and fixed defects, supported application maintenance, and improved reliability and maintainability.',
      'Worked with application deployment environments, technical documentation, product demonstrations, and cross-functional teams.',
    ],
  },
  {
    role: 'Programmer Analyst Trainee',
    company: 'Cognizant',
    location: 'India',
    period: 'November 2015 – November 2016',
    details: [
      'Supported enterprise production systems through application monitoring, incident management, troubleshooting, and SLA-driven operational support.',
      'Performed root-cause analysis of production issues and supported deployments, version upgrades, and ETL migrations.',
      'Worked with Tidal scheduling and IBM DataStage ETL workflows for enterprise data processing.',
    ],
  },
];

const PROJECTS = [
  {
    title: 'IoT PKI & Certificate Lifecycle Management',
    stack: 'Python, Django, OpenSSL, PostgreSQL',
    details: [
      'Built a Django-based Certificate Authority (CA) platform covering the device certificate lifecycle: device registration, CSR processing, X.509 certificate issuance and revocation, CRL generation, and OCSP status verification.',
      'Used OpenSSL for cryptographic operations: key and certificate handling, signing, and validation; explored HSM-backed key protection and certificate formats for constrained IoT devices.',
      'Applied certificate-based trust and device identity concepts for authenticated and encrypted communication between devices and services.',
    ],
  },
  {
    title: 'FIDO2/WebAuthn Relying Party',
    stack: 'Python, Django, PostgreSQL, Redis, Nginx, Gunicorn',
    details: [
      'Developed a Relying Party (RP) for passkey registration and authentication, including challenge–response verification, credential storage, and authenticator metadata validation.',
      'Deployed and troubleshot the application on Linux using Django, PostgreSQL, Redis, Nginx, and Gunicorn.',
      'Integrated authenticator workflows with application identity and access requirements.',
    ],
  },
  {
    title: 'Fully Homomorphic Encryption (FHE)',
    stack: 'Cryptography, FHE Schemes, HPC Infrastructure',
    details: [
      'Developing infrastructure for privacy-preserving computation across High-Performance Computing (HPC) systems to support secure processing of high-volume datasets using FHE schemes.',
      'Exploring cryptographic methods that enable computations on encrypted data while preserving confidentiality.',
      'Working on infrastructure for privacy-preserving workloads, focusing on secure data processing and applying homomorphic encryption to computationally intensive environments.',
    ],
  },
  {
    title: 'Secure Communication & Post-Quantum Cryptography Exploration',
    stack: 'OpenSSL, Mbed TLS, Wireshark',
    details: [
      'Studied TLS 1.3, mutual TLS (mTLS), and DTLS handshakes and certificate-based authentication using OpenSSL and Mbed TLS, analysing network traffic to investigate communication and security issues.',
      'Explored post-quantum digital signatures and hybrid key-establishment approaches for secure communication.',
    ],
  },
  {
    title: 'Cybersecurity Training, CTF Events & Outreach',
    stack: 'Security Training, Lab Setup, Technical Talks',
    details: [
      'Conducted Practocrypt cybersecurity training sessions for research scholars and industry professionals, promoting practical information security practices and hands-on security learning.',
      'Contributed to CSIC project delivery and cyber defence laboratory installation and setup activities.',
      'Delivered technical talks at security development and training events for relevant stakeholders, communicating cybersecurity concepts and research outcomes.',
    ],
  },
];

const EDUCATION = {
  degree: 'Bachelor of Technology (B.Tech) – Computer Science and Engineering',
  institution: 'Bharathidasan University',
  location: 'Tiruchirappalli, India',
};

const CATEGORIES = [
  { id: 'all', label: 'All posts' },
  { id: 'cryptography', label: 'Cryptography' },
  { id: 'pki', label: 'PKI' },
  { id: 'authentication', label: 'Authentication' },
  { id: 'application-security', label: 'Application Security' },
  { id: 'post-quantum', label: 'Post-Quantum' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'general', label: 'General' },
];

const categoryIcon = (id) => {
  const map = {
    cryptography: '🔐',
    pki: '📜',
    authentication: '🔑',
    'application-security': '🛡️',
    'post-quantum': '⚛️',
    infrastructure: '🖥️',
    general: '📝',
  };
  return map[id] || '•';
};

function formatDate(dateStr) {
  return new Date(`${dateStr}T12:00:00`).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}

function markdown(text) {
  return text
    .split(/\n\n+/)
    .map((block) => {
      if (block.startsWith('# ')) return `<h3>${block.slice(2)}</h3>`;
      if (block.startsWith('## ')) return `<h4>${block.slice(3)}</h4>`;
      if (block.startsWith('- ')) return `<ul>${block.split('\n').map((l) => `<li>${l.slice(2)}</li>`).join('')}</ul>`;
      return `<p>${block}</p>`;
    })
    .join('');
}

function Navbar({ active, setActive }) {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="wrap">
        <a href="#home" className="brand" onClick={() => setActive('home')}>
          <span className="brand-mark">S<span>.</span></span> <span className="brand-name">{NAME}</span>
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={active === link.id ? 'active' : ''} onClick={() => setActive(link.id)}>
              {link.label}
            </a>
          ))}
          <div className="nav-social">
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="GitHub">gh</a>
          </div>
          <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setActive('menu')}>☰</button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero" id="home">
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <div className="eyebrow">CYBERSECURITY ENGINEER · APPLIED CRYPTOGRAPHY</div>
          <h1>{NAME}<br /><span className="title-line">{TITLE}</span></h1>
          <p className="hero-intro">Building IoT Certificate Authorities, FIDO2/WebAuthn relying parties, and post-quantum-ready secure communication with Python, Django, OpenSSL, and MbedTLS.</p>
          <div className="contact-row">
            <a className="contact-chip" href={`tel:${CONTACT.phone}`}>☎ {CONTACT.phone}</a>
            <a className="contact-chip" href={`mailto:${CONTACT.email}`}>✉ {CONTACT.email}</a>
            <a className="contact-chip" href={CONTACT.linkedin} target="_blank" rel="noreferrer">🔗 LinkedIn</a>
            <a className="contact-chip" href={CONTACT.github} target="_blank" rel="noreferrer">🐙 GitHub</a>
          </div>
          <div className="hero-actions">
            <a href="#blog" className="button button-primary">Read the daily blog <span>↓</span></a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="button button-outline">View GitHub profile ↗</a>
          </div>
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">01 — ABOUT</span>
          <h2>Professional summary<span className="dot">.</span></h2>
        </div>
        <p className="lead">{SUMMARY}</p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section bg-soft" id="skills">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">02 — TECHNICAL SKILLS</span>
          <h2>Areas of expertise<span className="dot">.</span></h2>
        </div>
        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <div key={skill.category} className="skill-card">
              <h3>{skill.category}</h3>
              <div className="skill-tags">
                {skill.items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">03 — PROFESSIONAL EXPERIENCE</span>
          <h2>Work history<span className="dot">.</span></h2>
        </div>
        <div className="timeline">
          {EXPERIENCE.map((job, index) => (
            <article key={index} className="timeline-item">
              <div className="timeline-meta">
                <span className="timeline-period">{job.period}</span>
                <span className="timeline-place">{job.location}</span>
              </div>
              <div className="timeline-card">
                <h3>{job.role}</h3>
                <p className="timeline-company">{job.company}</p>
                <ul>
                  {job.details.map((detail, i) => <li key={i}>{detail}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section bg-soft" id="projects">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">04 — PROJECTS</span>
          <h2>Relevant security projects<span className="dot">.</span></h2>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-stack">{project.stack}</div>
              <h3>{project.title}</h3>
              <ul>
                {project.details.map((detail, i) => <li key={i}>{detail}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">05 — EDUCATION</span>
          <h2>Degree<span className="dot">.</span></h2>
        </div>
        <div className="edu-card">
          <h3>{EDUCATION.degree}</h3>
          <p className="edu-institution">{EDUCATION.institution} — {EDUCATION.location}</p>
        </div>
      </div>
    </section>
  );
}

function Giscus({ slug, title }) {
  // Configure at giscus.app and set data-repo / data-repo-id in public/index.html.
  return (
    <section className="comments-section">
      <h3 className="comments-title">Discussion</h3>
      <giscus
        data-repo="Siva27Guru/siva27guru.github.io"
        data-repo-id=""
        data-category="General"
        data-category-id=""
        data-mapping="title"
        data-term={title}
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="en"
        data-loading="lazy"
        className="giscus-frame"
        title="Comments"
      ></giscus>
      <p className="comments-note">Sign in with GitHub to comment. Comments live in this repository's Discussions.</p>
    </section>
  );
}

function Blog({ active, setActive }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openComment, setOpenComment] = useState(null);

  const filtered = useMemo(() =>
    posts
      .filter((p) => activeCategory === 'all' || p.category === activeCategory)
      .sort((a, b) => b.date.localeCompare(a.date))
  , [activeCategory]);

  const today = new Date().toISOString().slice(0, 10);

  return (
    <section className="section bg-soft" id="blog">
      <div className="wrap">
        <div className="section-header blog-header">
          <div>
            <span className="eyebrow">06 — DAILY BLOG</span>
            <h2>Learning in public<span className="dot">.</span></h2>
          </div>
        </div>

        <div className="blog-filters">
          {CATEGORIES.map((cat) => (
            <button key={cat.id} className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`} onClick={() => setActiveCategory(cat.id)}>
              {categoryIcon(cat.id)} {cat.label}
            </button>
          ))}
          <span className="count-text">{filtered.length} {filtered.length === 1 ? 'post' : 'posts'}</span>
        </div>

        <div className="posts-list">
          {filtered.length === 0 ? (
            <div className="empty-state">
              <span>📭</span>
              <h3>No posts yet</h3>
              <p>Add a markdown file to <code>src/content/posts.js</code> and push to GitHub to publish.</p>
            </div>
          ) : (
            filtered.map((post) => (
              <article key={post.slug} className="post-card">
                <div className="post-date">{formatDate(post.date)}</div>
                <div className="post-content">
                  <div className="post-meta">
                    <span className={`category-pill ${post.category}`}>{categoryIcon(post.category)} {CATEGORIES.find((c) => c.id === post.category)?.label || post.category}</span>
                    {post.date === today && <span className="today-pill">TODAY</span>}
                  </div>
                  <h3>{post.title}</h3>
                  <div className="post-body" dangerouslySetInnerHTML={{ __html: markdown(post.body) }} />
                  <div className="post-actions">
                    <button className="text-button" onClick={() => setOpenComment(post.slug === openComment ? null : post.slug)}>
                      {openComment === post.slug ? 'Hide comments' : 'Comments'}
                    </button>
                  </div>
                  {openComment === post.slug && <Giscus slug={post.slug} title={post.title} />}
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="section-header">
          <span className="eyebrow">07 — CONTACT</span>
          <h2>Get in touch<span className="dot">.</span></h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <p>{NAME}</p>
            <p>Cybersecurity Engineer | Applied Cryptography</p>
            <a href={`tel:${CONTACT.phone}`} className="contact-link">☎ {CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="contact-link">✉ {CONTACT.email}</a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="contact-link">🔗 LinkedIn</a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="contact-link">🐙 GitHub</a>
          </div>
          <div className="contact-note">
            <p>Open to cryptography engineering roles in PKI, authentication, secure communication, or post-quantum migration.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <span className="brand-mark">S<span>.</span></span> <span className="brand-name">{NAME}</span>
        <span className="footer-note">Built with curiosity · Updated daily</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

function App() {
  const [active, setActive] = useState('home');

  return (
    <div className="app">
      <Navbar active={active} setActive={setActive} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Blog active={active} setActive={setActive} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
