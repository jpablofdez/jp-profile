import { DigitalTwinChat } from "@/components/digital-twin-chat";
import {
  certifications,
  focusAreas,
  journey,
  portfolioPlaceholders,
  skillGroups,
} from "@/lib/profile-data";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="bg-orb bg-orb-left" />
      <div className="bg-orb bg-orb-right" />

      <header className="reveal sticky top-0 z-20 border-b border-white/10 bg-[#070d1fcc]/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <p className="brand-name text-sm uppercase tracking-[0.2em] text-slate-200">
            Juan Pablo Fernandez Delgado
          </p>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#journey" className="nav-link">
              Career Journey
            </a>
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
            <a href="#digital-twin" className="nav-link">
              AI Twin
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-7 px-6 py-10 md:px-10 md:py-14">
        <section className="reveal hero-panel">
          <p className="eyebrow">Cloud Software Engineer | DevOps | Site Reliability</p>
          <h1 className="hero-title">
            Enterprise-grade delivery with an engineering edge.
          </h1>
          <p className="hero-copy">
            I design and operate secure cloud platforms, automation systems, and
            identity workflows that scale. With 15+ years in software and
            infrastructure, I build for reliability, performance, and measurable
            business impact.
          </p>
          <div className="focus-strip">
            {focusAreas.map((area) => (
              <span key={area} className="focus-pill">
                {area}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Connect
            </a>
            <a
              href="/profile.pdf"
              className="btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <div className="metric-card">
              <p className="metric-value">15+</p>
              <p className="metric-label">Years of experience</p>
            </div>
            <div className="metric-card">
              <p className="metric-value">40%</p>
              <p className="metric-label">Manual ops reduction</p>
            </div>
            <div className="metric-card">
              <p className="metric-value">99.9%</p>
              <p className="metric-label">Service uptime delivered</p>
            </div>
          </div>
        </section>

        <section id="about" className="reveal section-panel section-delay-1">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2>Engineer mindset. Platform execution. Business outcomes.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <p className="section-text">
              I am a Cloud Software Engineer from Escazu, Costa Rica, focused on
              building secure and scalable systems on Google Cloud Platform. My
              core strengths are infrastructure automation, incident response,
              and identity lifecycle management.
            </p>
            <p className="section-text">
              I work at the intersection of DevOps, data, and enterprise
              security. From CI/CD pipelines to IAM orchestration, I prioritize
              maintainability and speed without compromising compliance.
            </p>
          </div>
        </section>

        <section id="journey" className="reveal section-panel section-delay-2">
          <div className="section-heading">
            <p className="eyebrow">Career Journey</p>
            <h2>
              From enterprise application engineering to cloud reliability
              leadership.
            </h2>
          </div>
          <ol className="timeline">
            {journey.map((item) => (
              <li key={`${item.period}-${item.role}`} className="timeline-item">
                <p className="timeline-period">{item.period}</p>
                <h3>
                  {item.role} <span>@ {item.company}</span>
                </h3>
                <p className="section-text">{item.summary}</p>
                <ul className="impact-list">
                  {item.impact.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="reveal section-panel section-delay-3">
          <div className="section-heading">
            <p className="eyebrow">Capabilities</p>
            <h2>Technical stack built for modern enterprise operations.</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <p className="section-text">{group.items}</p>
              </article>
            ))}
          </div>
          <div className="mt-6">
            <h3 className="text-sm uppercase tracking-[0.18em] text-slate-200">
              Certifications
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span key={cert} className="tag">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="reveal section-panel section-delay-3">
          <div className="section-heading">
            <p className="eyebrow">Portfolio</p>
            <h2>Case studies landing soon.</h2>
          </div>
          <p className="section-text">
            This section is prepared for future project deep dives. Each case
            study will document business context, architecture decisions, and
            measurable impact.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {portfolioPlaceholders.map((project) => (
              <article key={project.title} className="portfolio-card">
                <h3>{project.title}</h3>
                <p className="section-text">{project.description}</p>
                <span className="soon-pill">Coming Soon</span>
              </article>
            ))}
          </div>
        </section>

        <DigitalTwinChat />

        <section id="contact" className="reveal section-panel section-delay-4">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build reliable, secure cloud systems.</h2>
          </div>
          <div className="grid gap-3 text-slate-200 md:grid-cols-2">
            <a className="contact-link" href="mailto:jpablofdez@gmail.com">
              jpablofdez@gmail.com
            </a>
            <a className="contact-link" href="tel:+50688754611">
              +506 8875-4611
            </a>
            <a className="contact-link" href="tel:+50622284379">
              +506 2228-4379
            </a>
            <p className="contact-link">Escazu, Costa Rica</p>
          </div>
        </section>

        <footer className="reveal section-delay-4 pb-6 text-center text-sm text-slate-400">
          <p>
            Juan Pablo Fernandez Delgado | Cloud Software Engineer | DevOps
            Engineer
          </p>
        </footer>
      </main>
    </div>
  );
}
