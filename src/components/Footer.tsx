import { Terminal } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-background-dark border-t border-white/10 py-20 px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-8">
                            <Terminal className="text-primary w-8 h-8" />
                            <h2 className="text-white text-3xl font-black tracking-tighter uppercase neon-glow-blue">RADICAL</h2>
                        </div>
                        <p className="text-slate-400 text-lg max-w-sm mb-8">
                            Empowering the next generation of creative outsiders through street-cinematic technology and radical ownership.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <li><a className="text-slate-400 hover:text-primary transition-all uppercase tracking-wider text-sm" href="#catalog">Catalog</a></li>
                            <li><a className="text-slate-400 hover:text-primary transition-all uppercase tracking-wider text-sm" href="#artists">Artists</a></li>
                            <li><a className="text-slate-400 hover:text-primary transition-all uppercase tracking-wider text-sm" href="#services">Services</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><a className="text-slate-400 hover:text-primary transition-all uppercase tracking-wider text-sm" href="#">Help Center</a></li>
                            <li><a className="text-slate-400 hover:text-primary transition-all uppercase tracking-wider text-sm" href="#">Discord</a></li>
                            <li><a className="text-slate-400 hover:text-primary transition-all uppercase tracking-wider text-sm" href="#portal">Portal API</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">© 2026 RADICAL Publishing Group. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a className="text-slate-500 hover:text-white text-sm" href="#">Privacy Policy</a>
                        <a className="text-slate-500 hover:text-white text-sm" href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
