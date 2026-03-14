
import { UploadCloud, Music, ArrowRight, Wallet, Headphones, Library, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Royalty, ArtistSubmission } from '../lib/firebase';
import { rtdb } from '../lib/firebase';
import { ref, push, set } from 'firebase/database';
import { useState } from 'react';

export default function ArtistPortal() {
    const [submission, setSubmission] = useState<Partial<ArtistSubmission>>({
        artistName: '',
        email: '',
        submissionLink: '',
        aestheticNotes: ''
    });

    // Derived mock data representing the `Royalty` table related to Jet Admin
    const royalties: Royalty[] = [
        { id: '1', song: "NEON HORIZON", type: "Master Royalty", paymentDate: new Date("2026-09-01"), amount: 482.10, createdAt: new Date() },
        { id: '2', song: "CYBERPUNK BLUES", type: "Mechanical", paymentDate: new Date("2026-08-15"), amount: 215.45, createdAt: new Date() },
        { id: '3', song: "VOID DANCER", type: "Sync License", paymentDate: new Date("2026-07-12"), amount: 1500.00, createdAt: new Date() },
        { id: '4', song: "DATA RAIN", type: "Performance", paymentDate: new Date("2026-06-05"), amount: 89.12, createdAt: new Date() }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const submissionsRef = ref(rtdb, 'submissions');
            const newSubmissionRef = push(submissionsRef);
            await set(newSubmissionRef, {
                ...submission,
                createdAt: new Date().toISOString(),
                status: 'pending'
            });
            alert(`Demo from ${submission.artistName} mapped for ingestion.`);
            setSubmission({ artistName: '', email: '', submissionLink: '', aestheticNotes: '' });
        } catch (error) {
            console.error("Submission failed:", error);
            alert("Error submitting demo to the database. Please try again.");
        }
    };

    return (
        <section id="portal" className="py-24 bg-background-dark px-6 border-t border-white/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-primary/10 pb-8">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-primary/20 mb-4">
                            <UploadCloud className="w-4 h-4" /> Artist Portal
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black tracking-tighter neon-glow-blue uppercase">Welcome back, Dre.</h3>
                        <p className="text-slate-400 mt-2 max-w-md">Your catalog generated <span className="text-primary font-bold">$1,240.50</span> this month. 4 demos are currently under review.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="text-right">
                            <span className="text-[10px] uppercase tracking-widest text-primary/60 font-bold block">Status</span>
                            <span className="flex items-center gap-2 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded mt-1 border border-primary/20 shadow-[0_0_10px_rgba(0,255,255,0.2)]">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> VERIFIED ARTIST
                            </span>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div whileHover={{ y: -5 }} className="p-6 rounded-xl border border-primary/20 bg-primary/5 flex flex-col glass-panel shadow-[0_0_15px_rgba(0,255,255,0.05)]">
                        <div className="flex justify-between items-start mb-4">
                            <Wallet className="text-primary w-6 h-6" />
                            <span className="text-[10px] font-bold text-emerald-400">+12% vs LY</span>
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Royalties</span>
                        <span className="text-3xl font-black mt-1 text-white">$42,890.12</span>
                    </motion.div>
                    <motion.div whileHover={{ y: -5 }} className="p-6 rounded-xl border border-primary/20 bg-primary/5 flex flex-col glass-panel shadow-[0_0_15px_rgba(0,255,255,0.05)]">
                        <div className="flex justify-between items-start mb-4">
                            <Headphones className="text-primary w-6 h-6" />
                            <span className="text-[10px] font-bold text-primary">Live</span>
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Monthly Streams</span>
                        <span className="text-3xl font-black mt-1 text-white">1.2M</span>
                    </motion.div>
                    <motion.div whileHover={{ y: -5 }} className="p-6 rounded-xl border border-primary/20 bg-primary/5 flex flex-col glass-panel shadow-[0_0_15px_rgba(0,255,255,0.05)]">
                        <div className="flex justify-between items-start mb-4">
                            <Library className="text-primary w-6 h-6" />
                            <span className="text-[10px] font-bold text-slate-400">Updated today</span>
                        </div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Catalog Size</span>
                        <span className="text-3xl font-black mt-1 text-white">24 Works</span>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Submission Form Section mapping to ArtistSubmission @table */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-2 mb-2">
                            <Music className="text-primary w-6 h-6" />
                            <h4 className="text-2xl font-black tracking-tight uppercase">Submit Your Record</h4>
                        </div>
                        <div className="p-8 rounded-xl border border-primary/20 bg-background-dark/80 glass-panel relative overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.05)]">
                            <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Artist / Project Name</label>
                                        <input
                                            type="text"
                                            placeholder="DRE MOON ARCHIVES"
                                            value={submission.artistName}
                                            onChange={e => setSubmission({ ...submission, artistName: e.target.value })}
                                            className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-600 text-white"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="dre@radicalpublishing.com"
                                            value={submission.email}
                                            onChange={e => setSubmission({ ...submission, email: e.target.value })}
                                            className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-600 text-white"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Private Stream Link</label>
                                    <input
                                        type="url"
                                        placeholder="https://soundcloud.com/private..."
                                        value={submission.submissionLink}
                                        onChange={e => setSubmission({ ...submission, submissionLink: e.target.value })}
                                        className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-600 text-white"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Aesthetic Notes</label>
                                    <textarea
                                        placeholder="Describe the sonic architecture..."
                                        value={submission.aestheticNotes}
                                        onChange={e => setSubmission({ ...submission, aestheticNotes: e.target.value })}
                                        className="w-full bg-black/50 border border-primary/30 rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-600 text-white min-h-[80px]"
                                    />
                                </div>

                                <div className="pt-4">
                                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-primary text-background-dark font-black py-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all flex items-center justify-center gap-2 uppercase tracking-widest" type="submit">
                                        Transmit Demo <ArrowRight className="w-4 h-4 text-background-dark" />
                                    </motion.button>
                                    <p className="text-[10px] text-center mt-4 text-slate-500 italic">By submitting, you agree to our Terms of Submission.</p>
                                </div>
                            </form>
                        </div>
                    </section>

                    {/* Royalties & Performance Section mapping to Royalty @table */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="text-primary w-6 h-6" />
                                <h4 className="text-2xl font-black tracking-tight uppercase">Recent Royalty Activity</h4>
                            </div>
                            <button className="text-[10px] font-bold text-primary hover:text-white transition-colors uppercase tracking-widest border border-primary/30 px-3 py-1 rounded-full hover:bg-primary/20">Export CSV</button>
                        </div>
                        <div className="rounded-xl border border-primary/20 bg-background-dark/80 glass-panel overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.05)]">
                            <table className="w-full text-left">
                                <thead className="bg-primary/10 border-b border-primary/20">
                                    <tr>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Track Name</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Date</th>
                                        <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Amount</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-primary/10">
                                    {royalties.map((item) => (
                                        <tr key={item.id} className="hover:bg-primary/10 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-bold group-hover:text-primary transition-colors text-white uppercase">{item.song}</span>
                                                    <span className="text-[10px] text-slate-500 uppercase font-medium">{item.type}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="text-xs bg-black text-slate-300 px-2 py-1 rounded border border-white/10 font-mono inline-block">
                                                    {item.paymentDate.toISOString().split('T')[0]}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <span className={`text-sm font-bold ${item.amount > 1000 ? 'text-emerald-400' : 'text-primary'}`}>
                                                    ${item.amount.toFixed(2)}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Minimal abstract graph */}
                        <div className="h-32 w-full rounded-xl border border-primary/20 bg-background-dark/80 glass-panel relative overflow-hidden p-6 flex items-end gap-1 px-4 pb-0 pt-12">
                            <div className="absolute top-4 left-6">
                                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Streaming Engagement</p>
                            </div>
                            {[40, 30, 60, 90, 45, 75, 25, 65, 80, 50].map((h, i) => (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 1, delay: i * 0.1 }}
                                    key={i}
                                    className={`flex-1 ${h === 90 ? 'bg-primary' : 'bg-primary/20 hover:bg-primary/50'} rounded-t-sm transition-colors duration-300 cursor-pointer`}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}
