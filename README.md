# SaiRam Anugula - Personal Brand Website

A professional personal branding website for GTM Strategy & Revenue Operations leadership positioning.

## 📁 Project Structure

```
sairam-website/
├── index.html              # Single-file HTML website (ready to deploy)
├── DEPLOYMENT_GUIDE.md     # Complete deployment instructions
├── og-image-template.html  # Open Graph image template (1200x630)
├── public/
│   ├── sitemap.xml         # SEO sitemap
│   └── robots.txt          # Search engine instructions
└── nextjs-website/         # Next.js version (for blog/scaling)
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── Navigation.tsx
    │   ├── Hero.tsx
    │   ├── Industries.tsx
    │   ├── About.tsx
    │   ├── Expertise.tsx
    │   ├── Frameworks.tsx
    │   ├── Impact.tsx
    │   ├── Contact.tsx
    │   └── Footer.tsx
    ├── package.json
    ├── tailwind.config.js
    └── next.config.js
```

## 🚀 Quick Start

### Option A: Static HTML (Fastest)
1. Upload `index.html` to Vercel/Netlify
2. Configure custom domain
3. Done!

### Option B: Next.js (Recommended for Blog)
```bash
cd nextjs-website
npm install
npm run dev
```

## 📋 Pre-Launch Checklist

- [ ] Add professional headshot (replace SA initials)
- [ ] Update Formspree form ID in contact form
- [ ] Create OG image from template (screenshot at 1200x630)
- [ ] Purchase domain
- [ ] Configure DNS
- [ ] Set up email (Zoho/Google Workspace)
- [ ] Add Google Analytics

## 🔧 Configuration

### Contact Form (Formspree)
1. Create account at formspree.io
2. Create new form
3. Replace `YOUR_FORM_ID` in the HTML/Contact.tsx

### Domain & DNS
See `DEPLOYMENT_GUIDE.md` for detailed instructions.

## 📊 Key Features

- **Responsive Design**: Mobile-first, works on all devices
- **SEO Optimized**: Meta tags, Open Graph, sitemap
- **Performance**: Minimal dependencies, fast loading
- **Animations**: Subtle scroll animations and hover effects
- **Contact Form**: Formspree integration with CRM options

## 🎨 Design System

### Colors
- Navy: `#0a1628` (primary dark)
- Gold: `#c9a962` (accent)
- Cream: `#faf9f7` (light background)

### Typography
- Display: Instrument Serif
- Body: DM Sans

## 📈 Next Steps

1. **Blog**: Add `/blog` route in Next.js version
2. **Speaking**: Add speaking engagements page
3. **Case Studies**: Expand with detailed case study pages
4. **Newsletter**: Add ConvertKit/Substack integration

## 📄 License

Personal use only. © 2025 SaiRam Anugula
