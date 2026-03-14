import { motion } from 'framer-motion';

const executives = [
    {
        id: "dre",
        name: "Dre Moon",
        title: "CEO & Founder",
        image: "/assets/DRE_MOON.jpeg",
        featured_credit: "Featured: Beyoncé - Drunk in Love",
        bio: [
            "Grammy Award-winning producer and visionary executive, Dre Moon architects the global sonic strategy at RADICAL Publishing Group. His catalog spans multi-platinum triumphs across major DSPs and cultural landmarks.",
            "Bridging the gap between raw creative talent and worldwide licensing, his leadership transforms independent artistry into global resonance, driving equity and innovation at the vanguard of modern music publishing."
        ]
    },
    {
        id: "andy",
        name: "Andy Kabamba",
        title: "Partner / Executive A&R",
        image: "/assets/AK_ANDY_KABAMBA.png",
        featured_credit: "Featured: Chris Brown - Royalty",
        bio: [
            "Andy Kabamba is a premier industry strategist and Executive A&R. Known for his ability to translate creative vision into global commercial execution, he has served as a foundational architect for multi-platinum releases across DSPs.",
            "His executive leadership bridges raw artistic talent with worldwide licensing infrastructure, driving innovative sync deals and market strategy. Working directly with industry pillars including Future, Dre Moon, and T-Pain, he functions as the operational partner at RADICAL, transforming independent artistry into global cultural landmarks."
        ]
    },
    {
        id: "savehxpe",
        name: "SaveHxpe",
        title: "Recording Artist & Producer",
        image: "/assets/SAVEHXPE.jpg",
        featured_credit: "Featured Project: Still Deciding (2022) — Executive Producer / Primary Artist",
        bio: [
            "SaveHxpe integrates a dark, cinematic, and physical aesthetic into the RADICAL ecosystem. A multi-dimensional creative force at the intersection of sonic innovation and visual storytelling.",
            "SaveHxpe functions as a primary recording artist and producer within the RADICAL ecosystem, merging high-fidelity production with an uncompromising visual identity."
        ]
    }
];

export default function DreMoonSection() {
    return (
        <section id="artists" className="py-24 bg-transparent relative overflow-hidden border-t border-white/10 z-10">
            <div className="container mx-auto px-6 relative max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {executives.map((exec, index) => (
                        <motion.div
                            key={exec.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="flex flex-col items-center text-center"
                        >
                            <img src={exec.image} alt={exec.name} className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full mb-8 filter grayscale" />
                            <h2 className="text-sm text-gray-400 tracking-[0.3em] font-bold uppercase mb-4">{exec.title}</h2>
                            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white leading-none">{exec.name}</h3>

                            {exec.featured_credit && (
                                <p className="text-white/60 font-mono text-sm tracking-widest mb-8">{exec.featured_credit}</p>
                            )}

                            <div className="space-y-6">
                                {exec.bio.map((paragraph, idx) => (
                                    <p key={idx} className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
