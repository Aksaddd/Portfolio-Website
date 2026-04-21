import Preview from "./Preview";

type PortalSite = {
  name: string;
  blurb: string;
  live: string;
  repo: string;
  host: "GitHub Pages" | "Vercel" | "Render" | "Surge";
  tags: string[];
};

const SITES: PortalSite[] = [
  {
    name: "No 1 Halal Kitchen",
    blurb:
      "Restaurant website for a halal kitchen — menu, hours, location, and a streamlined ordering-ready layout. Custom domain on Vercel.",
    live: "https://www.no1halalkitchen.com/",
    repo: "https://github.com/Aksaddd/no1-halal-kitchen",
    host: "Vercel",
    tags: ["HTML/CSS", "Small-business", "Custom Domain"],
  },
  {
    name: "Neighborhood Solar Experts",
    blurb:
      "Lead-generation landing for a residential solar company — hero, pitch sections, and a contact flow tuned for conversion. Shipped on Render with a .energy domain.",
    live: "https://neighborhoodsolarexpert.energy/",
    repo: "https://github.com/Aksaddd/neighborhood-solar-experts",
    host: "Render",
    tags: ["JavaScript", "Lead-gen", "Custom Domain"],
  },
  {
    name: "Bodhi Fitness",
    blurb:
      "Landing page for a neighborhood gym — class schedule, membership pitch, and a contact flow optimized for mobile walk-ins.",
    live: "https://bodhi-fitness-website.vercel.app/",
    repo: "https://github.com/Aksaddd/bodhi-fitness-website",
    host: "Vercel",
    tags: ["HTML/CSS", "Small-business"],
  },
  {
    name: "Ratty Run Club",
    blurb:
      "Community run-club microsite with event schedule, roster, and social links. Built light and fast so it loads on the trail.",
    live: "https://rattyrunclub.vercel.app/",
    repo: "https://github.com/Aksaddd/rattyrunclub",
    host: "Vercel",
    tags: ["TypeScript", "Community", "Run Club"],
  },
];

function Card({ site }: { site: PortalSite }) {
  return (
    <article className="group relative border border-moss-800/70 bg-moss-900/20 hover:bg-moss-900/40 transition-colors rounded-xl p-5 md:p-7 overflow-hidden">
      <div className="mb-5">
        <Preview live={site.live} title={site.name} />
      </div>

      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="font-serif text-2xl md:text-3xl text-ink leading-tight">
          {site.name}
        </h3>
        <span className="shrink-0 mt-1 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-moss-300 border border-moss-700/60 rounded-full px-2.5 py-1">
          {site.host}
        </span>
      </div>

      <p className="text-ink-muted leading-relaxed text-sm mb-5">
        {site.blurb}
      </p>

      <ul className="flex flex-wrap gap-1.5 mb-6">
        {site.tags.map((t) => (
          <li
            key={t}
            className="text-[0.7rem] tracking-wide font-mono text-moss-200/90 border border-moss-700/50 rounded-full px-2 py-0.5"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-4 text-sm">
        <a
          href={site.live}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-full border border-moss-300/40 bg-moss-300/10 hover:bg-moss-300/20 text-ink px-4 py-2 tracking-wide transition-colors"
        >
          <span>Open site</span>
          <span aria-hidden>↗</span>
        </a>
        <a
          href={site.repo}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 text-ink-muted hover:text-ink transition-colors tracking-wide px-1 py-2"
        >
          <span>View code</span>
          <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );
}

export default function Portal() {
  return (
    <section id="portal" className="section relative py-24 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-moss-300">
            04 — Live Portal
          </span>
          <div className="hairline flex-1" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-5xl text-ink leading-[1.1]">
              Sites in the wild,{" "}
              <span className="italic text-moss-200">live now</span>.
            </h2>
            <p className="mt-4 text-ink-muted text-sm md:text-base leading-relaxed">
              Client and community sites currently in production — across
              Vercel, Render, and GitHub Pages. Click any card to open the
              real thing.
            </p>
          </div>
          <p className="font-mono text-[0.7rem] tracking-[0.25em] uppercase text-moss-300/80">
            {SITES.length} sites · live preview
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {SITES.map((s) => (
            <Card key={s.name} site={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
