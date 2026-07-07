"use client";

import { useEffect, useState } from "react";

/**
 * Animated hero cloud. Plays the Higgsfield-generated loop when motion is
 * allowed and the video is available; otherwise falls back to the static
 * comic-cloud still with a slow CSS drift. Progressive + accessible.
 */
export default function CloudHero() {
  const [motion, setMotion] = useState(false);
  const [videoOk, setVideoOk] = useState(true);

  useEffect(() => {
    setMotion(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const showVideo = motion && videoOk;

  return (
    <div className="hero__cloud">
      {showVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/clouds/cloud-hero-poster.webp"
          aria-hidden="true"
          onError={() => setVideoOk(false)}
        >
          <source src="/clouds/cloud-hero.mp4" type="video/mp4" />
        </video>
      )}
      {!showVideo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="cloud-still"
          src="/clouds/cloud-hero.webp"
          alt="Billowing red-ink comic-book clouds over a cerulean sky."
        />
      )}
    </div>
  );
}
