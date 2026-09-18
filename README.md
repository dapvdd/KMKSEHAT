# KMK SEHAT 2026

> **Sehat badannya, hangat keluarganya! ❤️**

A simple event website for **KMK SEHAT 2026 — Tracking Gunung Andong**, organized by **KMK SV UGM**.

The website serves as a central information page for participants, providing event details, preparation guidelines, participant information, and the spirit of togetherness behind the event.

---

## ⛰️ About the Event

**KMK SEHAT 2026** is a KMK SV UGM community activity organized as a hiking trip to Mount Andong, Magelang.

The event is not only about physical health, but also about building relationships, friendship, and a stronger sense of family within KMK SV UGM.

> *"We are not only bringing our bags to the summit, but also our spirit, laughter, and togetherness as KMK SV."*

### Event Details

| Information | Details |
|---|---|
| **Event** | KMK SEHAT 2026 |
| **Activity** | Mount Andong Tracking |
| **Date** | Sunday, September 20, 2026 |
| **Departure** | Saturday night, September 19, 2026 |
| **Location** | Mount Andong, Magelang |
| **Organizer** | KMK SV UGM |
| **Tagline** | Sehat badannya, hangat keluarganya! |

---

## ✨ Features

- 🏠 Event landing page
- 🌱 Healing and togetherness section
- ⛰️ Mount Andong introduction
- 📋 Important event information
- 🤝 Community and togetherness section
- ✝️ Spiritual section with Catholic identity
- 🎒 Participant preparation checklist
- 👥 Public participant list
- 📝 Google Forms registration

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **JavaScript**
- **CSS**
- **Google Forms**
- **Google Sheets**
- **Git & GitHub**
- **Vercel**

The website uses a simple static architecture and does not require a custom backend, database, authentication system, or API.

### Architecture

```text
                    ┌─────────────────┐
                    │   KMK SEHAT Web │
                    │  React + Vite   │
                    └────────┬────────┘
                             │
                ┌────────────┴────────────┐
                │                         │
                ▼                         ▼
        ┌──────────────┐          ┌──────────────┐
        │ Google Form  │          │ Google Sheet │
        │ Registration │          │ Participants │
        └──────────────┘          └──────────────┘
```

---

## 📁 Project Structure

```text
KMKSEHAT/
├── public/
│   └── assets/
│       ├── gerak.png
│       ├── alam.png
│       └── rame.png
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
│   └── data/
│       └── siteConfig.js
│
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/dapvdd/KMKSEHAT.git
cd KMKSEHAT
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Open the local URL provided by Vite.

---

## 📦 Production Build

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The production output will be generated in:

```text
dist/
```

The `dist/` and `node_modules/` directories should not be committed to the repository.

---

## 🌐 Deployment

The website is designed for static deployment and can be deployed using **Vercel**.

### Build Configuration

```text
Framework: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

No environment variables are required for the basic website.

---

## 🖼️ Assets

The website uses local visual assets for the main activity cards:

| Asset | Usage |
|---|---|
| `gerak.png` | GERAK card |
| `alam.png` | ALAM card |
| `rame.png` | RAME-RAME card |

All images are stored locally in the project.

---

## 📝 Participant Data

Participant registration uses Google Forms and Google Sheets.

```text
Participant
     │
     ▼
Google Form
     │
     ▼
Google Sheets
     │
     ▼
Public Participant Data
     │
     ▼
Website
```

Only basic public information such as **Name** and **Division** is intended to be displayed publicly.

Sensitive participant information should not be exposed through the website.

---

## 🔒 Privacy

Do not store sensitive information in the public repository or source code, including:

- Phone numbers
- Personal email addresses
- Student IDs
- Emergency contacts
- Health information
- Payment information
- Passwords
- API keys
- Private credentials

---

## 🎨 Design Direction

The website combines a warm, natural, community-oriented atmosphere with a subtle Catholic identity.

**Warm · Friendly · Natural · Spiritual · Community-driven**

The design uses a combination of:

- Sky blue
- Navy
- Cream
- Warm yellow

The Catholic identity is represented through the event's values, spiritual section, cross element, and motto:

> *servus servorum dei.*

---

## ✝️ Organization

**KMK SV UGM**

> *servus servorum dei.*

**KMK SEHAT 2026**  
*Sehat badannya, hangat keluarganya! ❤️*

---

## 👨‍💻 Developer

Developed by **David Candra**

Built with ❤️, React, Vite, and a little bit of caffeine.

---

## 📜 License

This project was created specifically for **KMK SEHAT 2026 — KMK SV UGM**.

© 2026 KMK SV UGM
