import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, PerspectiveCamera } from '@react-three/drei';

function CyberGrid() {
    const gridRef = useRef<any>(null);

    useFrame((state) => {
        if (gridRef.current) {
            gridRef.current.position.z = (state.clock.elapsedTime * 2) % 2;
        }
    });

    return (
        <group>
            <gridHelper ref={gridRef} args={[100, 100, '#bc13fe', '#00ffff']} position={[0, -2, -10]} rotation={[0, 0, 0]} />
        </group>
    );
}

export default function HeroSection() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden w-full bg-background-dark">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={75} />
                    <ambientLight intensity={0.2} />
                    <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                    <CyberGrid />
                </Canvas>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/80 z-10 pointer-events-none"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center pt-20 flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="inline-block px-4 py-1 mb-6 border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm"
                >
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.3em]">System Online: v2.0.4</span>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h1 className="text-slate-100 text-6xl md:text-9xl font-black leading-none tracking-tighter uppercase neon-glow-blue flex flex-col">
                        <span>RADICAL</span>
                        <span className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white to-primary mt-2">Publishing Group</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-wide uppercase border-l-4 border-accent-purple pl-4 text-left"
                >
                    Where Outsiders <br className="hidden md:block" />
                    <span className="text-primary font-bold">Own The Future</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
                >
                    <button className="w-full sm:w-auto px-10 py-4 bg-primary text-background-dark font-black text-lg rounded-xl uppercase tracking-widest hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:scale-105 transition-all">
                        Enter The Vault
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
