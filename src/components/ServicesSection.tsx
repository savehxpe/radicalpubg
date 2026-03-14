import { FileText, Film, Palette, Wallet } from 'lucide-react';

export default function ServicesSection() {
    const services = [
        {
            title: "Publishing Administration",
            description: "Global registration and royalty collection across all DSPs and territories with transparent reporting.",
            icon: <FileText className="w-8 h-8" />
        },
        {
            title: "Sync Licensing",
            description: "Direct pipeline to music supervisors for Film, TV, Ads, and AAA Gaming placements.",
            icon: <Film className="w-8 h-8" />
        },
        {
            title: "Creative Direction",
            description: "Strategic A&R, branding, and career development to maximize your catalog's market value.",
            icon: <Palette className="w-8 h-8" />
        },
        {
            title: "Royalty Collection",
            description: "Auditing and reclaiming lost revenue from neighbor rights, mechanicals, and performance royalties.",
            icon: <Wallet className="w-8 h-8" />
        }
    ];

    return (
        <section id="services" className="px-6 py-20 lg:px-20 bg-background-dark text-slate-100">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-16">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-black uppercase tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple neon-glow-blue">
                            Our Core Capabilities
                        </h2>
                        <p className="text-slate-400 text-lg">Integrated solutions for rights-holders, composers, and recording artists.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group glass-panel p-8 rounded-xl hover:bg-primary/10 transition-all duration-300 relative overflow-hidden transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] border border-white/10 hover:border-primary/50"
                        >
                            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 text-primary transition-opacity transform scale-150">
                                {service.icon}
                            </div>
                            <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                {service.icon}
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
