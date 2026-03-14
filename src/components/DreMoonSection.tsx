import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const dreMoonItems = [
    {
        id: 1,
        title: "DRUNK IN LOVE",
        artist: "BEYONCÉ",
        role: "Co-Producer",
        year: "2013",
        coverArt: "/assets/CATALOG_3_BEYONCÉ_DRUNK_IN_LOVE.webp",
    }
];

function DreMoonCard({ item }: { item: typeof dreMoonItems[0] }) {
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

export default function DreMoonSection() {
    return (
        <section id="artists" className="py-24 bg-transparent relative overflow-hidden border-t border-white/10 z-10">
            <div className="container mx-auto px-6 relative max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Column: 3D Catalog Section */}
                    <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
                        <div className="w-full max-w-md">
                            {dreMoonItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                >
                                    <DreMoonCard item={item} />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Bio Section */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-sm text-gray-400 tracking-[0.3em] font-bold uppercase mb-4">Chief Executive Officer</h2>
                            <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-white leading-none">Dre Moon</h3>

                            <div className="space-y-6">
                                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                                    Grammy Award-winning producer and visionary executive, Dre Moon architects the global sonic strategy at RADICAL Publishing Group. His catalog spans multi-platinum triumphs across major DSPs and cultural landmarks.
                                </p>
                                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                                    Bridging the gap between raw creative talent and worldwide licensing, his leadership transforms independent artistry into global resonance, driving equity and innovation at the vanguard of modern music publishing.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
