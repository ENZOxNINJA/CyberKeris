Project Name: Cyberkeris.com
Goal: Rebuild and redesign the full Cyberkeris.com website with a **premium, professional, and modern layout**, fully responsive, PWA-ready, including public, user, and admin/staff modules, AI Chat, cloud storage, email management, analytics dashboards, and notifications.

---

1️⃣ **Tech Stack**
- Frontend: **React + Next.js**
- Styling: **Tailwind CSS**, optional animations in **CSS**
- Backend: **Node.js / Express** (optional PHP for legacy pages)
- Database: **MySQL / MongoDB**
- Authentication: JWT or session-based login with **role-based access** (User, Staff, Admin)
- AI Chat: OpenAI API or custom AI backend
- PWA: Service Worker + Manifest for offline access
- Optional: S3-compatible cloud storage, SMTP server for email

---

2️⃣ **Design Layout & Theme**
- **Color Palette:** 
  - Primary: #0D1117 (dark background)
  - Secondary: #1F2937 (cards, sections)
  - Accent: #4F46E5 (buttons, highlights)
  - Text: #F9FAFB (light text)
- **Typography:** Inter, sans-serif
- **Design Style:** Modern, minimalistic, premium
- **Components:** Cards, Hero Sections, Grids, Modals, Dashboards, Analytics Charts
- **Navigation:** Sticky header, collapsible mobile menu
- **Footer:** Multi-column links, social icons
- **Animations:** Smooth hover, fade-in, scroll effects
- Fully **responsive** for all devices

---

3️⃣ **Pages & Modules**

**Public Pages:**
- Home, About, Cybersecurity, Software, Shop, Future, Blog, Contact, Portfolio, Careers, FAQ, Privacy, Terms

**User Pages (after login):**
- AI Chat
- Profile (optional)
- Order History / Shop Dashboard

**Admin / Staff Pages (after login):**
- Dashboard Overview
- Manage Pages, Users, Products
- AI Chat Logs
- Analytics Dashboard
- Notifications
- Emails: Inbox, Compose, Edit, View
- Cloud Storage: Upload, Edit, View

---

4️⃣ **Components**
- Header, Footer, QuickLinks
- HeroSection, Card, PageEditor
- AIChat
- AdminSidebar, AdminHeader, AdminCard
- EmailList, EmailCompose, EmailView
- CloudStorageList, CloudStorageUpload, CloudStorageView, CloudStorageEdit
- NotificationsList, AnalyticsChart
- SearchFilter

---

5️⃣ **Functional Requirements**
- Fully responsive across devices
- Role-based access control (User / Staff / Admin)
- AI Chat available only to logged-in users
- Staff/Admin access to cloud storage and email management
- Analytics & notifications dashboard for admin
- PWA support for offline usage
- SEO-friendly meta tags, sitemap, robots.txt
- Optional: Dark/Light mode toggle
- Optional: Multi-language support
- Optional: Real-time notifications
- Optional: Audit logs for admin actions
- Optional: Automated cloud backups

---

6️⃣ **Folder Structure**
cyberkeris/
├─ pages/                # Next.js pages (public, auth, AI, admin)
├─ components/           # UI components
├─ utils/                # Auth, API, Cloud, Email, Analytics, Search
├─ styles/               # Tailwind CSS + animations
├─ public/               # Logos, icons, images
├─ scripts/              # JS scripts
├─ pwa/                  # Service Worker + manifest
├─ storage/              # Cloud, logs, backups
├─ config/               # Environment variables & API keys
└─ README.md

---

7️⃣ **Design Layout Notes**
- **Home Page:** Hero banner, services cards, AI Chat teaser, latest blog posts
- **Service Pages:** Two-column sections, feature cards, CTA buttons
- **Shop Page:** Product grid, filter & search
- **Portfolio:** Project gallery with lightbox
- **Blog:** Article grid, categories, search
- **Contact:** Contact form, map, company info
- **AI Chat Page:** Chatbox interface, scrollable message history
- **Admin Dashboard:** Cards for metrics, sidebar navigation, charts
- **Emails Module:** Table view, compose modal, view email detail
- **Cloud Storage Module:** File grid/list, upload modal, download buttons

---

8️⃣ **Deployment Instructions (VPS + cPanel)**
- Node.js hosting via cPanel or VPS
- Database setup via MySQL / MariaDB in cPanel
- Upload build output (`.next`, `public`, `node_modules`) to `/public_html/`
- Configure `.env` for database, AI API keys, SMTP credentials
- Optional SSH commands:
  ```bash
  cd /home/username/public_html
  npm install
  npm run build
  npm start
