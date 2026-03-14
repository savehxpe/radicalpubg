import { motion } from 'framer-motion';

const logos = [
    { src: "/assets/MARVEL_LOGO.png", alt: "MARVEL" },
    { src: "/assets/hbo_max_logo.png", alt: "HBO MAX" },
    { src: "/assets/apple_tv_logo.png", alt: "APPLE TV+" },
    { src: "/assets/NETFLIX_LOGO.png", alt: "NETFLIX" },
    { src: "/assets/a24_logo.png", alt: "A24" },
    { src: "/assets/riot_games_logo.png", alt: "RIOT GAMES" },
    { src: "/assets/spotify_logo.png", alt: "SPOTIFY" }
];

export default function LogoCarousel() {
    return (
        <section className="py-12 border-y border-white/10 overflow-hidden bg-black flex justify-center">
            <div className="flex whitespace-nowrap group w-full max-w-7xl relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    animate={{ x: [0, -2000] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                    className="flex gap-24 items-center"
                >
                    {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex items-center justify-center h-16 w-32 relative">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="max-h-8 md:max-h-12 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity cursor-default absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
