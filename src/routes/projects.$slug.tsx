import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import type { CaseStudy } from "@/data/projects";
import { projectBySlug, projects } from "@/data/projects";

const PHONE = "+91 89700 63613";
const PHONE_TEL = "+918970063613";
const WA = `https://wa.me/${PHONE_TEL.replace("+", "")}?text=${encodeURIComponent(
  "Hi Bajarangi Infratech, I'd like to discuss a similar project.",
)}`;

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }): { project: CaseStudy } => {
    const project = projectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Case study — Bajarangi Infratech World" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Case Study | Bajarangi Infratech World`;
    const desc = project.summary;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ProjectCase,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-5 text-center">
      <div>
        <h1 className="font-display text-3xl font-bold">Case study not found</h1>
        <p className="mt-2 text-muted-foreground">This project doesn't exist.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground px-4 py-2 font-medium"
        >
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
      </div>
    </div>
  ),
});

function ProjectCase() {
  const { project } = Route.useLoaderData() as { project: CaseStudy };
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background/85 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground font-medium text-sm px-4 py-2 hover:brightness-110 transition"
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={project.cover}
            alt={project.title}
            className="h-full w-full object-cover opacity-35"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/70 to-background" />
          <div className="absolute inset-0 grid-lines opacity-60" />
        </div>
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="text-xs uppercase tracking-[0.25em] text-brand">Case Study · {project.tag}</div>
          <h1 className="mt-4 font-display font-bold text-4xl md:text-6xl leading-[1.05] max-w-4xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {project.summary}
          </p>
        </div>
      </section>

      {/* Outcomes strip */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {project.outcomes.map((o) => (
            <div key={o.label}>
              <div className="font-display font-bold text-2xl md:text-3xl text-gradient-brand">{o.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{o.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem + Solution */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionKicker>The Problem</SectionKicker>
            <h2 className="mt-3 font-display font-bold text-2xl md:text-3xl">What the plant was facing</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <SectionKicker>Our Solution</SectionKicker>
            <h2 className="mt-3 font-display font-bold text-2xl md:text-3xl">What we engineered</h2>
            <ul className="mt-5 space-y-3">
              {project.solution.map((s) => (
                <li key={s} className="flex gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span className="text-foreground/90 leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 bg-surface/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionKicker>Tech Stack</SectionKicker>
          <h2 className="mt-3 font-display font-bold text-2xl md:text-3xl">Hardware & software used</h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-sm rounded-full border border-border bg-surface px-4 py-2"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionKicker>Gallery</SectionKicker>
          <h2 className="mt-3 font-display font-bold text-2xl md:text-3xl">On-site & control room</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {project.gallery.map((img, i) => (
              <figure
                key={i}
                className={`overflow-hidden rounded-xl border border-border bg-surface ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover aspect-[4/3]"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface/30 border-y border-border">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
          <SectionKickerCenter>Similar Project?</SectionKickerCenter>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl">
            Let's engineer <span className="text-gradient-brand">yours next.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Tell us about your automation requirement — we respond within one business day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground font-semibold px-5 py-3 hover:brightness-110 transition shadow-[0_10px_40px_-10px] shadow-brand/70"
            >
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 font-medium hover:bg-surface-2 transition"
            >
              <MessageCircle className="h-4 w-4 text-brand" /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* More projects */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionKicker>More Case Studies</SectionKicker>
          <h2 className="mt-3 font-display font-bold text-2xl md:text-3xl">Explore other projects</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group relative overflow-hidden rounded-xl border border-border bg-surface hover:border-brand/60 transition"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="text-[10px] uppercase tracking-widest text-brand">{p.tag}</div>
                  <h3 className="mt-1 font-display font-semibold text-lg">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand">
      <span className="h-px w-6 bg-brand" />
      {children}
    </div>
  );
}
function SectionKickerCenter({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand">
      <span className="h-px w-6 bg-brand" />
      {children}
      <span className="h-px w-6 bg-brand" />
    </div>
  );
}
