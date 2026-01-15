import React, { useState } from 'react';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Search } from 'lucide-react';
import alphabetData from '@/data/alphabet.json';

export default function AlphabetView() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAlphabet = alphabetData.alphabet.filter(
    (letter) =>
      letter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      letter.romanization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      letter.pronunciation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-[#591117] mb-2">
          Persisches Alphabet
        </h2>
        <p className="text-[#591117]/70">
          Das persische Alphabet besteht aus 32 Buchstaben, die von rechts nach links geschrieben werden.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#591117]/40 w-5 h-5" />
        <Input
          type="text"
          placeholder="Suche nach Buchstaben..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 border-[#591117]/20 focus:border-[#591117]"
        />
      </div>

      {/* Alphabet Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAlphabet.map((letter) => (
          <Card
            key={letter.id}
            className="p-6 bg-white border-2 border-[#591117]/10 hover:border-[#591117]/30 transition-all hover:shadow-lg"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="text-6xl text-[#591117] font-bold">
                {letter.letter}
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-[#591117]">
                  {letter.name}
                </div>
                <div className="text-sm text-[#591117]/60">
                  {letter.romanization}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-xs font-bold text-[#591117]/60 uppercase mb-1">
                  Aussprache
                </div>
                <div className="text-sm text-[#591117]">
                  {letter.pronunciation}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold text-[#591117]/60 uppercase mb-1">
                  Formen
                </div>
                <div className="flex gap-2 text-2xl text-[#591117]">
                  <span title="Isoliert">{letter.isolated}</span>
                  <span title="Initial">{letter.initial}</span>
                  <span title="Medial">{letter.medial}</span>
                  <span title="Final">{letter.final}</span>
                </div>
                <div className="text-xs text-[#591117]/50 mt-1">
                  isoliert • initial • medial • final
                </div>
              </div>

              <div className="pt-3 border-t border-[#591117]/10">
                <div className="text-xs font-bold text-[#591117]/60 uppercase mb-1">
                  Beispiel
                </div>
                <div className="text-sm text-[#591117] font-medium">
                  {letter.example}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredAlphabet.length === 0 && (
        <div className="text-center py-12 text-[#591117]/60">
          Keine Ergebnisse gefunden
        </div>
      )}
    </div>
  );
}
