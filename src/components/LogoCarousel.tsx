import { motion } from 'framer-motion';

const logos = [
    { src: "/assets/marvel_white.png", alt: "Marvel" },
    { src: "/assets/hbo_white.png", alt: "HBO Max" },
    { src: "/assets/apple_tv_white.png", alt: "Apple TV+" },
    { src: "/assets/riot_games_logo_white.png", alt: "Riot Games" },
    { src: "/assets/spotify_logo_white.png", alt: "Spotify" },
    { src: "/assets/a24_white.png", alt: "A24" }
];

export default function LogoCarousel() {
    return (
        <section className="py-12 border-y border-white/10 overflow-hidden bg-black/40 backdrop-blur-sm flex justify-center">
            <div className="flex whitespace-nowrap group w-full max-w-7xl relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    animate={{ x: [0, -2000] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                    className="flex gap-24 items-center"
                >
                    {[...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex items-center justify-center h-16 w-32 relative">
                            <div
                                className="h-8 md:h-12 w-full bg-white opacity-60 hover:opacity-100 transition-opacity absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                title={logo.alt}
                                style={{
                                    WebkitMaskImage: `url(${logo.src})`,
                                    maskImage: `url(${logo.src})`,
                                    WebkitMaskSize: 'contain',
                                    WebkitMaskRepeat: 'no-repeat',
                                    WebkitMaskPosition: 'center'
                                }}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
