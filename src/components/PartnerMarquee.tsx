
interface Partner {
    name: string;
    src: string;
}

const PARTNER_LOGOS: Partner[] = [
    { name: 'A24', src: '/assets/a24_white_logo.png' },
    { name: 'Sony Music Publishing', src: '/assets/sony_music_publishing_white_logo.png' },
    { name: 'HBO Max', src: '/assets/hbo_white_logo.png' },
    { name: 'Netflix', src: '/assets/netflix_white_logo.png' },
    { name: 'Apple+', src: '/assets/apple_white_logo.png' },
    { name: 'Spotify', src: '/assets/spotify_white_logo.png' },
    { name: 'Boominati Worldwide', src: '/assets/Boominati_Worldwide_white_logo.png' },
    { name: 'Freebandz', src: '/assets/freebandz_white_logo.png' },
    { name: 'Riot Games', src: '/assets/riot_games_logo_white.png' },
    { name: 'Marvel', src: '/assets/marvel_white_logo.png' }
];

export default function PartnerMarquee() {
    return (
        <section
            className="w-full h-[100px] overflow-hidden flex items-center bg-black relative z-50 border-y border-white/10"
        >
            <div className="flex w-[200%] animate-marquee items-center">
                {/* Render identical sets to create the infinite loop */}
                {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((partner, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 flex items-center justify-center px-12"
                    >
                        <img
                            src={partner.src}
                            alt={`${partner.name} logo`}
                            className="h-[40px] w-auto object-contain opacity-100"
                            style={{ filter: 'brightness(2) invert(1) grayscale(1)' }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
