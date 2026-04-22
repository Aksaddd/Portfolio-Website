import FloatingSprites from "./FloatingSprites";

const ZED_ICON =
  "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/238.png";

const OPGG_URL = "https://www.op.gg/summoners/na/Aksad-zed";

type Stat = { label: string; value: string };

const LIFTS: Stat[] = [
  { label: "Weighted Dips", value: "+135 lb" },
  { label: "Weighted Pull-ups", value: "+115 lb" },
  { label: "Weighted Muscle-up", value: "+25 lb" },
];

function DumbbellIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 32"
      className={className}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Bar */}
      <line x1="14" y1="16" x2="50" y2="16" />
      {/* Inner collars */}
      <rect x="10" y="11" width="4" height="10" rx="1" />
      <rect x="50" y="11" width="4" height="10" rx="1" />
      {/* Outer plates */}
      <rect x="3" y="6" width="7" height="20" rx="1.5" />
      <rect x="54" y="6" width="7" height="20" rx="1.5" />
    </svg>
  );
}

export default function Interests() {
  return (
    <section
      id="interests"
      className="section relative py-24 md:py-32 px-6 md:px-10 overflow-hidden"
    >
      {/* Sprite layer — constrained horizontally to the content max-width
          so the sprites never sit in the dark page gutter on wide viewports.
          Spans full section height so bottom anchoring still sits in the
          bottom padding area, below the cards. */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 right-0 pointer-events-none z-0 flex justify-center px-6 md:px-10"
      >
        <div className="relative w-full max-w-6xl">
          <FloatingSprites />
        </div>
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-moss-300">
            05 — Interests
          </span>
          <div className="hairline flex-1" />
        </div>

        <div className="mb-10 max-w-2xl">
          <h2 className="font-serif text-3xl md:text-5xl text-ink leading-[1.1]">
            Outside the{" "}
            <span className="italic text-moss-200">keyboard</span>.
          </h2>
          <p className="mt-4 text-ink-muted text-sm md:text-base leading-relaxed">
            What I&rsquo;m training, playing, and getting lost in this season.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {/* Body */}
          <div className="border border-moss-800/70 bg-moss-900/40 hover:bg-moss-900/60 backdrop-blur-sm transition-colors rounded-xl p-6">
            <div className="flex items-center gap-3 mb-5 text-moss-200">
              <DumbbellIcon />
              <h3 className="font-serif text-xl text-ink">Body</h3>
            </div>
            <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-moss-300 mb-2">
              Calisthenics PRs
            </p>
            <ul className="space-y-2 mb-5">
              {LIFTS.map((l) => (
                <li
                  key={l.label}
                  className="flex items-baseline justify-between gap-3 border-b border-moss-800/60 pb-2 last:border-0"
                >
                  <span className="text-sm text-ink-muted">{l.label}</span>
                  <span className="font-mono text-sm md:text-base text-ink tracking-tight">
                    {l.value}
                  </span>
                </li>
              ))}
            </ul>
            <div className="pt-3 border-t border-moss-800/60">
              <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-moss-300 mb-1">
                Boxing
              </p>
              <p className="text-sm text-ink-muted leading-relaxed">
                Bag work and sparring — sharpening footwork, timing, and
                composure under pressure.
              </p>
            </div>
          </div>

          {/* Games */}
          <div className="border border-moss-800/70 bg-moss-900/40 hover:bg-moss-900/60 backdrop-blur-sm transition-colors rounded-xl p-6">
            <div className="flex items-center gap-3 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ZED_ICON}
                alt="Zed"
                loading="lazy"
                className="h-10 w-10 rounded-md border border-moss-700/60 object-cover"
              />
              <h3 className="font-serif text-xl text-ink">Games</h3>
            </div>
            <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-moss-300 mb-2">
              League of Legends
            </p>
            <ul className="space-y-2 mb-3">
              <li className="flex items-baseline justify-between gap-3 border-b border-moss-800/60 pb-2">
                <span className="text-sm text-ink-muted">Peak Rank</span>
                <span className="font-mono text-sm md:text-base text-ink">Diamond</span>
              </li>
              <li className="flex items-baseline justify-between gap-3 border-b border-moss-800/60 pb-2">
                <span className="text-sm text-ink-muted">Zed</span>
                <span className="font-mono text-sm md:text-base text-ink">Top 100 NA</span>
              </li>
              <li className="flex items-baseline justify-between gap-3">
                <span className="text-sm text-ink-muted">Riot ID</span>
                <span className="font-mono text-sm md:text-base text-ink">Aksad#zed</span>
              </li>
            </ul>
            <a
              href={OPGG_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-xs tracking-wide text-moss-300 hover:text-moss-200 mb-5"
            >
              View on op.gg <span aria-hidden>↗</span>
            </a>
            <div className="pt-3 border-t border-moss-800/60 mb-4">
              <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-moss-300 mb-1">
                Pokémon Showdown
              </p>
              <p className="text-sm text-ink-muted leading-relaxed">
                Competitive teambuilding and ladder grinding.
              </p>
            </div>
            <div className="pt-3 border-t border-moss-800/60">
              <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-moss-300 mb-1">
                Currently obsessed
              </p>
              <p className="text-sm text-ink-muted leading-relaxed">
                The Mega Man Zero series.
              </p>
            </div>
          </div>

          {/* Off-screen */}
          <div className="border border-moss-800/70 bg-moss-900/40 hover:bg-moss-900/60 backdrop-blur-sm transition-colors rounded-xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <span aria-hidden className="text-2xl leading-none">📖</span>
              <h3 className="font-serif text-xl text-ink">Off-screen</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <p className="font-mono text-[0.7rem] tracking-[0.25em] uppercase text-moss-300 mb-1">
                  Reading
                </p>
                <p className="text-sm text-ink-muted leading-relaxed">
                  Fiction, philosophy, and the craft of practice.
                </p>
              </li>
              <li className="pt-3 border-t border-moss-800/60">
                <p className="font-mono text-[0.7rem] tracking-[0.25em] uppercase text-moss-300 mb-1">
                  Run Club
                </p>
                <p className="text-sm text-ink-muted leading-relaxed">
                  Founder of{" "}
                  <a
                    href="https://rattyrunclub.vercel.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-ink underline decoration-moss-400/40 underline-offset-2 hover:decoration-moss-200"
                  >
                    RattyRunClub
                  </a>
                  {" "}— community runs and seasonal events.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
