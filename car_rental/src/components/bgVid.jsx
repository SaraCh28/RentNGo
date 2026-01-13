"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.25; // slow down the video
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src="/1203(1).mp4"
      autoPlay
      loop
      muted
      playsInline
      className="
        fixed top-0 left-0 w-screen h-screen
        object-cover 
        -z-50
        pointer-events-none
      "
    />
  );
}
