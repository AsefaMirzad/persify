import React from 'react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { BookOpen, Globe2, Languages, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigate: (view: 'alphabet' | 'lessons' | 'history') => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: Languages,
      title: 'Persisches Alphabet',
      description: 'Lerne alle 32 Buchstaben mit Aussprache und Romanisierung',
      view: 'alphabet' as const,
      color: 'bg-[#BF6363]',
    },
    {
      icon: BookOpen,
      title: 'Sprachlektionen',
      description: 'Interaktive Lektionen für Anfänger und Fortgeschrittene',
      view: 'lessons' as const,
      color: 'bg-[#591117]',
    },
    {
      icon: Globe2,
      title: 'Iranische Geschichte',
      description: 'Entdecke die reiche Kultur und Geschichte Persiens',
      view: 'history' as const,
      color: 'bg-[#BF6363]',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-[#591117] rounded-2xl flex items-center justify-center shadow-xl">
            <span className="text-6xl text-[#F2EFDC]">پ</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#591117] mb-4">
          Willkommen bei Persify
        </h1>
        <p className="text-lg text-[#591117]/80 max-w-2xl mx-auto">
          Lerne Persisch (Farsi) auf interaktive Weise und entdecke die faszinierende 
          Geschichte und Kultur Irans
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card
              key={feature.title}
              className="p-6 bg-white border-2 border-[#591117]/10 hover:border-[#591117]/30 transition-all hover:shadow-lg cursor-pointer"
              onClick={() => onNavigate(feature.view)}
            >
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-[#F2EFDC]" />
              </div>
              <h3 className="text-xl font-bold text-[#591117] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#591117]/70 mb-4">
                {feature.description}
              </p>
              <Button 
                variant="outline" 
                className="w-full border-[#591117] text-[#591117] hover:bg-[#591117] hover:text-[#F2EFDC]"
              >
                Entdecken
              </Button>
            </Card>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
        <div className="text-center p-4 bg-white rounded-lg shadow">
          <div className="text-3xl font-bold text-[#591117]">32</div>
          <div className="text-sm text-[#591117]/70">Buchstaben</div>
        </div>
        <div className="text-center p-4 bg-white rounded-lg shadow">
          <div className="text-3xl font-bold text-[#591117]">6</div>
          <div className="text-sm text-[#591117]/70">Lektionen</div>
        </div>
        <div className="text-center p-4 bg-white rounded-lg shadow">
          <div className="text-3xl font-bold text-[#591117]">5</div>
          <div className="text-sm text-[#591117]/70">Epochen</div>
        </div>
        <div className="text-center p-4 bg-white rounded-lg shadow">
          <div className="text-3xl font-bold text-[#591117]">∞</div>
          <div className="text-sm text-[#591117]/70">Möglichkeiten</div>
        </div>
      </div>

      {/* About Section */}
      <Card className="p-8 bg-white border-2 border-[#591117]/10">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#591117] rounded-lg flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-6 h-6 text-[#F2EFDC]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#591117] mb-3">
              Über Persify
            </h3>
            <p className="text-[#591117]/80 leading-relaxed">
              Persify ist eine moderne Lern-App, die Sprachunterricht mit kultureller 
              Bildung verbindet. Entdecke die Schönheit der persischen Sprache und tauche 
              ein in die reiche Geschichte Irans – von den Achämeniden bis zur persischen 
              Literatur. Jede Lektion kombiniert praktische Sprachkenntnisse mit 
              faszinierenden historischen Einblicken.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
