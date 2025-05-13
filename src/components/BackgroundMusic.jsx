import React, { useRef, useEffect, useState } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // 某些浏览器需要用户交互才能播放
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => setIsPlaying(false));
      }
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="absolute top-4 right-4 z-20">
      <audio ref={audioRef} src="/bgm.mp3" loop autoPlay />
      <button
        onClick={togglePlay}
        className="bg-white text-black px-3 py-1 rounded shadow hover:bg-gray-200"
      >
        {isPlaying ? '暂停音乐 🎵' : '播放音乐 ▶️'}
      </button>
    </div>
  );
};

export default BackgroundMusic;
