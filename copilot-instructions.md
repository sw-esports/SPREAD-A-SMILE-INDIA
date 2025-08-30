# Copilot Instructions — NGO Website Project

## Special Instructions
**Important Technical Requirements:**
- This app will have **theme switching** (dark and light mode)
- Use **EJS components** so we can reuse them across pages
- Create reusable partials for header, footer, navigation, and common sections
- Implement consistent theming system with CSS variables or classes

---

## Part 1: Client/NGO Information

**Purpose:** All essential NGO details for website content and branding.

### NGO Data - Spread A Smile India
- **Organization name:** Spread A Smile India (Spread A Smile Foundation India)
- **Legal status:** Registered as a Charitable Trust (Delhi)
- **Short tagline:** "From Streets to Classrooms - Uplifting Destitute Street Children"
- **Mission statement:** To uplift and educate destitute street children, helping them transition from streets to classrooms. We aim for the overall improvement of underprivileged kids, ensuring they get basic needs and access to formal education through schooling support, healthcare, nutrition, and emotional care.
- **Vision:** A future where every child born in poverty can break the cycle of destitution through education and empowerment.
- **Founder & Director:** Sangita Mehra
- **Primary contact name:** Sangita Mehra
- **Primary email:** Contact via social media (no public email listed)
- **Phone:** +91 97178 66620, +91 98917 28996
- **Address:** 108/A 1st Floor, Mandir Wali Gali (Opposite Canara Bank), Munirka Village, New Delhi 110067
- **Founded:** 2005-2006 (approximately 20 years ago)
- **Beneficiaries:** 300+ children impacted, 170+ currently active, 85+ women trained
- **Logo files:** `public/src/images/logo.png` (and SVG)
- **Donation methods:** Contact via social media for donation options

### Favicon Configuration
Generate and place favicon files in `public/` root:
```html
<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
```

