import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const catalogData = [
    { title: "SICKO MODE", artist: "Travis Scott", role: "Producer", year: "2018" },
    { title: "Heartless", artist: "The Weeknd", role: "Co-Producer / Writer", year: "2019" },
    { title: "Drunk in Love", artist: "Beyoncé", role: "Producer", year: "2013" },
    { title: "Good Days", artist: "SZA", role: "Writer", year: "2020" },
    { title: "Nights", artist: "Frank Ocean", role: "Producer", year: "2016" },
    { title: "Family Ties", artist: "Baby Keem & Kendrick Lamar", role: "Producer", year: "2021" },
    { title: "EARFQUAKE", artist: "Tyler, The Creator", role: "Co-Producer", year: "2019" },
    { title: "FE!N", artist: "Travis Scott", role: "Writer", year: "2023" },
    { title: "God's Plan", artist: "Drake", role: "Producer", year: "2018" },
    { title: "Levitating", artist: "Dua Lipa", role: "Writer / Producer", year: "2020" }
];

export default function InteractiveCatalog() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = catalogData.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.year.includes(searchTerm)
    );

    return (
        <section id="catalog" className="py-24 bg-background-dark text-white border-t border-white/10">
            <div className="container mx-auto px-6 max-w-5xl text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
                >
                    <div className="w-full md:w-auto text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-center">Core <span className="text-white">Catalog</span></h2>
                        <p className="text-slate-400 max-w-xl font-light tracking-wide uppercase text-center mx-auto">
                            A comprehensive index of publishing and master interests.
                        </p>
                    </div>

                    <div className="flex items-center mx-auto md:mx-0 bg-white/5 border border-white/20 rounded-lg px-4 py-2 w-full max-w-md focus-within:border-white transition-all">
                        <Search className="text-slate-400 w-5 h-5 mr-3" />
                        <input
                            className="bg-transparent border-none focus:ring-0 text-sm placeholder:text-slate-500 w-full outline-none text-white"
                            placeholder="Search catalog..."
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="overflow-x-auto border border-white/10 rounded-lg bg-white/5"
                >
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 uppercase text-xs tracking-widest text-slate-400 bg-white/5">
                                <th className="p-4 font-medium min-w-[150px]">Title</th>
                                <th className="p-4 font-medium min-w-[150px]">Artist</th>
                                <th className="p-4 font-medium min-w-[150px]">Role</th>
                                <th className="p-4 font-medium text-right">Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <tr key={index} className="border-b border-white/5 hover:bg-white/10 transition-colors">
                                        <td className="p-4 font-bold text-sm">{item.title}</td>
                                        <td className="p-4 text-slate-300 text-sm">{item.artist}</td>
                                        <td className="p-4 text-slate-400 text-xs">{item.role}</td>
                                        <td className="p-4 text-slate-500 text-xs text-right font-mono">{item.year}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="p-8 text-center text-slate-500 uppercase tracking-widest text-sm">
                                        No entries found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </motion.div>

                <div className="mt-6 flex justify-between items-center text-xs tracking-widest uppercase text-slate-500 px-2">
                    <span>Showing {filteredData.length} entries</span>
                    <button className="hover:text-white transition-colors">Documentation (Pages 1-10)</button>
                </div>
            </div>
        </section>
    );
}
