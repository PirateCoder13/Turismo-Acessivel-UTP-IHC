import { useState } from 'react';
import { AccessibilityProvider } from './contexts/AccessibilityContext';
import { TopBar } from './components/TopBar';
import { BottomNav } from './components/BottomNav';

// Screens
import { Home } from './screens/Home';
import { Details } from './screens/Details';
import { Form } from './screens/Form';
import { Ranking } from './screens/Ranking';

type Tab = 'home' | 'details' | 'form' | 'ranking';

function MainApp() {
  const [currentTab, setCurrentTab] = useState<Tab>('home');
  const [selectedPlaceId, setSelectedPlaceId] = useState<number>(1);

  const handleNavigate = (tab: Tab, placeId?: number) => {
    setCurrentTab(tab);
    if (placeId) {
      setSelectedPlaceId(placeId);
    }
  };

  return (
    <div className="flex flex-col h-screen w-full max-w-7xl mx-auto md:shadow-2xl relative overflow-hidden bg-background">
      <TopBar />
      
      {/* Responsive Content Area */}
      <div className="flex flex-1 overflow-hidden flex-col-reverse md:flex-row">
        <BottomNav currentTab={currentTab} onChangeTab={setCurrentTab} />
        
        <main className="flex-1 overflow-y-auto w-full relative">
          {currentTab === 'home' && <Home onNavigate={handleNavigate} />}
          {currentTab === 'details' && <Details placeId={selectedPlaceId} onNavigate={handleNavigate} />}
          {currentTab === 'form' && <Form />}
          {currentTab === 'ranking' && <Ranking />}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AccessibilityProvider>
      <MainApp />
    </AccessibilityProvider>
  );
}