### Theme Colors
**🌞 Light Theme Palette** (Bright, playful, kid-friendly)
- **Background:** White (#FFFFFF) or Soft Beige (#FFF8F0)
- **Primary:** Bright Orange (#F7941D) → buttons, CTAs
- **Secondary:** Cheerful Red (#ED1C24) → highlights, icons
- **Accent:** Playful Pink (#EC4F78) → banners, badges
- **Text:** Charcoal Black (#333333)

**🌙 Dark Theme Palette** (Warm, vibrant, approachable)
- **Background:** Deep Charcoal (#1C1C1C) or Soft Navy (#121821)
- **Primary:** Bright Orange (#F7941D) → buttons & links
- **Secondary:** Cheerful Red (#ED1C24) → alerts, highlights
- **Accent:** Soft Pink (#FF7FA2) → icons, playful touches
- **Text:** Light Grey (#E6E6E6)

### Social Media Links
- **Facebook:** "Spread A Smile India" (public page)
- **Instagram:** @sangitamehra1 (official NGO account)
- **LinkedIn:** Sangita Mehra (founder profile)
- **YouTube:** TEDxCoventGardenWomen - "Making Lemonade From Love" talk
- **Contact:** Via social media messaging or visit Munirka centre
- **WhatsApp Groups:** Available for volunteers and donors

### Key Programs & Impact
- **Education Support:** 170+ children currently enrolled in government schools
- **Nutrition:** Daily meals and nutrition programs
- **Healthcare:** Regular health camps with Rotary Club partnerships
- **Vocational Training:** 85+ women trained in handicrafts and micro-enterprise
- **Community Events:** Annual celebrations, volunteer programs, fundraising events

### Website Structure & Navigation

🌐 **Full Website Sections (Numbered Order)**

**Main Navbar Sections:**

**1. Home**
- Hero banner (NGO tagline, Donate/Volunteer button)
- Highlights of mission + quick stats (children helped, meals served, etc.)
- Latest news/events snapshot
- Call-to-action (Donate / Volunteer)

**2. About Us**
- 2.1 Mission & Vision
- 2.2 History / How We Started
- 2.3 Founder's Message (Sangita Mehra)
- 2.4 Team Members & Advisors
- 2.5 Partners & Collaborators

**3. Programs**
- 3.1 Education Support (tuition, scholarships, stationery drives)
- 3.2 Health & Wellness (medical camps, check-ups, mental health)
- 3.3 Food & Nutrition (mid-day meals, ration kits)
- 3.4 Vocational Training / Skill Development
- 3.5 Events & Campaigns (awareness drives, celebrations, outreach)

**4. Impact**
- 4.1 Key Achievements & Progress Numbers (infographics)
- 4.2 Success Stories (individual child/family case studies)
- 4.3 Testimonials (from volunteers, donors, families)
- 4.4 Annual Reports (financial + activity PDFs)

**5. Get Involved**
- 5.1 Volunteer (signup form)
- 5.2 Donate (UPI, PayPal, Bank transfer, QR code)
- 5.3 Collaborate (CSR, partner NGOs, schools, corporates)
- 5.4 Careers / Internships

**6. Media**
- 6.1 Gallery (Photos & Videos)
- 6.2 Press Coverage (articles, news mentions, interviews)

**7. Contact Us**
- Contact Form
- Address (Munirka, New Delhi)
- Map Embed
- Phone & Email
- Social Media Links

**Footer / Secondary Sections** (not in main navbar, but must be included):

**8. FAQ** (donation process, tax benefits, volunteering questions)

**9. Resources / Downloads** (flyers, brochures, guides, PDFs)

**10. Legal Information** (NGO registration number, PAN, CSR eligibility, 80G/12A if available)

**11. Newsletter Signup** (email subscription form)

**12. Policies** (Privacy Policy, Terms & Conditions, Refund policy for donations)

### Content Mapping for Spread A Smile India
- **Home:** Hero with Sangita's story, 300+ children impacted, education/nutrition/healthcare programs, donate CTA
- **About:** Founded 2005 by Sangita Mehra, mission to transition street children to classrooms, team info, 20-year journey
- **Programs:** Education Support (170+ in school), Nutrition (daily meals), Healthcare (Rotary partnerships), Vocational Training (85+ women)
- **Impact:** 300+ children helped, 170+ currently in school, 85+ women trained, partnership with Rotary Club
- **Get Involved:** Social media contact for donations, volunteer opportunities, corporate partnerships
- **Media:** Before/after photos, events, celebrations, volunteer activities, TEDx talk, press coverage
- **Contact:** Social media channels, Munirka centre address, volunteer sign-up, partnership inquiries

---

## Part 2: Phase 1 - Setup (Routes, Server, Rendering)

**Duration:** 1-3 days  
**Owner:** Developer  
**Focus:** Foundation, server setup, EJS templating system

### Deliverables
- ✅ Express.js server with routing
- ✅ EJS templating engine configured
- ✅ Reusable EJS components/partials
- ✅ Theme switching system foundation
- ✅ Basic middleware and static file serving

### Tasks
1. **Server Setup**
   - Initialize Express.js application
   - Configure EJS as template engine
   - Set up static file serving for CSS/JS/images
   - Create basic error handling middleware

2. **Routing Structure**
   - Main routes: `/` (Home), `/about` (About Us), `/programs` (Programs), `/impact` (Impact), `/get-involved` (Get Involved), `/media` (Media), `/contact` (Contact Us)
   - Sub-routes: `/about/mission`, `/about/history`, `/about/founder`, `/about/team`, `/about/partners`
   - Program sub-routes: `/programs/education`, `/programs/health`, `/programs/nutrition`, `/programs/vocational`, `/programs/events`
   - Get Involved sub-routes: `/get-involved/volunteer`, `/get-involved/donate`, `/get-involved/collaborate`, `/get-involved/careers`
   - Footer routes: `/faq`, `/resources`, `/legal`, `/newsletter`, `/privacy`, `/terms`
   - API routes for forms and theme switching

3. **EJS Components System**
   - Create `views/partials/` folder
   - Build reusable components:
     - `header.ejs` (navigation with 7 main sections, logo, theme toggle)
     - `footer.ejs` (social links, secondary sections 8-12, newsletter signup)
     - `meta.ejs` (SEO meta tags, favicon configuration)
     - `hero.ejs` (reusable hero section for different pages)
     - `card.ejs` (program/impact/story cards)
     - `nav.ejs` (main navigation with dropdowns for sub-sections)
     - `breadcrumb.ejs` (navigation breadcrumbs)
     - `cta.ejs` (call-to-action components for donate/volunteer)
     - `stats.ejs` (impact numbers and statistics)
     - `testimonial.ejs` (volunteer/donor testimonials)

4. **Theme System Foundation**
   - Theme toggle route/endpoint
   - CSS variables for dark/light themes
   - Theme state management (session/localStorage)

### Acceptance Criteria
- Server runs on localhost with all routes responding
- EJS partials can be included and reused across pages
- Theme toggle functionality works (even with basic styling)
- All static assets load correctly

---

## Part 3: Phase 2 - Pages and Design

**Duration:** 1-2 weeks  
**Owner:** Designer + Frontend Developer  
**Focus:** Page layouts, responsive design, content integration

### Deliverables
- ✅ All core pages with content
- ✅ Responsive design (mobile-first)
- ✅ Theme styles (dark/light mode)
- ✅ Typography and spacing system
- ✅ Basic form layouts

### Tasks
1. **Page Creation**
   - `views/index.ejs` - Homepage with hero, stats, latest news, donate/volunteer CTAs
   - `views/about/` folder:
     - `mission.ejs` - Mission & Vision
     - `history.ejs` - How We Started
     - `founder.ejs` - Sangita Mehra's message
     - `team.ejs` - Team members & advisors
     - `partners.ejs` - Collaborators
   - `views/programs/` folder:
     - `education.ejs` - Education support details
     - `health.ejs` - Health & wellness programs
     - `nutrition.ejs` - Food & nutrition initiatives
     - `vocational.ejs` - Skill development programs
     - `events.ejs` - Events & campaigns
   - `views/impact/` folder:
     - `achievements.ejs` - Key progress numbers
     - `stories.ejs` - Success stories
     - `testimonials.ejs` - Testimonials
     - `reports.ejs` - Annual reports
   - `views/get-involved/` folder:
     - `volunteer.ejs` - Volunteer signup
     - `donate.ejs` - Donation options
     - `collaborate.ejs` - Partnership opportunities
     - `careers.ejs` - Jobs & internships
   - `views/media/` folder:
     - `gallery.ejs` - Photos & videos
     - `press.ejs` - Press coverage
   - `views/contact.ejs` - Contact form and information
   - `views/footer-pages/` folder:
     - `faq.ejs`, `resources.ejs`, `legal.ejs`, `privacy.ejs`, `terms.ejs`

2. **Design System**
   - CSS Grid/Flexbox layouts
   - Typography scale and spacing system
   - Color system with CSS variables
   - Component library (buttons, cards, forms)

3. **Theme Implementation**
   - Dark mode color palette
   - Light mode color palette
   - Smooth theme transitions
   - Theme persistence across pages

4. **Responsive Design**
   - Mobile-first approach
   - Tablet and desktop breakpoints
   - Navigation responsive behavior
   - Image optimization for different screen sizes

### Acceptance Criteria
- All pages display correctly on mobile, tablet, desktop
- Theme switching works seamlessly across all pages
- Content is readable and accessible in both themes
- Forms are properly styled and functional
- Navigation works on all devices

---

## Part 4: Phase 3 - Animation, Images & Polish

**Duration:** 3-7 days  
**Owner:** Frontend Developer  
**Focus:** Visual enhancements, animations, image optimization

### Deliverables
- ✅ Smooth page transitions and micro-interactions
- ✅ Optimized images with proper alt text
- ✅ Loading animations and states
- ✅ Scroll animations (AOS or custom)
- ✅ Performance optimization

### Tasks
1. **Animation Implementation**
   - CSS transitions for theme switching
   - Hover effects on buttons and cards
   - Smooth scroll behavior
   - Loading spinners for forms
   - Entrance animations for content sections

2. **Image Optimization**
   - Compress and optimize all images
   - Implement lazy loading
   - Add proper alt text for accessibility
   - Create responsive image sets
   - WebP format support where possible

3. **Micro-interactions**
   - Button hover/focus states
   - Form field focus indicators
   - Menu open/close animations
   - Scroll-to-top functionality
   - Donation progress indicators

4. **Performance & Accessibility**
   - Respect `prefers-reduced-motion`
   - Optimize CSS and JavaScript loading
   - Minimize render-blocking resources
   - Test with screen readers

### Acceptance Criteria
- Animations are smooth and don't impact performance
- All images load properly with appropriate fallbacks
- Site feels responsive and interactive
- Accessibility standards are maintained
- Page load times are under 3 seconds

---

## Part 5: Phase 4 - Integration & Deployment

**Duration:** 1-2 weeks  
**Owner:** Backend/Fullstack Developer  
**Focus:** Forms, payments, deployment, monitoring

### Deliverables
- ✅ Working contact and volunteer forms
- ✅ Donation integration (Stripe/PayPal)
- ✅ Email notifications
- ✅ Production deployment
- ✅ Analytics and monitoring

### Tasks
1. **Form Integration**
   - Contact form backend processing
   - Volunteer application form
   - Email notifications (NodeMailer or service)
   - Form validation and error handling
   - CSRF protection

2. **Payment Integration**
   - Stripe or PayPal donation processing
   - One-time and recurring donation options
   - Donation confirmation emails
   - Transaction logging and security

3. **CMS/Content Management** (Optional)
   - Simple admin panel for content updates
   - Blog/news posting capability
   - Event management system

4. **Deployment & Monitoring**
   - Production server setup (Heroku, Vercel, or VPS)
   - Environment variables configuration
   - SSL certificate setup
   - Google Analytics or privacy-focused alternative
   - Error monitoring (Sentry)
   - Backup strategy

### Acceptance Criteria
- All forms work and send notifications
- Donations process successfully in production
- Site is live with proper domain and SSL
- Analytics tracking is functional
- Error monitoring is in place

---

## Quick Start Commands

```bash
# Initialize the project
npm init -y
npm install express ejs dotenv nodemailer

# Install development dependencies
npm install -D nodemon concurrently

# Start development server
npm run dev
```

---

## File Structure Reference
```
views/
  partials/
    header.ejs
    footer.ejs
    meta.ejs
    hero.ejs
    nav.ejs
    breadcrumb.ejs
    card.ejs
    cta.ejs
    stats.ejs
    testimonial.ejs
  index.ejs
  about/
    mission.ejs
    history.ejs
    founder.ejs
    team.ejs
    partners.ejs
  programs/
    education.ejs
    health.ejs
    nutrition.ejs
    vocational.ejs
    events.ejs
  impact/
    achievements.ejs
    stories.ejs
    testimonials.ejs
    reports.ejs
  get-involved/
    volunteer.ejs
    donate.ejs
    collaborate.ejs
    careers.ejs
  media/
    gallery.ejs
    press.ejs
  contact.ejs
  footer-pages/
    faq.ejs
    resources.ejs
    legal.ejs
    privacy.ejs
    terms.ejs
public/
  css/
    style.css
    themes.css
    components.css
  js/
    script.js
    theme-toggle.js
    navigation.js
  src/
    images/
      hero/
      programs/
      team/
      gallery/
      logos/
    docs/
      reports/
      resources/
app.js
routes/
  index.js
  about.js
  programs.js
  impact.js
  get-involved.js
  media.js
  contact.js
  footer-pages.js
```
