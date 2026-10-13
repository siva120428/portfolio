# Siva M — Full Stack MERN Developer Portfolio

A responsive developer portfolio website designed for **Siva M**, Full Stack Developer & MCA Scholar. Built using the **MERN Stack** (MongoDB, Express, React, Node.js) with editorial typography, dark cinematic aesthetics, glowing teal wave animations, and multi-language support (English, தமிழ், ಕನ್ನಡ).

---

## 🌟 Visual & Architectural Highlights

- **Hero Composition**: High-contrast serif display typography (`Playfair Display`), developer portrait with backlight and bottom fade vignette, and animated glowing teal SVG wave artwork.
- **MERN Stack Architecture**:
  - **Frontend (`client/`)**: React 18, Vite, Tailwind CSS, Lucide Icons, and Motion.
  - **Backend (`server/`)**: Node.js, Express, Helmet, CORS, Rate Limiting, Nodemailer, and Mongoose.
- **Multilingual System**: Seamless language switching across **English**, **தமிழ் (Tamil)**, and **ಕನ್ನಡ (Kannada)** with localStorage persistence.
- **Dark / Light Theme Toggle**: Default sleek cinematic dark mode (`#07090D`) with subtle deep navy glow and an alternative clean light mode.
- **Interactive Projects Showcase**:
  - **REDORA**: Emergency Blood Coordination Platform (MERN + Socket.IO) with topology network graphic.
  - **Zento**: MERN Stack Hotel Booking Website.
  - **RideKart**: Mobility & Vehicle Rental Hub.
- **Interactive Contact & Health Endpoints**:
  - `GET /api/health`: Health monitoring endpoint.
  - `POST /api/contact`: Form submission endpoint with input validation, rate limiting, and email dispatch via Nodemailer.
- **Location Preview**: OpenStreetMap preview centered on Tiruvannamalai, Tamil Nadu, India.

---

## 📁 Project Structure

```
d:/portfolio/
├── client/                      # React + Vite Frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/              # Portrait and visual assets
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── HeroWave.jsx
│   │   │   ├── ThemeToggle.jsx
│   │   │   ├── LanguageSwitcher.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   ├── LocationMap.jsx
│   │   │   └── Footer.jsx
│   │   ├── context/             # Theme & Language Contexts
│   │   │   ├── ThemeContext.jsx
│   │   │   └── LanguageContext.jsx
│   │   ├── data/                # Centralized Profile & Translations
│   │   │   ├── profileData.js   # Single source of truth for personal data
│   │   │   └── translations.js  # English, Tamil, and Kannada dictionaries
│   │   ├── sections/            # Portfolio page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── EducationExperience.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── server/                      # Express + Node.js Backend
│   ├── src/
│   │   ├── config/              # Database connection
│   │   │   └── db.js
│   │   ├── controllers/         # Request handlers
│   │   │   └── contactController.js
│   │   ├── middleware/          # Security & rate limiting
│   │   │   ├── errorHandler.js
│   │   │   └── rateLimiter.js
│   │   ├── models/              # Mongoose models
│   │   │   └── ContactMessage.js
│   │   ├── routes/              # Express API routes
│   │   │   ├── contactRoutes.js
│   │   │   └── healthRoutes.js
│   │   ├── services/            # Nodemailer email dispatcher
│   │   │   └── emailService.js
│   │   ├── validators/          # Input validation
│   │   │   └── contactValidator.js
│   │   └── server.js            # Express server entry point
│   ├── .env.example
│   └── package.json
│
├── package.json                 # Monorepo orchestration scripts
├── README.md
└── s.md                         # Product specification document
```

---

## 🚀 Quick Start Guide

### 1. Install All Dependencies

From the root repository directory:
```bash
npm run install:all
```
*(Or install inside `client/` and `server/` with `npm install`)*

### 2. Configure Environment Variables (Backend)

Create a `.env` file in the `server/` folder based on `.env.example`:
```bash
cp server/.env.example server/.env
```

Edit `server/.env`:
```env
PORT=5000
NODE_ENV=development
CLIENT_ORIGIN=http://localhost:5173

# Optional: MongoDB Connection
MONGO_URI=mongodb://localhost:27017/portfolio

# Recipient Email for Contact Submissions
CONTACT_RECEIVER_EMAIL=manikounder1984@gmail.com
CONTACT_RECIPIENT_EMAIL=manikounder1984@gmail.com

# SMTP Provider Credentials (e.g., Gmail App Password, SendGrid, Brevo)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM_EMAIL=your_email@gmail.com
```

> **Note:** If SMTP credentials are not yet configured, the contact endpoint safely informs the user while protecting backend internals and suggesting direct email contact at `manikounder1984@gmail.com`.

### 3. Run Development Servers (Concurrently)

To start both the client (`http://localhost:5173`) and the backend API (`http://localhost:5000`) simultaneously:
```bash
npm run dev
```

Alternatively, run them separately:
- **Client**: `npm run dev:client` (or `cd client && npm run dev`)
- **Server**: `npm run dev:server` (or `cd server && npm run dev`)

### 4. Build for Production

```bash
npm run build
```
Generates optimized static assets in `client/dist/`.

---

## 🛡️ Testing Checklist & Verification

| Feature | Endpoint / Component | Status |
| :--- | :--- | :--- |
| **Backend Health Check** | `GET http://localhost:5000/api/health` | Active |
| **Contact API** | `POST http://localhost:5000/api/contact` | Active (Rate limited, Validated) |
| **Cinematic Hero** | `client/src/sections/Hero.jsx` | Verified with SVG waves & portrait |
| **Language Switcher** | English, தமிழ், ಕನ್ನಡ | Verified with persistent storage |
| **Dark/Light Mode** | `ThemeToggle.jsx` | Verified with `#07090D` dark default |
| **Accessibility** | `index.html` & `index.css` | Semantic HTML & Reduced Motion support |
| **Central Data Source** | `client/src/data/profileData.js` | All personal info easily editable |

---

## 👨‍💻 Developer Information

- **Name**: Siva M
- **Headline**: Full Stack Developer (MERN Stack | Software Engineering)
- **Education**: MCA (Nandha Engineering College, 2025–2027), BCA (Surana College, 2022–2025)
- **Email**: [manikounder1984@gmail.com](mailto:manikounder1984@gmail.com)
- **GitHub**: [github.com/siva120428](https://github.com/siva120428)
- **LinkedIn**: [linkedin.com/in/siva-m-321178383](https://linkedin.com/in/siva-m-321178383)
