
export default function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 flex items-center justify-between border-b border-white/10 bg-background-dark/80 backdrop-blur-md px-6 py-4">
            <div className="flex items-center gap-4">
                <img src="/assets/RADICAL_LOGO_WHITE.png" alt="RADICAL Logo" className="h-6 w-auto object-contain" />
                <span className="text-white font-bold tracking-[0.2em] text-sm hidden sm:block">RADICAL</span>
            </div>
            <nav className="hidden md:flex items-center gap-12">
                {['Catalog', 'Artists', 'Contact'].map((item) => {
                    const href = `#${item.toLowerCase()}`;
                    return (
                        <a key={item} className="text-slate-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest" href={href}>
                            {item}
                        </a>
                    )
                })}
            </nav>
            <div className="w-8 md:w-[150px]"></div> {/* spacer to balance logo */}
        </header>
    );
}
