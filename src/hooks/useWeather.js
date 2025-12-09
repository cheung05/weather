import { useState, useEffect } from 'react';

export function useWeather(lat, lon) {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!lat || !lon) return;

        const fetchWeather = async () => {
            try {
                setLoading(true);
                // Add minimal delay to prevent flickering on fast connections, purely aesthetic for this demo
                // await new Promise(resolve => setTimeout(resolve, 500)); 

                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }

                const data = await response.json();

                setWeather({
                    current: data.current_weather,
                    daily: {
                        max: data.daily.temperature_2m_max[0],
                        min: data.daily.temperature_2m_min[0]
                    }
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [lat, lon]);

    return { weather, loading, error };
}
