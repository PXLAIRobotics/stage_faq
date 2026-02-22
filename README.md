# Stage & Eindwerk FAQ

Interactieve FAQ voor stagestudenten (hogeschoolpromotor: Sam Van Rijn). Alle praktische info uit het stage‑mail in één doorzoekbare pagina.

## Lokaal gebruiken

Dubbelklik op `index.html` of open het bestand in je browser. Geen server nodig.

## Inhoud wijzigen

**Alle teksten staan in één bestand:** `faq-data.js`. Daar wijzig je vragen, antwoorden en categorieën.

- **Na een wijziging in faq-data.js:** pas in `index.html` de versie in de script-tag aan, bv. `faq-data.js?v=2` → `faq-data.js?v=3`. Zo laden bezoekers en GitHub Pages de nieuwe inhoud i.p.v. een gecachte versie.
- **Sectie toevoegen:** kopieer een bestaand blok `{ id: "...", name: "...", tagline: "...", questions: [ ... ] }` en pas het aan.
- **Vraag toevoegen:** voeg binnen de juiste sectie een nieuw object toe met `id`, `question`, `tags` (array) en `answer` (HTML tussen backticks).
- **Tekst aanpassen:** pas de `question`- of `answer`-tekst aan; in `answer` mag je o.a. `<p>`, `<ul>`, `<li>`, `<strong>`, `<span class="highlight-text">` gebruiken.

Bovenaan `faq-data.js` staat een korte uitleg van de structuur.

## Deployen op GitHub Pages

1. **Maak een nieuwe repository op GitHub**
   - Ga naar [github.com/new](https://github.com/new).
   - Kies een naam (bijv. `stage-faq` of `stagestudenten-faq`).
   - Kies **Public**, vink *Add a README* uit (je hebt er al één).
   - Klik **Create repository**.

2. **Push deze map naar de repo**
   ```bash
   cd /home/sam/Documents/Stages/FAQ
   git init
   git add index.html faq-data.js README.md .gitignore
   git commit -m "Stage FAQ – GitHub Pages"
   git branch -M main
   git remote add origin https://github.com/JOUW-GEBRUIKERSNAAM/JOUW-REPO-NAAM.git
   git push -u origin main
   ```
   Vervang `JOUW-GEBRUIKERSNAAM` en `JOUW-REPO-NAAM` door je GitHub-gebruikersnaam en de naam van de repo.

3. **Zet GitHub Pages aan**
   - In de repo: **Settings** → **Pages** (links onder).
   - Bij **Source**: kies **Deploy from a branch**.
   - Bij **Branch**: kies `main` en map `/ (root)`.
   - Klik **Save**.

4. **URL**
   - Na een minuut staat de site op:
   - `https://JOUW-GEBRUIKERSNAAM.github.io/JOUW-REPO-NAAM/`

Deel die link met je studenten (bijv. via Teams); ze kunnen de FAQ dan in de browser openen zonder iets te downloaden.
