import React, { useEffect, useMemo, useState } from 'react';
import {
  ThemeProvider, createTheme, CssBaseline, Box, Container, Typography, Button, IconButton,
  AppBar, Toolbar, Drawer, List, ListItemButton, ListItemText, Chip, Card, CardContent,
  Grid, Stack, Divider, Avatar, Tooltip, Fab, Collapse, Paper, useMediaQuery, MobileStepper
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SecurityIcon from '@mui/icons-material/Security';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import MemoryIcon from '@mui/icons-material/Memory';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LockIcon from '@mui/icons-material/Lock';
import ShieldIcon from '@mui/icons-material/Shield';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './App.css';

const NAME = 'SIVA GURU';
const TITLE = 'Cybersecurity Engineer | Applied Cryptography';
const CONTACT = {
  phone: '+91 9855100435',
  email: 'sivaguruat27@gmail.com',
  linkedin: 'https://linkedin.com/in/siva27guru01/',
  github: 'https://github.com/Siva27Guru/',
};

const SUMMARY = `Cybersecurity software engineer specialising in applied cryptography and Public Key Infrastructure (PKI). Hands-on experience building an IoT Certificate Authority (CSR processing, X.509 issuance, revocation, CRL, OCSP) and PKCS11 with HSM. Implemented and working on a FIDO2/WebAuthn Relying Party for passkey authentication, and a PKI security monitoring prototype, all using Python and Django. Working knowledge of TLS 1.3, mutual TLS, DTLS, X.509 trust chains, OpenSSL, and MbedTLS, along with exposure to post-quantum signatures and hybrid key establishment.`;

const HIGHLIGHTS = [
  { label: 'Focus', value: 'PKI, Authentication, Secure Communication, PQC', icon: <SecurityIcon fontSize="small" /> },
  { label: 'Core Stack', value: 'Python, Django, OpenSSL, MbedTLS, PostgreSQL', icon: <MemoryIcon fontSize="small" /> },
  { label: 'Current Role', value: 'Project Associate II, SETS (Security Research)', icon: <WorkIcon fontSize="small" /> },
  { label: 'Open To', value: 'Cryptography engineering roles', icon: <VpnKeyIcon fontSize="small" /> },
];

const SKILLS = [
  {
    category: 'Cryptography & PKI',
    items: [
      { label: 'X.509', url: 'https://www.rfc-editor.org/rfc/rfc5280' },
      { label: 'CA Operations', url: 'https://csrc.nist.gov/glossary/term/certification_authority' },
      { label: 'CSR', url: 'https://www.rfc-editor.org/rfc/rfc2986' },
      { label: 'Issuance', url: 'https://csrc.nist.gov/glossary/term/certificate_issuance' },
      { label: 'Revocation', url: 'https://www.rfc-editor.org/rfc/rfc5280#section-5' },
      { label: 'CRL', url: 'https://www.rfc-editor.org/rfc/rfc5280#section-5.1' },
      { label: 'OCSP', url: 'https://www.rfc-editor.org/rfc/rfc6960' },
      { label: 'Trust Chains', url: 'https://www.rfc-editor.org/rfc/rfc5280#section-6' },
      { label: 'Key Management', url: 'https://csrc.nist.gov/projects/key-management' },
      { label: 'Digital Signatures', url: 'https://csrc.nist.gov/projects/digital-signatures' },
      { label: 'OpenSSL', url: 'https://www.openssl.org/docs/' },
      { label: 'MbedTLS', url: 'https://mbed-tls.readthedocs.io/en/latest/' },
      { label: 'HSM/PKCS#11', url: 'https://docs.oasis-open.org/pkcs11/pkcs11-base/v3.0/pkcs11-base-v3.0.html' },
    ],
  },
  {
    category: 'Secure Communication',
    items: [
      { label: 'TLS 1.3', url: 'https://www.rfc-editor.org/rfc/rfc8446' },
      { label: 'mTLS', url: 'https://www.cloudflare.com/learning/access-management/what-is-mutual-tls/' },
      { label: 'DTLS', url: 'https://www.rfc-editor.org/rfc/rfc9147' },
      { label: 'Certificate-based Auth', url: 'https://www.rfc-editor.org/rfc/rfc5280' },
      { label: 'Handshake Analysis', url: 'https://www.rfc-editor.org/rfc/rfc8446#section-4' },
      { label: 'Wireshark', url: 'https://www.wireshark.org/docs/' },
    ],
  },
  {
    category: 'Authentication',
    items: [
      { label: 'FIDO2', url: 'https://fidoalliance.org/fido2/' },
      { label: 'WebAuthn', url: 'https://www.w3.org/TR/webauthn-3/' },
      { label: 'Passkeys', url: 'https://fidoalliance.org/passkeys/' },
      { label: 'Relying Party', url: 'https://www.w3.org/TR/webauthn-3/#relying-party' },
      { label: 'Challenge–Response', url: 'https://www.w3.org/TR/webauthn-3/#sctn-cryptographic-challenges' },
      { label: 'Attestation', url: 'https://www.w3.org/TR/webauthn-3/#sctn-attestation' },
      { label: 'JWT', url: 'https://datatracker.ietf.org/doc/html/rfc7519' },
    ],
  },
  {
    category: 'Post-Quantum Cryptography',
    items: [
      { label: 'PQC Signatures', url: 'https://csrc.nist.gov/projects/post-quantum-cryptography' },
      { label: 'Hybrid Key Establishment', url: 'https://datatracker.ietf.org/doc/draft-ietf-tls-hybrid-design/' },
      { label: 'ML-KEM / ML-DSA awareness', url: 'https://csrc.nist.gov/pubs/fips/203/final' },
      { label: 'Migration planning', url: 'https://www.nccoe.nist.gov/crypto-agility-considerations-migrating-post-quantum-cryptographic-algorithms' },
    ],
  },
  {
    category: 'Application Security',
    items: [
      { label: 'Secure Backend', url: 'https://owasp.org/www-project-proactive-controls/' },
      { label: 'REST Auth', url: 'https://owasp.org/www-project-api-security/' },
      { label: 'Access Control', url: 'https://owasp.org/www-project-top-ten/2017/A5_2017-Broken_Access_Control' },
      { label: 'Input Validation', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html' },
      { label: 'Audit Logging', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html' },
      { label: 'Threat Analysis', url: 'https://owasp.org/www-community/Threat_Modeling' },
      { label: 'Anomaly Detection', url: 'https://scikit-learn.org/stable/modules/outlier_detection.html' },
    ],
  },
  {
    category: 'Programming & Data',
    items: [
      { label: 'Python', url: 'https://docs.python.org/3/' },
      { label: 'Golang', url: 'https://go.dev/doc/' },
      { label: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { label: 'Django', url: 'https://docs.djangoproject.com/en/stable/' },
      { label: 'DRF', url: 'https://www.django-rest-framework.org/' },
      { label: 'PostgreSQL', url: 'https://www.postgresql.org/docs/' },
      { label: 'MongoDB', url: 'https://www.mongodb.com/docs/' },
      { label: 'Redis', url: 'https://redis.io/docs/latest/' },
      { label: 'SQL', url: 'https://www.postgresql.org/docs/current/sql.html' },
    ],
  },
  {
    category: 'Infrastructure',
    items: [
      { label: 'Linux', url: 'https://www.kernel.org/doc/html/latest/' },
      { label: 'Nginx', url: 'https://nginx.org/en/docs/' },
      { label: 'Gunicorn', url: 'https://docs.gunicorn.org/en/stable/' },
      { label: 'Proxmox', url: 'https://pve.proxmox.com/pve-docs/' },
      { label: 'GitLab', url: 'https://docs.gitlab.com/' },
      { label: 'Networking', url: 'https://www.rfc-editor.org/rfc/rfc791' },
      { label: 'Troubleshooting', url: 'https://man7.org/linux/man-pages/index.html' },
    ],
  },
  {
    category: 'Documentation',
    items: [
      { label: 'HLD/LLD', url: 'https://csrc.nist.gov/glossary/term/system_design_documentation' },
      { label: 'Architecture Diagrams', url: 'https://c4model.com/' },
      { label: 'Protocol Workflows', url: 'https://www.rfc-editor.org/rfc/rfc2360.html' },
      { label: 'Feasibility Studies', url: 'https://www.nist.gov/system/files/documents/itl/cybersecurity/NIST-SP-800-160v1r1.pdf' },
    ],
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
      'Designed and implemented a Django-based IoT Certificate Authority: device registration, CSR processing, X.509 issuance, revocation, CRL, and OCSP.',
      'Developed FIDO2/WebAuthn Relying Party workflows: passkey registration/authentication, challenge generation, credential verification, attestation metadata.',
      'Developing FHE infrastructure for privacy-preserving computation across HPC systems.',
      'Managed infrastructure (Proxmox, GitLab, VMs) and supported HSM administration.',
      'Investigated TLS 1.3, mTLS, DTLS, X.509 trust chains using OpenSSL and network analysis.',
      'Explored post-quantum signatures and hybrid key establishment; produced HLD/LLD and protocol documentation.',
    ],
  },
  {
    role: 'Technical Engineer – Golang',
    company: 'HR365 India Private Limited',
    location: 'India',
    period: 'Oct 2023 – Apr 2024',
    details: [
      'Developed backend services and REST APIs in Golang for enterprise HCM.',
      'Built onboarding features with Golang, Vue.js, and MongoDB.',
      'Improved reliability through defect investigation, fixes, and maintenance.',
    ],
  },
  {
    role: 'Programmer Analyst Trainee',
    company: 'Cognizant',
    location: 'India',
    period: 'Nov 2015 – Nov 2016',
    details: [
      'Supported enterprise production systems: monitoring, incident management, SLA operations.',
      'Root-cause analysis, deployments, upgrades, ETL migrations (Tidal, IBM DataStage).',
    ],
  },
];

const PROJECT_FLOW = [
  {
    key: 'Trust',
    title: 'PKI: Establish trust',
    statement: 'Establish cryptographic trust for entities, services, and devices.',
    evolution: 'Cryptography fundamentals → PKI and its scope now',
    scope: 'X.509, certificate lifecycle (CSR/issuance/revocation/CRL/OCSP), CA hierarchy, HSM-backed keys, and post-quantum/hybrid readiness.',
    icon: <VerifiedUserIcon />,
    color: '#0284c7',
  },
  {
    key: 'Identity',
    title: 'FIDO2: Authenticate identity',
    statement: 'Prove identity with phishing-resistant, standards-based authentication.',
    evolution: 'Digital identity → FIDO2 and its scope now',
    scope: 'WebAuthn/passkeys, challenge–response ceremonies, attestation, credential lifecycle, and strong possession-bound identity.',
    icon: <FingerprintIcon />,
    color: '#0ea5e9',
  },
  {
    key: 'Authorize',
    title: 'IAM: Authorize access',
    statement: 'Determine what an authenticated identity is permitted to do.',
    evolution: 'Difference, Principles → Policy and its scope',
    scope: 'Authentication vs authorization, least privilege, RBAC/ABAC, policy decision/enforcement, OAuth/OIDC claims, governance.',
    icon: <AdminPanelSettingsIcon />,
    color: '#14b8a6',
  },
  {
    key: 'Privacy',
    title: 'FHE: Compute on encrypted data',
    statement: 'Protect sensitive information while it is processed and analyzed.',
    evolution: 'Confidentiality → Privacy-preserving and its scope now',
    scope: 'Encrypted computation (BFV/BGV/CKKS), secure data processing, performance/noise trade-offs, and privacy-preserving workloads.',
    icon: <LockIcon />,
    color: '#0f766e',
  },
  {
    key: 'Continuous Validation',
    title: 'ZTA: Continuously evaluate access',
    statement: 'Move from perimeter trust to context-aware, continuous validation.',
    evolution: 'Network Security → Segmentation with ZTA and its scope',
    scope: 'Never trust implicitly, verify explicitly; device/user/service identity, posture and risk signals, policy enforcement, adaptive access.',
    icon: <ShieldIcon />,
    color: '#6366f1',
  },
  {
    key: 'Verifiability',
    title: 'ZKP: Cryptographically prove claims without revealing underlying secrets',
    statement: 'Verify statements and computations while preserving privacy.',
    evolution: 'Verification systems',
    scope: 'Proof systems, commitments, circuits/witnesses, selective disclosure, and verifiable computation for privacy-preserving assurance.',
    icon: <FactCheckIcon />,
    color: '#8b5cf6',
  },
];

const EDUCATION = {
  degree: 'B.Tech – Computer Science and Engineering',
  institution: 'Bharathidasan University',
  location: 'Tiruchirappalli, India',
};

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function useShowTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return show;
}

function Section({ id, eyebrow, title, children }) {
  return (
    <Box component="section" id={id} className="section reveal">
      <Container maxWidth="lg">
        <Box className="section-head">
          <Typography className="eyebrow">{eyebrow}</Typography>
          <Typography variant="h4" component="h2" className="section-title">{title}</Typography>
        </Box>
        {children}
      </Container>
    </Box>
  );
}

function ExperienceCard({ job, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="row exp-row align-items-start g-3 g-md-4 mb-4">
      <div className={`col-12 col-md-4 col-lg-3 exp-meta reveal from-left d-delay-${index}`}>
        <div className="exp-meta-inner">
          <Chip label={job.period} size="small" color="primary" variant="outlined" sx={{ fontWeight: 600, mb: 1 }} />
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>{job.company}</Typography>
          <Typography variant="caption" color="text.secondary" display="block">{job.location}</Typography>
        </div>
      </div>
      <div className={`col-12 col-md-8 col-lg-9 reveal from-right d-delay-${index}`}>
        <Card className="glass-card timeline-card exp-content h-100">
          <CardContent sx={{ p: { xs: 2, md: 2.5 }, '&:last-child': { pb: 2.5 } }}>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={1} onClick={() => setOpen(!open)} sx={{ cursor: 'pointer' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1.05rem', pr: 1 }}>{job.role}</Typography>
              <IconButton size="small" sx={{ mt: -0.5 }}>{open ? <ExpandLessIcon /> : <ExpandMoreIcon />}</IconButton>
            </Stack>
            <Collapse in={open}>
              <Divider sx={{ my: 1.5 }} />
              <Box component="ul" sx={{ m: 0, pl: 2.5, color: 'text.secondary', '& li': { mb: 0.7, lineHeight: 1.65, fontSize: 14 } }}>
                {job.details.map((d, i) => <li key={i}>{d}</li>)}
              </Box>
            </Collapse>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ProjectCarousel() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState('next');
  const [paused, setPaused] = useState(false);
  const max = PROJECT_FLOW.length;

  useEffect(() => {
    if (paused) return undefined;
    const t = setInterval(() => {
      setDir('next');
      setActive((a) => (a + 1) % max);
    }, 5500);
    return () => clearInterval(t);
  }, [paused, max]);

  const go = (nextIndex, direction) => {
    setDir(direction);
    setActive((nextIndex + max) % max);
  };
  const next = () => go(active + 1, 'next');
  const prev = () => go(active - 1, 'prev');

  const item = PROJECT_FLOW[active];
  const nextItem = PROJECT_FLOW[(active + 1) % max];

  return (
    <Box className="carousel-wrap reveal" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <Stack direction="row" justifyContent="center" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
        {PROJECT_FLOW.map((p, i) => (
          <Chip
            key={p.key}
            label={p.key}
            onClick={() => go(i, i > active ? 'next' : 'prev')}
            color={i === active ? 'primary' : 'default'}
            variant={i === active ? 'filled' : 'outlined'}
            className={`carousel-pill ${i === active ? 'active' : ''}`}
            sx={{ fontWeight: 700 }}
          />
        ))}
      </Stack>

      <Box className="carousel-stage">
        <IconButton className="carousel-nav prev" onClick={prev} aria-label="Previous project">
          <KeyboardArrowLeft />
        </IconButton>

        <Card key={item.key} className={`glass-card carousel-card slide-${dir}`} sx={{ borderTop: `4px solid ${item.color}` }}>
          <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} alignItems="flex-start">
              <Avatar className="flow-avatar" sx={{ bgcolor: item.color, width: 58, height: 58, boxShadow: `0 0 0 8px ${item.color}22` }}>
                {item.icon}
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap sx={{ mb: 0.8 }}>
                  <Chip label={`0${active + 1} / 0${max}`} size="small" sx={{ fontWeight: 700 }} />
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>{item.evolution}</Typography>
                </Stack>
                <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.6, letterSpacing: '-0.3px' }}>{item.title}</Typography>
                <Typography sx={{ fontSize: 16, color: 'text.primary', mb: 1.2, lineHeight: 1.7 }}>{item.statement}</Typography>
                <Box className="flow-scope" sx={{ p: 2, borderRadius: 2 }}>
                  <Typography sx={{ fontSize: 14, lineHeight: 1.75, color: 'text.secondary' }}>
                    <strong style={{ color: item.color }}>Scope now:</strong> {item.scope}
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </CardContent>
        </Card>

        <IconButton className="carousel-nav next" onClick={next} aria-label="Next project">
          <KeyboardArrowRight />
        </IconButton>
      </Box>

      <Box className="carousel-relation">
        <Box className="relation-line" />
        <Box className="relation-pill">
          <Typography variant="caption" sx={{ fontWeight: 700, color: 'primary.main' }}>Meaningful relation</Typography>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 0.2 }}>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>{item.key}</Typography>
            <ArrowForwardIcon className="relation-arrow" fontSize="small" />
            <Typography variant="body2" sx={{ fontWeight: 600 }}>{nextItem.key}</Typography>
          </Stack>
          <Typography variant="caption" color="text.secondary">enables and informs the next capability</Typography>
        </Box>
        <Box className="relation-line" />
      </Box>

      <MobileStepper
        variant="dots"
        steps={max}
        position="static"
        activeStep={active}
        className="carousel-stepper"
        nextButton={<Button size="small" onClick={next}>Next <KeyboardArrowRight /></Button>}
        backButton={<Button size="small" onClick={prev} disabled={false}><KeyboardArrowLeft /> Back</Button>}
      />
    </Box>
  );
}

