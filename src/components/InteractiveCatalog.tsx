import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const catalogItems = [
    {
        id: 1,
        title: "HNDRXX",
        artist: "FUTURE",
        role: "Producer",
        year: "2017",
        coverArt: "/assets/CATALOG_1_FUTURE_HNDRXX.png",
    },
    {
        id: 2,
        title: "I NEVER LIKED YOU",
        artist: "FUTURE",
        role: "Producer",
        year: "2022",
        coverArt: "/assets/CATALOG_2_FUTURE_I_NEVER_LIKED_YOU.png",
    },
    {
        id: 3,
        title: "DRUNK IN LOVE",
        artist: "BEYONCÉ",
        role: "Co-Producer",
        year: "2013",
        coverArt: "/assets/CATALOG_3_BEYONCÉ_DRUNK_IN_LOVE.png",
    },
    {
        id: 4,
        title: "AFTER HOURS",
        artist: "THE WEEKND",
        role: "Producer",
        year: "2020",
        coverArt: "/assets/CATALOG_4_THE_WEEKND_AFTER_HOURS.png",
    },
    {
        id: 5,
        title: "STILL DECIDING",
        artist: "SAVEHXPE",
        role: "Producer",
        year: "2026",
        coverArt: "/assets/CATALOG_5_SAVEHXPE_STILL_DECIDING.png",
    }
];

function CatalogCard({ item }: { item: typeof catalogItems[0] }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        setRotateX(yPct * 25);
        setRotateY(xPct * 25);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            ref={cardRef}
            className="relative w-full aspect-square rounded-sm cursor-pointer group bg-black border border-white/20 hover:border-white transition-all duration-500 hover:z-10"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX: rotateX,
                rotateY: rotateY,
                transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
        >
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src={item.coverArt}
                    alt={item.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/60 text-[10px] font-medium tracking-[0.2em] uppercase mb-1">{item.role}</p>
                    <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight leading-none mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm font-light uppercase tracking-widest">{item.artist}</p>
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-white font-mono text-xs">{item.year}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function InteractiveCatalog() {
    return (
        <section id="catalog" className="py-24 bg-black relative overflow-hidden border-t border-white/10">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">Core <span className="text-white/50">Catalog</span></h2>
                    <p className="text-white/60 font-light tracking-wide uppercase text-sm max-w-xl mx-auto">
                        Featured Production Credits & Discography
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
                    {catalogItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="flex justify-center"
                        >
                            <CatalogCard item={item} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
