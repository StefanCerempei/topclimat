// frontend/src/config/api.config.js
export const API_CONFIG = {
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
};

export const ENDPOINTS = {
    // Auth
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH_TOKEN: '/auth/refresh-token',
    ME: '/auth/me',

    // Users
    USERS: '/users',
    USER_PROFILE: '/users/profile',

    // Teams
    TEAMS: '/teams',
    TEAM_PROFILE: '/teams/profile',
    TEAM_SEARCH: '/teams/search',
    TEAM_REVIEWS: '/teams/reviews',

    // Jobs
    JOBS: '/jobs',
    JOB_REQUESTS: '/jobs/requests',
    JOB_OFFERS: '/jobs/offers',
    JOB_TRACKING: '/jobs/tracking',

    // Payments
    PAYMENTS: '/payments',
    PAYMENT_INTENT: '/payments/create-intent',
    PAYMENT_CONFIRM: '/payments/confirm',
    INSTALLMENT_PLANS: '/payments/installment-plans',

    // Reviews
    REVIEWS: '/reviews',

    // Notifications
    NOTIFICATIONS: '/notifications',
    NOTIFICATION_MARK_READ: '/notifications/mark-read',

    // Admin
    ADMIN_USERS: '/admin/users',
    ADMIN_TEAMS: '/admin/teams',
    ADMIN_JOBS: '/admin/jobs',
    ADMIN_STATS: '/admin/stats',
};