import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import logo from "@/assets/logo.png";


import {
  Cpu, Monitor, Gauge, FlaskConical, CircuitBoard, Cog, Factory, Zap,
  ShieldCheck, Wrench, Clock, HeadphonesIcon, Phone, Mail, MapPin,
  MessageCircle, ArrowRight, CheckCircle2, Star, Activity,  Menu, X,
} from "lucide-react";
// import heroImg from "@/assets/hero-automation.jpg";
import panelImg from "@/assets/panel.jpg";
import batchingImg from "@/assets/batching-plant.jpg";
import hmiImg from "@/assets/hmi-scada.jpg";
import a1 from "@/assets/a-1.jpg";
import a2 from "@/assets/a-2.jpg";
import a3 from "@/assets/a-3.jpg";
import a4 from "@/assets/a-4.jpg";
import a5 from "@/assets/a-5.jpg";
import a6 from "@/assets/a-6.jpg";
import { projects } from "@/data/projects";

const PHONE = "+91-8668454817";
const web4 = "https://web4infotech.com/";

const PHONE_TEL = "+918668454817";
const WA = `https://api.whatsapp.com/send?phone=+918668454817&text=Hello`;
const EMAIL = "bajarangiinfratech@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Bajarangi Infratech World",
          telephone: PHONE,
          email: EMAIL,
          address: { "@type": "PostalAddress", addressLocality: "Belagavi", addressRegion: "Karnataka", addressCountry: "IN" },
          areaServed: "IN",
          description: "Industrial Automation Company in Belagavi providing PLC, SCADA, HMI, LabVIEW, control panels and machine automation.",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Counters />
      <About />
      <Services />
      <Industries />
      <WhyUs />
      <Projects />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
      <StickyActions />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all ${
        scrolled ? "bg-background/85 backdrop-blur border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          {/* <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand text-brand-foreground shadow-[0_0_24px_-4px] shadow-brand/70">
            <CircuitBoard className="h-4 w-4" strokeWidth={2.5} />
          </span> */}

          <img src={logo} alt="Banner" style={{ width: "60px" }}/>
          <span className="font-display font-bold tracking-tight text-[20px] leading-tight">
            BAJARANGI
            <span className="block text-[14px] font-medium text-muted-foreground tracking-[0.22em]">
              INFRATECH WORLD
            </span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-lg text-muted-foreground">
          {[
            ["About", "#about"],
            ["Services", "#services"],
            ["Industries", "#industries"],
            ["Projects", "#projects"],
            ["Contact", "#contact"],
          ].map(([l, h]) => (
            <a key={h} href={h} className="hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <button
  className="md:hidden"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <X size={28} /> : <Menu size={28} />}
</button>
        <a
          href={`tel:${PHONE_TEL}`}
          className="hidden md:inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground font-medium text-sm px-4 py-2 hover:brightness-110 transition"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
      </div>

      {menuOpen && (
  <div className="md:hidden bg-background border-t border-border p-5">
    <div className="flex flex-col gap-4">

      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#industries">Industries</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>

      <a
        href={`tel:${PHONE_TEL}`}
        className="bg-brand text-white px-4 py-3 rounded-md text-center"
      >
        Call Now
      </a>

    </div>
  </div>
)}
    </header> 

    
  );
}



/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="absolute inset-0 -z-10">
    <video
  autoPlay
  muted
  loop
  playsInline
  className="h-full w-full object-cover opacity-40"
>
  <source
    src="https://cdn.prod.website-files.com/65f854814fd223fc3678ea45/6601787785162a844edf5cf8_iStock-804878296-transcode.mp4"
    type="video/mp4"
  />
</video>
<div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 grid-lines opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-3 py-1.5 text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-brand" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          Belagavi, Karnataka · Industrial Automation Specialists
        </div>

        <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.02] max-w-4xl">
          Automation that makes your{" "}
          <span className="text-gradient-brand">factory smarter.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          Industrial Automation · PLC · SCADA · HMI · Machine Automation. Complete
          solutions for manufacturing industries, OEM machine builders and testing
          equipment — from PLC programming to control panels and custom software.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground font-semibold px-5 py-3 hover:brightness-110 transition shadow-[0_10px_40px_-10px] shadow-brand/70"
          >
            Get Free Consultation <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 backdrop-blur px-5 py-3 font-medium hover:bg-surface transition"
          >
            <MessageCircle className="h-4 w-4 text-brand" /> WhatsApp Now
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 backdrop-blur px-5 py-3 font-medium hover:bg-surface transition"
          >
            <Phone className="h-4 w-4 text-brand" /> Call Now
          </a>
        </div>

  <div className="mt-12 flex flex-wrap items-center gap-6">
  <img src={a1} alt="Siemens" className="h-18 object-contain rounded-xl" />
