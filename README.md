# 
```
██████╗ ██████╗  █████╗ ███╗   ██╗██████╗  ██████╗ ███╗   ██╗
██╔══██╗██╔══██╗██╔══██╗████╗  ██║██╔══██╗██╔═══██╗████╗  ██║
██████╔╝██████╔╝███████║██╔██╗ ██║██║  ██║██║   ██║██╔██╗ ██║
██╔══██╗██╔══██╗██╔══██║██║╚██╗██║██║  ██║██║   ██║██║╚██╗██║
██████╔╝██║  ██║██║  ██║██║ ╚████║██████╔╝╚██████╔╝██║ ╚████║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝ ╚═╝  ╚═══╝
                                                               
███████╗████████╗███████╗██╗    ██╗ █████╗ ██████╗ ████████╗  
██╔════╝╚══██╔══╝██╔════╝██║    ██║██╔══██╗██╔══██╗╚══██╔══╝  
███████╗   ██║   █████╗  ██║ █╗ ██║███████║██████╔╝   ██║     
╚════██║   ██║   ██╔══╝  ██║███╗██║██╔══██║██╔══██╗   ██║     
███████║   ██║   ███████╗╚███╔███╔╝██║  ██║██║  ██║   ██║     
╚══════╝   ╚═╝   ╚══════╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝     
```

> **Full-Stack Software Engineer Portfolio** | Built with React + Vite | Live at [thebrandonian.com](https://thebrandonian.com)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Firebase-orange?style=for-the-badge)](https://thebrandonian.com/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 🚀 **Overview**

A modern, responsive portfolio website showcasing my journey as a full-stack software engineer. Built with cutting-edge technologies and featuring smooth animations, interactive components, and a clean, professional design inspired by classic business aesthetics.

### ✨ **Key Features**

- **Interactive Resume** - Dynamic sections with parallax effects
- **Project Showcase** - Featured work with live demos and GitHub links  
- **References Section** - Professional references with encoded contact protection
- **Business Card Modal** - Classic American Psycho-inspired contact card
- **Responsive Design** - Optimized for all devices and screen sizes
- **Performance Optimized** - Lightning-fast load times with Vite

---

## 🛠️ **Tech Stack**

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18.3, JavaScript ES6+, CSS3 |
| **Build Tool** | Vite 5.4 |
| **Animation** | Framer Motion, Intersection Observer |
| **Deployment** | Firebase Hosting |
| **Version Control** | Git, GitHub |

---

## 📦 **Installation & Setup**

### **Prerequisites**
- Node.js 18+ and npm/yarn installed
- Git for version control
- Firebase CLI for deployment

### **Local Development**

```bash
# Clone the repository
git clone https://github.com/thebrandonian/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

---

## 🔨 **Build & Production**

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview

# Build output will be in the 'dist' directory
```

### **Build Optimization**

The production build includes:
- Code splitting and lazy loading
- Minified JS/CSS bundles
- Optimized assets and images
- Tree-shaking for minimal bundle size

---

## 🔥 **Firebase Deployment**

### **Initial Setup**

1. **Install Firebase CLI**
```bash
npm install -g firebase-tools
```

2. **Initialize Firebase in your project**
```bash
firebase login
firebase init
```

3. **Select the following options:**
   - Choose "Hosting" 
   - Select your Firebase project (or create new)
   - Set public directory to `dist`
   - Configure as single-page app: `Yes`
   - Set up automatic builds: `No` (unless using GitHub Actions)

### **Deploy to Firebase**

```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy

# Your site is now live at:
# https://thebrandonian.com
# https://your-project.firebaseapp.com
```

### **Firebase Configuration File**

Your `firebase.json` should look like:

```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### **Custom Domain Setup**

1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow verification steps
4. Update DNS records with your domain provider
5. **Live at**: [thebrandonian.com](https://thebrandonian.com)

---

## 📱 **Project Structure**

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ReferenceSection/
│   │   ├── ContactModal/
│   │   └── ...
│   ├── assets/         # Images, fonts, icons
│   ├── styles/         # Global styles
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── dist/               # Production build (gitignored)
├── .env.local          # Environment variables
├── firebase.json       # Firebase configuration
├── vite.config.js      # Vite configuration
└── package.json        # Project dependencies
```

---

## 🌐 **Environment Variables**

Create a `.env.local` file in the root directory:

```bash
# Firebase Config (Optional - for additional features)
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id

# Analytics (Optional)
VITE_GA_MEASUREMENT_ID=your-ga-id
```

---

## 📊 **Performance Metrics**

| Metric | Score |
|--------|-------|
| **Lighthouse Performance** | 95+ |
| **First Contentful Paint** | < 1.2s |
| **Time to Interactive** | < 2.5s |
| **Bundle Size** | < 250KB gzipped |

---

## 🤝 **Contributing**

While this is a personal portfolio, suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📫 **Contact**

**Brandon Stewart** - Full-Stack Software Engineer

- **Portfolio**: [https://thebrandonian.com](https://thebrandonian.com)
- **LinkedIn**: [linkedin.com/in/thebrandonian](https://linkedin.com/in/thebrandonian)
- **GitHub**: [@thebrandonian](https://github.com/thebrandonian)
- **Email**: brandonstewart300055@gmail.com

---

## 📜 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 **Acknowledgments**

- React team for the amazing framework
- Vite team for the blazing fast build tool
- Firebase team for the hosting platform
- All the open source contributors

---

```
╔═══════════════════════════════════════════════════════════╗
║  "The only way to do great work is to love what you do"  ║
║                        - Steve Jobs                       ║
╚═══════════════════════════════════════════════════════════╝
```

### **🚀 Ready to Deploy?**

```bash
npm run build && firebase deploy
```

**Your portfolio is now live! 🎉**

---

*Last Updated: October 2025 | Version 1.0.0*