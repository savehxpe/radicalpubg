import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import catalogData from '../data/catalog.json';

// Types for the catalog items based on catalog.json
interface CatalogItem {
    id: string;
    artist: string;
    title: string;
    year: string;
    executive: string;
    role: string;
    cover_art: string;
    url: string;
}

function CatalogCard({ item }: { item: CatalogItem }) {
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
            layout
            className="relative w-full aspect-square rounded-none cursor-pointer group bg-black border border-white/20 hover:border-white transition-all duration-500 hover:z-10"
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
                    src={item.cover_art}
                    alt={item.title}
                    className="w-full h-full object-cover filter grayscale contrast-[1.2] group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/60 text-[10px] font-medium tracking-[0.2em] uppercase mb-1">
                        {item.role} <span className="mx-1">/</span> {item.executive}
                    </p>
                    <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight leading-none mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm font-light uppercase tracking-widest">{item.artist}</p>
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-white font-mono text-xs">{item.year}</span>
                    </div>
                </div>
            </div>

            {/* Action Bar for Future URLs */}
            {item.url && (
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="bg-white text-black text-[10px] font-bold px-3 py-1 uppercase">Listen</a>
                </div>
            )}
        </motion.div>
    );
}

export default function InteractiveCatalog() {
    const [searchQuery, setSearchQuery] = useState('');

    // FILTER_LOGIC: Match against artist, title, and executive keys
    const filteredItems = (catalogData as CatalogItem[]).filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.executive.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section id="catalog" className="py-24 bg-transparent relative overflow-hidden border-t border-white/10">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">
                        World <span className="text-white/50">Catalog</span>
                    </h2>

                    {/* SEARCH_UI: Monochrome, uppercase, monospace text */}
                    <div className="max-w-md mx-auto relative mb-12">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="SEARCH BY ARTIST, TITLE, OR EXECUTIVE..."
                            className="w-full bg-transparent border-b border-white/30 text-white py-4 px-4 font-mono uppercase tracking-widest focus:border-white focus:outline-none transition-all text-center placeholder:text-white/20"
                        />
                        <div className="mt-4 flex justify-center gap-4">
                            <div className="h-[1px] w-8 bg-white/20"></div>
                            <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em]">Filtered Data View</span>
                            <div className="h-[1px] w-8 bg-white/20"></div>
                        </div>
                    </div>
                </div>

                {/* Catalog Grid: High-performance flex/grid transition */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <CatalogCard item={item} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-24 border border-dashed border-white/10">
                        <p className="text-white/40 font-mono uppercase tracking-widest text-xs">No entries match your search parameters in the current roster.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
