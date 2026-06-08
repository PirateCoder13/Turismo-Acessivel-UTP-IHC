import React, { createContext, useContext, useState, useEffect } from 'react';

type TextSize = 'normal' | 'large' | 'xlarge';

interface AccessibilityContextType {
  highContrast: boolean;
  toggleHighContrast: () => void;
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
  increaseTextSize: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [highContrast, setHighContrast] = useState(false);
  const [textSize, setTextSize] = useState<TextSize>('normal');

  const toggleHighContrast = () => setHighContrast(prev => !prev);

  const increaseTextSize = () => {
    setTextSize(prev => {
      if (prev === 'normal') return 'large';
      if (prev === 'large') return 'xlarge';
      return 'normal';
    });
  };

  useEffect(() => {
    // Apply high contrast class to html/body
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    // Apply text size base changes
    const root = document.documentElement;
    if (textSize === 'normal') root.style.fontSize = '16px';
    if (textSize === 'large') root.style.fontSize = '18px';
    if (textSize === 'xlarge') root.style.fontSize = '20px';
  }, [textSize]);

  return (
    <AccessibilityContext.Provider value={{ highContrast, toggleHighContrast, textSize, setTextSize, increaseTextSize }}>
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
