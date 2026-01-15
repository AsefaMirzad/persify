# Persify - Persisch Lern-App

Eine interaktive Progressive Web App (PWA) zum Erlernen der persischen Sprache (Farsi) mit historischen und kulturellen Inhalten über Iran.

**Entwickelt von:** Asefa Mirzad

---

## 🎨 Farbschema

- **Primär (Dunkelrot):** `#591117`
- **Sekundär (Beige/Creme):** `#F2EFDC`
- **Akzent (Hellrot):** `#BF6363`

## 🔤 Schriftart

- **Nunito Sans** (Regular & Bold)
- Lizenz: SIL Open Font License 1.1
- Quelle: [Google Fonts](https://fonts.google.com/specimen/Nunito+Sans)

---

## 📂 Features

### ✅ Implementiert

1. **Persisches Alphabet**
   - Alle 32 Buchstaben
   - Aussprache auf Deutsch
   - Romanisierung
   - 4 Formen: isoliert, initial, medial, final
   - Beispielwörter

2. **Sprachlektionen** 
   - 6 strukturierte Lektionen (Anfänger bis Mittel)
   - Vokabeln mit Farsi, Deutsch, Romanisierung & Aussprache
   - Kategorien: Begrüßungen, Zahlen, Familie, Essen, etc.

3. **Geschichte & Kultur**
   - 5 historische Epochen (Achämeniden, Sassaniden, Safawiden, etc.)
   - Wichtige Persönlichkeiten mit persischen Namen
   - Zeitleisten & kulturelle Bedeutung
   - Bilder von historischen Orten

4. **Responsive Design**
   - Mobile-First Ansatz
   - Tablet & Desktop optimiert
   - Portrait & Landscape Layouts
   - Sticky Navigation

5. **Impressum**
   - Entwickler-Informationen
   - Technologie-Stack
   - Lizenzen
   - Console Log beim Laden

---

## 🗂️ JSON Daten

Die kompletten Daten befinden sich in:

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
    },
    // ... 32 Buchstaben insgesamt
  ]
}
```

### `/src/data/lessons.json`
Enthält:
- `lessons[]` - 6 Lektionen mit Vokabeln
- `historicalPeriods[]` - 5 Epochen mit Details

**Diese JSON-Dateien kannst du direkt in deiner Vue-App verwenden!**

---

## 🔄 Übertragung zu Vue + Quasar

### Schritt 1: JSON-Daten kopieren

Kopiere die beiden JSON-Dateien:
- `/src/data/alphabet.json` → in deinen Vue-Projektordner
- `/src/data/lessons.json` → in deinen Vue-Projektordner

### Schritt 2: Pinia Store erstellen (anstatt React useState)

**React:**
```tsx
const [currentView, setCurrentView] = useState('home');
```

**Vue (Pinia):**
```javascript
// stores/appStore.js
import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
  state: () => ({
    currentView: 'home',
  }),
  actions: {
    setView(view) {
      this.currentView = view;
    }
  }
});
```

### Schritt 3: Komponenten-Struktur

**React-Komponenten → Vue-Komponenten:**

| React | Vue |
|-------|-----|
| `App.tsx` | `App.vue` |
| `HomePage.tsx` | `views/HomeView.vue` |
| `AlphabetView.tsx` | `views/AlphabetView.vue` |
| `LessonsView.tsx` | `views/LessonsView.vue` |
| `HistoryView.tsx` | `views/HistoryView.vue` |
| `ImpressumView.tsx` | `views/ImpressumView.vue` |

### Schritt 4: Syntax-Unterschiede

#### JSON Import

**React:**
```tsx
import alphabetData from '@/data/alphabet.json';
const letters = alphabetData.alphabet;
```

**Vue:**
```javascript
import alphabetData from '@/data/alphabet.json';

export default {
  data() {
    return {
      letters: alphabetData.alphabet
    }
  }
}
```

#### Event Handling

**React:**
```tsx
<button onClick={() => setCurrentView('alphabet')}>
  Alphabet
</button>
```

**Vue:**
```vue
<q-btn @click="currentView = 'alphabet'">
  Alphabet
</q-btn>
```

#### Conditional Rendering

**React:**
```tsx
{menuOpen && (
  <nav>Navigation</nav>
)}
```

**Vue:**
```vue
<nav v-if="menuOpen">
  Navigation
</nav>
```

#### Listen rendern

**React:**
```tsx
{letters.map((letter) => (
  <div key={letter.id}>
    {letter.name}
  </div>
))}
```

**Vue:**
```vue
<div v-for="letter in letters" :key="letter.id">
  {{ letter.name }}
</div>
```

### Schritt 5: Quasar-Komponenten verwenden

Ersetze die React UI-Komponenten durch Quasar-Komponenten:

| React | Quasar |
|-------|--------|
| `<Card>` | `<q-card>` |
| `<Button>` | `<q-btn>` |
| `<Input>` | `<q-input>` |
| `<Badge>` | `<q-badge>` |

**Beispiel:**

**React:**
```tsx
<Card className="p-6">
  <Button variant="primary">
    Click me
  </Button>
