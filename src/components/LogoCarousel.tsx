import { motion } from 'framer-motion';

const logos = [
    { src: "/assets/a24_white_logo.png", alt: "A24" },
    { src: "/assets/sony_music_publishing_white_logo.png", alt: "Sony Music Publishing" },
    { src: "/assets/hbo_white_logo.png", alt: "HBO" },
    { src: "/assets/netflix_white_logo.png", alt: "Netflix" },
    { src: "/assets/apple_white_logo.png", alt: "Apple" },
    { src: "/assets/spotify_white_logo.png", alt: "Spotify" }
];

export default function LogoCarousel() {
    return (
        <section className="py-16 border-y border-white/10 overflow-hidden bg-black flex justify-center relative z-[50] pointer-events-none" style={{ display: 'flex !important', opacity: '1 !important' }}>
            <div className="flex whitespace-nowrap group w-full max-w-7xl relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    animate={{ x: [0, -2000] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                    className="flex gap-20 items-center"
                    style={{ display: 'flex !important', opacity: '1 !important' }}
                >
                    {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex items-center justify-center px-4" style={{ display: 'flex !important', opacity: '1 !important' }}>
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                style={{
                                    height: '40px',
                                    filter: 'brightness(2) invert(1)',
                                    opacity: 1,
                                    display: 'block !important'
                                }}
                                className="w-auto object-contain transition-opacity hover:opacity-80 appearance-none pointer-events-none"
                                onError={(e) => {
                                    // Fallback for debugging if assets fail
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
