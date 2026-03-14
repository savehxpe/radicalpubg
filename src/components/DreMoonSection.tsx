import { motion } from 'framer-motion';

const executives = [
    {
        id: "dre",
        name: "Dre Moon",
        title: "Chief Executive Officer",
        image: "/assets/DRE_MOON.jpeg",
        bio: [
            "Grammy Award-winning producer and visionary executive, Dre Moon architects the global sonic strategy at RADICAL Publishing Group. His catalog spans multi-platinum triumphs across major DSPs and cultural landmarks.",
            "Bridging the gap between raw creative talent and worldwide licensing, his leadership transforms independent artistry into global resonance, driving equity and innovation at the vanguard of modern music publishing."
        ]
    },
    {
        id: "andy",
        name: "Andy Kabamba",
        title: "Partner / Executive A&R",
        image: "/assets/DRE_MOON.jpeg", // Using same placeholder for now, since Andy's specific image is missing, will request from user if needed, or leave it mapped to something existing
        bio: [
            "Industry strategist known for executive contributions to Future, Dre Moon, and T-Pain.",
            "Featured credit: Chris Brown - Royalty."
        ]
    }
];

export default function DreMoonSection() {
    return (
        <section id="artists" className="py-24 bg-transparent relative overflow-hidden border-t border-white/10 z-10">
            <div className="container mx-auto px-6 relative max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Column: Dre Moon */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-start"
                        >
                            <img src={executives[0].image} alt={executives[0].name} className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full mb-8 filter grayscale" />
                            <h2 className="text-sm text-gray-400 tracking-[0.3em] font-bold uppercase mb-4">{executives[0].title}</h2>
                            <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-white leading-none">{executives[0].name}</h3>

                            <div className="space-y-6">
                                {executives[0].bio.map((paragraph, idx) => (
                                    <p key={idx} className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Andy Kabamba */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col items-start"
                        >
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-8 bg-white/5 border border-white/10 flex items-center justify-center">
                                {/* Placeholder since we don't have Andy's photo in assets currently */}
                                <span className="text-gray-500 font-mono tracking-widest text-sm">AK</span>
                            </div>
                            <h2 className="text-sm text-gray-400 tracking-[0.3em] font-bold uppercase mb-4">{executives[1].title}</h2>
                            <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-white leading-none">{executives[1].name}</h3>

                            <div className="space-y-6">
                                {executives[1].bio.map((paragraph, idx) => (
                                    <p key={idx} className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
