# 404Harmony

A modern full-stack web application focused on longevity innovation and startup development. 404Harmony serves as a comprehensive platform showcasing our mission, team, latest news, and inspirational content for building the future of health and longevity.

## 🌟 Features

### Core Pages
- **Home Page**: Mission statement, service offerings, contact forms, and company overview
- **Team Page**: Meet our leadership team with detailed bios and roles  
- **News Page**: Latest company updates, funding announcements, and industry insights
- **Inspiration Page**: Daily ideas and newsletter signup for curated longevity content
- **404 Error Page**: Custom not-found page with helpful navigation

### Key Functionality
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean design with consistent green theme (#3dab38)
- 📧 **Contact Forms**: Multiple contact and subscription forms throughout the site
- 🧭 **Smooth Navigation**: Header with scroll effects and mobile-friendly menu
- ⚡ **Performance Optimized**: Built with modern React patterns and Vite

### Interactive Elements
- Animated components and hover effects
- Smooth scrolling navigation
- Form validation and submission handling
- Mobile hamburger menu
- Social media integration
- Newsletter subscription functionality

## 🛠 Tech Stack

### Frontend
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript with enhanced developer experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Wouter** - Lightweight routing library for React
- **Lucide React** - Beautiful icon library
- **React Hook Form** - Performant forms with easy validation
- **Framer Motion** - Production-ready motion library for React

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **TypeScript** - Type-safe server-side development
- **Drizzle ORM** - Lightweight TypeScript ORM
- **Passport.js** - Authentication middleware

### Development Tools
- **Vite** - Next generation frontend tooling
- **PostCSS** - CSS post-processor
- **ESBuild** - Extremely fast JavaScript bundler
- **React Query** - Data fetching and caching library

### UI Components
- **Radix UI** - Low-level UI primitives for building design systems
- **Shadcn/UI** - Re-usable components built with Radix UI and Tailwind CSS
- **Custom Components** - Purpose-built components for specific functionality

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ShubhayHarnale/404Harmony.git
   cd 404Harmony
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production  
- `npm run start` - Start production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes

## 📁 Project Structure

```
404Harmony/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/        # Shadcn/UI component library
│   │   │   └── header.tsx # Navigation header
│   │   ├── pages/         # Application pages
│   │   │   ├── home.tsx
│   │   │   ├── team.tsx
│   │   │   ├── news.tsx
│   │   │   ├── inspiration.tsx
│   │   │   └── not-found.tsx
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/          # Utility functions and configs
│   │   └── index.css     # Global styles and Tailwind
│   └── index.html        # HTML entry point
├── server/               # Backend Express application
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API route definitions
│   ├── storage.ts       # Database configuration
│   └── vite.ts          # Vite integration
├── shared/              # Shared TypeScript schemas
└── package.json         # Project dependencies and scripts
```

## 🎨 Design System

### Color Palette
- **Primary Green**: #3dab38
- **Green Hover**: #349b33
- **Background**: White (#ffffff)
- **Text**: Gray shades for hierarchy
- **Accents**: Black for footers and contrast

### Typography
- **Headers**: Poppins font family
- **Body**: Inter font family
- **Responsive sizing**: Mobile-first approach

### Components
- Consistent button styles and hover effects
- Card-based layouts for content sections
- Form styling with focus states
- Responsive navigation with mobile menu

## 🌐 Pages Overview

### Home Page (`/`)
- Hero section with mission statement
- Service offerings and value propositions  
- Team highlights and company statistics
- Contact form for business inquiries
- Footer with social links and company info

### Team Page (`/team`)
- Leadership team member profiles
- Individual bios and professional backgrounds
- Role-based organization
- Professional headshots and contact info

### News Page (`/news`)
- Company announcements and updates
- Funding and partnership news
- Industry insights and thought leadership
- Categorized article layout with read times

### Inspiration Page (`/inspiration`)
- Daily idea showcase for longevity innovation
- Newsletter subscription form
- Motivational content and business concepts
- Call-to-action for community building

## 🔧 Configuration Files

- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript compiler options
- `vite.config.ts` - Vite bundler configuration
- `drizzle.config.ts` - Database ORM configuration
- `components.json` - Shadcn/UI component configuration

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)  
- Desktop (> 1024px)

Features mobile-optimized navigation, touch-friendly buttons, and readable typography across all devices.

## 🚀 Deployment

The application is designed to run on port 3000 for local development. For production deployment:

1. Build the application: `npm run build`
2. Start the production server: `npm run start`
3. Ensure environment variables are configured for your hosting platform

## 🤝 Contributing

This project represents 404Harmony's web presence and showcases our commitment to longevity innovation and startup development.

## 📄 License

MIT License - see LICENSE file for details.

## 📞 Contact

For more information about 404Harmony or this project:
- Website: [404harmony.com](https://404harmony.com)
- GitHub: [@ShubhayHarnale](https://github.com/ShubhayHarnale)

---

Built with ❤️ for the future of longevity and vitality.