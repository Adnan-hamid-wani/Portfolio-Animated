import { useEffect, useRef } from 'react';

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
        style={{ filter: 'brightness(0.4)' }}
      >
        <source src="https://cdn.pixabay.com/video/2022/11/18/139586-773417795_large.mp4" type="video/mp4" />
      </video>
    </div>
  );
}