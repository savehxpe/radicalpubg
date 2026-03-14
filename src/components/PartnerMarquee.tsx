

export default function PartnerMarquee() {
    const partners = [
        { name: 'A24', src: '/assets/a24_white_logo.png' },
        { name: 'Sony Music Publishing', src: '/assets/sony_music_publishing_white_logo.png' },
        { name: 'HBO Max', src: '/assets/hbo_white_logo.png' },
        { name: 'Netflix', src: '/assets/netflix_white_logo.png' },
        { name: 'Apple TV+', src: '/assets/apple_white_logo.png' },
        { name: 'Spotify', src: '/assets/spotify_white_logo.png' }
    ];

    return (
        <section
            className="relative w-full h-[100px] bg-black flex flex-col justify-center overflow-hidden border-y border-white/10"
            style={{ zIndex: 50 }}
        >
            <div className="flex w-[200%] animate-marquee">
                {/* Render two identical sets to create the infinite loop */}
                {[...partners, ...partners].map((partner, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 flex items-center justify-center w-[16.66%]"
                    >
                        <img
                            src={partner.src}
                            alt={`${partner.name} logo`}
                            className="h-[40px] w-auto object-contain opacity-100"
                            style={{ filter: 'brightness(2) grayscale(1)' }}
                            onError={(e) => {
                                // Fallback to text if the image fails to load
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                if (target.parentElement) {
                                    target.parentElement.innerHTML = `<span class="text-white text-sm font-mono tracking-widest">${partner.name}</span>`;
                                }
                            }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
