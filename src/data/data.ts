import type { Button, Game } from '../types/types';

export const Bunttons: Button[] = [
    {
        name: 'TikTok',
        url: 'https://www.tiktok.com/@oboegames',
        target: '_blank',
    },
    {
        name: 'YouTube',
        url: 'https://www.youtube.com/@oboe_games',
        target: '_blank',
    },
    {
        name: 'Whatsapp >',
        url: '/whatsapp',
        target: '_self',
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/oboegames',
        target: '_blank',
    },
    {
        name: 'Twitter',
        url: 'https://x.com/OboeBoy935',
        target: '_blank',
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/profile.php?id=61573589678484',
        target: '_blank',
    }
];

import Brawl from "../assets/Brawl_Stars_Logo_2018_app_icon.svg";
import Minecraft from "../assets/Userbox_creeper.svg";
import Roblox from "../assets/Roblox_Corporation_2025_logo.svg";
import GeometryDash from "../assets/672f63abcbe13-Geometry-Dash.svg";

export const Games: Game[] = [
    {
        name: 'Brawl Stars',
        src: Brawl.src,
        url: 'https://www.brawlstars.com/es-es/',
    },
    {
        name: 'Minecraft',
        src: Minecraft.src,
        url: 'https://www.minecraft.net/es-es',
    },
    {
        name: 'Geometry Dash',
        src: GeometryDash.src,
        url: 'https://www.geometrydash.com/',
    },
    {
        name: 'Roblox',
        src: Roblox.src,
        url: 'https://www.roblox.com/',
    },
]