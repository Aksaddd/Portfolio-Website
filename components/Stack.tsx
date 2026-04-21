const GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++", "SQL", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    items: [
      "Next.js 14 (App Router)",
      "React 18",
      "Node.js",
      "Express",
      "Tailwind CSS",
    ],
  },
  {
    title: "Data & Infra",
    items: [
      "PostgreSQL",
      "Supabase",
      "pgvector",
      "MongoDB Atlas",
      "Cloudinary",
      "Vercel",
    ],
  },
  {
    title: "AI & Tooling",
    items: [
      "Anthropic Claude",
      "Google Gemini",
      "Zustand",
      "Supabase Realtime",
      "bcryptjs",
    ],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="section relative py-24 md:py-36 px-6 md:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-moss-300">
            02 — Stack
          </span>
          <div className="hairline flex-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <h3 className="font-serif text-xl md:text-2xl text-ink mb-5">
                {g.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="border border-moss-700/60 bg-moss-900/30 hover:bg-moss-800/50 transition-colors px-3 py-1.5 rounded-full text-xs md:text-sm text-ink-muted hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
