# SaiRam Anugula - Personal Website Deployment Guide

## Table of Contents
1. [Quick Start](#quick-start)
2. [Domain Setup](#domain-setup)
3. [Vercel Deployment](#vercel-deployment)
4. [Netlify Deployment](#netlify-deployment)
5. [Contact Form Setup (Formspree)](#contact-form-setup)
6. [CRM Integration](#crm-integration)
7. [Analytics Setup](#analytics-setup)
8. [Email Setup](#email-setup)
9. [Post-Launch Checklist](#post-launch-checklist)

---

## Quick Start

### Option A: Simple HTML Deployment (Fastest - 15 minutes)
1. Use the `index.html` file directly
2. Deploy to Vercel/Netlify via drag-and-drop
3. Configure domain

### Option B: Next.js Deployment (Recommended for Blog)
1. Use the Next.js project in `/nextjs-website`
2. Push to GitHub
3. Connect to Vercel
4. Configure domain

---

## Domain Setup

### Recommended Domain Registrars
| Registrar | Price | Features |
|-----------|-------|----------|
| **Cloudflare** | $8-10/yr | Free DNS, DDoS protection |
| **Namecheap** | $10-12/yr | Free WhoisGuard |
| **Google Domains** | $12/yr | Simple interface |

### Suggested Domain Names
- `sairamanugula.com` (professional, full name)
- `sairam.io` (shorter, tech-focused)
- `sairamgtm.com` (brand + specialty)

### Step-by-Step Domain Purchase (Namecheap)
```
1. Go to namecheap.com
2. Search for your desired domain
3. Add to cart → Checkout
4. Create account (use personal email)
5. Complete purchase
6. Domain will be active in minutes
```

---

## Vercel Deployment

### Why Vercel?
- Free tier is generous (100GB bandwidth/month)
- Automatic HTTPS
- Global CDN
- Instant deploys from Git

### Method 1: Direct Upload (Simplest)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Navigate to your website folder
cd /path/to/sairam-website

# 3. Deploy
vercel

# 4. Follow prompts:
#    - Set up and deploy? Y
#    - Which scope? (select your account)
#    - Link to existing project? N
#    - Project name: sairam-website
#    - Directory? ./
#    - Override settings? N

# 5. Your site is live at: https://sairam-website.vercel.app
```

### Method 2: GitHub Integration (Recommended)

```bash
# 1. Create GitHub repository
# Go to github.com → New Repository → "sairam-website"

# 2. Initialize and push
cd /path/to/sairam-website
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sairam-website.git
git push -u origin main

# 3. Connect to Vercel
# Go to vercel.com → New Project → Import Git Repository
# Select your repository
# Click Deploy
```

### Custom Domain Configuration

```bash
# In Vercel Dashboard:
1. Go to your project → Settings → Domains
2. Add your domain: sairamanugula.com
3. Add www subdomain: www.sairamanugula.com

# In your Domain Registrar (DNS Settings):
# Add these records:

# For root domain (sairamanugula.com):
Type: A
Name: @
Value: 76.76.21.21

# For www subdomain:
Type: CNAME
Name: www
Value: cname.vercel-dns.com

# Wait 5-10 minutes for DNS propagation
```

### Vercel Environment Variables (if using Next.js)
```bash
# In Vercel Dashboard → Settings → Environment Variables
NEXT_PUBLIC_FORMSPREE_ID=your_form_id
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Netlify Deployment

### Method 1: Drag & Drop
```
1. Go to netlify.com → Sign up with GitHub
2. Click "Add new site" → "Deploy manually"
3. Drag your website folder to the upload area
4. Site is live at random-name.netlify.app
```

### Method 2: Git Integration
```bash
# Same GitHub setup as Vercel, then:
1. Go to netlify.com → Add new site → Import from Git
2. Select your repository
3. Build settings (for HTML):
   - Base directory: (leave empty)
   - Build command: (leave empty)
   - Publish directory: .
4. Deploy
```

### Custom Domain on Netlify
```bash
# In Netlify Dashboard:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS (similar to Vercel)

# DNS Records:
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

---

## Contact Form Setup

### Formspree (Recommended - Free tier: 50 submissions/month)

```bash
# 1. Create account at formspree.io

# 2. Create new form
#    - Name: "SaiRam Website Contact"
#    - Click "Create Form"
#    - Copy your form ID (looks like: f/xyzabc123)

# 3. Update your HTML
#    Replace: action="https://formspree.io/f/YOUR_FORM_ID"
#    With:    action="https://formspree.io/f/xyzabc123"

# 4. Configure email notifications
#    - Go to Form Settings → Email
#    - Add your email address
#    - Enable notifications

# 5. Test the form
```

### Formspree Features to Enable
```yaml
# In Formspree Dashboard → Form Settings:

Email Notifications: ON
  - Add: hello@sairamanugula.com

Spam Protection: ON (reCAPTCHA)

Auto-Response: ON
  Subject: "Thanks for reaching out!"
  Message: |
    Hi {{name}},
    
    Thank you for contacting me. I've received your message 
    and will get back to you within 24-48 hours.
    
    Best regards,
    SaiRam
```

### Alternative: Resend (For Next.js - API-based)
```javascript
// pages/api/contact.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, interest, message } = req.body;

  try {
    await resend.emails.send({
      from: 'Website <noreply@sairamanugula.com>',
      to: 'hello@sairamanugula.com',
      subject: `New Contact: ${interest} - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
}
```

---

## CRM Integration

### Option 1: HubSpot (Free CRM)

```javascript
// Add to your contact form submission
async function submitToHubSpot(data) {
  const portalId = 'YOUR_PORTAL_ID';
  const formGuid = 'YOUR_FORM_GUID';
  
  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: [
          { name: 'email', value: data.email },
          { name: 'firstname', value: data.name },
          { name: 'message', value: data.message },
          { name: 'interest_type', value: data.interest }
        ],
        context: {
          pageUri: window.location.href,
          pageName: 'Contact Form'
        }
      })
    }
  );
  
  return response.ok;
}
```

### HubSpot Setup Steps
```
1. Create free account at hubspot.com
2. Go to Marketing → Forms → Create Form
3. Add fields: Email, Name, Message, Interest Type (dropdown)
4. Get Portal ID from Settings → Account
5. Get Form GUID from the form URL
6. Integrate with your website
```

### Option 2: Notion Database (Simple CRM)

```javascript
// Using Notion API
async function submitToNotion(data) {
  const response = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28'
    },
    body: JSON.stringify({
      parent: { database_id: 'YOUR_DATABASE_ID' },
      properties: {
        'Name': { title: [{ text: { content: data.name } }] },
        'Email': { email: data.email },
        'Interest': { select: { name: data.interest } },
        'Message': { rich_text: [{ text: { content: data.message } }] },
        'Status': { select: { name: 'New' } },
        'Date': { date: { start: new Date().toISOString() } }
      }
    })
  });
  
  return response.ok;
}
```

### Option 3: Airtable (Visual CRM)
```javascript
// Using Airtable API
async function submitToAirtable(data) {
  const response = await fetch(
    `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Contacts`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        records: [{
          fields: {
            'Name': data.name,
            'Email': data.email,
            'Interest': data.interest,
            'Message': data.message,
            'Status': 'New',
            'Source': 'Website'
          }
        }]
      })
    }
  );
  
  return response.ok;
}
```

---

## Analytics Setup

### Google Analytics 4

```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Setup Steps
```
1. Go to analytics.google.com
2. Create account → Create property
3. Enter website details
4. Get Measurement ID (G-XXXXXXXXXX)
5. Add tracking code to your website
```

### Alternative: Plausible Analytics (Privacy-friendly, $9/mo)
```html
<script defer data-domain="sairamanugula.com" 
        src="https://plausible.io/js/script.js"></script>
```

---

## Email Setup

### Option 1: Zoho Mail (Free)
```
1. Go to zoho.com/mail
2. Sign up with your domain
3. Add DNS records:
   
   MX Record 1:
   Host: @
   Points to: mx.zoho.com
   Priority: 10
   
   MX Record 2:
   Host: @
   Points to: mx2.zoho.com
   Priority: 20
   
   SPF Record:
   Type: TXT
   Host: @
   Value: v=spf1 include:zoho.com ~all

4. Create email: hello@sairamanugula.com
```

### Option 2: Google Workspace ($6/user/mo)
```
1. Go to workspace.google.com
2. Start free trial
3. Verify domain ownership
4. Add MX records:
   
   Priority 1: ASPMX.L.GOOGLE.COM
   Priority 5: ALT1.ASPMX.L.GOOGLE.COM
   Priority 5: ALT2.ASPMX.L.GOOGLE.COM
   Priority 10: ALT3.ASPMX.L.GOOGLE.COM
   Priority 10: ALT4.ASPMX.L.GOOGLE.COM

5. Create email aliases
```

### Option 3: Email Forwarding (Free with Cloudflare)
```
1. Use Cloudflare as DNS
2. Go to Email → Email Routing
3. Create routing rule:
   From: hello@sairamanugula.com
   To: your-personal@gmail.com
```

---

## Post-Launch Checklist

### Before Launch
- [ ] Test all links work
- [ ] Test contact form (sends email)
- [ ] Test on mobile devices
- [ ] Test page speed (aim for <3s)
- [ ] Add professional headshot
- [ ] Update meta descriptions
- [ ] Add OG image for social sharing

### After Launch
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile (optional)
- [ ] Update LinkedIn with website URL
- [ ] Share announcement on LinkedIn
- [ ] Set up monitoring (UptimeRobot - free)

### Google Search Console Setup
```
1. Go to search.google.com/search-console
2. Add property → URL prefix → your domain
3. Verify ownership (HTML file or DNS)
4. Submit sitemap: /sitemap.xml
```

### Sitemap for Simple HTML Site
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sairamanugula.com/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## Troubleshooting

### Common Issues

**DNS not propagating:**
- Wait 24-48 hours (usually much faster)
- Check at: dnschecker.org

**HTTPS not working:**
- Vercel/Netlify auto-provision SSL
- May take 5-10 minutes after domain setup

**Form not submitting:**
- Check Formspree form ID
- Check browser console for errors
- Verify no ad blockers interfering

**Site not updating:**
- Clear browser cache
- Vercel: Redeploy from dashboard
- Check build logs for errors

---

## Cost Summary

| Item | One-Time | Monthly | Annual |
|------|----------|---------|--------|
| Domain | - | - | $12-15 |
| Hosting (Vercel) | - | $0 | $0 |
| Email (Zoho Free) | - | $0 | $0 |
| Contact Form (Formspree) | - | $0 | $0 |
| Analytics (GA4) | - | $0 | $0 |
| **Total** | **$0** | **$0** | **~$15** |

---

## Support & Resources

- Vercel Docs: vercel.com/docs
- Netlify Docs: docs.netlify.com
- Formspree Docs: help.formspree.io
- Google Analytics: support.google.com/analytics

Need help? Create an issue in your GitHub repository or reach out on LinkedIn.
