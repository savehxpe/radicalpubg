import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const catalogItems = [
    {
        artist: "BEYONCÉ",
        track: "DRUNK IN LOVE",
        role: "Producer",
        genre: "R&B / POP",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdYe4h5uk8sUsq4uNsYP-D4rxqAVFwViuDQTnJ1pdz3pN8Cs-FVGDBl3YOMpzklRMyFUBP8MMEkJrJKaz6Egv3qUvyjVh_Yi_BBIJB5w0ljo31FBjgOfMqUTterN771J1NPe5nhUPxadkLIcVS7aiGGXRU87K6nq2Se4KbHaVu1t8P8BHcJCS6cKfA2QjfwqbFHworNkVcHbDdT7FsfhkZDfGUPNvGYb6XfUtfu0Y9D534InHwXiIysBblwoYRXanIDyWqvxgtXjE" // placeholder
    },
    {
        artist: "FUTURE",
        track: "MASCOT",
        role: "Producer",
        genre: "HIP-HOP",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTY41RZj_a5-_FEmvyY6mBhCtdvIj9zNzKRiTyHVQLgjzYKQNxeibwlXTod68tgS7JXTvxzf9V_2qysBs2UseCNXwH4-FAafjoUwL666fnoFvzA20b3VbEePEzNcqu9ko9Y3mYILtyHXBR9mSlWROyazPpQelLG0IuS45QLU4U24whmLnkzGN2xgp1WPRWtEo4PQzzaPmvofpsAhytDu65yc5yZdMDanwBxQbKVDHR0vThiExags-o18yA6IMF9CDWroNgCJqvFMo" // placeholder
    },
    {
        artist: "DRAKE",
        track: "KEEP THE FAMILY CLOSE",
        role: "Co-Producer",
        genre: "HIP-HOP / R&B",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmMpcWxF6I9DUJBAPvND_aGvI3-4YcygrrdIlQMgO9p0eBUZR39Yr6bTWRQK0uQb-gC-bWH_5m4UVFNLxdsPZzJq_pCQaEmyyJtdMFoOOu42XE0v1rMmLmRVWVyAP8ojCT2rmn2RiQFYORq75_NSh5vUiGjms-ooP8RLiGvbRd6gK36fW0ez6NsOjXkkPUUfuNIC32uh56SWk6jmI9n8bkExNOjznMePyU-T0enj5v0eqqrFArPU-si0XUTEIctwBAenQnaNC97j8"
    },
    {
        artist: "DRE MOON",
        track: "CORE ARCHIVES",
        role: "Main Artist",
        genre: "INSTRUMENTAL",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABMHIYtz_aNytgGb4JjPBDLXbYlFYFP9vLgDU1PGavocW72fML-C3L5LLIHyLStkYUn0gkBlyErWWTgjBgwKLzRggDkQbFHD23Ssfl4rNGnrrfXxHo30rQdy4F_m1eV7FGpfQ9qofmHDMdUPr5gNLIrDL0PYITZOlnlZxFbs8W8gSP8ddFhnWswqILLIxao1AwO92aZIuTWO2_H2dxWbVTggRCsV4cwTu7monot3xGbf2HCWJxxB4MBA4oXbmHuMLMSjgvptH6yZc"
    }
];

export default function InteractiveCatalog() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section id="catalog" ref={containerRef} className="py-24 relative overflow-hidden bg-background-dark border-t border-white/10">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(188,19,254,0.1),transparent)]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase neon-glow-blue">Artist <span className="text-primary">Catalog</span></h2>
                    <p className="text-slate-400 max-w-xl mx-auto">Dre Moon Production Credits</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-grid">
                    {catalogItems.map((item, i) => (
                        <motion.div
                            key={i}
                            style={{ y: i % 2 === 0 ? y1 : y2 }}
                            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, z: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="group relative rounded-xl overflow-hidden glass-panel border border-primary/20 hover:shadow-[0_20px_40px_-20px_rgba(0,255,255,0.4)] transition-colors duration-500"
                        >
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.artist}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90"></div>

                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-primary text-[10px] font-mono mb-1">{item.genre} / {item.role}</p>
                                        <h3 className="text-2xl font-bold uppercase">{item.artist}</h3>
                                        <p className="text-white/70 text-sm mt-1 truncate">{item.track}</p>
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
