
interface Partner {
    name: string;
    src: string;
    url?: string;
}

const PARTNER_LOGOS: Partner[] = [
    { name: 'A24', src: '/assets/A24_white_logo.png' },
    { name: 'Sony Music Publishing', src: '/assets/sony_music_publishing_white_logo.png' },
    { name: 'HBO Max', src: '/assets/HBO_Max_white_logo.png' },
    { name: 'Netflix', src: '/assets/Netflix_white_logo.png' },
    { name: 'Apple TV+', src: '/assets/Apple_TV_white_logo.png' },
    { name: 'Spotify', src: '/assets/Spotify_white_logo.png' },
    { name: 'Boominati Worldwide', src: '/assets/Boominati_Worldwide_white_logo.png' },
    { name: 'Freebandz', src: '/assets/freebandz_white_logo.png' },
    { name: 'Riot Games', src: '/assets/riot_games_logo_white.png' }
];

export default function PartnerMarquee() {
    return (
        <section
            className="h-24 w-full relative overflow-hidden bg-black flex items-center border-y border-white/10"
            style={{ zIndex: 50 }}
        >
            <div className="flex w-[200%] animate-marquee items-center">
                {/* Render two identical sets to create the infinite loop */}
                {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((partner, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 flex items-center justify-center w-[15%] md:w-[12%]"
                    >
                        <img
                            src={partner.src}
                            alt={`${partner.name} logo`}
                            className="h-10 w-auto object-contain opacity-100"
                            style={{ filter: 'brightness(2) invert(1)' }}
                            onError={(e) => {
                                // Fallback to text if the image fails to load
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                if (target.parentElement && !target.dataset.failed) {
                                    target.dataset.failed = "true";
                                    const span = document.createElement('span');
                                    span.className = "text-white text-[10px] font-mono tracking-widest uppercase opacity-40";
                                    span.innerText = partner.name;
                                    target.parentElement.appendChild(span);
                                }
                            }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
