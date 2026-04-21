type Props = {
  live?: string;
  image?: string;
  title: string;
  tint?: string;
};

function microlinkUrl(live: string) {
  const params = new URLSearchParams({
    url: live,
    screenshot: "true",
    meta: "false",
    embed: "screenshot.url",
    "viewport.width": "1280",
    "viewport.height": "800",
    "viewport.deviceScaleFactor": "1",
    waitUntil: "networkidle0",
  });
  return `https://api.microlink.io/?${params.toString()}`;
}

function prettyHost(url?: string) {
  if (!url) return "preview";
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function Preview({ live, image, title, tint }: Props) {
  const src = image ?? (live ? microlinkUrl(live) : null);

  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-moss-700/60 bg-moss-950/70 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-moss-800/80 bg-moss-900/70">
        <span className="h-2.5 w-2.5 rounded-full bg-moss-700/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-moss-700/90" />
        <span className="h-2.5 w-2.5 rounded-full bg-moss-700/90" />
        <div className="ml-3 flex-1 min-w-0">
          <div className="truncate rounded-md bg-moss-950/80 border border-moss-800/80 px-2.5 py-1 font-mono text-[0.65rem] md:text-xs text-moss-200/80">
            {live ?? prettyHost(live) ?? "localhost"}
          </div>
        </div>
      </div>

      {/* Screenshot or placeholder */}
      <div className="relative aspect-[16/10] w-full">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={`${title} — live preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div
            className="h-full w-full flex items-center justify-center"
            style={{
              background:
                tint ??
                "radial-gradient(80% 60% at 30% 20%, rgba(115,146,122,0.35) 0%, rgba(18,32,24,0.8) 60%, rgba(5,10,7,1) 100%)",
            }}
          >
            <div className="text-center px-6">
              <p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-moss-300 mb-2">
                Preview
              </p>
              <p className="font-serif italic text-xl md:text-2xl text-ink/80">
                {title}
              </p>
              <p className="mt-3 text-xs text-ink-muted">Coming online soon.</p>
            </div>
          </div>
        )}

        {/* Inner subtle gradient for depth */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,10,7,0) 70%, rgba(5,10,7,0.35) 100%)",
          }}
        />
      </div>
    </div>
  );
}
