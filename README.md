# CyberKeris
Official Website 
# Cyberkeris.com

![Cyberkeris Logo](./public/logo.svg)

---

## 🌐 Project Overview

**Cyberkeris.com** is a **full-stack enterprise website** designed for showcasing:

- Cybersecurity services  
- Software solutions  
- Online shop  
- AI-based chat interface  
- Future tech & research  
- Blog and portfolio  

It includes **role-based access** for Users, Staff, and Admins, with features such as:

- AI Chat (for authenticated users)  
- Cloud Storage for Staff/Admin  
- Email management (Inbox, Compose, View, Edit)  
- Page and Product management  
- Analytics dashboards and notifications  
- SEO-friendly, responsive, and PWA-ready  

The project is built with **Next.js**, **Tailwind CSS**, and **custom utilities** for authentication, API calls, cloud storage, email, analytics, and search.

---

## ⚡ Features

### Public
- Home, About, Cybersecurity, Software, Shop, Future, Blog  
- Contact, Portfolio, Careers, FAQ, Privacy, Terms  

### Authenticated Users
- Login & Signup  
- AI Chat Interface  

### Admin / Staff
- Dashboard & Analytics  
- Manage Pages, Users, Products  
- AI Chat Logs  
- Notifications Management  
- Email Management (Inbox, Compose, Edit, View)  
- Cloud Storage (Upload, Edit, View/Download)  

### Components
- Header, Footer, HeroSection, QuickLinks, Card  
- AdminSidebar, AdminHeader, AdminCard, PageEditor  
- AIChat, EmailList, EmailCompose, EmailView  
- CloudStorageList, CloudStorageUpload, CloudStorageView, CloudStorageEdit  
- NotificationsList, AnalyticsChart, SearchFilter  

### Utilities
- auth.js, api.js, email.js, cloud.js, notifications.js, analytics.js, search.js  

### PWA Support
- service-worker.js, manifest.json, icons  

---

## 🗂️ Folder Structure

```text
cyberkeris/
├─ pages/                # Next.js pages & routes
├─ components/           # Reusable UI components
├─ utils/                # Utility scripts
├─ public/               # Logo, icons, illustrations
├─ styles/               # Global & animation styles
├─ scripts/              # JS scripts
├─ pwa/                  # Service worker & manifest
├─ storage/              # Cloud uploads, logs, backups
├─ README.md             # Project documentation
├─ package.json          # Node.js dependencies
├─ tailwind.config.js    # Tailwind CSS config
├─ next.config.js        # Next.js config
└─ jsconfig.json         # JS/TS path config
