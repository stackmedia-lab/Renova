# Renova — Home Improvement Website

A fully responsive, professional Next.js 14 website for a home improvement and renovation business. Designed with a premium aesthetic inspired by Stripe's clean UI and Refresh Renovations' content structure.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)
- **Google Fonts** (Playfair Display + DM Sans)
- No database required — static content

## Pages

| Route | Page |
|-------|------|
| `/` | Homepage (Hero, Services, Why Us, Testimonials, CTA) |
| `/services` | Full services listing with images |
| `/what-we-do` | Process, values, team overview |
| `/renovation-projects` | Project portfolio with bento grid |
| `/testimonials` | Client reviews with stats |
| `/faqs` | Accordion FAQs with category tabs |
| `/contact` | Contact form with validation |

## Deploy to Vercel

### Option 1: Vercel CLI (fastest)
```bash
npm install -g vercel
cd home-improvement
npm install
vercel
```

### Option 2: GitHub + Vercel Dashboard
1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**

### Option 3: Manual Deploy
```bash
npm install
npm run build
vercel --prod
```

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customization

### Branding
- **Colors**: Edit CSS variables in `src/app/globals.css`
- **Logo/Name**: Update `src/components/Navbar.tsx` and `Footer.tsx`
- **Phone/Email**: Search for `1 800 973 1744` and `hello@renovahome.com`

### Content
- **Homepage**: `src/app/page.tsx`
- **Services**: `src/app/services/page.tsx`
- **Projects**: `src/app/renovation-projects/page.tsx`
- **Testimonials**: `src/app/testimonials/page.tsx`
- **FAQs**: `src/app/faqs/page.tsx`
- **Contact**: `src/app/contact/page.tsx`

### Images
All images use Unsplash URLs. Replace with your own project photos by updating `img` fields in each page file.

## SEO
Each page has its own `metadata` export with title and description. Update these in each page file for your specific business.

## Performance
- All images use `<img>` tags with Unsplash CDN (no configuration needed)
- Fonts loaded via Google Fonts (next/font can be added for optimization)
- No client-side data fetching — all content is static
