# ROLE: LEAD FRONTEND & ASSET ENGINEER
# DIRECTIVE: Hard-mount the Partner Marquee component. Render pure white assets without CSS inversion.

01 [MARQUEE_COMPONENT]: Build a rigid, hardcoded React component for the partner loop. 
02 [CONTAINER_CSS]: Force the outer wrapper strictly to: `w-full h-[100px] overflow-hidden flex items-center bg-black relative z-50`.
03 [TRACK_CSS]: Force the inner scrolling track to: `flex w-[200%] animate-marquee gap-16`.
04 [IMAGE_CSS]: Force EVERY `<img />` tag strictly to: `h-[40px] w-auto object-contain opacity-100`. DO NOT apply any `invert` or `brightness` filters. The source files are already white.
05 [ASSET_ARRAY]: Hardcode this exact array of absolute paths:
   - "/assets/Boominati_Worldwide_white_logo.png"
   - "/assets/freebandz_white_logo.png"
   - "/assets/netflix_white_logo.png"
   - "/assets/sony_music_publishing_white_logo.png"
   - "/assets/riot_games_logo_white.png"
   - "/assets/spotify_white_logo.png"
   - "/assets/hbo_white_logo.png"
   - "/assets/apple_white_logo.png"
   - "/assets/a24_white_logo.png"
   - "/assets/juice_armed_cover.jpg"
   - "/assets/cb_royalty_cover.jpg"
   - "/assets/5sos_old_me_cover.png"
06 [FALLBACK_REMOVAL]: Do not use conditional rendering or text fallbacks. Render the standard HTML `<img>` tags.