<img src={a2} alt="Delta" className="h-18 object-contain rounded-xl" />
<img src={a3} alt="Mitsubishi" className="h-18 object-contain rounded-xl" />
<img src={a4} alt="Allen Bradley" className="h-18 object-contain rounded-xl" />
<img src={a4} alt="LabVIEW" className="h-18 object-contain rounded-xl" />
<img src={a5} alt="Weintek" className="h-18 object-contain rounded-xl" />
</div>
      </div>
    </section>
  );
}

/* ---------- Counters ---------- */
function Counters() {
  const items = [
    { n: "200+", l: "Projects Delivered" },
    { n: "80+", l: "Happy Clients" },
    { n: "10+", l: "Years of Experience" },
    { n: "24×7", l: "Technical Support" },
  ];
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((i) => (
          <div key={i.l}>
            <div className="font-display font-bold text-3xl md:text-4xl text-gradient-brand">{i.n}</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{i.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  const tags = [
    "PLC Programming","SCADA Development","HMI Development","LabVIEW Development",
    "Siemens PLC","Delta PLC","Mitsubishi PLC","Allen Bradley PLC",
    "VFD Commissioning","Servo Systems","Motion Control","Industrial IoT",
    "SQL Database Integration","Reporting Software","Machine Automation",
    "Concrete Batching Plant Automation","Valve Testing Machine Automation","Control Panel Design",
  ];
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionKicker>About Us</SectionKicker>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl leading-tight">
            A leading industrial automation company in{" "}
            <span className="text-gradient-brand">Belagavi.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Bajarangi Infratech World specializes in complete automation solutions
            for manufacturing industries — helping factories improve productivity,
            reliability and efficiency with proven engineering and hands-on
            commissioning support.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="text-xs rounded-full border border-border bg-surface/60 px-3 py-1.5 text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border">
          <img src={panelImg} alt="PLC control panel with wiring" loading="lazy" width={1280} height={960} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-brand/10" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-lg bg-background/80 backdrop-blur border border-border p-3">
            <Activity className="h-5 w-5 text-brand" />
            <div className="text-sm">
              <div className="font-semibold">Field-tested engineering</div>
              <div className="text-muted-foreground text-xs">From PLC logic to on-site commissioning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
type Svc = {
  icon: ReactNode;
  title: string;
  link: string;
  items: string[];
};

function Services() {
  const svcs: Svc[] = [
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "PLC Programming",
      link: "/services/plc-programming.html",
      items: [
        "Siemens S7-1200",
        "Siemens S7-1500",
        "S7-200 Smart",
        "Delta PLC",
        "Mitsubishi PLC",
        "Allen Bradley PLC",
      ],
    },

    {
      icon: <Monitor className="h-5 w-5" />,
      title: "SCADA Development",
      link: "/services/scada-development.html",
      items: [
        "Custom SCADA Software",
        "Real-time Monitoring",
        "Historical Trends",
        "Alarm Management",
        "Production Reports",
        "SQL Database Integration",
      ],
    },

    {
      icon: <Gauge className="h-5 w-5" />,
      title: "HMI Development",
      link: "/services/hmi-development.html",
      items: [
        "Delta",
        "Siemens",
        "INVT",
        "Fuji",
        "Weintek",
        "Custom Screens",
      ],
    },

    {
      icon: <FlaskConical className="h-5 w-5" />,
      title: "LabVIEW Development",
      link: "/services/labview-development.html",
      items: [
        "Industrial Software",
        "DAQ Systems",
        "Machine Testing Software",
        "Report Generation",
        "Vision Inspection",
        "Automation Dashboards",
      ],
    },

    {
      icon: <CircuitBoard className="h-5 w-5" />,
      title: "Control Panel Design",
      link: "services/control-panel-integration.html",
      items: [
        "Electrical Design",
        "PLC Panels",
        "MCC Panels",
        "PCC Panels",
        "Automation Panels",
        "Field Commissioning",
      ],
    },

    {
      icon: <Cog className="h-5 w-5" />,
      title: "Industrial Automation",
      link: "/services/industrial-automation.html",
      items: [
        "Machine Retrofitting",
        "OEM Machine Development",
        "Testing Machines",
        "Special Purpose Machines",
        "Industrial Networking",
        "Industrial IoT",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-surface/30 border-y border-border"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <SectionKicker>Our Services</SectionKicker>

          <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl">
            End-to-end automation, engineered in-house.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {svcs.map((s) => (
            <a
              key={s.title}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl border border-border bg-surface p-6 hover:border-brand/60 hover:shadow-lg transition block"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand/15 text-brand ring-1 ring-brand/30">
                {s.icon}
              </div>

              <h3 className="mt-4 font-display font-semibold text-xl group-hover:text-brand transition">
                {s.title}
              </h3>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {it}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ---------- Industries ---------- */
function Industries() {
  const list = [
    "Cement Industry","Concrete Batching Plants","Steel Industry","Automotive",
    "Pharmaceutical","Food Processing","Packaging","Chemical Plants",
    "Water Treatment","OEM Machine Builders", "Hydraulic industry",
  ];
  return (
    <section id="industries" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <SectionKicker>Industries We Serve</SectionKicker>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl">
            Trusted across critical process and OEM industries.
          </h2>
          <p className="mt-4 text-muted-foreground">
            We deliver reliable automation for demanding environments — from
            cement and steel plants to pharma and packaging lines.
          </p>
        </div>
        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3">
          {list.map((i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg border border-border bg-surface/60 px-4 py-3">
              <Factory className="h-4 w-4 text-brand" />
              <span className="text-sm">{i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Us ---------- */
function WhyUs() {
  const items = [
    { icon: <ShieldCheck className="h-5 w-5" />, t: "Experienced Engineers" },
    { icon: <Cog className="h-5 w-5" />, t: "Customized Solutions" },
    { icon: <Zap className="h-5 w-5" />, t: "Fast Project Execution" },
    { icon: <CheckCircle2 className="h-5 w-5" />, t: "Affordable Pricing" },
    { icon: <Monitor className="h-5 w-5" />, t: "Remote Support" },
    { icon: <Wrench className="h-5 w-5" />, t: "On-site Commissioning" },
    { icon: <Clock className="h-5 w-5" />, t: "Annual Maintenance" },
    { icon: <HeadphonesIcon className="h-5 w-5" />, t: "24×7 Technical Support" },
  ];
  return (
    <section className="py-24 bg-surface/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionKicker>Why Choose Us</SectionKicker>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl max-w-2xl">
          Built on engineering discipline and factory-floor experience.
        </h2>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((i) => (
            <div key={i.t} className="rounded-xl border border-border bg-surface p-5 hover:border-brand/60 transition">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand/15 text-brand ring-1 ring-brand/30">
                {i.icon}
              </div>
              <div className="mt-4 font-medium">{i.t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */
function Projects() {
  const featured = projects.slice(0, 3);
  const rest = projects.slice(3);
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionKicker>Projects</SectionKicker>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl">
              Selected work across process & machine automation.
            </h2>
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {featured.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface hover:border-brand/60 transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.cover} alt={p.title} loading="lazy" width={1280} height={960}
                     className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] uppercase tracking-widest text-brand">{p.tag}</div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-brand transition" />
                </div>
                <h3 className="mt-1 font-display font-semibold text-lg">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-5 gap-3">
          {rest.map((r) => (
            <Link
              key={r.slug}
              to="/projects/$slug"
              params={{ slug: r.slug }}
              className="group flex items-center justify-between gap-2 rounded-lg border border-border bg-surface/60 px-4 py-3 text-sm hover:border-brand/60 hover:bg-surface transition"
            >
              <span>{r.title}</span>
              <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-brand transition" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}



/* ---------- Benefits ---------- */
function Benefits() {
  const list = [
    "Reduce Downtime","Increase Productivity","Improve Product Quality",
    "Lower Maintenance Cost","Real-Time Monitoring","Automatic Reporting","Better Traceability",
  ];
  return (
    <section className="py-24 bg-surface/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionKicker>Customer Benefits</SectionKicker>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl max-w-2xl">
          Measurable results on the shop floor.
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          {list.map((b) => (
            <div key={b} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-brand" /> {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const t = [
    { q: "Professional PLC programming and excellent support.", a: "Plant Manager, Cement" },
    { q: "Highly recommended for industrial automation projects.", a: "OEM Machine Builder" },
    { q: "Delivered our machine automation project before schedule.", a: "Testing Equipment Client" },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionKicker>Testimonials</SectionKicker>
        <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl max-w-2xl">
          What clients say about working with us.
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {t.map((it, idx) => (
            <figure key={idx} className="rounded-xl border border-border bg-surface p-6">
              <div className="flex gap-0.5 text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground leading-relaxed">"{it.q}"</blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{it.a}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <SectionKicker>Contact</SectionKicker>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl">
            Let's automate your next project.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg">
            Reach out for a free consultation on PLC, SCADA, HMI, LabVIEW or
            custom machine automation. We respond within one business day.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand/15 text-brand ring-1 ring-brand/30">
                <MapPin className="h-4 w-4" />
              </span>
              bajarangi infratech world, Near, KLE Engineering College Rd, Angol, Belagavi, Karnataka 590008.
            </li>
            <li>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 hover:text-brand transition">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand/15 text-brand ring-1 ring-brand/30">
                  <Phone className="h-4 w-4" />
                </span>
                {PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-brand transition">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand/15 text-brand ring-1 ring-brand/30">
                  <Mail className="h-4 w-4" />
                </span>
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={WA} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-brand transition">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-brand/15 text-brand ring-1 ring-brand/30">
                  <MessageCircle className="h-4 w-4" />
                </span>
                WhatsApp us
              </a>
            </li>
          </ul>
          <div className="mt-8 rounded-xl overflow-hidden border border-border">
<iframe
  title="Bajarangi Infratech World"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.824908015845!2d74.5012998!3d15.8156137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf65817586ec37%3A0x64f6259a94b248e9!2sBajarangi%20Infratech%20World!5e1!3m2!1sen!2sin!4v1784721440390!5m2!1sen!2sin"
  width="100%"
  height="250"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
/>
          </div>
        </div>

        <form
          className="rounded-2xl border border-border bg-surface p-6 md:p-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const f = e.currentTarget as HTMLFormElement;
            const data = new FormData(f);
            const body = encodeURIComponent(
              `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nRequirement: ${data.get("message")}`
            );
            window.location.href = `mailto:${EMAIL}?subject=Automation%20Enquiry&body=${body}`;
          }}
        >
          <h3 className="font-display font-semibold text-xl">Request a Callback</h3>
          <p className="text-sm text-muted-foreground">Tell us about your project.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Your Name" required />
            <Field name="phone" label="Phone" type="tel" required />
          </div>
          <Field name="email" label="Email" type="email" />
          <Field name="company" label="Company" />
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Requirement</label>
            <textarea
              name="message"
              rows={4}
              required
              className="mt-1 w-full rounded-md bg-background border border-input px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/60"
              placeholder="PLC / SCADA / HMI / LabVIEW / Panel..."
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand text-brand-foreground font-semibold px-5 py-3 hover:brightness-110 transition"
          >
            Send Enquiry <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-xs text-muted-foreground text-center">
            Or WhatsApp us directly at{" "}
            <a href={WA} target="_blank" rel="noreferrer" className="text-brand hover:underline">
              {PHONE}
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-md bg-background border border-input px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/60"
      />
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-border">
          <div>
            <div className="font-display font-bold">BAJARANGI INFRATECH WORLD</div>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              Industrial Automation · PLC · SCADA · HMI · LabVIEW · Control Panel
              Design · Machine Automation · SQL Integration · Industrial Software.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Company</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#about" className="hover:text-brand">About</a></li>
              <li><a href="#services" className="hover:text-brand">Services</a></li>
              <li><a href="#projects" className="hover:text-brand">Projects</a></li>
              <li><a href="#contact" className="hover:text-brand">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Belagavi, Karnataka</li>
              <li><a href={`tel:${PHONE_TEL}`} className="hover:text-brand">{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="hover:text-brand">{EMAIL}</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Bajarangi Infratech World. All rights reserved. ·
          Designed By     <a
            href={web4}
            target="_blank">Web4 Infotech Solutions.
          </a>
        </p>
      </div>
    </footer>
  );
}

/* ---------- Sticky Actions ---------- */
function StickyActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={WA}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label="Call"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg hover:scale-105 transition"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}

/* ---------- Bits ---------- */
function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-lg uppercase tracking-[0.25em] text-brand">
      <span className="h-px w-6 bg-brand" />
      {children}
    </div>
  );
}
