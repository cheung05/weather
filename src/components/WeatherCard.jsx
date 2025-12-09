import { useWeather } from '../hooks/useWeather';
import { getWeatherIcon } from '../utils/weatherIcons';

export function WeatherCard({ city }) {
    const { weather, loading, error } = useWeather(city.lat, city.lon);

    if (loading) {
        return (
            <div className="border p-4 flex flex-col items-center justify-center h-48 animate-pulse">
                <div className="text-xl font-bold mb-2">{city.name}</div>
                <div className="text-sm">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="border p-4 flex flex-col items-center justify-center h-48">
                <div className="text-xl font-bold mb-2">{city.name}</div>
                <div className="text-sm text-red-500">Error loading data</div>
            </div>
        );
    }

    return (
        <div className="border p-6 flex flex-col items-center justify-between h-56 hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-colors group cursor-default">
            <h3 className="text-xl font-bold text-center mb-4">{city.name}</h3>

            <div className="flex flex-col items-center gap-2 mb-4">
                {/* Force icon to inherit current text color logic for hover effect */}
                <div className="[&>svg]:stroke-current">
                    {getWeatherIcon(weather.current.weathercode)}
                </div>
                <span className="text-4xl font-bold">{Math.round(weather.current.temperature)}°</span>
            </div>

            <div className="flex gap-4 text-sm font-bold w-full justify-center border-t border-[var(--border-color)] pt-3 group-hover:border-[var(--bg-color)]">
                <span>H: {Math.round(weather.daily.max)}°</span>
                <span>L: {Math.round(weather.daily.min)}°</span>
            </div>
        </div>
    );
}
