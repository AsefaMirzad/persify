# Vue/Quasar Konvertierungs-Beispiele

## Vollständiges Beispiel: AlphabetView

### React Version (Original)

```tsx
// AlphabetView.tsx
import React, { useState } from 'react';
import alphabetData from '@/data/alphabet.json';

export default function AlphabetView() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAlphabet = alphabetData.alphabet.filter(
    (letter) => letter.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Suche..."
      />
      {filteredAlphabet.map((letter) => (
        <div key={letter.id}>
          <h3>{letter.letter}</h3>
          <p>{letter.name}</p>
          <p>{letter.pronunciation}</p>
        </div>
      ))}
    </div>
  );
}
```

### Vue Version (für dein Projekt)

```vue
<!-- views/AlphabetView.vue -->
<template>
  <q-page class="q-pa-md">
    <div class="text-h4 text-primary q-mb-md">Persisches Alphabet</div>
    
    <!-- Search -->
    <q-input
      v-model="searchTerm"
      outlined
      placeholder="Suche nach Buchstaben..."
      class="q-mb-md"
    >
      <template v-slot:prepend>
        <q-icon name="search" />
      </template>
    </q-input>

    <!-- Alphabet Grid -->
    <div class="row q-col-gutter-md">
      <div 
        v-for="letter in filteredAlphabet" 
        :key="letter.id"
        class="col-12 col-sm-6 col-md-4"
      >
        <q-card class="letter-card">
          <q-card-section>
            <div class="row items-start justify-between">
              <div class="text-h2 text-primary">{{ letter.letter }}</div>
              <div class="text-right">
                <div class="text-h6 text-primary">{{ letter.name }}</div>
                <div class="text-caption text-grey-7">{{ letter.romanization }}</div>
              </div>
            </div>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <div class="q-mb-sm">
              <div class="text-caption text-grey-7 text-uppercase">Aussprache</div>
              <div class="text-body2">{{ letter.pronunciation }}</div>
            </div>

            <div class="q-mb-sm">
              <div class="text-caption text-grey-7 text-uppercase">Formen</div>
              <div class="text-h5 text-primary">
                {{ letter.isolated }} {{ letter.initial }} 
                {{ letter.medial }} {{ letter.final }}
              </div>
              <div class="text-caption text-grey-6">
                isoliert • initial • medial • final
              </div>
            </div>

            <q-separator class="q-my-sm" />

            <div>
              <div class="text-caption text-grey-7 text-uppercase">Beispiel</div>
              <div class="text-body2 text-weight-medium">{{ letter.example }}</div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredAlphabet.length === 0" class="text-center q-pa-xl text-grey-6">
      Keine Ergebnisse gefunden
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import alphabetData from '@/data/alphabet.json';

export default defineComponent({
  name: 'AlphabetView',

  setup() {
    const searchTerm = ref('');

    const filteredAlphabet = computed(() => {
      return alphabetData.alphabet.filter((letter) =>
        letter.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        letter.romanization.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        letter.pronunciation.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });

    return {
      searchTerm,
      filteredAlphabet,
    };
  },
});
</script>

<style lang="sass" scoped>
.letter-card
  transition: all 0.3s
  &:hover
    transform: translateY(-4px)
    box-shadow: 0 4px 12px rgba(0,0,0,0.15)
</style>
```

---

## App.vue - Hauptstruktur

```vue
<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header elevated class="bg-primary text-secondary">
      <q-toolbar>
        <q-avatar class="bg-accent">
          <div class="text-h5">پ</div>
        </q-avatar>
        <q-toolbar-title class="text-h5 q-ml-sm">
          Persify
        </q-toolbar-title>

        <!-- Desktop Navigation -->
        <q-tabs v-model="currentTab" class="gt-sm">
          <q-tab name="home" label="Home" icon="home" />
          <q-tab name="alphabet" label="Alphabet" icon="text_fields" />
          <q-tab name="lessons" label="Lektionen" icon="school" />
          <q-tab name="history" label="Geschichte" icon="public" />
          <q-tab name="impressum" label="Impressum" icon="info" />
        </q-tabs>

        <!-- Mobile Menu Button -->
        <q-btn 
          flat 
          dense 
          round 
          icon="menu" 
          @click="drawer = !drawer"
          class="lt-md"
        />
      </q-toolbar>
    </q-header>

    <!-- Mobile Drawer -->
    <q-drawer
      v-model="drawer"
      side="right"
      elevated
      class="bg-secondary lt-md"
    >
      <q-list padding>
        <q-item 
          v-for="item in navItems" 
          :key="item.name"
          clickable
          :active="currentTab === item.name"
          @click="navigateTo(item.name)"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" color="primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-primary">{{ item.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Main Content -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer class="bg-primary text-secondary">
      <q-toolbar>
        <q-toolbar-title class="text-center text-caption">
          © 2026 Persify - Entwickelt von Asefa Mirzad
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref, watch, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  name: 'App',

  setup() {
    const router = useRouter();
    const route = useRoute();
    const drawer = ref(false);
    const currentTab = ref('home');

    const navItems = [
      { name: 'home', label: 'Home', icon: 'home' },
      { name: 'alphabet', label: 'Alphabet', icon: 'text_fields' },
      { name: 'lessons', label: 'Lektionen', icon: 'school' },
      { name: 'history', label: 'Geschichte', icon: 'public' },
      { name: 'impressum', label: 'Impressum', icon: 'info' },
    ];

    const navigateTo = (name) => {
      currentTab.value = name;
      router.push({ name });
      drawer.value = false;
    };

    // Watch route changes
    watch(() => route.name, (newName) => {
      currentTab.value = newName;
    });

    // Console log on mount
    onMounted(() => {
      console.log('Entwickler: Asefa Mirzad');
    });

    return {
      drawer,
      currentTab,
      navItems,
      navigateTo,
    };
  },
});
</script>
```

