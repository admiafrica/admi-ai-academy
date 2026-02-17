# ADMI AI Academy

> **Build with AI. Create the Future.**

A modern Next.js 15 website for ADMI AI Academy - Africa's premier AI training institute for creative professionals, marketers, and business analysts.

## 🎨 Design System

### Color Palette

The AI Academy uses a distinct orange/dark-blue theme to differentiate from the main ADMI brand:

| Role | Color | Hex |
|------|-------|-----|
| Primary | Orange | `#EF7B2E` |
| Primary Dark | Dark Blue | `#1a1a2e` |
| Accent | Teal | `#8EBFB0` |
| Secondary | Olive Yellow | `#D9DC5B` |
| Dark BG | Dark Blue | `#0f0f1e` |
| Warm BG | Off-White | `#F7F5F2` |

### Visual Identity

- **Dark-first design** with code editor aesthetic
- Orange gradient highlights on CTAs and headings
- Subtle grid/dot patterns on hero sections
- Terminal vibes with neural network visualizations
- Tech-forward, modern, and professional

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (with CSS variables)
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Ready for Vercel, AWS Amplify, or any Node.js hosting
- **Forms**: Native HTML forms with React state management (ready for Brevo CRM integration)

## 📁 Project Structure

```
app/
├── about/                    # About page
├── components/              # Reusable components
│   ├── EnquiryForm.tsx     # Contact form
│   ├── Footer.tsx          # Site footer
│   ├── Header.tsx          # Site header with navigation
│   └── WhatsAppButton.tsx  # Floating WhatsApp CTA
├── data/                    # Static data
│   └── learning-paths.ts   # Learning paths content
├── enquiry/                 # Enquiry/contact page
├── paths/                   # Learning paths
│   ├── page.tsx            # All paths listing
│   └── [slug]/             # Individual path details
│       └── page.tsx
├── globals.css              # Global styles & theme
├── layout.tsx               # Root layout
└── page.tsx                 # Homepage
```

## 🎓 Learning Paths

The academy offers three specialized training programmes:

1. **AI for Creative Professionals** (12 weeks, KES 75,000)
   - Image generation (Midjourney, DALL-E, Stable Diffusion)
   - Video AI (Runway, Descript)
   - Audio AI (ElevenLabs, Suno)
   - Creative workflow integration

2. **AI for Marketing Excellence** (10 weeks, KES 65,000)
   - Content creation at scale
   - Campaign optimization
   - Customer insights & personalization
   - Marketing automation

3. **AI for Business Intelligence** (12 weeks, KES 85,000)
   - Predictive analytics
   - Data visualization
   - Business forecasting
   - Strategic decision-making

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd admi-ai-academy

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Brevo CRM Integration (optional)
NEXT_PUBLIC_BREVO_API_KEY=your_brevo_api_key
BREVO_LIST_ID=your_list_id

# WhatsApp Business Number
NEXT_PUBLIC_WHATSAPP_NUMBER=254123456789

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🎯 Key Features

- ✅ **Fully responsive** - Mobile-first design
- ✅ **Dark theme** - Modern, tech-forward aesthetic
- ✅ **SEO optimized** - Metadata, semantic HTML, structured data
- ✅ **Fast performance** - Optimized with Next.js 15 features
- ✅ **Accessible** - WCAG 2.1 compliant
- ✅ **Type-safe** - Full TypeScript coverage
- ✅ **Static data** - Easy to migrate to CMS (Contentful, Sanity, etc.)

## 📝 Content Management

Currently, content is managed through static data files:

- **Learning Paths**: `app/data/learning-paths.ts`
- **Page Content**: Direct in page components

### Migrating to a CMS

The data structure is designed for easy CMS integration. To connect to Contentful or another headless CMS:

1. Create content models matching the TypeScript interfaces in `learning-paths.ts`
2. Update data fetching functions to call CMS API
3. Implement revalidation strategy (ISR, on-demand, etc.)

## 🎨 Customization

### Colors

Edit the theme in `app/globals.css`:

```css
:root {
  --ai-primary: #EF7B2E;
  --ai-primary-dark: #1a1a2e;
  /* ... more colors */
}
```

### Fonts

Update fonts in `app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";
```

### Components

All components are built with plain HTML + Tailwind CSS for easy customization.

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel deploy
```

### AWS Amplify

Configure `amplify.yml`:

```yaml
version: 1
frontend:
  phases:
    build:
      commands:
        - npm ci
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Environment Variables

Set these in your deployment platform:
- `NEXT_PUBLIC_BREVO_API_KEY`
- `BREVO_LIST_ID`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`

## 📊 Analytics Integration

Ready for:
- Google Analytics 4
- Meta Pixel
- Plausible Analytics
- Custom analytics solutions

Add tracking code in `app/layout.tsx`.

## 🤝 Contributing

This is an internal ADMI project. For contributions:

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## 📄 License

© 2026 Africa Digital Media Institute. All rights reserved.

## 🔗 Related Projects

- [ADMI Main Website](https://admi.africa)
- [ADMI Foundation](https://foundation.admi.africa)

## 📞 Support

For questions or support:
- Email: ai@admi.africa
- Phone: +254 123 456 789
- WhatsApp: Click the floating button on the site

---

Built with ❤️ by the ADMI team

