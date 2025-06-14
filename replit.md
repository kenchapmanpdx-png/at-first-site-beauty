# At First Sight Beauty On Location - Replit.md

## Overview

At First Sight Beauty On Location is a luxury bridal beauty service website serving the Pacific Northwest. The application is built as a full-stack web application using React/TypeScript on the frontend and Express.js on the backend, with support for both a modern React SPA and static HTML deployment options.

## System Architecture

### Frontend Architecture
- **Primary Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom bridal-themed color palette
- **UI Components**: Radix UI components with shadcn/ui design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Animations**: AOS (Animate On Scroll) library with custom CSS animations

### Backend Architecture
- **Runtime**: Node.js 20
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL 16 with Drizzle ORM
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **API Design**: RESTful API structure with /api prefix

### Alternative Deployment Options
- **Static Site**: Complete HTML/CSS/JS version for traditional hosting (GoDaddy)
- **Lovable Export**: React-based export optimized for Lovable platform integration

## Key Components

### Core Features
1. **Bridal Design Session Booking**: Primary service offering with detailed consultation process
2. **Service Portfolio**: Four main services (Bridal Design, Bridal Party, Teeth Whitening, Spray Tanning)
3. **Image Gallery**: Filterable portfolio showcase with lazy loading
4. **Testimonials**: Client reviews with structured data markup
5. **Contact System**: Multi-channel contact with form integration support

### SEO & Marketing Integration
- **Comprehensive SEO**: Meta tags, Open Graph, Twitter Cards, Schema.org markup
- **Go High Level Ready**: Prepared for CRM integration
- **Social Media Integration**: Instagram and Pinterest connectivity
- **Performance Optimization**: Service worker caching, image optimization, lazy loading

### Responsive Design
- **Mobile-First**: Touch-optimized interface with hamburger navigation
- **Progressive Enhancement**: Graceful degradation for older browsers
- **Performance Focus**: Optimized animations and reduced motion support

## Data Flow

### Frontend Data Management
1. **Component State**: Local state for UI interactions and form handling
2. **Query Client**: TanStack Query manages server state and caching
3. **Scroll Animations**: Intersection Observer API for performance-optimized animations
4. **Image Loading**: Progressive loading with fallback strategies

### Backend Data Flow
1. **Request Handling**: Express middleware for logging, CORS, and error handling
2. **Database Layer**: Drizzle ORM with PostgreSQL for data persistence
3. **Session Management**: Secure session handling with PostgreSQL storage
4. **API Responses**: Structured JSON responses with proper error handling

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React-DOM, React Router (Wouter)
- **UI Library**: Radix UI primitives with Tailwind CSS
- **Utilities**: clsx, tailwind-merge for conditional styling
- **Icons**: Lucide React, React Icons for consistent iconography
- **Animations**: AOS library for scroll-triggered animations

### Backend Dependencies
- **Core**: Express.js, TypeScript, Node.js types
- **Database**: Drizzle ORM, @neondatabase/serverless, PostgreSQL client
- **Validation**: Zod with Drizzle-Zod integration
- **Development**: tsx for TypeScript execution, esbuild for production builds

### External Services
- **Fonts**: Google Fonts (Playfair Display, Lato, Dancing Script)
- **Booking Integration**: GlossGenius booking system
- **Calendly Integration**: Service-specific appointment scheduling
- **Social Media**: Instagram and Pinterest integration ready

## Deployment Strategy

### Development Environment
- **Replit Configuration**: Node.js 20, Web, PostgreSQL 16 modules
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **Port Configuration**: Frontend on 5000, with autoscale deployment target

### Production Deployment Options

#### Option 1: Full-Stack Deployment (Replit/Cloud)
- **Build Process**: Vite build + esbuild for server bundling
- **Database**: PostgreSQL with Drizzle migrations
- **Static Assets**: Served through Express with proper caching headers

#### Option 2: Static Site Deployment (GoDaddy/Traditional Hosting)
- **Export Location**: `/static-site/` directory
- **Complete Package**: Self-contained HTML/CSS/JS with all assets
- **SEO Optimized**: Full meta tag implementation and sitemap.xml

#### Option 3: Lovable Platform
- **Export Location**: `/lovable-export/` directory  
- **React Optimized**: Clean component structure with Tailwind configuration
- **Platform Ready**: Configured for Lovable's deployment pipeline

### Performance Optimizations
- **Image Optimization**: WebP support with fallbacks, lazy loading
- **Caching Strategy**: Service worker for static assets, browser caching headers
- **Bundle Splitting**: Vendor chunks separation for better caching
- **Critical Resource Preloading**: Above-the-fold content prioritization

## Changelog
- June 14, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.