</Card>
```

**Vue + Quasar:**
```vue
<q-card class="q-pa-md">
  <q-btn color="primary">
    Click me
  </q-btn>
</q-card>
```

### Schritt 6: CSS/SASS Variablen

In deiner `quasar-variables.sass`:

```sass
$primary: #591117
$secondary: #F2EFDC
$accent: #BF6363

// Optional: Farben für verschiedene Zustände
$positive: #BF6363
$negative: #591117
$info: #BF6363
```

### Schritt 7: Navigation

**React:**
```tsx
const [currentView, setCurrentView] = useState('home');

const renderView = () => {
  switch(currentView) {
    case 'home': return <HomePage />;
    case 'alphabet': return <AlphabetView />;
    // ...
  }
}
```

**Vue (mit vue-router):**

```javascript
// router/index.js
const routes = [
  { path: '/', component: () => import('@/views/HomeView.vue') },
  { path: '/alphabet', component: () => import('@/views/AlphabetView.vue') },
  { path: '/lessons', component: () => import('@/views/LessonsView.vue') },
  { path: '/history', component: () => import('@/views/HistoryView.vue') },
  { path: '/impressum', component: () => import('@/views/ImpressumView.vue') },
];
```

**In der Navigation:**
```vue
<q-btn to="/alphabet">Alphabet</q-btn>
```

### Schritt 8: useEffect → Lifecycle Hooks

**React:**
```tsx
useEffect(() => {
  console.log('Entwickler: Asefa Mirzad');
}, []);
```

**Vue (Options API):**
```javascript
export default {
  mounted() {
    console.log('Entwickler: Asefa Mirzad');
  }
}
```

**Vue (Composition API):**
```javascript
import { onMounted } from 'vue';

onMounted(() => {
  console.log('Entwickler: Asefa Mirzad');
});
```

### Schritt 9: Quasar Layout

Nutze das Quasar Layout-System:

```vue
<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header elevated class="bg-primary">
      <q-toolbar>
        <q-toolbar-title>Persify</q-toolbar-title>
        <q-btn flat icon="menu" @click="drawer = !drawer" />
      </q-toolbar>
    </q-header>

    <!-- Navigation Drawer -->
    <q-drawer v-model="drawer" side="right" elevated>
      <q-list>
        <q-item clickable to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>
        <!-- weitere Items -->
      </q-list>
    </q-drawer>

    <!-- Main Content -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
```

---

## 🚀 PWA Setup (Vite + Quasar)

Deine `vite.config.js` sieht gut aus! Stelle sicher:

1. **Workbox wird geladen** - Console öffnen und nach "workbox" suchen
2. **Logo vorhanden** - `/public/icon/persify_logo.png` (192x192 und 512x512)
3. **Manifest** - wird automatisch generiert von `VitePWA`

### Screenshots erstellen:

1. **Portrait Layout** - Hauptseite mit mind. 3 Datensätzen sichtbar
2. **Portrait + Navigation** - Mit ausgeklapptem Menu/Drawer
3. **Landscape Layout** - Querformat
4. **Impressum** - Mit Browser Console (zeigt "Entwickler: Asefa Mirzad")

---

## 📝 Checkliste für die Abgabe

- [ ] JSON-Daten übernommen
- [ ] 5 Views implementiert (Home, Alphabet, Lektionen, Geschichte, Impressum)
- [ ] Farbschema angewendet (#591117, #F2EFDC, #BF6363)
- [ ] Nunito Sans Font eingebunden
- [ ] Logo im Header sichtbar
- [ ] Responsive (Portrait & Landscape)
- [ ] Navigation funktioniert (Desktop & Mobile)
- [ ] Mind. 3 Datensätze auf Hauptscreen sichtbar
- [ ] Console.log mit Name im Impressum
- [ ] Workbox in Console sichtbar
- [ ] 4 Screenshots erstellt
- [ ] GitHub Repo erstellt & Link bereit

---

## 💡 Tipps

1. **Quasar DevTools:** Nutze `q-layout` für automatisches responsive Design
2. **Farben:** Verwende Quasar-Farbklassen: `class="bg-primary text-secondary"`
3. **Icons:** Quasar hat Material Icons bereits integriert: `<q-icon name="home" />`
4. **Testing:** Teste die PWA mit `npm run build && npm run preview`

---

## 🔗 Nützliche Links

- [Quasar Framework Docs](https://quasar.dev/)
- [Vue 3 Documentation](https://vuejs.org/)
- [Pinia Store](https://pinia.vuejs.org/)
- [Vite PWA Plugin](https://vite-pwa-org.netlify.app/)
- [Google Fonts - Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)

---

## 📞 Support

Bei Fragen zur Übertragung, vergleiche die React-Komponenten in diesem Projekt mit der Vue-Syntax. Die Logik bleibt identisch, nur die Syntax ändert sich!

**Viel Erfolg! 🚀**
