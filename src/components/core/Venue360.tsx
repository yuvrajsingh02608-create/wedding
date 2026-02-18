"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, useTexture } from "@react-three/drei";
import * as THREE from "three";

function Scene({ textureUrl }: { textureUrl: string }) {
    const texture = useTexture(textureUrl);
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.05; // Auto-rotation
        }
    });

    return (
        <Sphere ref={meshRef} args={[500, 60, 40]} scale={[-1, 1, 1]}>
            <meshBasicMaterial map={texture} side={THREE.BackSide} />
        </Sphere>
    );
}

export default function Venue360() {
    const venueImageUrl = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop"; // High quality venue equirectangular placeholder

    return (
        <div className="w-full h-full relative cursor-grab active:cursor-grabbing bg-black">
            <Canvas camera={{ position: [0, 0, 0.1] }}>
                <Suspense fallback={null}>
                    <Scene textureUrl={venueImageUrl} />
                </Suspense>
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    rotateSpeed={-0.5}
                    autoRotate={false}
                />
            </Canvas>

            {/* Overlay Info */}
            <div className="absolute top-10 left-10 z-10 pointer-events-none">
                <div className="bg-black/20 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl">
                    <h4 className="font-display text-sm tracking-[0.3em] text-gold uppercase mb-2">Virtual Tour</h4>
                    <h3 className="font-script text-4xl text-white">Nakshatra 2.0</h3>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 pointer-events-none text-white/50 text-sm font-body tracking-widest uppercase">
                Drag to explore the venue
            </div>
        </div>
    );
}
