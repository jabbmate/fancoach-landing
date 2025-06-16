# FanCoach Landing Site - Deployment Guide

## 🚀 Production Deployment

### Quick Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial FanCoach landing site"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Deploy automatically

### Manual Build & Deploy

1. **Build for production**
   ```bash
   npm run build
   npm start
   ```

2. **Deploy to any hosting platform**
   - The built files are in `.next/` directory
   - Supports any Node.js hosting platform

## 🔧 Pre-Deployment Checklist

### Required Updates

- [ ] **Hero Image**: Replace `public/hero.jpg` with actual stadium lights image
- [ ] **Favicon**: Add proper `favicon.ico` to `public/` directory
- [ ] **Domain**: Update sitemap URLs in `app/sitemap.ts`
- [ ] **Email Service**: Integrate real email capture in `components/EmailCaptureForm.tsx`
- [ ] **Analytics**: Add Google Analytics or similar tracking
- [ ] **Privacy Policy**: Replace placeholder content with actual policy

### Optional Enhancements

- [ ] **SEO**: Add structured data markup
- [ ] **Performance**: Optimize images and add lazy loading
- [ ] **Accessibility**: Add ARIA labels and improve keyboard navigation
- [ ] **Social Media**: Add Open Graph images
- [ ] **Contact Form**: Add contact/support form

## 🌐 Environment Configuration

### Production Environment Variables

Create `.env.local` for production:

```env
# Email Service (example for Mailchimp)
MAILCHIMP_API_KEY=your_api_key
MAILCHIMP_LIST_ID=your_list_id

# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Domain
NEXT_PUBLIC_SITE_URL=https://fancoach.app
```

### Update Metadata

Update `app/layout.tsx` with production URLs:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://fancoach.app'),
  // ... rest of metadata
}
```

## 📊 Performance Optimization

### Image Optimization

1. **Hero Image**
   - Format: WebP or AVIF for better compression
   - Size: 1920x1080 optimized for web
   - Use Next.js Image component for automatic optimization

2. **Icons & Assets**
   - Use SVG for scalable graphics
   - Optimize PNG/JPG images with tools like TinyPNG

### Caching Strategy

- Static assets cached for 1 year
- HTML pages cached with revalidation
- API routes with appropriate cache headers

## 🔒 Security Considerations

### Headers Configuration

Add to `next.config.js`:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

### Content Security Policy

Consider adding CSP headers for enhanced security.

## 📈 Monitoring & Analytics

### Recommended Tools

- **Vercel Analytics**: Built-in performance monitoring
- **Google Analytics 4**: User behavior tracking
- **Hotjar**: User experience insights
- **Sentry**: Error tracking and performance monitoring

### Key Metrics to Track

- Page load times
- Email signup conversion rate
- Bounce rate
- Mobile vs desktop usage
- Geographic distribution

## 🔄 Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test # if you add tests
```

## 📞 Support & Maintenance

### Regular Updates

- Keep dependencies updated monthly
- Monitor Core Web Vitals
- Review and update content quarterly
- Test email capture functionality weekly

### Backup Strategy

- Repository backed up on GitHub
- Database backups (if email data stored)
- Regular exports of email subscriber lists

---

**Ready to launch FanCoach!** 🏈 