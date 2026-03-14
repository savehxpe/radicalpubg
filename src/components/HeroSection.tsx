import { useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

function RotatingLogo() {
    const meshRef = useRef<THREE.Mesh>(null);
    const texture = useTexture('/assets/RADICAL_LOGO_WHITE.png');
    texture.colorSpace = THREE.SRGBColorSpace;

    useFrame((_, delta) => {
        if (meshRef.current) {
            // Drive rotation via delta as requested
            meshRef.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[8, 1.6]} />
            <meshBasicMaterial
                map={texture}
                transparent={true}
                side={THREE.DoubleSide}
                alphaTest={0.01}
                opacity={1}
            />
        </mesh>
    );
}

export default function HeroSection() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden w-full bg-transparent">
            {/* Global background blend */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/30 to-background-dark"></div>
            </div>

            {/* Content Container: Strict vertical flexbox */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-4xl">

                {/* Top: 3D Rotating Logo - Forced Dimensions & Z-Index */}
                <div className="w-full min-h-[250px] flex justify-center items-center z-50 relative mb-8">
                    <Suspense fallback={<div className="h-full w-full" />}>
                        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ antialias: true, alpha: true }}>
                            <ambientLight intensity={1.5} />
                            <RotatingLogo />
                        </Canvas>
                    </Suspense>
                </div>

                {/* Middle: 'GLOBAL PUBLISHING & LICENSING' Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="inline-block px-8 py-2 md:px-10 md:py-2 border border-white rounded-full bg-transparent"
                >
                    <span className="text-white text-xs md:text-sm font-bold uppercase tracking-[0.4em]">
                        Global Publishing & Licensing
                    </span>
                </motion.div>

                {/* Bottom: 'EXPLORE CATALOG' Button with 6rem margin-top */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="mt-[6rem]"
                >
                    <a
                        href="#catalog"
                        className="inline-block px-12 py-5 bg-white text-black font-black text-xl rounded-none uppercase tracking-widest hover:bg-white hover:scale-105 transition-all outline-none"
                    >
                        Explore Catalog
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
