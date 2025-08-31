# 🌟 Spread A Smile India - Official Website

A comprehensive, modern website for **Spread A Smile India NGO**, a Delhi-based charitable organization dedicated to transforming the lives of street children since 2005. Under the leadership of **Sangita Mehra**, the organization has helped over 300 children transition from streets to classrooms.

## 🚀 Project Overview

This is a full-featured NGO website built with modern web technologies, featuring a complete theme system, interactive components, and comprehensive content management for showcasing the organization's impact, programs, and engagement opportunities.

## ✨ Key Features

### 🎨 Design & User Experience
- **🌓 Dark/Light Theme Toggle** - Seamless theme switching with localStorage persistence
- **📱 Fully Responsive Design** - Optimized for all devices (320px to 1920px+)
- **🎭 Advanced Animations** - GSAP-powered smooth animations and micro-interactions
- **♿ Accessibility Compliant** - WCAG AA standards with screen reader support
- **⚡ Performance Optimized** - Lazy loading, image optimization, and efficient loading

### 🧭 Navigation & Content
- **🏠 Dynamic Homepage** - Hero carousel, impact metrics, team showcase, and social feeds
- **📖 About Sections** - Mission/Vision, History, Founder story, Team profiles, Partners
- **🎯 Programs Showcase** - Education, Health, Nutrition, Vocational Training, Events
- **📊 Impact Tracking** - Achievements, Success stories, Testimonials, Annual reports
- **🤝 Get Involved Hub** - Volunteer signup, Donation system, Partnerships, Careers
- **📺 Media Gallery** - Photo galleries, Press coverage, Videos
- **📞 Contact Integration** - Contact forms, Location mapping, Social media links

### 🔧 Technical Features
- **🎨 Advanced CSS System** - CSS Variables, Modern Grid/Flexbox layouts
- **🎯 Component-Based Architecture** - Reusable EJS partials and components
- **🔄 Session Management** - Express sessions for theme and user state
- **📡 API Endpoints** - RESTful APIs for forms, statistics, and data management
- **📝 Form Handling** - Contact forms, Newsletter signup, Volunteer registration
- **🛡️ Error Handling** - Comprehensive error pages and validation

## 🏗️ Technical Architecture

### Backend Stack
```javascript
- Node.js 16+ (Runtime)
- Express.js 4.18+ (Web Framework)
- EJS 3.1+ (Templating Engine)
- Express Session (State Management)
- CORS (Cross-Origin Resource Sharing)
- dotenv (Environment Configuration)
```

### Frontend Stack
```css
- CSS3 with CSS Variables (Styling)
- CSS Grid & Flexbox (Layouts)
- GSAP 3.12+ (Animations)
- Font Awesome 6.5+ (Icons)
- BoxIcons 2.1+ (Additional Icons)
- AOS (Animate On Scroll)
- Google Fonts (Typography)
```

### Design System
```css
/* Typography */
--primary-font: 'Inter' (400, 500, 600, 700)
--display-font: 'Poppins' (300, 400, 500, 600, 700, 800)

/* Colors */
--primary-color: #F7941D (Spread A Smile Orange)
--secondary-color: #ED1C24 (Vibrant Red)
--accent-color: #EC4F78 (Warm Pink)
--success-color: #27ae60 (Growth Green)

/* Breakpoints */
--mobile: 320px - 768px
--tablet: 769px - 1024px
--desktop: 1025px - 1440px
--large-desktop: 1441px+
```

## 📁 Project Structure

