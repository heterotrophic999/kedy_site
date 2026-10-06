"use client";

import { useEffect, useRef } from "react";

type HeroBackgroundVideoProps = {
  poster: string;
};

export function HeroBackgroundVideo({ poster }: HeroBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Safari on iOS can restore a page with the video paused, even when the
    // autoplay attributes are present in the initial HTML.
    video.defaultMuted = true;
    video.muted = true;

    const play = () => {
      void video.play().catch(() => {
        // iOS may still block autoplay in Low Power Mode. The poster remains
        // visible in that case instead of leaving the hero blank.
      });
    };
    const playWhenVisible = () => {
      if (document.visibilityState === "visible") play();
    };

    play();
    window.addEventListener("pageshow", play);
    document.addEventListener("visibilitychange", playWhenVisible);
    // Low Power Mode on iOS blocks every form of programmatic autoplay.
    // A real user gesture is the only allowed fallback, so start the video on
    // the first touch anywhere on the page without showing a separate control.
    document.addEventListener("touchstart", play, { once: true, passive: true });
    document.addEventListener("pointerdown", play, { once: true, passive: true });

    return () => {
      window.removeEventListener("pageshow", play);
      document.removeEventListener("visibilitychange", playWhenVisible);
      document.removeEventListener("touchstart", play);
      document.removeEventListener("pointerdown", play);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 size-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      disablePictureInPicture
      aria-hidden="true"
    >
      <source src="/videos/hero-background.mp4?v=3458" type="video/mp4" />
    </video>
  );
}
