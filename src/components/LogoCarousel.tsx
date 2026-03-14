import { motion } from 'framer-motion';

const logos = [
    "SPOTIFY", "NETFLIX", "MARVEL", "HBO MAX", "SONY MUSIC", "APPLE TV+", "A24", "RIOT GAMES"
];

export default function LogoCarousel() {
    return (
        <section className="py-12 border-y border-white/10 bg-white/5 overflow-hidden">
            <div className="flex whitespace-nowrap group">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    className="flex gap-16 items-center"
                >
                    {/* Double the list to create seamless loop, or just map them multiple times */}
                    {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <span
                            key={index}
                            className={`text-3xl font-black opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default 
                ${logo === 'NETFLIX' ? 'hover:text-red-500' : ''}
                ${logo === 'SPOTIFY' ? 'hover:text-green-500' : ''}
                ${logo === 'MARVEL' ? 'hover:text-red-600' : ''}
                ${logo === 'APPLE TV+' ? 'hover:text-white' : ''}
                ${logo === 'HBO MAX' ? 'hover:text-purple-500' : ''}
                ${logo === 'SONY MUSIC' ? 'hover:text-blue-500' : ''}
                ${logo === 'A24' ? 'hover:text-slate-300' : ''}
                ${logo === 'RIOT GAMES' ? 'hover:text-red-500' : ''}
              `}
                        >
                            {logo}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
