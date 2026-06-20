import React, { createContext, useContext, useState, useEffect } from 'react';

type TextSize = 'normal' | 'large' | 'xlarge';
type ColorblindMode = 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';

interface AccessibilityContextType {
  highContrast: boolean;
  toggleHighContrast: () => void;
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
  increaseTextSize: () => void;
  dyslexiaFont: boolean;
  toggleDyslexiaFont: () => void;
  screenReader: boolean;
  toggleScreenReader: () => void;
  colorblindMode: ColorblindMode;
  setColorblindMode: (mode: ColorblindMode) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [highContrast, setHighContrast] = useState(false);
  const [textSize, setTextSize] = useState<TextSize>('normal');
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [screenReader, setScreenReader] = useState(false);
  const [colorblindMode, setColorblindMode] = useState<ColorblindMode>('none');

  const toggleHighContrast = () => setHighContrast(prev => !prev);
  const toggleDyslexiaFont = () => setDyslexiaFont(prev => !prev);
  const toggleScreenReader = () => setScreenReader(prev => !prev);

  const increaseTextSize = () => {
    setTextSize(prev => {
      if (prev === 'normal') return 'large';
      if (prev === 'large') return 'xlarge';
      return 'normal';
    });
  };

  useEffect(() => {
    if (highContrast) document.documentElement.classList.add('high-contrast');
    else document.documentElement.classList.remove('high-contrast');
  }, [highContrast]);

  useEffect(() => {
    if (dyslexiaFont) document.documentElement.classList.add('dyslexia-font');
    else document.documentElement.classList.remove('dyslexia-font');
  }, [dyslexiaFont]);

  useEffect(() => {
    document.documentElement.classList.remove('cb-protanopia', 'cb-deuteranopia', 'cb-tritanopia');
    if (colorblindMode !== 'none') {
      document.documentElement.classList.add(`cb-${colorblindMode}`);
    }
  }, [colorblindMode]);

  useEffect(() => {
    const root = document.documentElement;
    if (textSize === 'normal') root.style.fontSize = '16px';
    if (textSize === 'large') root.style.fontSize = '18px';
    if (textSize === 'xlarge') root.style.fontSize = '20px';
  }, [textSize]);

  // Leitor de tela simples que lê os elementos com aria-label ou texto clicado
  useEffect(() => {
    if (!screenReader) return;

    const handleInteraction = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      const textToRead = target.getAttribute('aria-label') || target.innerText || target.textContent;
      
      if (textToRead && textToRead.trim().length > 0) {
        window.speechSynthesis.cancel(); // Parar o anterior
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.lang = 'pt-BR';
        window.speechSynthesis.speak(utterance);
      }
    };

    document.addEventListener('click', handleInteraction);
    return () => {
      document.removeEventListener('click', handleInteraction);
      window.speechSynthesis.cancel();
    };
  }, [screenReader]);

  return (
    <AccessibilityContext.Provider value={{ 
      highContrast, toggleHighContrast, 
      textSize, setTextSize, increaseTextSize,
      dyslexiaFont, toggleDyslexiaFont,
      screenReader, toggleScreenReader,
      colorblindMode, setColorblindMode
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}
