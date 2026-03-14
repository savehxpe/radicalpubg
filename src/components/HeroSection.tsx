import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden w-full bg-transparent">
            {/* Global background blend */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/30 to-background-dark"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center px-6">
                {/* HERO_BADGE: Pill-shape, transparent background, white border */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="inline-block px-8 py-2 md:px-12 md:py-3 border-2 border-white rounded-full bg-transparent mb-12"
                >
                    <span className="text-white text-sm md:text-base font-bold uppercase tracking-[0.4em]">
                        Global Publishing & Licensing
                    </span>
                </motion.div>

                {/* HERO_BUTTON: Solid white background, black text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
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
