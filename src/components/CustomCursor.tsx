"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isPointer, setIsPointer] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName === "BUTTON" ||
                target.tagName === "A"
            );
        };

        window.addEventListener("mousemove", moveCursor);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            <motion.div
                className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <motion.div
                    animate={{
                        scale: isPointer ? 1.5 : 1,
                    }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    className="relative h-6 w-6"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-full w-full text-rose-gold drop-shadow-[0_0_8px_rgba(224,193,179,0.8)]"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </motion.div>
            </motion.div>

            {/* Trail effect could be added here with multiple motion divs */}
            {[...Array(5)].map((_, i) => (
                <CursorTrail key={i} index={i} x={cursorX} y={cursorY} />
            ))}
        </>
    );
}

function CursorTrail({ index, x, y }: { index: number; x: any; y: any }) {
    const trailX = useSpring(x, { damping: (index + 1) * 10, stiffness: 500 / (index + 1) });
    const trailY = useSpring(y, { damping: (index + 1) * 10, stiffness: 500 / (index + 1) });

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9998] opacity-30"
            style={{
                x: trailX,
                y: trailY,
                translateX: "-50%",
                translateY: "-50%",
            }}
        >
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3 w-3 text-rose-gold/50"
            >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
        </motion.div>
    );
}
