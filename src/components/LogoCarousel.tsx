import { motion } from 'framer-motion';

const logos = [
    { src: "/assets/logo_1.png", alt: "PARTNER 1" },
    { src: "/assets/logo_2.png", alt: "PARTNER 2" },
    { src: "/assets/logo_3.png", alt: "PARTNER 3" },
    { src: "/assets/logo_4.png", alt: "PARTNER 4" },
    { src: "/assets/logo_5.png", alt: "PARTNER 5" },
    { src: "/assets/logo_6.png", alt: "PARTNER 6" },
    { src: "/assets/logo_7.png", alt: "PARTNER 7" }
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
                    {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex items-center justify-center h-16 w-32 relative">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="max-h-8 md:max-h-12 w-auto object-contain grayscale invert opacity-60 hover:opacity-100 transition-opacity cursor-default absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
