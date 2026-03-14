import React, { useRef, Component } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

class LogoErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
    constructor(props: { children: ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="flex items-center justify-center h-48 md:h-64 w-full">
                    <h1 className="text-5xl md:text-7xl font-black tracking-widest uppercase text-white">RADICAL</h1>
                </div>
            );
        }
        return this.props.children;
    }
}

function RotatingLogo() {
    const meshRef = useRef<THREE.Mesh>(null);
    const texture = useTexture('/assets/RADICAL_LOGO_WHITE.png');
    texture.colorSpace = THREE.SRGBColorSpace;
    const timer = useRef(new THREE.Timer());

    useFrame(() => {
        timer.current.update();
        if (meshRef.current) {
            meshRef.current.rotation.y = timer.current.getElapsed() * 0.5;
        }
    });

    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[8, 1.6]} />
            <meshBasicMaterial map={texture} transparent={true} side={THREE.DoubleSide} alphaTest={0.01} />
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

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center pt-32 pb-12 flex flex-col items-center justify-center min-h-screen">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="mb-16 w-full max-w-4xl cursor-grab active:cursor-grabbing"
                >
                    <LogoErrorBoundary>
                        <div className="h-48 md:h-72 w-full relative">
                            <React.Suspense fallback={<div className="flex items-center justify-center h-full w-full"></div>}>
                                <Canvas camera={{ position: [0, 0, 5], fov: 50 }} gl={{ failIfMajorPerformanceCaveat: false }}>
                                    <ambientLight intensity={1} />
                                    <RotatingLogo />
                                </Canvas>
                            </React.Suspense>
                        </div>
                    </LogoErrorBoundary>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                    className="inline-block px-4 py-1 mb-8 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm"
                >
                    <span className="text-white text-xs font-bold uppercase tracking-[0.3em]">Global Publishing & Licensing</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full mt-[6rem]"
                >
                    <a href="#catalog" className="w-full sm:w-auto px-10 py-4 bg-white text-black font-black text-lg rounded-none uppercase tracking-widest hover:bg-white hover:scale-105 transition-all outline-none">
                        Explore Catalog
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
