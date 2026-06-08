import { Medal, Trophy, User, ChevronRight, Award } from 'lucide-react';

interface RankingProps {
  globalScore?: number;
}

export function Ranking({ globalScore = 0 }: RankingProps) {
  let seal = 'Nenhum';
  let sealColor = 'text-slate-400';
  let Icon = Award;

  if (globalScore >= 1000) {
    seal = 'Platina';
    sealColor = 'text-blue-400';
    Icon = Trophy;
  } else if (globalScore >= 100) {
    seal = 'Ouro';
    sealColor = 'text-amber-500';
    Icon = Trophy;
  } else if (globalScore >= 50) {
    seal = 'Prata';
    sealColor = 'text-slate-400';
    Icon = Medal;
  } else if (globalScore > 0) {
    seal = 'Bronze';
    sealColor = 'text-amber-700';
    Icon = Medal;
  }

  const ranking = [
    { id: 1, name: 'Museu de Arte de Curitiba', points: 98, type: 'Platina' },
    { id: 2, name: 'Parque Barigui (Pista Central)', points: 92, type: 'Platina' },
    { id: 3, name: 'Shopping Estação', points: 88, type: 'Ouro' },
    { id: 4, name: 'Teatro Guaíra', points: 85, type: 'Ouro' },
    { id: 5, name: 'Jardim Botânico', points: 79, type: 'Prata' },
  ];

  return (
    <div className="flex flex-col bg-background h-full overflow-y-auto">
      
      {/* User Profile Header */}
      <div className="bg-primary text-white p-6 rounded-b-3xl shadow-md mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-white/20 p-3 rounded-full">
            <User size={32} aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Ana Costa</h2>
            <p className="text-primary-foreground/80">Colaboradora Ativa</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 text-text flex items-center justify-between shadow-inner">
          <div>
            <p className="text-sm text-text-light font-bold uppercase tracking-wider">Pontuação</p>
            <p className="text-3xl font-black text-primary">{globalScore} <span className="text-lg font-normal text-text-light">pts</span></p>
          </div>
          <div className="text-center">
            <Icon size={40} className={`${sealColor} mx-auto mb-1`} aria-hidden="true" />
            <span className={`text-xs font-bold ${sealColor}`}>Selo {seal}</span>
          </div>
        </div>
      </div>

      <div className="p-4 pb-20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-text flex items-center">
            <Trophy className="text-warning mr-2" size={28} aria-hidden="true" />
            Ranking Municipal
          </h2>
        </div>

        {/* Ranking List */}
        <ol className="space-y-3" aria-label="Ranking dos locais mais acessíveis">
          {ranking.map((place, index) => (
            <li 
              key={place.id} 
              className="bg-surface p-4 rounded-xl shadow-sm border border-border flex items-center min-h-[72px]"
            >
              {/* Position */}
              <div className="w-8 font-black text-2xl text-text-light/50 mr-3">
                {index + 1}º
              </div>
              
              {/* Info */}
              <div className="flex-1">
                <h3 className="font-bold text-text text-lg leading-tight">{place.name}</h3>
                <p className="text-sm text-text-light mt-1">
                  Selo {place.type} • {place.points} pts
                </p>
              </div>

              <ChevronRight className="text-text-light/40" size={24} aria-hidden="true" />
            </li>
          ))}
        </ol>

        <button 
          className="w-full mt-6 min-h-[56px] text-primary font-bold border-2 border-primary rounded-xl hover:bg-primary/5 transition-colors focus-visible:ring-4 focus-visible:ring-primary/50"
        >
          Ver Ranking Completo
        </button>
      </div>

    </div>
  );
}
