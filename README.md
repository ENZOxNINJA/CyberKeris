Project: Cyberkeris.com
Goal: Generate full source code including HTML, JS, CSS, React components, and admin/staff modules with professional, premium, and responsive layout.

---

1️⃣ **Tech Stack**
- Frontend: HTML5, CSS3, Tailwind CSS, JavaScript ES6, React (Next.js optional)
- Backend: Node.js/Express or PHP for cPanel deployment
- Database: MySQL or MongoDB
- Authentication: Session-based or JWT (User, Staff, Admin roles)
- AI Chat: OpenAI API integration or local AI backend
- PWA: Service Worker, Manifest
- Optional: Cloud storage (S3/local), Email server (SMTP)

---

2️⃣ **Pages**
**Public:**
- index.html / index.js
- about.html
- cybersecurity.html
- software.html
- shop.html
- future.html
- blog.html
- contact.html
- portfolio.html
- careers.html
- faq.html
- privacy.html
- terms.html

**Auth:**
- login.html / login.js
- signup.html / signup.js
- logout.js (or PHP)

**User:**
- ai-chat.html / ai-chat.js

**Admin / Staff:**
- admin/index.html
- admin/manage-pages.html
- admin/manage-users.html
- admin/manage-products.html
- admin/ai-chat-logs.html
- admin/analytics.html
- admin/notifications.html
- admin/emails/ (inbox, compose, edit, view)
- admin/cloud-storage/ (upload, edit, view)

---

3️⃣ **Components / Reusable Modules**
- Header.js / header.html
- Footer.js / footer.html
- HeroSection.js
- Card.js
- AdminSidebar.js
- AdminHeader.js
- AdminCard.js
- PageEditor.js
- AIChat.js / ai-chat.js
- EmailList.js
- EmailCompose.js
- EmailView.js
- CloudStorageList.js
- CloudStorageUpload.js
- CloudStorageView.js
- CloudStorageEdit.js
- NotificationsList.js
- AnalyticsChart.js
- SearchFilter.js

---

4️⃣ **CSS / Styles**
- globals.css (base Tailwind + typography + colors)
- animations.css (fade, slide, hover effects)
- theme.css (primary, secondary, accent colors)
- responsive.css (media queries if needed)

**Color Palette:**
- Primary: #0D1117
- Secondary: #1F2937
- Accent: #4F46E5
- Text: #F9FAFB

---

5️⃣ **JS / Functionality**
- scripts.js (general page scripts, menu toggle, modals)
- ai-chat.js (frontend AI chat logic)
- auth.js (login, signup, session check)
- api.js (AJAX/axios requests)
- cloud.js (upload/download files)
- email.js (send, edit, view emails)
- analytics.js (charts, dashboards)
- notifications.js (alerts)
- search.js (filtering tables and lists)

---

6️⃣ **Folder Structure**
cyberkeris/
├─ pages/
│   ├─ public/ (HTML/JS)
│   ├─ auth/ (login/signup/logout)
│   ├─ ai/ (ai-chat)
│   └─ admin/ (dashboard, emails, cloud storage, analytics)
├─ components/ (reusable UI)
├─ utils/ (auth, cloud, email, analytics)
├─ styles/ (globals.css, animations.css, theme.css)
├─ scripts/ (scripts.js, ai-chat.js)
├─ public/ (images, icons, logo.png)
├─ storage/ (cloud, logs, backups)
├─ pwa/ (service worker, manifest)
└─ README.md

---

7️⃣ **Functional Requirements**
- Fully responsive, premium layout
- Role-based access (User, Staff, Admin)
- AI Chat available only to logged-in users
- Admin/Staff access to Cloud Storage and Emails
- Analytics dashboard for Admin
- Notifications system
- Optional: Dark/Light mode toggle
- Optional: Multi-language support
- SEO-friendly, PWA-ready, offline caching

---

8️⃣ **Deployment Notes**
- Compatible with VPS + cPanel
- Place HTML/JS/CSS in public_html or build Next.js to /public_html
- Configure database in cPanel (MySQL)
- Use environment variables for AI API key, email SMTP, database
- Optional automated deployment scripts (FTP, npm install, npm build)