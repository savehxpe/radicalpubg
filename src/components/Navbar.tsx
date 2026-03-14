import { Terminal, Search } from 'lucide-react';

export default function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 flex items-center justify-between border-b border-white/10 bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-4">
            <div className="flex items-center gap-10">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="size-8 text-primary flex items-center justify-center">
                        <Terminal className="w-8 h-8" />
                    </div>
                    <h2 className="text-slate-100 text-2xl font-bold tracking-tighter neon-glow-blue uppercase">RADICAL</h2>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    {['Catalog', 'Artists', 'Services', 'Portal'].map((item) => (
                        <a key={item} className="text-slate-400 hover:text-primary transition-colors text-sm font-medium uppercase tracking-widest" href={`#${item.toLowerCase()}`}>
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
            <div className="flex items-center gap-6">
                <div className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 focus-within:border-primary/50 transition-all">
                    <Search className="text-primary w-5 h-5 mr-2" />
                    <input className="bg-transparent border-none focus:ring-0 text-sm placeholder:text-slate-500 w-48 outline-none text-white" placeholder="Search the future..." type="text" />
                </div>
                <button className="bg-primary text-background-dark px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-white transition-all transform active:scale-95 shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                    Join Club
                </button>
            </div>
        </header>
    );
}
