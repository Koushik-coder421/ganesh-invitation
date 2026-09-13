# 🙏 Ganesh Chaturthi Digital Invitation 2026

An interactive, scroll-driven web invitation for **Ganeshotsav 2026**, built with **React** and **Vite**. Features a festive entrance splash screen, dual logo presentation (**Ganeshotsav** & **M R ACADEMY**), Evening Aarti details with Aarti Couple highlights, a Sponsors section, and smooth mobile & desktop responsiveness.

---

## ✨ Features

- **🎨 Interactive Entrance Splash Screen**:
  - Full-screen opening overlay with ambient glowing aura, spinning mandala background, and sacred mantra *॥ श्री गणेशाय नमः ॥*.
  - Dual logo presentation in central golden card with pulse effects.
  - Interactive click-to-open transition animation smoothly revealing the main invitation.

- **🕉️ Dual Logo Header**:
  - Displays the traditional Ganeshotsav badge and the **M R ACADEMY** (EST. 2021) logo side-by-side in the sticky header.
  - "✨ Intro" button in the header allows visitors to replay the opening splash animation anytime.

- **🪔 Evening Aarti & Aarti Couple (आरती दांपत्य)**:
  - Clean focus on Evening Aarti timings.
  - Dedicated **Aarti Couple (आरती दांपत्य)** card section displaying honored hosts.

- **🏆 Sponsors Section (विशेष सौजन्य)**:
  - Highlights contributions such as Ganesh Idol Vigraham and Laddu Prasad with custom icon/image support.

- **📜 Scroll Choreography**:
  - Parallax scrolling with animated temple bells, sliding garlands, oil lamps (diyas), falling flower petals, and Bappa's mushak button linked to Google Maps directions.

- **📱 Fully Responsive**:
  - Crafted to adapt seamlessly for Mobile (320px+), Tablets, Laptops, and 4K Displays.

---

## 📁 Project Structure

```
├── public/                  # Static assets served at root (Photos & Video)
│   ├── assets/              # Garlands, Lamps, MR Academy Logo, Bappa Closing Image
│   └── uploads/             # Video background MP4, Mouse PNG, Bell PNG
├── src/
│   ├── components/
│   │   ├── LogoSplash.jsx   # Full-screen animated intro overlay
│   │   ├── Logo.jsx         # Dual logo component (Ganeshotsav + MR Academy)
│   │   ├── Navbar.jsx       # Header bar with replay trigger
│   │   ├── Hero.jsx         # Video background hero section
│   │   ├── InviteScene.jsx  # Garlands, bells & invitation message
│   │   ├── DetailsScene.jsx # Date, Evening Aarti & Aarti Couple details
│   │   ├── SponsorsScene.jsx# Title & Special Contributions card
│   │   └── FooterScene.jsx  # Closing banner & Little Bappa photo card
│   ├── hooks/
│   │   └── useScrollChoreography.js # Parallax scroll animations
│   ├── App.jsx              # Main app shell & scene assembler
│   ├── config.js            # Central invitation configuration
│   ├── styles.css           # Responsive styling & keyframe animations
│   └── main.jsx             # React entrypoint
├── index.html               # Main HTML entry & Meta tags
├── package.json             # Build & dependency specifications
└── vite.config.js           # Vite configuration
```

---

## ⚙️ Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)

### Installation & Run

1. Clone or navigate into the project directory:
   ```bash
   cd d:/Ganesh-Invitation-main1
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your web browser.

---

## 🐙 How to Push to GitHub

Follow these steps to push your repository to GitHub:

1. **Initialize Git (if not already initialized)**:
   ```bash
   git init
   ```

2. **Stage and Commit all changes**:
   ```bash
   git add .
   git commit -m "Setup Ganesh Chaturthi invitation app with public static assets"
   ```

3. **Create a new GitHub Repository**:
   - Go to [GitHub](https://github.com/new) and create a new repository (e.g. `ganesh-invitation`).
   - Leave "Initialize repository with README" unchecked.

4. **Link Remote and Push**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

---

## ⚡ How to Deploy on Vercel

1. **Sign in to Vercel**:
   - Log in to [Vercel](https://vercel.com/) (using your GitHub account).

2. **Import Project**:
   - Click **"Add New..."** -> **"Project"**.
   - Select your GitHub repository (`ganesh-invitation`).

3. **Configure Deployment**:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **Deploy**:
   - Click **Deploy**.
   - Vercel will build the project and assign a production URL (e.g. `https://ganesh-invitation.vercel.app`).

> [!NOTE]
> **Photos & Video Persistence**: All image assets (photos, lamps, garlands) and videos are stored inside `public/assets/` and `public/uploads/`. Vite builds these directly into `dist/`. When reloading or refreshing any URL on Vercel, all images will display properly without 404 errors.

---

**🌺 Ganpati Bappa Morya! 🌺**
