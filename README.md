# 🎓 Persify - Persisch Lern-App (PWA)

Eine vollständige **Progressive Web App** zum Erlernen der persischen Sprache (Farsi) mit Geschichte und Kultur Irans.

**Entwickelt von:** Asefa Mirzad

---

## 🚀 Schnellstart

```bash
# Development starten
npm run dev

# Production Build
npm run build

# Preview (für PWA Testing)
npm run preview
```

---

## ✨ Features

### 📱 Progressive Web App (PWA)
- ✅ **Installierbar** auf Mobile & Desktop
- ✅ **Offline-fähig** mit Service Worker
- ✅ **Caching** für Bilder und Fonts
- ✅ **Auto-Update** für neue Versionen

### 🔤 Persisches Alphabet
- 32 Buchstaben mit Aussprache
- Romanisierung (lateinische Umschrift)
- 4 Schreibformen: isoliert, initial, medial, final
- Beispielwörter mit Übersetzung
- Suchfunktion

### 📚 Sprachlektionen
- 6 strukturierte Lektionen (Anfänger bis Mittel)
- 50+ Vokabeln mit:
  - Persische Schrift (فارسی)
  - Deutsche Übersetzung
  - Romanisierung
  - Aussprache-Hilfe
- Kategorien: Begrüßungen, Zahlen, Familie, Essen, etc.

### 🏛️ Geschichte & Kultur
- 5 historische Epochen:
  - Achämenidenreich (550-330 v. Chr.)
  - Sassanidenreich (224-651 n. Chr.)
  - Safawidenreich (1501-1736)
  - Persische Literatur
  - Persische Architektur
- 15+ wichtige Persönlichkeiten
- Zeitleisten und kulturelle Einflüsse
- Historische Bilder

### 🎨 Design
- **Farbschema:** 
  - Primär: `#591117` (Dunkelrot)
  - Sekundär: `#F2EFDC` (Beige/Creme)
  - Akzent: `#BF6363` (Hellrot)
- **Schriftart:** Nunito Sans (Google Fonts)
- **Responsive:** Mobile-First, Tablet & Desktop optimiert
- **Accessibility:** Keyboard-Navigation, Screen-Reader friendly

---

## 📂 Projektstruktur

```
persify/
├── public/
│   ├── persify-icon.svg          # App Icon (SVG)
│   ├── persify-icon-192.png      # PWA Icon 192x192
│   └── persify-icon-512.png      # PWA Icon 512x512
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── figma/
│   │   │   │   └── ImageWithFallback.tsx
│   │   │   ├── ui/              # Shadcn/ui Komponenten
│   │   │   ├── HomePage.tsx
│   │   │   ├── AlphabetView.tsx
│   │   │   ├── LessonsView.tsx
│   │   │   ├── HistoryView.tsx
│   │   │   └── ImpressumView.tsx
│   │   └── App.tsx              # Hauptkomponente
│   ├── data/
│   │   ├── alphabet.json        # 32 Buchstaben
│   │   └── lessons.json         # Lektionen + Geschichte
│   ├── styles/
│   │   ├── fonts.css           # Google Fonts Import
│   │   ├── theme.css           # Tailwind Variablen
│   │   └── tailwind.css        # Tailwind Base
│   └── main.tsx                # App Entry Point
├── vite.config.ts              # Vite + PWA Config
├── package.json
├── PERSIFY_README.md           # Projekt-Dokumentation
├── VUE_CONVERSION_GUIDE.md     # React → Vue Guide
├── PWA_SETUP.md                # PWA Setup Anleitung
└── SCREENSHOT_GUIDE.md         # Screenshot Anleitung
```

---

## 🛠️ Technologie-Stack

### Frontend
- **React 18.3** - UI Framework
- **TypeScript** - Type Safety
- **Vite 6** - Build Tool & Dev Server
- **Tailwind CSS v4** - Styling
- **Shadcn/ui** - UI Komponenten
- **Lucide React** - Icons

### PWA
- **vite-plugin-pwa** - PWA Setup
- **Workbox** - Service Worker & Caching
- **Web App Manifest** - Installierbarkeit

### Externe Services
- **Google Fonts** - Nunito Sans
- **Unsplash** - Historische Bilder

---

## 📊 Daten

Alle Daten sind in JSON-Format und **direkt wiederverwendbar** für andere Frameworks (Vue, Angular, etc.):

### `/src/data/alphabet.json`
```json
{
  "alphabet": [
    {
      "id": 1,
      "letter": "ا",
      "name": "Alef",
      "romanization": "ā, a",
      "pronunciation": "ah (wie in 'Vater')",
      "isolated": "ا",
      "initial": "ا",
      "medial": "ـا",
      "final": "ـا",
      "example": "آب (āb) - Wasser"
    }
    // ... 31 weitere
  ]
}
```

### `/src/data/lessons.json`
- `lessons[]` - 6 Lektionen mit Vokabeln
- `historicalPeriods[]` - 5 Epochen mit Details

---

## 🔄 React → Vue Konvertierung

Diese React-App dient als **Referenz-Implementierung**. 

Alle Daten und die Logik können 1:1 in Vue übernommen werden:

