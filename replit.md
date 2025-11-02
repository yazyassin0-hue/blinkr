# Blinkr - Modern Social Platform

## Overview
Blinkr is a modern social platform designed for seamless interaction. Users can create and share posts, comment, like, and engage in real-time chat. The app supports both Arabic (default) and English languages with RTL/LTR layout switching, offering a sleek and user-friendly design.

Built using React, Vite, Tailwind CSS, and Supabase (with demo mode fallback).

## Project Status
- **Last Updated**: November 2, 2025
- **Status**: Fully configured and running in Replit environment
- **Environment**: Development mode with demo backend (in-memory storage)

## Recent Changes
- **2025-11-02**: Initial project setup in Replit environment
  - Reorganized file structure to use `src/` directory for all source files
  - Created Vite configuration with Replit-specific settings (port 5000, host 0.0.0.0, allowedHosts)
  - Added PostCSS configuration for Tailwind CSS
  - Set up workflow for frontend development server
  - Configured deployment settings for Autoscale deployment
  - Fixed package.json Tailwind version compatibility

## Project Architecture

### Tech Stack
- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.0
- **Styling**: Tailwind CSS 3.4.0
- **Routing**: React Router DOM 6.14.1
- **Internationalization**: i18next + react-i18next
- **Backend**: Supabase (with demo mode fallback using in-memory storage)
- **Database**: Supabase PostgreSQL (when configured)

### Directory Structure
```
/
├── src/
│   ├── pages/          # Page components (Home, Auth, Chat)
│   ├── lib/            # Utility files and clients (supabaseClient.js)
│   ├── main.jsx        # Application entry point
│   ├── styles.css      # Global styles with Tailwind directives
│   └── i18n.js         # Internationalization configuration
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
├── tailwind.config.cjs # Tailwind CSS configuration
├── postcss.config.cjs  # PostCSS configuration
└── package.json        # Dependencies and scripts
```

### Key Features
1. **Posts**: Create and view posts with title and body content
2. **Authentication**: User signup/login (demo mode or Supabase)
3. **Real-time Chat**: Message exchange with polling updates
4. **Bilingual Support**: Arabic (RTL) and English (LTR) with instant switching
5. **Demo Mode**: Fully functional without Supabase credentials

### Configuration Files

#### Vite Configuration
- Server runs on `0.0.0.0:5000` for Replit compatibility
- `allowedHosts: true` to work with Replit's proxy/iframe setup
- Preview server configured for deployment

#### Supabase Integration
The app uses environment variables for Supabase configuration:
- `VITE_SUPABASE_URL`: Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Supabase anonymous key

When these are not set, the app automatically uses demo mode with in-memory storage.

### Database Schema (Supabase)
When using Supabase, the following tables are expected:
- **posts**: `id`, `title`, `body`, `created_at`
- **messages**: `id`, `body`, `from`, `created_at`

### Running the Project
- **Development**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Preview**: `npm run preview`

### Deployment
Configured for Replit Autoscale deployment:
- Build command: `npm run build`
- Run command: `npx vite preview --host 0.0.0.0 --port 5000`
- Suitable for stateless web applications

## User Preferences
None documented yet.

## Notes
- The app is currently running in demo mode with in-memory storage
- To use Supabase, add the environment variables `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- Default language is Arabic with RTL layout
- The chat feature polls for new messages every 2.5 seconds
