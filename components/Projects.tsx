import Preview from "./Preview";

type Project = {
  index: string;
  title: string;
  subtitle: string;
  blurb: string;
  bullets: string[];
  tech: string[];
  repo: string;
  live?: string;
  image?: string;
};

const FEATURED: Project[] = [
  {
    index: "01",
    title: "Quant-Review",
    subtitle: "AI ed-tech platform for quant-finance interview mastery",
    blurb:
      "An interactive learning environment that pairs spaced-repetition with an AI Socratic tutor. Students commit an approach before hints unlock — building the discipline behind the answer, not just the answer.",
    bullets: [
      "SM-2 spaced repetition extended to both flashcards and full problems",
      "Provider-agnostic AI router across Claude and Gemini, with weakness profiling and adaptive difficulty",
      "Dual curriculum: 149 problems from Zhou's quant interview guide + 55 items from Meyers' Effective C++",
      "Gamified XP, fiero-moment animations, and real-time session feedback via Supabase Realtime",
    ],
    tech: [
      "Next.js 14",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "pgvector",
      "Zustand",
      "Claude",
      "Gemini",
    ],
    repo: "https://github.com/Aksaddd/Quant-Review",
    live: "https://quant-review.vercel.app/",
  },
  {
    index: "02",
    title: "Ensō no Sato",
    subtitle: "Luxury minimalist site for a Japanese omakase & izakaya",
    blurb:
      "A quiet, considered public site with a full content-managed back office. The landing page greets in four languages over a video backdrop; the admin portal gives staff control of the menu, gallery, and hours without touching code.",
    bullets: [
      "Elegant video-backed landing with rotating multilingual 'Coming Soon' (EN / KR / ZH / JP)",
      "Secure admin portal with bcrypt auth for menu, gallery, and hours management",
      "Dynamic menu and gallery pulled from MongoDB Atlas; images served via Cloudinary",
      "Serverless deployment on Vercel — one code path, reliable across regions",
    ],
    tech: [
      "HTML/CSS/JS",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Cloudinary",
      "bcryptjs",
      "Vercel",
    ],
    repo: "https://github.com/Aksaddd/enso-no-sato",
    live: "https://www.ensonosato.com/",
  },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group relative border border-moss-800/70 bg-moss-900/20 hover:bg-moss-900/40 transition-colors rounded-xl p-6 md:p-10 overflow-hidden">
      <div className="absolute -top-10 -right-8 select-none pointer-events-none font-serif text-[9rem] md:text-[12rem] leading-none text-moss-800/40 group-hover:text-moss-700/50 transition-colors">
        {p.index}
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Preview */}
        <div className="lg:col-span-7 order-1">
          <Preview
            live={p.live}
            image={p.image}
            title={p.title}
          />
        </div>

        {/* Copy */}
        <div className="lg:col-span-5 order-2">
          <p className="font-mono text-[0.7rem] tracking-[0.3em] uppercase text-moss-300 mb-3">
            Featured Work · {p.index}
          </p>
          <h3 className="font-serif text-3xl md:text-4xl text-ink mb-2 leading-tight">
            {p.title}
          </h3>
          <p className="text-ink-muted italic mb-5">{p.subtitle}</p>

          <p className="text-ink/90 leading-relaxed mb-5">{p.blurb}</p>

          <ul className="space-y-2 mb-6">
            {p.bullets.map((b) => (
              <li
                key={b}
                className="text-sm text-ink-muted leading-relaxed pl-5 relative before:absolute before:left-0 before:top-[0.65em] before:w-2 before:h-px before:bg-moss-300"
              >
                {b}
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-2 mb-6">
            {p.tech.map((t) => (
              <li
                key={t}
                className="text-[0.7rem] tracking-wide font-mono text-moss-200 border border-moss-700/60 rounded-full px-2.5 py-1"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-5 text-sm">
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-ink hover:text-moss-200 transition-colors tracking-wide"
            >
              <span>View repository</span>
              <span aria-hidden>→</span>
            </a>
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-ink-muted hover:text-ink transition-colors tracking-wide"
              >
                <span>Live site</span>
                <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

const MORE: {
  name: string;
  blurb: string;
  href: string;
  live?: string;
}[] = [
  {
    name: "majestic-barbershop",
    blurb: "Modern barbershop site with booking-ready layout.",
    href: "https://github.com/Aksaddd/majestic-barbershop",
  },
  {
    name: "muebleria-jenny-yax",
    blurb: "TypeScript storefront for a furniture business.",
    href: "https://github.com/Aksaddd/muebleria-jenny-yax",
  },
  {
    name: "Hibachi_Street_Bites",
    blurb: "Food-truck / hibachi concept landing site.",
    href: "https://github.com/Aksaddd/Hibachi_Street_Bites",
  },
  {
    name: "Akza-BBQ",
    blurb: "BBQ brand landing with menu and location.",
    href: "https://github.com/Aksaddd/Akza-BBQ",
  },
];

export default function Projects() {
  return (
    <section id="work" className="section relative py-24 md:py-36 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-moss-300">
            03 — Work
          </span>
          <div className="hairline flex-1" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:gap-12">
          {FEATURED.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        {/* More work strip */}
        <div className="mt-20">
          <h4 className="font-serif text-2xl md:text-3xl text-ink mb-2">
            More work
          </h4>
          <p className="text-ink-muted text-sm mb-8 max-w-xl">
            A selection of client and personal sites — small-business,
            restaurant, and community projects shipped end-to-end.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {MORE.map((m) => (
              <li key={m.name}>
                <a
                  href={m.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block border border-moss-800/60 hover:border-moss-600/80 bg-moss-900/20 hover:bg-moss-900/40 rounded-lg p-5 transition-colors group h-full"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono text-sm text-ink group-hover:text-moss-200">
                      {m.name}
                    </span>
                    <span aria-hidden className="text-moss-300">↗</span>
                  </div>
                  <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                    {m.blurb}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