```
SPREAD-A-SMILE-INDIA/
├── app.js                     # Main Express server application
├── package.json               # Dependencies and scripts
├── README.md                  # This comprehensive documentation
├── client-data.md             # Organization background and data
├── copilot-instructions.md    # Development guidelines and phases
│
├── routes/                    # Express route handlers
│   ├── index.js              # Homepage routes
│   ├── about.js              # About section routes (mission, history, founder, team)
│   ├── programs.js           # Programs routes (education, health, nutrition, vocational)
│   ├── impact.js             # Impact routes (achievements, stories, testimonials, reports)
│   ├── get-involved.js       # Engagement routes (volunteer, donate, careers, partnerships)
│   ├── media.js              # Media routes (gallery, press, videos)
│   ├── contact.js            # Contact and communication routes
│   ├── footer-pages.js       # Legal and secondary pages (FAQ, privacy, terms)
│   └── api.js                # RESTful API endpoints (forms, statistics, data)
│
├── views/                     # EJS templates and components
│   ├── index.ejs             # Homepage template
│   ├── index-new.ejs         # Alternative homepage layout
│   ├── contact.ejs           # Contact page
│   ├── 404.ejs               # Error pages
│   ├── error.ejs
│   │
│   ├── partials/             # Reusable EJS components
│   │   ├── header.ejs        # Navigation, meta tags, theme initialization
│   │   └── footer.ejs        # Footer, social links, newsletter signup
│   │
│   ├── components/           # Specialized reusable components
│   │   ├── impact-card.ejs   # Impact metric cards
│   │   ├── program-card.ejs  # Program showcase cards
│   │   ├── team-card.ejs     # Team member cards
│   │   ├── testimonial-card.ejs # Testimonial components
│   │   └── [more cards...]
│   │
│   ├── about/               # About section pages
│   │   ├── index.ejs        # About overview
│   │   ├── mission.ejs      # Mission & Vision
│   │   ├── history.ejs      # Organization history
│   │   ├── founder.ejs      # Sangita Mehra's story
│   │   ├── team.ejs         # Team members & advisors
│   │   └── partners.ejs     # Collaborators & partnerships
│   │
│   ├── programs/            # Programs section
│   │   ├── index.ejs        # Programs overview
│   │   ├── education.ejs    # Education support programs
│   │   ├── health.ejs       # Health & wellness initiatives
│   │   ├── nutrition.ejs    # Food & nutrition programs
│   │   ├── vocational.ejs   # Skills training programs
│   │   └── events.ejs       # Events & campaigns
│   │
│   ├── impact/              # Impact showcase
│   │   ├── index.ejs        # Impact overview
│   │   ├── achievements.ejs # Key milestones & awards
│   │   ├── stories.ejs      # Success stories & transformations
│   │   ├── testimonials.ejs # Community testimonials
│   │   └── reports.ejs      # Annual reports & transparency
│   │
│   ├── get-involved/        # Engagement opportunities
│   │   ├── index.ejs        # Get involved overview
│   │   ├── volunteer.ejs    # Volunteer opportunities & signup
│   │   ├── donate.ejs       # Donation forms & options
│   │   ├── careers.ejs      # Job openings & internships
│   │   └── [more pages...]
│   │
│   └── media/               # Media & communications
│       ├── index.ejs        # Media overview
│       └── [media pages...]
│
├── public/                   # Static assets and styling
│   ├── css/                 # Comprehensive styling system
│   │   ├── style.css        # Base styles & variables
│   │   ├── components.css   # Reusable component styles
│   │   ├── navbar-enhanced.css # Navigation styling
│   │   ├── homepage.css     # Homepage-specific styles
│   │   ├── landing.css      # Landing page styles
│   │   ├── about.css        # About section styles
│   │   ├── education.css    # Education program styles
│   │   ├── health.css       # Health program styles
│   │   ├── impact.css       # Impact section styles
│   │   └── [more page-specific styles...]
│   │
│   ├── js/                  # Interactive functionality
│   │   ├── script.js        # Global JavaScript & theme management
│   │   ├── homepage.js      # Homepage interactions
│   │   ├── landing.js       # Landing page functionality
│   │   ├── mobile-menu.js   # Mobile navigation
│   │   └── timeline.js      # Timeline interactions
│   │
│   └── src/                 # Media assets
│       ├── images/          # Optimized images
│       ├── videos/          # Video content
│       └── icons/           # Favicon and app icons
│
└── [config files...]        # Git, environment, and build configurations
```

## 🛣️ Navigation Structure

### Main Navigation Sections
1. **🏠 Home** - Homepage with hero carousel and key features
2. **👥 About** - Organization information and team
   - Mission & Vision
   - Our Story/History
   - Founder (Sangita Mehra)
   - Team Members
   - Partners & Collaborators
3. **🎯 Programs** - Service offerings
   - Education Support
   - Health & Wellness
   - Food & Nutrition
   - Vocational Training
   - Events & Campaigns
4. **📊 Impact** - Results and outcomes
   - Key Achievements
   - Success Stories
   - Testimonials
   - Annual Reports
5. **🤝 Get Involved** - Engagement opportunities
   - Volunteer
   - Donate
   - Partner/Collaborate
   - Careers & Internships
6. **📺 Media** - Visual content
   - Photo Gallery
   - Press Coverage
   - Videos
7. **📞 Contact** - Communication and location

### Footer Pages
- FAQ (Frequently Asked Questions)
- Resources & Downloads
- Legal Information
- Privacy Policy
- Terms & Conditions
- Newsletter Subscription

## 🎯 API Endpoints

### Public APIs
```javascript
// Statistics and Data
GET /api/statistics          // Impact metrics and numbers
GET /api/instagram-feed      // Social media content

// Form Submissions
POST /api/newsletter-signup  // Newsletter subscription
POST /api/volunteer-signup   // Volunteer registration
POST /api/contact            // Contact form submission
POST /api/toggle-theme       // Theme switching
```

### Data Models
```javascript
// Contact Inquiry
{
  name, email, phone, subject, message,
  submittedAt, status: 'new'|'processed'|'resolved'
}

// Volunteer Application
{
  name, email, phone, skills, availability,
  experience, motivation, appliedAt, status: 'pending'|'approved'|'declined'
}

// Newsletter Subscription
{
  email, subscribedAt, active: boolean
}

// Statistics
{
  childrenImpacted: 2500,
  currentlyInSchool: 1800,
  womenTrained: 950,
  yearsOfService: 15,
  projectsCompleted: 125,
  volunteersActive: 85
}
```

