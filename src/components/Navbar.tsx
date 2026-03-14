import { Terminal, Search } from 'lucide-react';

export default function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 flex items-center justify-between border-b border-white/10 bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-4">
            <div className="flex items-center gap-10">
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="size-8 text-primary flex items-center justify-center">
                        <Terminal className="w-8 h-8" />
                    </div>
                    <h2 className="text-slate-100 text-2xl font-bold tracking-tighter uppercase">
                        <img src="/assets/RADICAL_LOGO.png" alt="RADICAL" className="h-6" />
                    </h2>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    {['Catalog', 'Artists', 'Services'].map((item) => {
                        const href = item === 'Artists' ? '#catalog' : `#${item.toLowerCase()}`;
                        return (
                            <a key={item} className="text-slate-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest" href={href}>
                                {item}
                            </a>
                        )
                    })}
                </nav>
            </div>
            <div className="flex items-center gap-6">
                <div className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 focus-within:border-primary/50 transition-all">
                    <Search className="text-white w-5 h-5 mr-2" />
                    <input className="bg-transparent border-none focus:ring-0 text-sm placeholder:text-slate-500 w-48 outline-none text-white" placeholder="Search the future..." type="text" />
                </div>
                <button className="bg-white text-black px-6 py-2 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-slate-200 transition-all transform active:scale-95">
                    Join Club
                </button>
            </div>
        </header>
    );
}