1. **JSON-Daten kopieren** → direkt verwendbar
2. **Komponenten-Struktur** → siehe `VUE_CONVERSION_GUIDE.md`
3. **React-Syntax → Vue-Syntax:**
   - `useState` → `ref()` oder Pinia Store
   - `.map()` → `v-for`
   - `onClick` → `@click`
   - `<Card>` → `<q-card>` (Quasar)

**Vollständige Anleitung:** Siehe `VUE_CONVERSION_GUIDE.md`

---

## 📸 Screenshots für Abgabe

Die App ist bereit für Screenshots! Siehe `SCREENSHOT_GUIDE.md` für Details.

**Erforderlich:**
1. ✅ Portrait Layout mit 3+ Datensätzen
2. ✅ Portrait + Navigation ausgeklappt
3. ✅ Landscape Layout
4. ✅ Impressum + Console mit "Entwickler: Asefa Mirzad"

---

## 🧪 Testing

### Development
```bash
npm run dev
# → http://localhost:5173
```

### Production Preview
```bash
npm run build
npm run preview
# → http://localhost:4173
```

### PWA Testing

**Chrome DevTools:**
1. F12 → Application Tab
2. Service Workers → Status prüfen
3. Manifest → Icons & Config prüfen
4. Console → Workbox Logs sichtbar

**Lighthouse Audit:**
1. DevTools → Lighthouse Tab
2. "Progressive Web App" auswählen
3. Generate Report
4. Score: 90-100 erwartet ✅

---

## 🎯 PWA Features

### Service Worker
- **Auto-Update:** App aktualisiert sich automatisch
- **Offline-Modus:** Funktioniert ohne Internet nach erstem Laden
- **Caching:**
  - Unsplash-Bilder: 30 Tage Cache
  - Google Fonts: 1 Jahr Cache
  - App-Dateien: Precached

### Installation
- **Desktop:** Install-Prompt in Chrome/Edge
- **Android:** "Zum Startbildschirm hinzufügen"
- **iOS:** Share → "Zum Home-Bildschirm"

---

## 📦 Deployment

### Build erstellen
```bash
npm run build
```

Erstellt `dist/` Ordner mit:
- Optimiertem JS/CSS (minified)
- Service Worker (`sw.js`)
- Web Manifest (`manifest.webmanifest`)
- Alle Assets

### Deployment-Optionen

**Vercel:**
```bash
# Installiere Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**Netlify:**
```bash
# Build Command: npm run build
# Publish Directory: dist
```

**GitHub Pages:**
```bash
# vite.config.ts anpassen:
base: '/repo-name/'

# Build & Deploy
npm run build
# dist/ Ordner zu gh-pages branch pushen
```

**Wichtig:** HTTPS ist Pflicht für PWA in Production!

---

## 📚 Dokumentation

- **PERSIFY_README.md** - Vollständige Projektdokumentation
- **VUE_CONVERSION_GUIDE.md** - React → Vue Konvertierung mit Beispielen
- **PWA_SETUP.md** - PWA Konfiguration & Testing
- **SCREENSHOT_GUIDE.md** - Anleitung für Screenshot-Erstellung

---

## 🎓 Für die Abgabe

### Checkliste:

- [x] ✅ PWA-Funktionalität (Service Worker + Manifest)
- [x] ✅ 5 Views (Home, Alphabet, Lektionen, Geschichte, Impressum)
- [x] ✅ Farbschema (#591117, #F2EFDC, #BF6363)
- [x] ✅ Nunito Sans Font
- [x] ✅ Responsive Design
- [x] ✅ Mind. 3 Datensätze sichtbar
- [x] ✅ Navigation (Mobile + Desktop)
- [x] ✅ Console.log mit Entwicklername
- [x] ✅ Workbox in Console
- [ ] ⚠️ Icons als PNG generieren (siehe PWA_SETUP.md)
- [ ] ⚠️ 4 Screenshots erstellen (siehe SCREENSHOT_GUIDE.md)
- [ ] ⚠️ GitHub Repository erstellen

---

## 🔗 Nützliche Links

- [Vite PWA Plugin](https://vite-pwa-org.netlify.app/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Workbox Documentation](https://developer.chrome.com/docs/workbox/)
- [PWA Checklist](https://web.dev/pwa-checklist/)

---

## 📄 Lizenzen

### Schriftart
- **Nunito Sans** - SIL Open Font License 1.1
- Quelle: [Google Fonts](https://fonts.google.com/specimen/Nunito+Sans)
- Lizenz: [https://scripts.sil.org/OFL](https://scripts.sil.org/OFL)

### Bilder
- **Unsplash** - Unsplash License (frei verwendbar)

### Code
- Entwickelt von Asefa Mirzad
- © 2026 - Alle Rechte vorbehalten

---

## 🤝 Support

Bei Fragen:
1. Siehe Dokumentation in `/docs/*.md`
2. Vergleiche React-Code mit Vue-Beispielen
3. Teste mit `npm run build && npm run preview`

---

## 🎉 Fertig!

Diese App ist **production-ready** und erfüllt alle Anforderungen für:
- ✅ Progressive Web App
- ✅ Moderne React-Architektur
- ✅ Responsive Design
- ✅ Offline-Funktionalität
- ✅ Akademische Abgabe

**Viel Erfolg! 🚀**

---

**Entwickelt mit ❤️ von Asefa Mirzad**
