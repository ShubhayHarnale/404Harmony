# 404 Harmony - Company Landing Page

## Overview

This is a modern company landing page for "404 Harmony" built with React, TypeScript, and a full-stack architecture. The application features a professional design with shadcn/ui components, responsive layout, and a backend API foundation ready for future expansion.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: Prepared for connect-pg-simple sessions
- **Development**: Hot reload with Vite middleware integration

### UI Component System
- **Design System**: shadcn/ui with "new-york" style
- **Theme**: Neutral color scheme with CSS variables
- **Components**: Comprehensive UI library including forms, dialogs, navigation, and data display
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Frontend Structure
- **Pages**: Home page with hero section and company branding
- **Components**: Modular header, UI components from shadcn/ui
- **Hooks**: Custom hooks for mobile detection and toast notifications
- **Utilities**: Class name utilities and query client configuration

### Backend Structure
- **Routes**: Centralized route registration system (currently minimal)
- **Storage**: Abstract storage interface with in-memory implementation
- **Database**: Drizzle schema with user table structure
- **Middleware**: Request logging and error handling

### Database Schema
- **Users Table**: Basic user structure with id, username, and password fields
- **Validation**: Zod schemas for type-safe data validation
- **Migrations**: Configured for PostgreSQL with Drizzle migrations

## Data Flow

1. **Client Requests**: React components make API calls through TanStack Query
2. **API Layer**: Express routes handle HTTP requests with proper error handling
3. **Storage Layer**: Abstract storage interface provides data access
4. **Database**: PostgreSQL with Drizzle ORM for data persistence
5. **Response**: JSON responses with proper error handling and logging

## External Dependencies

### Core Technologies
- **Database**: PostgreSQL 16 (configured in Replit)
- **Cloud Database**: Neon Database serverless for production
- **Deployment**: Replit autoscale deployment target

### Key Libraries
- **UI Framework**: React with shadcn/ui components
- **Styling**: Tailwind CSS with PostCSS processing
- **Database**: Drizzle ORM with PostgreSQL adapter
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for lightweight routing
- **Forms**: React Hook Form with Zod validation

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 and PostgreSQL 16 modules
- **Build Command**: `npm run build` (Vite + esbuild)
- **Start Command**: `npm run start` (production) or `npm run dev` (development)
- **Port Configuration**: Internal port 5000, external port 80

### Production Build
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Static Files**: Served from `dist/public` in production
- **Environment**: Production mode with NODE_ENV=production

### Database Management
- **Schema**: Managed through Drizzle migrations in `./migrations`
- **Push Command**: `npm run db:push` for schema updates
- **Connection**: Environment variable `DATABASE_URL` required

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

✓ Implemented professional typography with Poppins for headings and Inter for body text
✓ Created clean hero section with subtle animated floating orbs and minimal grid pattern
✓ Redesigned hero layout with centered content, proper spacing, and max-w-7xl container
✓ Updated headline to split across two lines with bright green "AND" accent
✓ Added professional CTA buttons with "Let's Talk →" and "Learn About Our Studio →"
✓ Enhanced navbar sticky behavior to trigger at 10px scroll with bright green background
✓ Applied font-heading class to all section headings for consistent Poppins typography
✓ Replaced garish background with professional white background and subtle animations
✓ Added "Our Clients" section with 2x5 grid layout and floating animations
✓ Created "Where We Come From" horizontal scrolling section with updated green background
✓ Implemented scroll arrows and smooth horizontal navigation for company logos
✓ Added hover effects with scale and shadow transitions for all logo elements
✓ Created dedicated Team page with professional member profiles and large images
✓ Built News page with categorized articles and responsive card layout
✓ Updated brand color from #00FF00 to #3C9631 throughout entire site
✓ Removed "In the Studio Now" section as requested
✓ Added "Our Partners" section with horizontal scrolling medical institutions
✓ Enhanced footer with LinkedIn social link and comprehensive contact information
✓ Updated navigation to link to new Team and News pages
✓ Enhanced navigation bar with dynamic sticky behavior and color transitions
✓ Fixed contact section colors - changed all black accents to brand green #3C9631
✓ Removed duplicate "Our Mission" paragraph below main mission section
✓ Fixed Partners carousel bug - arrows now control correct scrolling container
✓ Updated navbar logo to scroll to top when clicked, contact links work across pages
✓ Added Home, Our Team, News, and Contact Us navigation links on the right side
✓ Implemented smooth scroll detection that triggers bright green background transition
✓ Created responsive hamburger menu for mobile devices with smooth animations
✓ Added hover effects with animated underlines and active link highlighting
✓ Integrated keyboard navigation support with proper ARIA labels for accessibility
✓ Applied fade-in animation when sticky navbar appears on scroll
✓ Implemented comprehensive sections: Mission, Studio, Value Proposition, About, Partners, Contact
✓ Enhanced branding with consistent bright green (#00FF00) color scheme throughout
✓ Added contact form with proper field validation and styling
✓ Improved responsive design with proper mobile navigation
✓ Added smooth scrolling navigation between sections
✓ Created modern card-based layouts with hover effects and shadows

## Changelog

- June 25, 2025: Complete website redesign based on original 404Harmony content
  - Modern hero section with improved messaging and visual hierarchy
  - Professional service sections explaining Studio, Expert Network, and Fractional Operating Model
  - Contact form integration with all original form fields
  - Fixed header navigation with smooth scrolling
  - Enhanced visual design with better spacing, typography, and animations
- June 25, 2025: Initial setup