import { useState } from 'react';
import { Accessibility, Volume2, Type, Eye, ZoomIn, Contrast } from 'lucide-react';
import { useAccessibility } from '../contexts/AccessibilityContext';

export default function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    highContrast, toggleHighContrast, 
    dyslexiaFont, toggleDyslexiaFont, 
    screenReader, toggleScreenReader,
    increaseTextSize,
    colorblindMode, setColorblindMode
  } = useAccessibility();

  return (
    <>
      {/* TopBar Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-2 bg-black/10 rounded-lg hover:bg-black/20 focus-visible:bg-black/20 transition-colors font-semibold"
        aria-label="Abrir Painel de Acessibilidade"
      >
        <Accessibility size={20} />
        <span className="hidden sm:inline">Acessibilidade</span>
      </button>

      {/* Modal / Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
              <h2 className="text-xl font-black flex items-center gap-2">
                <Accessibility size={24} /> Recursos de Acessibilidade
              </h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 font-bold text-xl px-2"
                aria-label="Fechar painel"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              {/* Leitor de Tela */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600 dark:text-green-400">
                    <Volume2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Leitor de Tela (TTS)</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Lê o texto ao tocar na tela</p>
                  </div>
                </div>
                <button 
                  onClick={toggleScreenReader}
                  className={`w-14 h-8 rounded-full transition-colors relative ${screenReader ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'}`}
                  aria-label="Alternar leitor de tela"
                >
                  <div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-transform ${screenReader ? 'translate-x-7' : 'translate-x-1'}`} />
                </button>
              </div>

              {/* Fonte Dislexia */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg text-purple-600 dark:text-purple-400">
                    <Type size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Fonte para Dislexia</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Fonte otimizada para leitura</p>
                  </div>
                </div>
                <button 
                  onClick={toggleDyslexiaFont}
                  className={`w-14 h-8 rounded-full transition-colors relative ${dyslexiaFont ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'}`}
                  aria-label="Alternar fonte para dislexia"
                >
                  <div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-transform ${dyslexiaFont ? 'translate-x-7' : 'translate-x-1'}`} />
                </button>
              </div>

              {/* Alto Contraste */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg text-yellow-600 dark:text-yellow-400">
                    <Contrast size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Alto Contraste</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Aumenta a legibilidade</p>
                  </div>
                </div>
                <button 
                  onClick={toggleHighContrast}
                  className={`w-14 h-8 rounded-full transition-colors relative ${highContrast ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'}`}
                  aria-label="Alternar alto contraste"
                >
                  <div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-transform ${highContrast ? 'translate-x-7' : 'translate-x-1'}`} />
                </button>
              </div>

              {/* Tamanho da Fonte */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg text-red-600 dark:text-red-400">
                    <ZoomIn size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Tamanho do Texto</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Alterna entre 3 tamanhos</p>
                  </div>
                </div>
                <button 
                  onClick={increaseTextSize}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
                  aria-label="Aumentar tamanho do texto"
                >
                  Aumentar
                </button>
              </div>

              {/* Filtros de Daltonismo */}
              <div className="pt-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg text-orange-600 dark:text-orange-400">
                    <Eye size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Filtro de Daltonismo</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Ajuste de cores de tela</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => setColorblindMode('none')}
                    className={`p-2 rounded-lg border-2 text-sm font-semibold transition-colors ${colorblindMode === 'none' ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400'}`}
                  >
                    Padrão
                  </button>
                  <button 
                    onClick={() => setColorblindMode('protanopia')}
                    className={`p-2 rounded-lg border-2 text-sm font-semibold transition-colors ${colorblindMode === 'protanopia' ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400'}`}
                  >
                    Protanopia
                  </button>
                  <button 
                    onClick={() => setColorblindMode('deuteranopia')}
                    className={`p-2 rounded-lg border-2 text-sm font-semibold transition-colors ${colorblindMode === 'deuteranopia' ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400'}`}
                  >
                    Deuteranopia
                  </button>
                  <button 
                    onClick={() => setColorblindMode('tritanopia')}
                    className={`p-2 rounded-lg border-2 text-sm font-semibold transition-colors ${colorblindMode === 'tritanopia' ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400'}`}
                  >
                    Tritanopia
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
