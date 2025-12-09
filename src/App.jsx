import { useState } from 'react';
import { locations } from './utils/locations';
import { WeatherCard } from './components/WeatherCard';
import { ThemeToggle } from './components/ThemeToggle';
import { Search } from 'lucide-react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLocations = locations.filter(loc =>
    loc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container py-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-12 pt-8 border-b-2 border-[var(--border-color)] pb-6">
        <h1 className="text-4xl font-bold tracking-tighter uppercase">
          Taiwan<br />Weather
        </h1>
        <ThemeToggle />
      </header>

      {/* Search */}
      <div className="mb-12 relative max-w-md">
        <div className="absolute top-1/2 -translate-y-1/2 left-3 pointer-events-none">
          <Search size={20} />
        </div>
        <input
          type="text"
          placeholder="Search city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 py-3 text-lg font-bold border-2 border-[var(--border-color)] placeholder-[var(--text-color)]/50 focus:bg-[var(--text-color)] focus:text-[var(--bg-color)] transition-colors"
          style={{ paddingLeft: '2.5rem' }}
        />
      </div>

      {/* Grid */}
      <main>
        {filteredLocations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredLocations.map((loc) => (
              <WeatherCard key={loc.name} city={loc} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl font-bold">No cities found.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t-2 border-[var(--border-color)] text-sm font-bold opacity-60 flex justify-between">
        <p>MINIMALIST WEATHER APP</p>
        <p>DATA: OPEN-METEO</p>
      </footer>
    </div>
  );
}

export default App;
