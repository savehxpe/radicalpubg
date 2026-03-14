
interface Partner {
    name: string;
    src: string;
    url?: string;
}

const PARTNER_LOGOS: Partner[] = [
    { name: 'A24', src: '/assets/a24_white_logo.png' },
    { name: 'Sony Music Publishing', src: '/assets/sony_music_publishing_white_logo.png' },
    { name: 'HBO Max', src: '/assets/hbo_white_logo.png' },
    { name: 'Netflix', src: '/assets/netflix_white_logo.png' },
    { name: 'Apple TV+', src: '/assets/apple_white_logo.png' },
    { name: 'Spotify', src: '/assets/spotify_white_logo.png' },
    { name: 'Boominati Worldwide', src: '/assets/Boominati_Worldwide_white_logo.png' },
    { name: 'Freebandz', src: '/assets/freebandz_white_logo.png' },
    { name: 'Riot Games', src: '/assets/riot_games_logo_white.png' }
];

export default function PartnerMarquee() {
    return (
        <section
            className="w-full bg-black overflow-hidden py-8 relative"
            style={{ zIndex: 50 }}
        >
            <div className="flex w-[200%] animate-marquee">
                {/* Render two identical sets to create the infinite loop */}
                {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((partner, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 flex items-center justify-center w-[12%]"
                    >
                        <img
                            src={partner.src}
                            alt={`${partner.name} logo`}
                            className="h-[32px] w-auto object-contain opacity-100"
                            style={{ filter: 'brightness(2) invert(1)' }}
                            onError={(e) => {
                                // Fallback to text if the image fails to load
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                if (target.parentElement) {
                                    target.parentElement.innerHTML = `<span class="text-white text-[10px] font-mono tracking-widest uppercase">${partner.name}</span>`;
                                }
                            }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
