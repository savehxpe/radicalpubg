# MASTER ARCHITECTURE: UI & VISUAL HIERARCHY
01 [CANVAS_BG]: Liquid Chrome Plane (128x128). LERP smoothing on scroll (factor 0.05).
02 [VIEWPORT_LOCK]: Background is position:fixed, 100vw, 100vh, z-index: -1.
03 [NAVBAR]: Left: static radical_logo_white.png. Right: CATALOG, ARTISTS, CONTACT.
04 [HERO_STACK]: Center-aligned vertical flex. Order: [BADGE] -> [BUTTON].
05 [HERO_BADGE]: Pill-shape, transparent background, white border. Text: 'GLOBAL PUBLISHING & LICENSING'.
06 [HERO_BUTTON]: Solid white background, black text. Text: 'EXPLORE CATALOG'.
07 [HERO_SPACING]: Apply standard margin between Badge and Button. Do not inject extra 3D DOM elements here.
08 [GLOBAL_CSS]: bg-black, text-white, sans-serif primary, strict grayscale palette.