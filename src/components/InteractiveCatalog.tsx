import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import type { Song, Songwriter } from '../lib/firebase';

// Mocking the Firebase data to match the Jet Admin sync
const mockSongwriters: Record<string, Songwriter> = {
    "1": { id: "1", name: "DRE MOON", createdAt: new Date(), bio: "Grammy Winning Producer" },
    "2": { id: "2", name: "FUTURE", createdAt: new Date() },
    "3": { id: "3", name: "BEYONCÉ", createdAt: new Date() }
};

const mockSongs: Song[] = [
    {
        id: "s1",
        title: "DRUNK IN LOVE",
        genre: "R&B / POP",
        releaseDate: new Date("2013-12-13"),
        createdAt: new Date(),
        coverArt: "/assets/CATALOG_1.png"
    },
    {
        id: "s2",
        title: "MASCOT",
        genre: "HIP-HOP",
        releaseDate: new Date("2015-01-01"),
        createdAt: new Date(),
        coverArt: "/assets/CATALOG_2.png"
    },
    {
        id: "s3",
        title: "KEEP THE FAMILY CLOSE",
        genre: "HIP-HOP / R&B",
        releaseDate: new Date("2016-04-29"),
        createdAt: new Date(),
        coverArt: "/assets/CATALOG_3.png"
    },
    {
        id: "s4",
        title: "CORE ARCHIVES",
        genre: "INSTRUMENTAL",
        releaseDate: new Date(),
        createdAt: new Date(),
        coverArt: "/assets/CATALOG_4.png"
    }
];

// Mapping songwriters to songs (Mock relation: 'Artists' to '3D rotating catalog')
const mockRelations = [
    { songwriterId: "3", songId: "s1" }, // BEYONCÉ - DRUNK IN LOVE (Dre Moon prod)
    { songwriterId: "2", songId: "s2" }, // FUTURE - MASCOT (Dre Moon prod)
    { songwriterId: "1", songId: "s3" }, // DRAKE - KEEP THE FAMILY CLOSE (Dre Moon co-prod)
    { songwriterId: "1", songId: "s4" }  // DRE MOON - CORE ARCHIVES
];

export default function InteractiveCatalog() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Adding a spring to the scroll progress for that weightless, premium mobile feel
    const springScroll = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Significantly reduced transforms for mobile scroll float
    const y1 = useTransform(springScroll, [0, 1], [30, -30]);
    const y2 = useTransform(springScroll, [0, 1], [-15, 15]);

    // Derived state mapping database relationships
    const [catalog, setCatalog] = useState<any[]>([]);

    useEffect(() => {
        // Simulated fetch from Firebase / JetAdmin Artists table
        const data = mockRelations.map(rel => {
            const song = mockSongs.find(s => s.id === rel.songId);
            const artist = mockSongwriters[rel.songwriterId];
            return {
                song,
                artist
            }
        }).filter(d => Boolean(d.song) && Boolean(d.artist));
        setCatalog(data);
    }, []);

    return (
        <section id="catalog" ref={containerRef} className="py-24 relative overflow-hidden bg-background-dark border-t border-white/10">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase neon-glow-blue">Artist <span className="text-white">Catalog</span></h2>
                    <p className="text-slate-400 max-w-xl mx-auto">Dre Moon Production Credits (Live Sync)</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-grid">
                    {catalog.map((item, i) => (
                        <motion.div
                            key={i}
                            style={{ y: i % 2 === 0 ? y1 : y2, transformStyle: "preserve-3d" }}
                            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, z: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="group relative rounded-xl glass-panel border border-white/20 hover:shadow-[0_20px_40px_-20px_rgba(255,255,255,0.4)] transition-colors duration-500"
                        >
                            <div className="aspect-[4/5] overflow-hidden rounded-xl" style={{ transform: "translateZ(-30px)" }}>
                                <img
                                    src={item.song.coverArt}
                                    alt={item.artist.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90 rounded-xl" style={{ transform: "translateZ(-10px)" }}></div>

                            <div className="absolute bottom-0 left-0 p-6 w-full" style={{ transform: "translateZ(50px)" }}>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-slate-300 text-[10px] font-mono mb-1">{item.song.genre}</p>
                                        <h3 className="text-2xl font-bold uppercase">{item.artist.name}</h3>
                                        <p className="text-white/70 text-sm mt-1 truncate">{item.song.title}</p>
                                        <p className="text-[10px] text-white/40 mt-1 uppercase">Release: {item.song.releaseDate.getFullYear()}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
