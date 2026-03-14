
export default function Navbar() {
    return (
        <header className="fixed top-0 w-full z-[100] flex items-center justify-between border-b border-white/10 bg-background-dark/80 backdrop-blur-md px-6 py-4">
            <div className="flex items-center">
                <img src="/assets/RADICAL_LOGO_WHITE.png" alt="RADICAL Logo" className="h-12 md:h-16 w-auto object-contain" />
            </div>
            <nav className="flex items-center gap-6 md:gap-12">
                {['Catalog', 'Artists', 'Contact'].map((item) => {
                    const href = `#${item.toLowerCase()}`;
                    return (
                        <a key={item} className="text-white hover:opacity-70 transition-colors text-sm font-medium uppercase tracking-widest" href={href}>
                            {item}
                        </a>
                    )
                })}
            </nav>
        </header>
    );
}
