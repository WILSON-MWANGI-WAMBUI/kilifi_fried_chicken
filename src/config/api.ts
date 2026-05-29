/**
 * API Configuration
 * Centralized configuration for all API calls to the backend
 */

export const API_CONFIG = {
  // Base URL for all API requests
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  
  // Request timeout in milliseconds
  TIMEOUT: parseInt(import.meta.env.VITE_API_TIMEOUT || '30000'),
  
  // API endpoints
  ENDPOINTS: {
    // Auth endpoints (when backend is ready)
    AUTH: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register',
      LOGOUT: '/auth/logout',
      REFRESH: '/auth/refresh',
    },
    
    // Menu endpoints
    MENU: {
      GET_ALL: '/menu',
      GET_CATEGORY: '/menu/category/:id',
    },
    
    // Orders endpoints
    ORDERS: {
      CREATE: '/orders',
      GET_ALL: '/orders',
      GET_BY_ID: '/orders/:id',
    },
    
    // Reviews endpoints
    REVIEWS: {
      GET_ALL: '/reviews',
      CREATE: '/reviews',
    },
    
    // Contact endpoints
    CONTACT: {
      SUBMIT: '/contact',
    },
  },
};

/**
 * Helper function to get full API URL for an endpoint
 */
export const getApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

/**
 * Helper function to build API request headers
 */
export const getRequestHeaders = (): HeadersInit => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  // Add auth token if available (when auth is implemented)
  const token = localStorage.getItem('auth_token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};
