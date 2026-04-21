const ZED_ICON =
  "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/238.png";

const OPGG_URL = "https://www.op.gg/summoners/na/Aksad-zed";

type Stat = { label: string; value: string };

const LIFTS: Stat[] = [
  { label: "Weighted Dips", value: "+135 lb" },
  { label: "Weighted Pull-ups", value: "+115 lb" },
  { label: "Weighted Muscle-up", value: "+25 lb" },
];

export default function About() {
  return (
    <section id="about" className="section relative py-28 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-moss-300">
            01 — About
          </span>
          <div className="hairline flex-1" />
        </div>

        <p className="font-serif text-2xl md:text-4xl leading-[1.3] md:leading-[1.25] text-ink max-w-4xl">
          When it comes to interacting with the world around you, I believe the
          purest form of interaction is to commit yourself to a task until you
          enter a state of{" "}
          <span className="italic text-moss-200">flow</span>
          {" "}— a domain where the restraints of daily life seem to evaporate,
          only leaving room for{" "}
          <span className="italic text-moss-200">excellence</span>.
        </p>

        {/* Off-keyboard panel */}
        <div className="mt-16 md:mt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[0.7rem] tracking-[0.3em] uppercase text-moss-300">
              Outside the keyboard
            </span>
            <span className="hairline flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {/* Body — Calisthenics + Boxing */}
            <div className="border border-moss-800/70 bg-moss-900/20 hover:bg-moss-900/40 transition-colors rounded-xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <span aria-hidden className="text-2xl leading-none">🥊</span>
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

            {/* Games — League + Pokémon Showdown */}
            <div className="border border-moss-800/70 bg-moss-900/20 hover:bg-moss-900/40 transition-colors rounded-xl p-6">
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
              <ul className="space-y-2 mb-5">
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
              <div className="pt-3 border-t border-moss-800/60">
                <p className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-moss-300 mb-1">
                  Pokémon Showdown
                </p>
                <p className="text-sm text-ink-muted leading-relaxed">
                  Competitive teambuilding and OU/Ubers ladder grinding —
                  reading the meta, predicting switches, punishing reads.
                </p>
              </div>
            </div>

            {/* Reading + Run Club */}
            <div className="border border-moss-800/70 bg-moss-900/20 hover:bg-moss-900/40 transition-colors rounded-xl p-6">
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
      </div>
    </section>
  );
}
