"use client";

/* eslint-disable @next/next/no-img-element */

// Animated Pokémon sprite served by Pokémon Showdown's public asset CDN.
// This URL has been hot-link-friendly for over a decade — used by countless
// fan sites and tooling. If it ever breaks, drop a replacement at
// /public/sprites/blaziken.gif and change BLAZIKEN_SRC below.
const BLAZIKEN_SRC =
  "https://play.pokemonshowdown.com/sprites/ani/blaziken.gif";

// Mega Man Zero sprite — served locally so you control which GIF appears.
// Drop your preferred sprite at this path; until you do, the slot stays empty.
// See the README for one-line PowerShell to grab a candidate dash GIF.
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
