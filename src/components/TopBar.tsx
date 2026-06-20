import { useState } from 'react';
import { Info } from 'lucide-react';

export function TopBar() {
  const [showTeam, setShowTeam] = useState(false);

  return (
    <>
      <header className="bg-primary text-white p-4 flex items-center justify-between shadow-md z-10 relative">
        <h1 className="text-xl font-bold tracking-tight">Turismo Acessível</h1>
        
        <button
          onClick={() => setShowTeam(true)}
          className="flex items-center gap-2 px-3 py-2 bg-black/10 rounded-lg hover:bg-black/20 focus-visible:bg-black/20 transition-colors font-semibold"
          aria-label="Ver informações da equipe"
        >
          <Info size={20} aria-hidden="true" />
          <span className="hidden sm:inline">Equipe</span>
        </button>
      </header>

      {showTeam && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl animate-in zoom-in p-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Sobre o Projeto</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Aplicativo de Interface Humano-Computador desenvolvido para a Universidade Tuiuti do Paraná (UTP).
            </p>
            
            <h3 className="font-bold text-gray-900 dark:text-white mb-2 border-b pb-2">Integrantes da Equipe:</h3>
            <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
              <li>• Eduarda Horning Bzunek</li>
              <li>• João Gualberto Boissa Netto</li>
              <li>• João Vitor da Mota Mattos</li>
              <li>• José Otávio Chacorowski Raimundo</li>
              <li>• Yasmin dos Santos Pereira</li>
            </ul>

            <button 
              onClick={() => setShowTeam(false)}
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
