"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type HeroBackgroundVideoProps = {
  src: string;
  mobileSrc: string;
  poster: string;
  fallbackSrc: string;
};

export function HeroBackgroundVideo({ src, mobileSrc, poster, fallbackSrc }: HeroBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const attemptPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    void video.play().catch(() => {
      // iOS may block autoplay in Low Power Mode. The animated fallback stays
      // visible until playback is allowed by a real user interaction.
    });
  }, []);

  useEffect(() => {
    const playWhenVisible = () => {
      if (document.visibilityState === "visible") attemptPlay();
    };

    attemptPlay();
    window.addEventListener("pageshow", attemptPlay);
    document.addEventListener("visibilitychange", playWhenVisible);
    document.addEventListener("touchstart", attemptPlay, { once: true, passive: true });
    document.addEventListener("pointerdown", attemptPlay, { once: true, passive: true });

    return () => {
      window.removeEventListener("pageshow", attemptPlay);
      document.removeEventListener("visibilitychange", playWhenVisible);
      document.removeEventListener("touchstart", attemptPlay);
      document.removeEventListener("pointerdown", attemptPlay);
    };
  }, [attemptPlay]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <Image
        className="object-cover"
        src={fallbackSrc}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
      />
      <video
        ref={videoRef}
        className={`hero-background-video pointer-events-none absolute inset-0 size-full object-cover transition-opacity duration-200 ${isPlaying ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        onCanPlay={attemptPlay}
        onPlaying={() => setIsPlaying(true)}
      >
        <source src={mobileSrc} media="(max-width: 767px)" type="video/mp4" />
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
