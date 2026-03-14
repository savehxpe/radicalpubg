
export default function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 flex items-center justify-center border-b border-white/10 bg-background-dark/80 backdrop-blur-md px-6 py-4">
            <nav className="hidden md:flex items-center gap-12">
                {['Catalog', 'Artists', 'Contact'].map((item) => {
                    const href = item === 'Artists' ? '#catalog' : `#${item.toLowerCase()}`;
                    return (
                        <a key={item} className="text-slate-400 hover:text-white transition-colors text-sm font-medium uppercase tracking-widest" href={href}>
                            {item}
                        </a>
                    )
                })}
            </nav>
        </header>
    );
}
