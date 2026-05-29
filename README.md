# Kilifi Fried Chicken - Frontend

A modern, responsive web application for Kilifi Fried Chicken built with Vite, React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui (Radix UI primitives)
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router v6
- **Form Handling**: React Hook Form
- **Testing**: Vitest & Playwright
- **Package Manager**: Bun (or npm/yarn)

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # Shadcn/ui components
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Gallery.tsx
│   ├── Hero.tsx
│   ├── MenuSection.tsx
│   ├── Navbar.tsx
│   ├── Reviews.tsx
│   └── WhatsAppButton.tsx
├── pages/              # Page components
│   ├── Index.tsx
│   └── NotFound.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── config/             # Configuration files
│   └── api.ts         # API configuration
├── test/               # Test files
├── App.tsx            # Main app component
└── main.tsx           # Entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ (or Bun 1.0+)
- npm, yarn, or bun package manager

### Installation

1. **Install dependencies**:
	```bash
	# Using npm
	npm install
   
	# Or using bun
	bun install
	```

2. **Create environment file**:
	```bash
	cp .env.example .env
	```
   
	The `.env` file is already configured for local development with the backend API running on `http://localhost:3000/api`.

### Running the Frontend

**Start the development server**:
```bash
# Using npm
npm run dev

# Or using bun
bun run dev
```

The app will be available at `http://localhost:8080`

## Building for Production

```bash
# Build the project
npm run build

# Preview production build locally
npm run preview
```

## Connecting to Backend

When you're ready to connect the backend:

1. **Backend Setup**: Ensure your backend API is running on `http://localhost:3000`

2. **API Configuration**: 
	- Update `VITE_API_URL` in `.env` to your backend URL
	- API configuration is centralized in [src/config/api.ts](src/config/api.ts)

3. **Making API Requests**:
	```typescript
	import { API_CONFIG, getApiUrl } from '@/config/api';
	import { getRequestHeaders } from '@/config/api';
   
	// Example API call using fetch
	const response = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.MENU.GET_ALL), {
	  method: 'GET',
	  headers: getRequestHeaders(),
	});
	```

4. **Using React Query**:
	```typescript
	import { useQuery } from '@tanstack/react-query';
   
	const { data, isLoading } = useQuery({
	  queryKey: ['menu'],
	  queryFn: async () => {
		 const response = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.MENU.GET_ALL));
		 return response.json();
	  },
	});
	```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests once
- `npm run test:watch` - Run tests in watch mode

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API base URL | `http://localhost:3000/api` |
| `VITE_API_TIMEOUT` | API request timeout (ms) | `30000` |
| `VITE_APP_NAME` | Application name | `Kilifi Fried Chicken` |
| `VITE_APP_ENVIRONMENT` | Environment type | `development` |
| `VITE_ENABLE_ANALYTICS` | Enable analytics tracking | `false` |

## Next Steps

- [ ] Set up backend API server
- [ ] Implement authentication
- [ ] Connect menu data API
- [ ] Implement orders system
- [ ] Add payment integration
- [ ] Deploy frontend

## Support

For issues or questions, please create an issue in the repository.
