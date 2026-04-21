export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster=""
      />

      {/* Color grade: subtle dark-green wash — keep the video visible */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 85% at 50% 45%, rgba(5,10,7,0) 0%, rgba(5,10,7,0.08) 55%, rgba(5,10,7,0.55) 100%), linear-gradient(180deg, rgba(10,20,14,0.15) 0%, rgba(10,20,14,0.05) 40%, rgba(5,10,7,0.7) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-multiply opacity-40"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,46,35,0.2) 0%, rgba(18,32,24,0.3) 100%)",
        }}
      />

      {/* Rain streaks */}
      <div className="rain" aria-hidden />

      {/* Foreground copy */}
      <div
        className="relative z-10 px-6 md:px-10 max-w-5xl text-center"
        style={{ textShadow: "0 2px 24px rgba(5,10,7,0.75)" }}
      >
        <p className="uppercase tracking-[0.32em] text-xs md:text-sm text-moss-200/80 mb-6 opacity-0 animate-fade-in [animation-delay:300ms]">
          Aksad Hossain · Portfolio
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] text-ink opacity-0 animate-rise [animation-delay:500ms]">
          Aksad <span className="italic text-moss-200">Hossain</span>
        </h1>
        <div className="mx-auto mt-10 md:mt-12 max-w-2xl opacity-0 animate-fade-in-slow [animation-delay:1100ms]">
          <p className="font-serif italic text-lg md:text-xl text-ink/90 leading-relaxed">
            &ldquo;Once you see things broadly, you will be able to see anything.&rdquo;
          </p>
          <p className="mt-3 text-xs md:text-sm tracking-[0.25em] uppercase text-moss-300">
            — Miyamoto Musashi
          </p>
        </div>

        <div className="mt-14 opacity-0 animate-fade-in-slow [animation-delay:1500ms]">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-ink-muted hover:text-ink transition-colors"
          >
            <span>Enter</span>
            <span aria-hidden className="inline-block translate-y-[1px]">↓</span>
          </a>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,10,7,0) 0%, rgba(5,10,7,1) 100%)",
        }}
      />
    </section>
  );
}
