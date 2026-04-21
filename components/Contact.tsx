const LINKS = [
  {
    label: "Email",
    value: "aksadshafin@gmail.com",
    href: "mailto:aksadshafin@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Aksaddd",
    href: "https://github.com/Aksaddd",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section relative py-28 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-moss-300">
            04 — Contact
          </span>
          <div className="hairline flex-1" />
        </div>

        <h2 className="font-serif text-4xl md:text-6xl text-ink leading-[1.1] mb-8">
          Let&rsquo;s build something with{" "}
          <span className="italic text-moss-200">intent</span>.
        </h2>
        <p className="text-ink-muted max-w-xl text-base md:text-lg leading-relaxed mb-12">
          Open to full-stack roles, AI-product work, and collaborations with
          founders who care about craft. Reach out — the best conversations
          start simple.
        </p>

        <ul className="divide-y divide-moss-800/70 border-y border-moss-800/70">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer noopener" : undefined}
                className="flex items-center justify-between py-5 md:py-6 group"
              >
                <span className="font-mono text-xs tracking-[0.3em] uppercase text-moss-300">
                  {l.label}
                </span>
                <span className="font-serif text-xl md:text-2xl text-ink group-hover:text-moss-200 transition-colors">
                  {l.value} <span aria-hidden className="ml-2">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <footer className="mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-ink-muted font-mono">
          <p>© {new Date().getFullYear()} Aksad Hossain</p>
          <p className="italic tracking-wide text-moss-300">
            見る目を広くして、万事を見る也
          </p>
        </footer>
      </div>
    </section>
  );
}
