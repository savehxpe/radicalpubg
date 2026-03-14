

export default function ServicesSection() {
    const services = [
        {
            title: "Publishing Administration",
            description: "Global registration and royalty collection across all DSPs and territories with transparent reporting.",
            image: "/assets/publishing_administration.png"
        },
        {
            title: "Sync Licensing",
            description: "Direct pipeline to music supervisors for Film, TV, Ads, and AAA Gaming placements.",
            image: "/assets/sync_licensing.png"
        },
        {
            title: "Creative Direction",
            description: "Strategic A&R, branding, and career development to maximize your catalog's market value.",
            image: "/assets/creative_direction.png"
        }
    ];

    return (
        <section id="services" className="px-6 py-20 lg:px-20 bg-background-dark text-slate-100">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-black uppercase tracking-tight mb-4 text-white neon-glow-blue">
                            Our Core Capabilities
                        </h2>
                        <p className="text-slate-400 text-lg">Integrated solutions for rights-holders, composers, and recording artists.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group glass-panel p-8 rounded-xl hover:bg-white/5 transition-all duration-300 relative overflow-hidden transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-white/10 hover:border-white/50"
                        >
                            <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden" style={{ perspective: "1000px" }}>
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${service.image})` }}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
