import React, { useState } from 'react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { ChevronDown, ChevronUp, Calendar, Users, Lightbulb } from 'lucide-react';
import lessonsData from '@/data/lessons.json';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const periodImages = [
  'https://images.unsplash.com/photo-1686028731741-d5771a9f665e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwcGVyc2lhJTIwcGVyc2Vwb2xpc3xlbnwxfHx8fDE3Njg1Nzk1MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1679313391003-2fa836a0104c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXNzYW5pZCUyMGVtcGlyZSUyMHBlcnNpYXxlbnwxfHx8fDE3Njg1Nzk1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1675443434378-179c4ffc14f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhdmlkJTIwaXNmYWhhbiUyMGlyYW58ZW58MXx8fHwxNzY4NTc5NTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1720700955600-a21cd215d1a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzaWFuJTIwcG9ldHJ5JTIwbWFudXNjcmlwdHxlbnwxfHx8fDE3Njg1Nzk1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1649135710412-b5900de2708a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzaWFuJTIwYXJjaGl0ZWN0dXJlJTIwaXNmYWhhbiUyMG1vc3F1ZXxlbnwxfHx8fDE3Njg1Nzk1MjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
];

export default function HistoryView() {
  const [expandedPeriod, setExpandedPeriod] = useState<number | null>(null);

  const togglePeriod = (id: number) => {
    setExpandedPeriod(expandedPeriod === id ? null : id);
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'hoch':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'mittel':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-[#591117] mb-2">
          Geschichte & Kultur Irans
        </h2>
        <p className="text-[#591117]/70">
          Entdecke die faszinierende Geschichte Persiens von der Antike bis heute.
        </p>
      </div>

      {/* Historical Periods */}
      <div className="space-y-4">
        {lessonsData.historicalPeriods.map((period, index) => (
          <Card
            key={period.id}
            className="bg-white border-2 border-[#591117]/10 overflow-hidden"
          >
            <div
              className="cursor-pointer hover:bg-[#F2EFDC]/50 transition-colors"
              onClick={() => togglePeriod(period.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={periodImages[index]}
                  alt={period.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{period.title}</h3>
                  <p className="text-sm opacity-90">{period.period}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge className={getImportanceColor(period.importance)}>
                    {period.importance === 'hoch' ? 'Hohe Bedeutung' : 'Mittlere Bedeutung'}
                  </Badge>
                  <Badge variant="outline" className="border-[#591117]/30 text-[#591117]">
                    {period.category}
                  </Badge>
                </div>
                <p className="text-[#591117]/80">{period.description}</p>
                <div className="flex items-center justify-end mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#591117]"
                  >
                    {expandedPeriod === period.id ? (
                      <>
                        Weniger <ChevronUp className="w-4 h-4 ml-1" />
                      </>
                    ) : (
                      <>
                        Mehr erfahren <ChevronDown className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {expandedPeriod === period.id && (
              <div className="px-6 pb-6 border-t border-[#591117]/10">
                {/* Key Figures */}
                <div className="pt-6 space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-[#591117]" />
                    <h4 className="text-lg font-bold text-[#591117]">
                      Wichtige Persönlichkeiten
                    </h4>
                  </div>
                  {period.keyFigures.map((figure, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#F2EFDC]/50 rounded-lg border border-[#591117]/10"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <h5 className="font-bold text-[#591117]">
                            {figure.name}
                          </h5>
                          <div className="text-2xl text-[#591117]/70">
                            {figure.nameFarsi}
                          </div>
                        </div>
                        <Badge variant="outline" className="border-[#591117]/30 text-[#591117]">
                          {figure.years}
                        </Badge>
                      </div>
                      <div className="text-sm text-[#591117]/70 mb-2">
                        {figure.role}
                      </div>
                      <div className="text-sm text-[#591117]">
                        {figure.achievement}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Events */}
                <div className="pt-6 space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-[#591117]" />
                    <h4 className="text-lg font-bold text-[#591117]">
                      Wichtige Ereignisse
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {period.keyEvents.map((event, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 p-3 bg-[#F2EFDC]/30 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-[#591117] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-[#591117]">{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cultural Impact */}
                <div className="pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-5 h-5 text-[#591117]" />
                    <h4 className="text-lg font-bold text-[#591117]">
                      Kultureller Einfluss
                    </h4>
                  </div>
                  <p className="text-sm text-[#591117] p-4 bg-[#BF6363]/10 rounded-lg border border-[#BF6363]/20">
                    {period.culturalImpact}
                  </p>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
