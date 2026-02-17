# ADMI AI Academy - Deployment Guide

This guide covers deployment options for the ADMI AI Academy website.

## Prerequisites

Before deploying, ensure you have:

- ✅ Built and tested locally (`npm run build && npm start`)
- ✅ Set up environment variables
- ✅ Configured DNS for `ai.admi.africa` (or your chosen subdomain)
- ✅ SSL certificate ready (automatic with Vercel/Amplify)

## Deployment Options

### Option 1: Vercel (Recommended)

**Pros**: Fastest, zero-config, automatic SSL, global CDN

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod

# Set environment variables
vercel env add NEXT_PUBLIC_BREVO_API_KEY
vercel env add BREVO_LIST_ID
vercel env add NEXT_PUBLIC_WHATSAPP_NUMBER
```

**Custom Domain Setup:**
1. Add `ai.admi.africa` in Vercel dashboard → Domains
2. Update DNS with provided CNAME/A records
3. SSL automatically provisioned

### Option 2: AWS Amplify

**Pros**: Seamless AWS integration, branch deployments

**Setup:**

1. Create `amplify.yml`:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

2. Connect repository:
   - Go to AWS Amplify Console
   - Connect your Git repository
   - Select branch (main/staging)
   - Amplify auto-detects Next.js

3. Environment variables:
   - Add in Amplify Console → Environment variables
   - `NEXT_PUBLIC_BREVO_API_KEY`
   - `BREVO_LIST_ID`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`

4. Custom domain:
   - Amplify Console → Domain management
   - Add `ai.admi.africa`
   - Follow DNS verification steps

### Option 3: Self-Hosted (VPS/Cloud)

**Pros**: Full control, cost-effective for high traffic

**Requirements:**
- Node.js 18+ installed
- PM2 or similar process manager
- Nginx/Apache for reverse proxy
- SSL certificate (Let's Encrypt)

**Steps:**

1. **Build the app:**
```bash
npm ci
npm run build
```

2. **Set up environment variables:**
```bash
# Create .env.local on server
nano .env.local
```

3. **Start with PM2:**
```bash
pm2 start npm --name "admi-ai-academy" -- start
pm2 save
pm2 startup
```

4. **Nginx configuration:**
```nginx
server {
    listen 80;
    server_name ai.admi.africa;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name ai.admi.africa;

    ssl_certificate /etc/letsencrypt/live/ai.admi.africa/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ai.admi.africa/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

5. **SSL with Let's Encrypt:**
```bash
sudo certbot --nginx -d ai.admi.africa
```

## Environment Variables

Set these in your deployment environment:

### Required
```env
# None - site works without external services
```

### Optional (Enhanced Features)
```env
NEXT_PUBLIC_BREVO_API_KEY=your_key        # Enquiry form → Brevo CRM
BREVO_LIST_ID=your_list_id                # Target list for contacts
NEXT_PUBLIC_WHATSAPP_NUMBER=254123456789  # WhatsApp click-to-chat
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX           # Google Analytics
NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id  # Meta/Facebook Pixel
```

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify enquiry form submission
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Verify WhatsApp button works
- [ ] Check SEO metadata (inspect Open Graph tags)
- [ ] Test page speed (PageSpeed Insights)
- [ ] Set up monitoring (Vercel Analytics, Sentry, etc.)
- [ ] Configure analytics tracking
- [ ] Test 404 page
- [ ] Verify SSL certificate

## DNS Configuration

For `ai.admi.africa`:

### Vercel
```
Type: CNAME
Name: ai
Value: cname.vercel-dns.com
```

### AWS Amplify
```
Type: CNAME
Name: ai
Value: [provided by Amplify]
```

### Self-Hosted
```
Type: A
Name: ai
Value: [your server IP]
```

## Continuous Deployment

### Git-Based Workflow

1. **Development**: Push to `dev` branch → auto-deploys to staging
2. **Staging**: Push to `staging` branch → staging environment
3. **Production**: Push/merge to `main` → production deployment

### Environment Branches

```
dev      → dev.ai.admi.africa (testing)
staging  → staging.ai.admi.africa (pre-production)
main     → ai.admi.africa (production)
```

## Performance Optimization

### Before Deploying

1. **Image Optimization**: Ensure images under 500KB
2. **Code Splitting**: Already handled by Next.js
3. **Caching**: Configure CDN cache headers
4. **Compression**: Enable gzip/brotli (automatic on Vercel)

### Recommended Next.js Config

```typescript
// next.config.ts
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  compress: true,
  poweredByHeader: false,
};
```

## Rollback Strategy

### Vercel
```bash
# List deployments
vercel ls

# Rollback to previous
vercel rollback [deployment-url]
```

### AWS Amplify
- Use Amplify Console → Redeploy previous version

### Self-Hosted
```bash
# Restore previous build
pm2 stop admi-ai-academy
git checkout [previous-commit]
npm ci && npm run build
pm2 restart admi-ai-academy
```

## Monitoring & Alerts

### Recommended Services

- **Uptime**: UptimeRobot, Pingdom
- **Performance**: Vercel Analytics, Google Analytics
- **Errors**: Sentry, LogRocket
- **SEO**: Google Search Console, Bing Webmaster Tools

## Troubleshooting

### Build fails with type errors
```bash
npm run type-check
# Fix errors, then rebuild
```

### Images not loading
- Check Next.js image domains in `next.config.ts`
- Verify image URLs are accessible

### Enquiry form not submitting
- Verify Brevo API key in environment variables
- Check browser console for errors
- Test API endpoint directly

### WhatsApp button not working
- Verify `NEXT_PUBLIC_WHATSAPP_NUMBER` is set
- Remove + symbol from number

## Support

For deployment issues:
- Internal: Contact ADMI DevOps team
- Vercel: https://vercel.com/support
- AWS: AWS Support Console

---

Last updated: February 2026
