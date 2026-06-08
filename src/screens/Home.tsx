import React from 'react';
import { Search, Mic, Plus, Accessibility, EyeOff, Ear, Star, Square, Triangle } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { renderToString } from 'react-dom/server';

// Fix for custom icons using React components
const createCustomIcon = (iconComponent: React.ReactNode, colorClass: string) => {
  const iconHtml = renderToString(
    <div className={`filter drop-shadow-md flex items-center justify-center bg-white rounded-full p-2 border-2 border-slate-200 shadow-xl ${colorClass}`}>
      {iconComponent}
    </div>
  );
  return L.divIcon({
    html: iconHtml,
    className: 'custom-leaflet-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  });
};

interface HomeProps {
  onNavigate?: (tab: 'home' | 'details' | 'form' | 'ranking', placeId?: number) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const filters = [
    { id: 'cadeira', label: 'Cadeirante', icon: <Accessibility size={24} /> },
    { id: 'visao', label: 'Baixa Visão', icon: <EyeOff size={24} /> },
    { id: 'surdo', label: 'Surdo', icon: <Ear size={24} /> },
  ];

  // Real pins for Curitiba map with geometric shapes and colors
  const pins: { id: number, pos: [number, number], type: string, name: string, icon: React.ReactNode, color: string }[] = [
    { id: 1, pos: [-25.4095, -49.2662], type: 'Platina', name: 'Museu Oscar Niemeyer (MON)', icon: <Star fill="currentColor" size={20} />, color: 'text-platina' },
    { id: 2, pos: [-25.4429, -49.2378], type: 'Ouro', name: 'Jardim Botânico', icon: <Square fill="currentColor" size={20} />, color: 'text-ouro' },
    { id: 3, pos: [-25.3838, -49.2762], type: 'Prata', name: 'Ópera de Arame', icon: <Square fill="currentColor" size={20} />, color: 'text-prata' },
    { id: 4, pos: [-25.4266, -49.3082], type: 'Bronze', name: 'Parque Barigui', icon: <Triangle fill="currentColor" size={20} />, color: 'text-bronze' },
    { id: 5, pos: [-25.4255, -49.3175], type: 'Platina', name: 'Universidade Tuiuti do Paraná (UTP)', icon: <Star fill="currentColor" size={20} />, color: 'text-platina' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col bg-slate-100 dark:bg-slate-900">
      
      {/* Filters Area (Top) */}
      <div className="p-4 bg-surface z-[1000] shadow-sm relative">
        <h2 className="sr-only">Filtros de Acessibilidade</h2>
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {filters.map(filter => (
            <button
              key={filter.id}
              className="flex items-center gap-2 px-4 h-12 min-h-[48px] bg-background border border-border rounded-full hover:bg-slate-100 focus-visible:bg-slate-100 whitespace-nowrap shadow-sm"
              aria-label={`Filtrar por ${filter.label}`}
            >
              {filter.icon}
              <span className="font-medium text-sm">{filter.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Map Area (Curitiba) */}
      <div className="flex-1 relative z-0">
        <MapContainer 
          center={[-25.4284, -49.2733]} 
          zoom={13} 
          style={{ height: '100%', width: '100%' }} 
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {pins.map(pin => (
            <Marker key={pin.id} position={pin.pos} icon={createCustomIcon(pin.icon, pin.color)}>
              <Popup className="accessible-popup">
                <div className="p-1 min-w-[150px]">
                  <h3 className="font-bold text-lg leading-tight mb-1">{pin.name}</h3>
                  <p className="text-sm text-slate-600 mb-3">Selo de Acessibilidade: <strong className={pin.color}>{pin.type}</strong></p>
                  <button 
                    onClick={() => onNavigate && onNavigate('details', pin.id)}
                    className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                  >
                    Ver Avaliações
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Search Bar Area (Bottom Third) */}
      <div className="absolute bottom-6 left-4 right-4 z-[1000]">
        <div className="bg-surface rounded-2xl shadow-lg p-2 border border-border flex items-center">
          <Search className="text-text-light ml-2" size={24} aria-hidden="true" />
          <input 
            type="text" 
            placeholder="Buscar locais acessíveis..." 
            className="flex-1 h-12 min-h-[48px] px-3 bg-transparent border-none focus:outline-none text-text"
            aria-label="Buscar locais acessíveis"
          />
          <button 
            className="w-12 h-12 min-h-[48px] min-w-[48px] flex items-center justify-center bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors"
            aria-label="Busca por voz"
          >
            <Mic size={24} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Floating Action Button */}
      <button 
        className="absolute bottom-24 right-4 z-[1000] w-14 h-14 min-h-[56px] min-w-[56px] bg-primary text-white rounded-full flex items-center justify-center shadow-xl hover:bg-primary-dark hover:scale-105 transition-all"
        aria-label="Cadastrar Novo Local"
      >
        <Plus size={32} aria-hidden="true" />
      </button>

    </div>
  );
}