---

## Router Setup

```javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/alphabet',
    name: 'alphabet',
    component: () => import('@/views/AlphabetView.vue'),
  },
  {
    path: '/lessons',
    name: 'lessons',
    component: () => import('@/views/LessonsView.vue'),
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('@/views/HistoryView.vue'),
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: () => import('@/views/ImpressumView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
```

---

## Pinia Store (Optional)

```javascript
// stores/lessonStore.js
import { defineStore } from 'pinia';
import lessonsData from '@/data/lessons.json';

export const useLessonStore = defineStore('lesson', {
  state: () => ({
    lessons: lessonsData.lessons,
    historicalPeriods: lessonsData.historicalPeriods,
    completedLessons: [],
  }),

  getters: {
    getLessonById: (state) => (id) => {
      return state.lessons.find((lesson) => lesson.id === id);
    },

    completedCount: (state) => {
      return state.completedLessons.length;
    },
  },

  actions: {
    markLessonComplete(lessonId) {
      if (!this.completedLessons.includes(lessonId)) {
        this.completedLessons.push(lessonId);
        // Optional: Save to localStorage
        localStorage.setItem('completedLessons', JSON.stringify(this.completedLessons));
      }
    },

    loadProgress() {
      const saved = localStorage.getItem('completedLessons');
      if (saved) {
        this.completedLessons = JSON.parse(saved);
      }
    },
  },
});
```

---

## Quasar Variables (SASS)

```sass
// src/quasar-variables.sass

// Persify Farbschema
$primary: #591117
$secondary: #F2EFDC
$accent: #BF6363

$positive: #21BA45
$negative: #C10015
$info: #31CCEC
$warning: #F2C037

// Typography
$body-font-family: 'Nunito Sans', sans-serif
$typography-font-family: 'Nunito Sans', sans-serif
```

---

## main.js Setup

```javascript
// src/main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import router from './router';
import App from './App.vue';

// Quasar Styles
import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';

// Custom Styles
import './styles/main.css';

// PWA
import './registerServiceWorker';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.use(Quasar, {
  config: {
    brand: {
      primary: '#591117',
      secondary: '#F2EFDC',
      accent: '#BF6363',
    },
  },
});

app.mount('#app');
```

---

## Wichtige Unterschiede - Zusammenfassung

| Feature | React | Vue + Quasar |
|---------|-------|--------------|
| State | `useState` | `ref()` oder `reactive()` |
| Computed | manuelle Variable | `computed()` |
| Effects | `useEffect` | `watch()`, `onMounted()` |
| Props | Function Params | `defineProps()` |
| Events | `onClick` | `@click` |
| Conditional | `{condition && <div>}` | `v-if`, `v-show` |
| Loop | `.map()` | `v-for` |
| 2-Way Binding | Manual state + onChange | `v-model` |
| CSS Classes | `className` | `class` |
| Inline Styles | `style={{}}` | `:style=""` |

---

## Quasar Layout Klassen

```html
<!-- Spacing -->
<div class="q-pa-md">Padding medium</div>
<div class="q-ma-lg">Margin large</div>
<div class="q-mt-sm">Margin top small</div>

<!-- Typography -->
<div class="text-h4">Heading 4</div>
<div class="text-body1">Body text</div>
<div class="text-caption">Caption text</div>
<div class="text-weight-bold">Bold text</div>

<!-- Colors -->
<div class="text-primary">Primary color text</div>
<div class="bg-secondary">Secondary background</div>

<!-- Flexbox -->
<div class="row">Row (horizontal)</div>
<div class="column">Column (vertical)</div>
<div class="items-center">Center items</div>
<div class="justify-between">Space between</div>

<!-- Responsive -->
<div class="col-12 col-sm-6 col-md-4">Responsive columns</div>
<div class="gt-sm">Show on screens > small</div>
<div class="lt-md">Show on screens < medium</div>
```

---

## Testing Checklist

```bash
# Development
npm run dev

# Build
npm run build

# Preview (wichtig für PWA testing!)
npm run preview

# Dann teste:
# ✓ Navigation funktioniert
# ✓ Alle Views laden korrekt
# ✓ JSON Daten werden angezeigt
# ✓ Responsive Design (Desktop, Tablet, Mobile)
# ✓ Console zeigt "Entwickler: Asefa Mirzad"
# ✓ Service Worker registriert (Network Tab)
# ✓ Workbox logs sichtbar
```

---

## Fertig! 🎉

Du hast jetzt:
1. ✅ Alle JSON-Daten
2. ✅ React-Version als Referenz
3. ✅ Vue/Quasar Konvertierungs-Beispiele
4. ✅ Komplette Anleitung

**Nächste Schritte:**
1. Kopiere die JSON-Dateien
2. Erstelle die Views nach dem Muster
3. Setze Router und Navigation auf
4. Teste die PWA
5. Mache Screenshots
6. Fertig! 🚀
