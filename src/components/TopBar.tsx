import AccessibilityPanel from './AccessibilityPanel';

export function TopBar() {
  return (
    <header className="bg-primary text-white p-4 flex items-center justify-between shadow-md z-10 relative">
      <h1 className="text-xl font-bold tracking-tight">Turismo Acessível</h1>
      
      <AccessibilityPanel />
    </header>
  );
}
