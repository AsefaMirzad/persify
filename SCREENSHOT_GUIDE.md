# Screenshot Anleitung für Abgabe

## 📸 Zu erstellende Screenshots

### 1. Main Screen "Portrait Layout"

**Was zu zeigen ist:**
- Portrait-Modus (Hochformat)
- Hauptseite mit mindestens 3 Datensätzen sichtbar
- Logo muss sichtbar sein
- Browser DevTools → Console sollte "workbox" Logs zeigen

**Schritte:**
1. Browser öffnen (Chrome empfohlen)
2. DevTools öffnen (F12)
3. Device Toolbar einschalten (Strg+Shift+M)
4. Gerät wählen: z.B. "iPhone 12 Pro" oder "Pixel 5"
5. Orientation: Portrait (Hochformat)
6. Console-Tab öffnen
7. App auf Home oder Lessons View navigieren
8. Screenshot machen

**Beispiel URLs:**
- `/` - Home mit Feature-Karten
- `/lessons` - Liste der Lektionen
- `/alphabet` - Alphabet-Karten
- `/history` - Historische Epochen

---

### 2. Main Screen "Portrait Layout + Navigation"

**Was zu zeigen ist:**
- Portrait-Modus (Hochformat)
- Navigation/Menu **ausgeklappt**
- Alle Menüpunkte sichtbar
- Logo muss sichtbar sein

**Schritte:**
1. Gleiche Einstellungen wie Screenshot 1
2. Auf das Menu-Icon (☰) klicken
3. Navigation sollte ausklappen/eingeblendet werden
4. Screenshot mit sichtbarem Menu machen

**Mobile Navigation Punkte:**
- Home
- Alphabet
- Lektionen
- Geschichte
- Impressum

---

### 3. Main Screen "Landscape Layout"

**Was zu zeigen ist:**
- Landscape-Modus (Querformat)
- Hauptseite
- Desktop-Navigation (wenn vorhanden)
- Logo muss sichtbar sein

**Schritte:**
1. DevTools → Device Toolbar
2. Orientation: Landscape (Querformat) umschalten
3. Oder Desktop-Auflösung wählen (1920x1080)
4. Home oder Lessons View
5. Screenshot machen

---

### 4. Impressum mit Console

**Was zu zeigen ist:**
- Impressum-Seite
- Browser Console sichtbar
- In Console: "Entwickler: Asefa Mirzad" ausgegeben
- Logo muss sichtbar sein

**Schritte:**
1. Zu `/impressum` navigieren
2. DevTools öffnen (F12)
3. Console-Tab auswählen
4. Console sollte zeigen:
   ```
   Entwickler: Asefa Mirzad
   ```
5. Screenshot mit beiden (Page + Console) machen

**Wichtig:** 
- Seite neu laden (F5) falls Console leer ist
- Der console.log wird beim Laden der Impressum-Komponente ausgeführt

---

## 🔍 Workbox Nachweis

**Wo zu finden:**
- Console Tab in DevTools
- Suche nach "workbox" im Console-Filter
- Sollte Meldungen zeigen wie:
  - "Workbox is controlling the service worker"
  - "Service Worker registered"
  - Cache-bezogene Logs

**Alternativ:**
- Application Tab → Service Workers
- Sollte den aktiven Service Worker zeigen
- Status: "activated and is running"

---

## 📐 Empfohlene Einstellungen

### Browser: Chrome/Edge
```
DevTools → Console → Settings:
✓ Preserve log (Logs behalten beim Neuladen)
✓ Show timestamps (optional)
```

### Device Toolbar Geräte:
- **Mobile Portrait:** iPhone 12 Pro, Pixel 5
- **Mobile Landscape:** iPhone 12 Pro (gedreht)
- **Desktop:** Responsive 1920x1080

---

## ✅ Checkliste vor Screenshots

Stelle sicher, dass:

- [ ] App läuft (`npm run dev` oder `npm run preview`)
- [ ] Logo ist im Header sichtbar
- [ ] Farbschema ist angewendet (#591117, #F2EFDC, #BF6363)
- [ ] Mind. 3 Einträge/Karten sind auf Main Screen sichtbar
- [ ] Navigation funktioniert (Mobile + Desktop)
- [ ] Console.log im Impressum vorhanden
- [ ] Service Worker ist registriert (für Workbox)

---

## 📝 Screenshot-Dateinamen (Vorschlag)

```
1_persify_portrait.png
2_persify_portrait_navigation.png
3_persify_landscape.png
4_persify_impressum_console.png
```

---

## 🎯 Mindestanforderungen pro Screenshot

### Screenshot 1 (Portrait):
- ✓ Mindestens 3 unterschiedliche Datensätze sichtbar
- ✓ Logo im Header
- ✓ Workbox-Logs in Console (optional für diesen Screenshot)

### Screenshot 2 (Portrait + Nav):
- ✓ Navigation ausgeklappt
- ✓ Alle 5 Menüpunkte sichtbar
- ✓ Logo im Header

### Screenshot 3 (Landscape):
- ✓ Querformat-Layout
- ✓ Desktop-Navigation sichtbar (horizontal)
- ✓ Logo im Header

### Screenshot 4 (Impressum):
- ✓ Impressum-Seite geladen
- ✓ Console sichtbar
- ✓ "Entwickler: Asefa Mirzad" in Console
- ✓ Logo im Header

---

## 🚀 Quick Test

```bash
# Starte die App
npm run dev

# In einem anderen Terminal (für PWA Testing):
npm run build
npm run preview

# Dann Screenshots machen!
```

---

## 💡 Tipps

1. **High Quality Screenshots:**
   - Nutze Browser's eigene Screenshot-Funktion
   - Oder: Snipping Tool / Screenshot-Tool deines OS
   - PNG Format bevorzugen

2. **Console ist leer?**
   - Seite neu laden (F5)
   - "Preserve log" aktivieren
   - Filter löschen

3. **Workbox nicht sichtbar?**
   - `npm run build && npm run preview` verwenden
   - Im Dev-Mode ist Workbox manchmal nicht aktiv
   - Application Tab → Service Workers checken

4. **Zu viele Datensätze?**
   - Browser-Zoom anpassen (Strg + Minus)
   - Oder: Kleineres Device wählen
   - Wichtig: Mind. 3 müssen sichtbar sein!

---

## 📊 Beispiel: Was sind "unterschiedliche Datensätze"?

### Gut ✓
- 3 verschiedene Lektionen mit Titel und Infos
- 3 verschiedene Alphabet-Buchstaben mit Details
- 3 verschiedene historische Epochen
- 3 Feature-Karten auf der Homepage

### Nicht gut ✗
- Nur Header und Footer sichtbar
- Nur 1-2 Einträge sichtbar
- Leere Liste/Grid

---

## 🎉 Fertig!

Mit diesen Screenshots erfüllst du alle Anforderungen der Abgabe!
