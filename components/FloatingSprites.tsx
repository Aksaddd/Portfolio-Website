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
      {/* Zero — dashes left to right across the bottom */}
      <div className="absolute bottom-6 left-0 w-full h-16 md:h-20">
        <img
          src={ZERO_SRC}
          alt=""
          className="absolute bottom-0 h-16 md:h-20 w-auto pixelated opacity-90 animate-dash-right"
          style={{ imageRendering: "pixelated" }}
          onError={(e) => {
            // Hide silently if the file isn't there yet
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      {/* Blaziken — strolls right to left, slightly higher, slower */}
      <div className="absolute bottom-10 left-0 w-full h-20 md:h-24">
        <img
          src={BLAZIKEN_SRC}
          alt=""
          className="absolute bottom-0 h-20 md:h-24 w-auto pixelated opacity-90 animate-stroll-left"
          style={{ imageRendering: "pixelated" }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
    </div>
  );
}
