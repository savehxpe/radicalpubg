import { motion } from 'framer-motion';

const logos = [
    { src: "/assets/MARVEL_LOGO.png", alt: "MARVEL" },
    { src: "/assets/NETFLIX_LOGO.png", alt: "NETFLIX" },
    { src: "/assets/MIXED_LOGOS_1.png", alt: "PARTNER" },
    { src: "/assets/MIXED_LOGOS_2.png", alt: "PARTNER" }
];

export default function LogoCarousel() {
    return (
        <section className="py-12 border-y border-white/10 overflow-hidden bg-background-dark">
            <div className="flex whitespace-nowrap group">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    className="flex gap-24 items-center"
                >
                    {[...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className="h-8 md:h-12 object-contain opacity-50 brightness-0 invert hover:opacity-100 transition-all cursor-default"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
