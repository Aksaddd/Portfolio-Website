export default function About() {
  return (
    <section id="about" className="section relative py-28 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-moss-300">
            01 — About
          </span>
          <div className="hairline flex-1" />
        </div>

        <p className="font-serif text-2xl md:text-4xl leading-[1.3] md:leading-[1.25] text-ink">
          When it comes to interacting with the world around you, I believe the
          purest form of interaction is to commit yourself to a task until you
          enter a state of{" "}
          <span className="italic text-moss-200">flow</span>
          {" "}— a domain where the restraints of daily life seem to evaporate,
          only leaving room for{" "}
          <span className="italic text-moss-200">excellence</span>.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-ink-muted">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-moss-300 mb-2">
              Focus
            </p>
            <p className="leading-relaxed">
              Full-stack engineering across AI-assisted products, data-heavy UIs,
              and end-to-end web systems.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-moss-300 mb-2">
              Interests
            </p>
            <p className="leading-relaxed">
              Quantitative finance, spaced-repetition learning systems, Japanese
              design philosophy, and disciplined craft.
            </p>
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-moss-300 mb-2">
              Approach
            </p>
            <p className="leading-relaxed">
              Ship it minimal, iterate with intent. Commit to flow; let the
              constraints of the day evaporate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
