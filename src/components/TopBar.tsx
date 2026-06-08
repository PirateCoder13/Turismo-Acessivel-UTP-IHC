import { Contrast, Type, Ear } from 'lucide-react';
import { useAccessibility } from '../contexts/AccessibilityContext';

export function TopBar() {
  const { highContrast, toggleHighContrast, increaseTextSize } = useAccessibility();

  return (
    <header className="bg-primary text-white p-4 flex items-center justify-between shadow-md z-10 relative">
      <h1 className="text-xl font-bold tracking-tight">Turismo Acessível</h1>
      
      {/* 
        Acessibility Quick Actions 
        All buttons have at least 48x48px touch targets 
      */}
      <div className="flex gap-2">
        <button
          onClick={increaseTextSize}
          className="p-3 rounded-full hover:bg-black/10 focus-visible:bg-black/10 transition-colors"
          aria-label="Aumentar tamanho da fonte"
        >
          <Type size={24} aria-hidden="true" />
        </button>
        
        {/* Mock for Libras button, as it's typically an external widget like VLibras */}
        <button
          className="p-3 rounded-full hover:bg-black/10 focus-visible:bg-black/10 transition-colors"
          aria-label="Ativar tradutor de Libras"
        >
          <Ear size={24} aria-hidden="true" />
        </button>

        <button
          onClick={toggleHighContrast}
          className={`p-3 rounded-full transition-colors ${highContrast ? 'bg-black/20' : 'hover:bg-black/10'} focus-visible:bg-black/10`}
          aria-label={highContrast ? "Desativar Alto Contraste" : "Ativar Alto Contraste"}
          aria-pressed={highContrast}
        >
          <Contrast size={24} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
