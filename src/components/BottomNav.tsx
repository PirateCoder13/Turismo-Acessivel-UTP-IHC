import React from 'react';
import { Map, MapPin, ClipboardList, Trophy } from 'lucide-react';

type Tab = 'home' | 'details' | 'form' | 'ranking';

interface BottomNavProps {
  currentTab: Tab;
  onChangeTab: (tab: Tab) => void;
}

export function BottomNav({ currentTab, onChangeTab }: BottomNavProps) {
  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Mapa', icon: <Map size={24} /> },
    { id: 'details', label: 'Local', icon: <MapPin size={24} /> },
    { id: 'form', label: 'Avaliar', icon: <ClipboardList size={24} /> },
    { id: 'ranking', label: 'Ranking', icon: <Trophy size={24} /> },
  ];

  return (
    <nav className="bg-surface border-t md:border-t-0 md:border-r border-border flex md:flex-col justify-around md:justify-start items-center md:items-stretch pb-safe-area md:pb-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:shadow-[4px_0_6px_-1px_rgba(0,0,0,0.1)] z-[1000] relative md:w-24 lg:w-64 md:pt-4 shrink-0">
      {tabs.map((tab) => {
        const isActive = currentTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChangeTab(tab.id)}
            aria-label={`Ir para a aba ${tab.label}`}
            aria-current={isActive ? 'page' : undefined}
            className={`
              flex flex-col md:flex-row items-center justify-center md:justify-center lg:justify-start 
              w-full h-16 min-h-[64px] md:h-20 lg:px-8
              transition-all
              ${isActive ? 'text-primary font-bold md:bg-primary/5 md:border-r-4 md:border-primary' : 'text-text-light hover:text-text hover:bg-slate-50'}
            `}
          >
            <div aria-hidden="true" className={`mb-1 md:mb-0 lg:mr-4 ${isActive ? 'scale-110 transition-transform' : ''}`}>
              {tab.icon}
            </div>
            <span className="text-xs md:text-sm lg:text-base md:hidden lg:block">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
