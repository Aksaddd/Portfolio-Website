"use client";

import { useRef, useState } from "react";

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

  const [peeking, setPeeking] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [iframeReady, setIframeReady] = useState(false);
  const enterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = () => {
    if (!live) return;
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    if (peeking) return;
    enterTimer.current = setTimeout(() => {
      setHasOpened(true);
      setPeeking(true);
    }, 180);
  };

  const close = () => {
    if (enterTimer.current) {
      clearTimeout(enterTimer.current);
      enterTimer.current = null;
    }
    leaveTimer.current = setTimeout(() => setPeeking(false), 120);
  };

  return (
    <div
      onMouseEnter={open}
      onMouseLeave={close}
      onFocus={open}
      onBlur={close}
      className="relative w-full overflow-hidden rounded-lg border border-moss-700/60 bg-moss-950/70 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
    >
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
        {live && (
          <span
            className={`ml-2 hidden md:inline-flex items-center gap-1.5 font-mono text-[0.6rem] tracking-[0.2em] uppercase transition-colors ${
              peeking ? "text-moss-200" : "text-moss-300/70"
            }`}
            aria-hidden
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                peeking ? "bg-emerald-400" : "bg-moss-600"
              }`}
            />
            {peeking ? "live" : "hover to peek"}
          </span>
        )}
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

        {/* Live portal — iframe of the actual site, fades in on hover */}
        {live && hasOpened && (
          <div
            aria-hidden={!peeking}
            className={`pointer-events-none absolute inset-0 transition-all duration-500 ease-out ${
              peeking ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
            }`}
            style={{ transformOrigin: "center" }}
          >
            <iframe
              src={live}
              title={`${title} — live`}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              referrerPolicy="no-referrer"
              onLoad={() => setIframeReady(true)}
              className="h-full w-full border-0 bg-moss-950"
            />
            {/* Loading shimmer until iframe finishes its first paint */}
            <div
              className={`absolute inset-0 transition-opacity duration-300 ${
                iframeReady ? "opacity-0" : "opacity-100"
              }`}
              style={{
                background:
                  "radial-gradient(60% 50% at 50% 40%, rgba(115,146,122,0.22) 0%, rgba(5,10,7,0.85) 70%)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-moss-200/80 animate-pulse">
                  opening portal…
                </p>
              </div>
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
