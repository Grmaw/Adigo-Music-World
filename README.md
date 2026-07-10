# ADIGO MUSIC WORLD

אתר רשמי של האמן Adigo — מוזיקה, הופעות ומרצ׳נדייז.

---

## תיאור הפרויקט

אתר אמן מוזיקה מקצועי ועכשווי הכולל דף בית, דף הופעות, חנות מרצ׳נדייז ודף פרטי מוצר. עיצוב כהה וסינמטי עם תמיכה מלאה ב-RTL עברית.

---

## טכנולוגיות

- React 19
- Vite 8
- JavaScript (ES Modules)
- React Router DOM v7
- Plain CSS (CSS Variables)
- ללא TypeScript / Tailwind / Backend
- כל הנתונים הם דמה (dummy data)

---

## התקנה והרצה

```bash
npm install
npm run dev
```

---

## נתיבים

| נתיב                  | דף                  |
|----------------------|---------------------|
| `/`                  | דף הבית             |
| `/shows`             | דף הופעות           |
| `/store`             | חנות                |
| `/store/:productId`  | פרטי מוצר           |

---

## מבנה הפרויקט

```
src/
  components/   Navbar, Footer, HeroSection, MusicCard, ShowCard,
                ProductCard, NewsletterSection, SectionTitle, PrimaryButton
  pages/         HomePage, ShowsPage, StorePage, ProductDetailsPage
  data/          songs.js, shows.js, products.js
  styles/        globals.css, components.css, pages.css
  App.jsx
  main.jsx
```

---

## תכונות עיקריות

- עיצוב כהה וסינמטי — זהב על שחור
- RTL מלא בעברית
- ניווט ללא טעינת עמוד מחדש (React Router)
- חיפוש וסינון בהופעות ובחנות
- דף פרטי מוצר עם גלריה, צבעים, מידות, כמות
- הודעת אישור להוספה לסל
- רספונסיבי מלא

---

## נתונים

כל הנתונים הם dummy data. תמונות מ-Pexels.

---

## הגשה ל-GitHub

```bash
git init
git add .
git commit -m "feat: initial ADIGO MUSIC WORLD website"
git remote add origin <YOUR_REPO_URL>
git push -u origin main
```

---

(c) 2026 ADIGO MUSIC WORLD. כל הזכויות שמורות.
