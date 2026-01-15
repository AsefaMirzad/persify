import React, { useState, useEffect } from 'react';
import { Book, Globe, Home, Menu, X, Info } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import HomePage from '@/app/components/HomePage';
import AlphabetView from '@/app/components/AlphabetView';
import LessonsView from '@/app/components/LessonsView';
import HistoryView from '@/app/components/HistoryView';
import ImpressumView from '@/app/components/ImpressumView';

type View = 'home' | 'alphabet' | 'lessons' | 'history' | 'impressum';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Log developer name on mount
  useEffect(() => {
    console.log('Entwickler: Asefa Mirzad');
  }, []);

  const navigation = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'alphabet', label: 'Alphabet', icon: Book },
    { id: 'lessons', label: 'Lektionen', icon: Globe },
    { id: 'history', label: 'Geschichte', icon: Globe },
    { id: 'impressum', label: 'Impressum', icon: Info },
  ];

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onNavigate={setCurrentView} />;
      case 'alphabet':
        return <AlphabetView />;
      case 'lessons':
        return <LessonsView />;
      case 'history':
        return <HistoryView />;
      case 'impressum':
        return <ImpressumView />;
      default:
        return <HomePage onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F2EFDC] font-['Nunito_Sans']">
      {/* Header */}
      <header className="bg-[#591117] text-[#F2EFDC] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#BF6363] rounded-lg flex items-center justify-center">
              <span className="text-2xl">پ</span>
            </div>
            <h1 className="text-2xl font-bold">Persify</h1>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#F2EFDC] hover:bg-[#BF6363]"
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentView === item.id ? 'secondary' : 'ghost'}
                  onClick={() => setCurrentView(item.id as View)}
                  className={`flex items-center gap-2 ${
                    currentView === item.id 
                      ? 'bg-[#BF6363] text-[#F2EFDC]' 
                      : 'text-[#F2EFDC] hover:bg-[#BF6363]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Button>
              );
            })}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="lg:hidden border-t border-[#BF6363] bg-[#591117]">
            <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col gap-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={currentView === item.id ? 'secondary' : 'ghost'}
                    onClick={() => {
                      setCurrentView(item.id as View);
                      setMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 justify-start ${
                      currentView === item.id 
                        ? 'bg-[#BF6363] text-[#F2EFDC]' 
                        : 'text-[#F2EFDC] hover:bg-[#BF6363]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {renderView()}
      </main>

      {/* Footer */}
      <footer className="bg-[#591117] text-[#F2EFDC] py-4 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">© 2026 Persify - Entwickelt von Asefa Mirzad</p>
        </div>
      </footer>
    </div>
  );
}
