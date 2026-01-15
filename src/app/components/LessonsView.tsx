import React, { useState } from 'react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { ChevronDown, ChevronUp, Clock, BookOpen } from 'lucide-react';
import lessonsData from '@/data/lessons.json';

export default function LessonsView() {
  const [expandedLesson, setExpandedLesson] = useState<number | null>(null);

  const toggleLesson = (id: number) => {
    setExpandedLesson(expandedLesson === id ? null : id);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Anfänger':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'Mittel':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Fortgeschritten':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-[#591117] mb-2">
          Sprachlektionen
        </h2>
        <p className="text-[#591117]/70">
          Lerne Persisch Schritt für Schritt mit unseren strukturierten Lektionen.
        </p>
      </div>

      {/* Lessons List */}
      <div className="space-y-4">
        {lessonsData.lessons.map((lesson) => (
          <Card
            key={lesson.id}
            className="bg-white border-2 border-[#591117]/10 overflow-hidden"
          >
            <div
              className="p-6 cursor-pointer hover:bg-[#F2EFDC]/50 transition-colors"
              onClick={() => toggleLesson(lesson.id)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#591117] rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-[#F2EFDC]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#591117]">
                        {lesson.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge className={getLevelColor(lesson.level)}>
                      {lesson.level}
                    </Badge>
                    <Badge variant="outline" className="border-[#591117]/30 text-[#591117]">
                      <Clock className="w-3 h-3 mr-1" />
                      {lesson.duration}
                    </Badge>
                    <Badge variant="outline" className="border-[#591117]/30 text-[#591117]">
                      {lesson.vocabulary.length} Wörter
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#591117] flex-shrink-0"
                >
                  {expandedLesson === lesson.id ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>

            {expandedLesson === lesson.id && (
              <div className="px-6 pb-6 border-t border-[#591117]/10">
                <div className="pt-6 space-y-3">
                  {lesson.vocabulary.map((word, index) => (
                    <div
                      key={index}
                      className="p-4 bg-[#F2EFDC]/50 rounded-lg border border-[#591117]/10"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <div className="text-3xl text-[#591117] font-bold min-w-[100px]">
                          {word.farsi}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-bold text-[#591117]">
                              {word.german}
                            </span>
                            <span className="text-sm text-[#591117]/60">
                              ({word.romanization})
                            </span>
                          </div>
                          <div className="text-sm text-[#591117]/70">
                            🔊 {word.pronunciation}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
