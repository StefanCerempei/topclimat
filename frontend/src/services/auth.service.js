// frontend/src/services/auth.service.js
import apiClient from './api';
import { ENDPOINTS } from '../config/api.config';

export const authService = {
    login: async (email, password) => {
        const response = await apiClient.post(ENDPOINTS.LOGIN, { email, password });
        if (response.accessToken) {
            localStorage.setItem('accessToken', response.accessToken);
            localStorage.setItem('refreshToken', response.refreshToken);
            localStorage.setItem('user', JSON.stringify(response.user));
        }
        return response;
    },

    register: async (userData) => {
        const response = await apiClient.post(ENDPOINTS.REGISTER, userData);
        if (response.accessToken) {
            localStorage.setItem('accessToken', response.accessToken);
            localStorage.setItem('refreshToken', response.refreshToken);
            localStorage.setItem('user', JSON.stringify(response.user));
        }
        return response;
    },

    logout: async () => {
        try {
            await apiClient.post(ENDPOINTS.LOGOUT);
        } finally {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user');
        }
    },

    getCurrentUser: async () => {
        const response = await apiClient.get(ENDPOINTS.ME);
        return response;
    },

    forgotPassword: async (email) => {
        return await apiClient.post('/auth/forgot-password', { email });
    },

    resetPassword: async (token, password) => {
        return await apiClient.post('/auth/reset-password', { token, password });
    },

    updateProfile: async (profileData) => {
        return await apiClient.put(ENDPOINTS.USER_PROFILE, profileData);
    },
};