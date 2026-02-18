"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player").then((mod) => mod.default), { ssr: false });

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const startMusic = () => {
            setIsPlaying(true);
            setIsMuted(false);
            window.removeEventListener("click", startMusic);
            window.removeEventListener("touchstart", startMusic);
            window.removeEventListener("scroll", startMusic);
        };

        window.addEventListener("click", startMusic);
        window.addEventListener("touchstart", startMusic);
        window.addEventListener("scroll", startMusic);

        // Try to play immediately (muted)
        const timer = setTimeout(() => {
            setIsPlaying(true);
        }, 1000);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("click", startMusic);
            window.removeEventListener("touchstart", startMusic);
            window.removeEventListener("scroll", startMusic);
        };
    }, []);

    if (!mounted) return null;

    return (
        <div
            className="fixed pointer-events-none opacity-0"
            style={{ width: '1px', height: '1px', overflow: 'hidden' }}
        >
            <ReactPlayer
                src="https://www.youtube.com/watch?v=MbLpZXIZZOg"
                playing={isPlaying}
                muted={isMuted}
                loop={true}
                volume={0.5}
                width="100%"
                height="100%"
                onError={(e) => console.error("MusicPlayer Error:", e)}
            />
        </div>
    );
}
