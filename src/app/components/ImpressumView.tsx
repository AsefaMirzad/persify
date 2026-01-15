import React, { useEffect } from 'react';
import { Card } from '@/app/components/ui/card';
import { Mail, User, Code, Github } from 'lucide-react';

export default function ImpressumView() {
  useEffect(() => {
    console.log('Entwickler: Asefa Mirzad');
  }, []);

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold text-[#591117] mb-2">
          Impressum
        </h2>
        <p className="text-[#591117]/70">
          Angaben gemäß § 5 TMG
        </p>
      </div>

      <Card className="p-8 bg-white border-2 border-[#591117]/10">
        <div className="space-y-6">
          {/* Developer Info */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#591117] rounded-lg flex items-center justify-center flex-shrink-0">
              <User className="w-6 h-6 text-[#F2EFDC]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#591117] mb-2">
                Entwickler
              </h3>
              <p className="text-lg text-[#591117]">
                Asefa Mirzad
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#591117] rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-[#F2EFDC]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#591117] mb-2">
                Kontakt
              </h3>
              <p className="text-[#591117]/80">
                E-Mail: kontakt@persify.app
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#591117] rounded-lg flex items-center justify-center flex-shrink-0">
              <Code className="w-6 h-6 text-[#F2EFDC]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#591117] mb-2">
                Technologie
              </h3>
              <p className="text-[#591117]/80 mb-2">
                Diese PWA wurde entwickelt mit:
              </p>
              <ul className="list-disc list-inside space-y-1 text-[#591117]/70">
                <li>Vue 3 + Quasar Framework (Original)</li>
                <li>React + Vite (Demo-Version)</li>
                <li>Vite PWA Plugin</li>
                <li>Workbox für Service Worker</li>
              </ul>
            </div>
          </div>

          {/* License */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#591117] rounded-lg flex items-center justify-center flex-shrink-0">
              <Github className="w-6 h-6 text-[#F2EFDC]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#591117] mb-2">
                Schriftart
              </h3>
              <p className="text-[#591117]/80">
                Nunito Sans Regular & Bold
              </p>
              <p className="text-sm text-[#591117]/60 mt-1">
                Lizenz: SIL Open Font License 1.1
                <br />
                Quelle:{' '}
                <a
                  href="https://fonts.google.com/specimen/Nunito+Sans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#BF6363] hover:underline"
                >
                  Google Fonts
                </a>
                <br />
                Lizenzlink:{' '}
                <a
                  href="https://scripts.sil.org/OFL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#BF6363] hover:underline"
                >
                  https://scripts.sil.org/OFL
                </a>
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-[#591117]/10">
            <p className="text-sm text-[#591117]/60">
              © 2026 Persify. Alle Rechte vorbehalten.
            </p>
            <p className="text-sm text-[#591117]/60 mt-2">
              Die historischen Informationen und Sprachinhalte dienen ausschließlich 
              Bildungszwecken. Bilder via Unsplash.
            </p>
          </div>

          {/* Console Log Info */}
          <div className="p-4 bg-[#BF6363]/10 rounded-lg border border-[#BF6363]/20">
            <p className="text-sm text-[#591117]">
              📝 <strong>Hinweis:</strong> Der Entwicklername wird in der Browser-Console 
              ausgegeben (siehe DevTools → Console).
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
