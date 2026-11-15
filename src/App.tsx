import type { ReactNode } from "react";
import Background from "./Background";
import {
  achievements,
  education,
  experience,
  links,
  openSource,
  profile,
  projects,
  writing,
} from "./content";

const link =
  "underline decoration-line underline-offset-4 transition-colors hover:text-fg hover:decoration-accent";
const bullet =
  "relative pl-4 before:absolute before:left-0 before:text-faint before:content-['–']";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="grid gap-5 border-t border-line py-10 sm:grid-cols-[8rem_1fr] sm:gap-8 sm:py-12"
    >
      <h2 className="font-mono text-xs text-muted sm:pt-1">{title}</h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

function Row({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
      {left}
      <span className="font-mono text-xs whitespace-nowrap text-muted">
        {right}
      </span>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Background />
      <div className="mx-auto min-h-screen max-w-3xl bg-bg px-4 sm:px-10 md:border-x md:border-line">
        <header className="pt-16 pb-12 sm:pt-24">
          <div className="flex items-center gap-5">
            <img
              src="/me.jpg"
              alt={profile.name}
              width={80}
              height={80}
              className="size-16 shrink-0 rounded-lg object-cover sm:size-20"
            />
            <div className="min-w-0">
              <h1 className="text-2xl font-medium tracking-tight">
                {profile.name}
              </h1>
              <p className="mt-0.5 text-dim">{profile.title}</p>
              <p className="mt-1 font-mono text-xs text-muted">
                {profile.location}
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-[62ch] leading-7 text-dim">
            {profile.about}
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm text-dim">
            {links.map((l) => (
              <li key={l.href}>
                <a className={link} href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </header>

        <main>
          <Section id="experience" title="Experience">
            <div className="space-y-10">
              {experience.map((job) => (
                <article key={job.company}>
                  <h3 className="font-medium">{job.company}</h3>
                  <div className="mt-1 space-y-0.5 text-dim">
                    {job.roles.map((r) => (
                      <Row
                        key={r.title}
                        left={<span>{r.title}</span>}
                        right={r.period}
                      />
                    ))}
                  </div>
                  <p className="mt-3 leading-7 text-muted">{job.summary}</p>
                  {job.points.length > 0 && (
                    <ul className="mt-3 space-y-2 leading-7 text-dim">
                      {job.points.map((p) => (
                        <li key={p} className={bullet}>
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </Section>

          <Section id="projects" title="Projects">
            <div className="space-y-8">
              {projects.map((p) => (
                <article key={p.name}>
                  <Row
                    left={<h3 className="font-medium">{p.name}</h3>}
                    right={p.year}
                  />
                  <p className="mt-1.5 leading-7 text-dim">{p.blurb}</p>
                  <div className="mt-2 flex items-baseline justify-between gap-4 font-mono text-xs text-muted">
                    <span className="min-w-0">{p.stack.join(" · ")}</span>
                    <span className="flex shrink-0 gap-4">
                      {p.links.map((l) => (
                        <a key={l.href} className={link} href={l.href}>
                          {l.label}
                        </a>
                      ))}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section id="open-source" title="Open source">
            <p className="leading-7 text-dim">{openSource.summary}</p>
            <ul className="mt-5">
              {openSource.repos.map((r) => (
                <li
                  key={r.repo}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-2.5 last:border-0"
                >
                  <span className="min-w-0 sm:flex sm:gap-3">
                    <a
                      className={`${link} font-mono text-sm`}
                      href={`https://github.com/${r.repo}/pulls?q=is%3Apr+author%3A555aaditya+is%3Amerged`}
                    >
                      {r.repo}
                    </a>
                    <span className="block text-sm text-muted sm:inline">
                      {r.what}
                    </span>
                  </span>
                  <span className="font-mono text-xs whitespace-nowrap text-muted tabular-nums">
                    {r.merged} PRs
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="writing" title="Writing">
            <ul className="space-y-4">
              {writing.map((w) => (
                <li key={w.title}>
                  <p className="leading-7 text-dim">{w.title}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted">
                    {w.status}
                  </p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="achievements" title="Achievements">
            <ul className="space-y-2 leading-7 text-dim">
              {achievements.map((a) => (
                <li key={a} className={bullet}>
                  {a}
                </li>
              ))}
            </ul>
          </Section>

          <Section id="education" title="Education">
            {education.map((e) => (
              <div key={e.school}>
                <Row
                  left={<h3 className="font-medium">{e.school}</h3>}
                  right={e.period}
                />
                <p className="mt-0.5 text-dim">{e.degree}</p>
              </div>
            ))}
          </Section>

          <Section id="contact" title="Contact">
            <p className="leading-7 text-dim">
              Email is the quickest way to reach me:{" "}
              <a className={`${link} text-fg`} href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </p>
          </Section>
        </main>

        <footer className="flex justify-between border-t border-line py-8 font-mono text-xs text-muted">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <a
            className={link}
            href="https://github.com/555aaditya/555aaditya.github.io"
          >
            source
          </a>
        </footer>
      </div>
    </>
  );
}
