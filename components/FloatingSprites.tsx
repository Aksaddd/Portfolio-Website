"use client";

/* eslint-disable @next/next/no-img-element */

// Both sprites are served locally so you fully control which GIFs play.
// Drop your preferred animations at these paths. Until they exist, the
// slots stay empty (graceful onError fallback below).
//
//   public/sprites/blaziken.gif  — recommend a kicking / attack loop
//   public/sprites/zero.gif      — recommend a Z-saber slash or idle stance
const BLAZIKEN_SRC = "/sprites/blaziken.gif";
const ZERO_SRC = "/sprites/zero.gif";

export default function FloatingSprites() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden z-0"
    >
      {/* Zero — anchored bottom-left, plays whatever the GIF does in place
          (recommend a "Z-saber slash" or idle saber-stance sprite) */}
      <img
        src={ZERO_SRC}
        alt=""
        className="absolute bottom-6 left-4 md:left-10 h-24 md:h-32 w-auto pixelated opacity-90"
        style={{ imageRendering: "pixelated" }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />

      {/* Blaziken — anchored bottom-right, mirrored to face inward toward Zero.
          Showdown's ani sprites are an idle fighting stance — that's the loop. */}
      <img
        src={BLAZIKEN_SRC}
        alt=""
        className="absolute bottom-6 right-4 md:right-10 h-28 md:h-36 w-auto pixelated opacity-90"
        style={{ imageRendering: "pixelated", transform: "scaleX(-1)" }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
}
