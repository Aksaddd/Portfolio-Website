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
      </div>
    </section>
  );
}
