import { Sun, Cloud, CloudRain, CloudLightning, CloudSnow, CloudDrizzle, CloudFog } from 'lucide-react';

export const getWeatherIcon = (code) => {
    // WMO Weather interpretation codes (WW)
    // 0: Clear sky
    if (code === 0) return <Sun className="w-8 h-8" />;

    // 1, 2, 3: Mainly clear, partly cloudy, and overcast
    if ([1, 2, 3].includes(code)) return <Cloud className="w-8 h-8" />;

    // 45, 48: Fog
    if ([45, 48].includes(code)) return <CloudFog className="w-8 h-8" />;

    // 51, 53, 55: Drizzle
    // 56, 57: Freezing Drizzle
    if ([51, 53, 55, 56, 57].includes(code)) return <CloudDrizzle className="w-8 h-8" />;

    // 61, 63, 65: Rain
    // 66, 67: Freezing Rain
    // 80, 81, 82: Rain showers
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return <CloudRain className="w-8 h-8" />;

    // 71, 73, 75: Snow fall
    // 77: Snow grains
    // 85, 86: Snow showers
    if ([71, 73, 75, 77, 85, 86].includes(code)) return <CloudSnow className="w-8 h-8" />;

    // 95: Thunderstorm
    // 96, 99: Thunderstorm with slight and heavy hail
    if ([95, 96, 99].includes(code)) return <CloudLightning className="w-8 h-8" />;

    // Default
    return <Sun className="w-8 h-8" />;
};