export default function App() {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(() => localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light'));
  const [drawer, setDrawer] = useState(false);
  const showTop = useShowTop();

  useEffect(() => {
    localStorage.setItem('theme', mode);
    document.documentElement.classList.toggle('dark', mode === 'dark');
  }, [mode]);

  useScrollReveal();

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: { main: mode === 'dark' ? '#38bdf8' : '#0284c7' },
      secondary: { main: mode === 'dark' ? '#2dd4bf' : '#0f766e' },
      background: {
        default: mode === 'dark' ? '#060a13' : '#f4f7fb',
        paper: mode === 'dark' ? '#0c1424' : '#ffffff',
      },
    },
    typography: {
      fontFamily: '"Inter", system-ui, sans-serif',
      h4: { fontWeight: 800, letterSpacing: '-0.5px' },
    },
    shape: { borderRadius: 14 },
    components: {
      MuiButton: { styleOverrides: { root: { borderRadius: 10, textTransform: 'none', fontWeight: 600 } } },
      MuiChip: { styleOverrides: { root: { fontWeight: 500 } } },
      MuiCard: { styleOverrides: { root: { backgroundImage: 'none' } } },
    },
  }), [mode]);

  const scrollTo = (id) => { setDrawer(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={`app-root ${mode}`}>
        <AppBar position="sticky" elevation={0} className="nav-glass">
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ minHeight: 64, justifyContent: 'space-between' }}>
              <Stack direction="row" alignItems="center" spacing={1.2} sx={{ cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Avatar sx={{ width: 34, height: 34, fontSize: 13, fontWeight: 700, bgcolor: 'primary.main' }}>SG</Avatar>
                <Typography sx={{ fontWeight: 700, letterSpacing: -0.3 }}>{NAME}</Typography>
              </Stack>
              <Stack direction="row" spacing={0.5} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
                {NAV.map((n) => <Button key={n.id} color="inherit" onClick={() => scrollTo(n.id)}>{n.label}</Button>)}
                <Tooltip title="GitHub"><IconButton color="inherit" href={CONTACT.github} target="_blank"><GitHubIcon /></IconButton></Tooltip>
                <Tooltip title="LinkedIn"><IconButton color="inherit" href={CONTACT.linkedin} target="_blank"><LinkedInIcon /></IconButton></Tooltip>
                <Tooltip title={mode === 'dark' ? 'Light mode' : 'Dark mode'}>
                  <IconButton color="inherit" onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
                    {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                  </IconButton>
                </Tooltip>
              </Stack>
              <Stack direction="row" sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton color="inherit" onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>{mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}</IconButton>
                <IconButton color="inherit" onClick={() => setDrawer(true)}><MenuIcon /></IconButton>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>

        <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)} PaperProps={{ sx: { width: 260, p: 1 } }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ px: 1, py: 1 }}>
            <Typography fontWeight={700}>Menu</Typography>
            <IconButton onClick={() => setDrawer(false)}><CloseIcon /></IconButton>
          </Stack>
          <Divider />
          <List>
            {NAV.map((n) => <ListItemButton key={n.id} onClick={() => scrollTo(n.id)}><ListItemText primary={n.label} /></ListItemButton>)}
            <ListItemButton component="a" href={CONTACT.github} target="_blank"><ListItemText primary="GitHub" /></ListItemButton>
            <ListItemButton component="a" href={CONTACT.linkedin} target="_blank"><ListItemText primary="LinkedIn" /></ListItemButton>
          </List>
        </Drawer>

        <Box component="header" id="home" className="hero reveal visible">
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={7}>
                <Typography className="eyebrow hero-anim">Applied Cryptography · PKI · Authentication · PQC</Typography>
                <Typography variant="h2" component="h1" className="hero-name hero-anim d1">{NAME}</Typography>
                <Typography variant="h5" className="hero-title hero-anim d2">{TITLE}</Typography>
                <Typography className="hero-intro hero-anim d3">
                  I design and build security systems for device trust, passwordless authentication, and secure communication — from IoT Certificate Authorities and FIDO2 relying parties to post-quantum-ready cryptographic exploration.
                </Typography>
                <Stack direction="row" spacing={1.2} flexWrap="wrap" useFlexGap className="hero-anim d4">
                  <Button variant="contained" size="large" onClick={() => scrollTo('projects')}>View Projects</Button>
                  <Button variant="outlined" size="large" onClick={() => scrollTo('contact')}>Contact Me</Button>
                  <Button variant="text" size="large" href={`mailto:${CONTACT.email}`} startIcon={<EmailIcon />}>Email</Button>
                </Stack>
              </Grid>
              <Grid item xs={12} md={5}>
                <Stack spacing={1.5}>
                  {HIGHLIGHTS.map((h, i) => (
                    <Paper key={h.label} className="glass-card highlight-card reveal" sx={{ p: 2, animationDelay: `${i * 90}ms` }}>
                      <Stack direction="row" spacing={1.5} alignItems="flex-start">
                        <Avatar sx={{ bgcolor: 'primary.main', width: 34, height: 34 }}>{h.icon}</Avatar>
                        <Box>
                          <Typography sx={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'text.secondary' }}>{h.label}</Typography>
                          <Typography sx={{ fontWeight: 600, fontSize: 14.5, mt: 0.3 }}>{h.value}</Typography>
                        </Box>
                      </Stack>
                    </Paper>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <main>
          <Section id="about" eyebrow="About" title="Engineering secure trust systems">
            <Grid container spacing={2.5}>
              <Grid item xs={12} md={7}>
                <Typography className="lead reveal">{SUMMARY}</Typography>
              </Grid>
              <Grid item xs={12} md={5}>
                <Paper className="glass-card reveal" sx={{ p: 2.5, height: '100%' }}>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 700, fontSize: '1rem' }}>What I work on</Typography>
                  <Box component="ul" sx={{ m: 0, pl: 2.2, color: 'text.secondary', '& li': { mb: 0.8, lineHeight: 1.6 } }}>
                    <li>IoT PKI & certificate lifecycle (CSR, issuance, revocation, CRL, OCSP)</li>
                    <li>Passwordless authentication with FIDO2/WebAuthn</li>
                    <li>Secure protocols: TLS 1.3, mTLS, DTLS, X.509 trust chains</li>
                    <li>Privacy-preserving computation (FHE) and PQC exploration</li>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Section>

          <Section id="experience" eyebrow="Experience" title="Professional background">
            <div className="container-fluid px-0">
              {EXPERIENCE.map((job, i) => <ExperienceCard key={i} job={job} index={i} />)}
            </div>
          </Section>

          <Section id="projects" eyebrow="Projects" title="Selected security work">
            <Typography className="lead reveal" sx={{ mb: 3, maxWidth: 820 }}>
              An evolving security engineering flow — each capability builds on the previous, forming meaningful relations from trust establishment to privacy-preserving verification.
            </Typography>
            <ProjectCarousel />
          </Section>

          <Section id="skills" eyebrow="Skills" title="Technical expertise">
            <Typography className="lead reveal" sx={{ mb: 2, maxWidth: 820 }}>
              Click any topic to explore its official documentation and learning resources.
            </Typography>
            <Grid container spacing={2}>
              {SKILLS.map((s, i) => (
                <Grid item xs={12} sm={6} md={3} key={s.category}>
                  <Paper className={`glass-card skill-card reveal skill-pop d-delay-${Math.min(i, 2)}`} sx={{ p: 2, height: '100%', animationDelay: `${i * 70}ms` }}>
                    <Typography sx={{ fontWeight: 700, mb: 1.2, fontSize: 14.5 }}>{s.category}</Typography>
                    <Stack direction="row" flexWrap="wrap" useFlexGap spacing={0.7}>
                      {s.items.map((it, j) => (
                        <Chip
                          key={it.label}
                          label={it.label}
                          size="small"
                          variant="outlined"
                          component="a"
                          href={it.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          clickable
                          className="skill-chip skill-chip-link"
                          sx={{ animationDelay: `${i * 60 + j * 30}ms` }}
                        />
                      ))}
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Section>

          <Section id="education" eyebrow="Education" title="Academic background">
            <Paper className="glass-card reveal" sx={{ p: 3, maxWidth: 700 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: 'secondary.main', width: 46, height: 46 }}><SchoolIcon /></Avatar>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>{EDUCATION.degree}</Typography>
                  <Typography color="text.secondary">{EDUCATION.institution} — {EDUCATION.location}</Typography>
                </Box>
              </Stack>
            </Paper>
          </Section>

          <Section id="contact" eyebrow="Contact" title="Let's connect">
            <Paper className="glass-card reveal" sx={{ p: { xs: 2.5, md: 3.5 }, maxWidth: 760 }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>{NAME}</Typography>
              <Typography color="primary" sx={{ fontWeight: 600, mb: 1 }}>{TITLE}</Typography>
              <Typography color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.7 }}>
                Open to cryptography engineering roles in PKI, authentication, secure communication, or post-quantum migration.
              </Typography>
              <Grid container spacing={1.5}>
                <Grid item xs={12} sm={6}><Button fullWidth variant="outlined" startIcon={<EmailIcon />} href={`mailto:${CONTACT.email}`}>{CONTACT.email}</Button></Grid>
                <Grid item xs={12} sm={6}><Button fullWidth variant="outlined" startIcon={<PhoneIcon />} href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</Button></Grid>
                <Grid item xs={12} sm={6}><Button fullWidth variant="outlined" startIcon={<LinkedInIcon />} href={CONTACT.linkedin} target="_blank">LinkedIn Profile</Button></Grid>
                <Grid item xs={12} sm={6}><Button fullWidth variant="contained" startIcon={<GitHubIcon />} href={CONTACT.github} target="_blank">GitHub Profile</Button></Grid>
              </Grid>
            </Paper>
          </Section>
        </main>

        <Box component="footer" className="footer">
          <Container maxWidth="lg">
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ sm: 'center' }} spacing={1}>
              <Typography variant="body2" color="text.secondary">{NAME} · {TITLE}</Typography>
              <Typography variant="body2" color="text.secondary">Built with React & Material UI</Typography>
            </Stack>
          </Container>
        </Box>

        {showTop && (
          <Fab color="primary" size="medium" className="top-fab" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        )}
      </Box>
    </ThemeProvider>
  );
}
