
export default function PartnerMarquee() {
    const partners = [
        "/assets/Boominati_Worldwide_white_logo.png",
        "/assets/freebandz_white_logo.png",
        "/assets/netflix_white_logo.png",
        "/assets/sony_music_publishing_white_logo.png",
        "/assets/riot_games_logo_white.png",
        "/assets/spotify_white_logo.png",
        "/assets/hbo_white_logo.png",
        "/assets/apple_white_logo.png",
        "/assets/a24_white_logo.png"
    ];

    return (
        <section className="w-full h-[100px] overflow-hidden flex items-center bg-black relative z-50">
            <div className="flex w-[200%] animate-marquee gap-16 items-center">
                {/* Duplicated array for seamless loop */}
                {[...partners, ...partners].map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt="Partner Logo"
                        className="h-[40px] w-auto object-contain opacity-100 flex-shrink-0"
                    />
                ))}
            </div>
        </section>
    );
}
