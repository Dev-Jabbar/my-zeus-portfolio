"use client";

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

// Create Context
const AudioContext = createContext();

// Context Provider
export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playmusic = () => {
    setTimeout(() => {
      audioRef.current.play();
      setIsPlaying(true);
    }, 3000); // 3000ms = 3 seconds
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {});

  useEffect(() => {
    const handleAudioEnded = () => {
      setIsPlaying(false);
    };

    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("ended", handleAudioEnded);
    }

    // Cleanup event listener when component unmounts
    return () => {
      if (audio) {
        audio.removeEventListener("ended", handleAudioEnded);
      }
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{ isPlaying, toggleAudio, audioRef, playmusic }}
    >
      <audio ref={audioRef} src="/zuesaudio.mp3" />
      {children}
    </AudioContext.Provider>
  );
};

// Hook for consuming context
export const useAudio = () => useContext(AudioContext);
