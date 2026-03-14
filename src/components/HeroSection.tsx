import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

function RotatingLogo() {
    const meshRef = useRef<THREE.Mesh>(null);
    const texture = useTexture('/assets/RADICAL_LOGO.png');
    texture.colorSpace = THREE.SRGBColorSpace;

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5; // Smooth back and forth, or continuous rotation. Wait, "smooth y-axis rotation". Continuous: state.clock.elapsedTime * 0.5
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
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
            <div className="relative z-20 container mx-auto px-6 text-center pt-20 flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="inline-block px-4 py-1 mb-6 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm"
                >
                    <span className="text-white text-xs font-bold uppercase tracking-[0.3em]">Global Publishing & Licensing</span>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="mb-8 w-full max-w-4xl h-48 md:h-64 cursor-grab active:cursor-grabbing"
                >
                    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                        <ambientLight intensity={1} />
                        <RotatingLogo />
                    </Canvas>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-widest uppercase text-center"
                >
                    Empowering The Future <br className="hidden md:block" />
                    <span className="text-white font-bold">Of Sound</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
                >
                    <a href="#catalog" className="w-full sm:w-auto px-10 py-4 bg-white text-black font-black text-lg rounded-xl uppercase tracking-widest hover:bg-slate-200 hover:scale-105 transition-all outline-none">
                        Explore Catalog
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