## 🎨 Theme System

### Theme Implementation
- **🌅 Light Theme** - Clean, bright interface with warm accent colors
- **🌙 Dark Theme** - Professional dark interface with enhanced readability
- **🔄 Theme Persistence** - Remembers user preference via localStorage
- **⚡ Smooth Transitions** - Animated theme switching with GSAP
- **🎯 CSS Variables** - Consistent color management across all components

### Theme Features
```javascript
// Theme Toggle Functionality
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('spreadasmile-theme', newTheme);
}
```

## 🏃‍♂️ Getting Started

### Prerequisites
```bash
- Node.js 16.0+ 
- npm 8.0+
- Git
```

### Installation & Setup
```bash
# Clone the repository
git clone https://github.com/sw-esports/SPREAD-A-SMILE-INDIA.git
cd SPREAD-A-SMILE-INDIA

# Install dependencies
npm install

# Create environment file (optional)
cp .env.example .env

# Start development server
npm run dev

# Or start production server
npm start
```

### Available Scripts
```bash
npm start        # Start production server (port 3002)
npm run dev      # Start development server with hot reload
npm test         # Run tests (currently placeholder)
```

### Environment Variables
```bash
PORT=3002                           # Server port (default: 3002)
SESSION_SECRET=your-session-secret  # Session encryption key
NODE_ENV=development               # Environment mode
```

## 🚀 Deployment

### Server Requirements
- **Node.js** 16.0+
- **RAM** 512MB minimum, 1GB recommended
- **Storage** 2GB minimum for assets and logs
- **Network** HTTPS recommended for session security

### Deployment Options
1. **Traditional VPS/Cloud** (DigitalOcean, Linode, AWS EC2)
2. **Platform-as-a-Service** (Heroku, Railway, Vercel)
3. **Container Deployment** (Docker ready)

### Production Configuration
```javascript
// Enable HTTPS in production
cookie: { 
  secure: process.env.NODE_ENV === 'production',
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}
```

## 📊 Organization Information

### About Spread A Smile India
- **Founded**: 2005 (20 years of service)
- **Founder & Director**: Sangita Mehra
- **Location**: Munirka Village, New Delhi 110067
- **Legal Status**: Registered Charitable Trust
- **Mission**: Transform street children's lives through education and empowerment

### Impact Metrics (Current)
- **2,500+** Children impacted since inception
- **1,800+** Currently enrolled in schools
- **950+** Women trained in vocational skills
- **15** Years of continuous service
- **125** Projects completed successfully
- **85** Active volunteers
- **32** Partner organizations

### Contact Information
- **Address**: 108/A 1st Floor, Mandir Wali Gali, Munirka Village, New Delhi 110067
- **Phone**: +91 97178 66620, +91 98917 28996
- **Social Media**: @sangitamehra1 (Instagram), Spread A Smile India (Facebook)
- **Operating Hours**: Monday - Saturday, 10:00 AM - 6:00 PM

## 🔮 Future Enhancements

### Planned Features
- **🔐 Admin Dashboard** - Content management system
- **💳 Payment Integration** - Online donation processing
- **📱 Mobile App** - Dedicated mobile application
- **🤖 Chatbot Integration** - Automated visitor assistance
- **📈 Analytics Dashboard** - Impact tracking and reporting
- **🌐 Multi-language Support** - Hindi and English versions
- **📊 Real-time Statistics** - Live impact metrics

### Technical Improvements
- **Database Integration** - MongoDB/PostgreSQL for data persistence
- **Email Automation** - Newsletter and notification systems
- **CDN Integration** - Global content delivery
- **PWA Features** - Progressive Web App capabilities
- **API Expansion** - RESTful API for mobile apps

## 🤝 Contributing

This project is currently maintained for Spread A Smile India NGO. For contributions or suggestions:

1. **🐛 Bug Reports** - Use GitHub issues
2. **💡 Feature Requests** - Contact the development team
3. **🔧 Code Contributions** - Fork, develop, and submit pull requests
4. **📚 Documentation** - Help improve this README and code comments

## 📄 License

This project is developed for **Spread A Smile India NGO** and contains proprietary content. The codebase structure and technical implementation can serve as a reference for similar NGO websites.

## 🙏 Acknowledgments

- **Sangita Mehra** - Founder & Visionary of Spread A Smile India
- **Development Team** - Technical implementation and design
- **Community Contributors** - Feedback and testing
- **Open Source Libraries** - GSAP, AOS, Font Awesome, and others

---

**🌟 "Every smile we spread creates ripples of hope in someone's life" - Spread A Smile India**

*For more information about the organization, visit our website or contact us directly.* 
