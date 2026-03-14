import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { motion } from 'framer-motion';

export const InquirySection: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await addDoc(collection(db, 'inquiries'), {
                ...formData,
                createdAt: new Date()
            });
            setStatus('success');
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="w-full py-24 bg-transparent relative flex justify-center items-center px-4 font-mono z-10">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xl -z-10"></div>

            <div className="max-w-3xl w-full mx-auto p-8 md:p-12 bg-black/90 border border-white/30 shadow-2xl relative">
                <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase mb-1">RADICAL PUBLISHING GROUP</h2>
                <h3 className="text-xs md:text-sm text-white/60 uppercase tracking-widest mb-12">OFFICE OF THE CEO</h3>

                <div className="space-y-2 mb-12 text-sm md:text-base tracking-wide border-l-4 border-white/40 pl-4 text-white">
                    <p>TO: ADMINISTRATION / SYNC LICENSING</p>
                    <p>RE: NEW PARTNERSHIP INQUIRY</p>
                </div>

                {status === 'success' ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-white font-bold tracking-[0.2em] mt-8 py-12 text-center"
                    >
                        INQUIRY LOGGED. THE TEAM WILL REVIEW ACCORDINGLY.
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4 group">
                            <label className="text-sm tracking-wide uppercase min-w-[100px] shrink-0 text-white/60 group-focus-within:text-white transition-colors">NAME</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none text-white py-1 font-mono transition-colors"
                            />
                        </div>

                        <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4 group">
                            <label className="text-sm tracking-wide uppercase min-w-[100px] shrink-0 text-white/60 group-focus-within:text-white transition-colors">EMAIL</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none text-white py-1 font-mono transition-colors"
                            />
                        </div>

                        <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4 group">
                            <label className="text-sm tracking-wide uppercase min-w-[100px] shrink-0 text-white/60 group-focus-within:text-white transition-colors">MESSAGE</label>
                            <input
                                type="text"
                                required
                                value={formData.message}
                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-transparent border-b border-white/20 focus:border-white outline-none text-white py-1 font-mono transition-colors"
                            />
                        </div>

                        <div className="pt-8 flex justify-center">
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="px-12 py-4 bg-white text-black hover:bg-white/90 transition-all duration-300 uppercase tracking-[0.2em] text-sm font-black disabled:opacity-50 rounded-none w-full md:w-auto"
                            >
                                {status === 'loading' ? 'PROCESSING...' : 'SUBMIT INQUIRY'}
                            </button>
                        </div>
                        {status === 'error' && <div className="text-white text-sm text-center border border-white bg-white/10 p-2 mt-4 uppercase">TRANSMISSION FAILED. VERIFY CONNECTION AND RETRY.</div>}
                    </form>
                )}
            </div>
        </section>
    );
};
