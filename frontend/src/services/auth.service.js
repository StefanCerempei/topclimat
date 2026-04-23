import apiClient from './api';

export const authService = {
    registerClient: async (userData) => {
        const response = await apiClient.post('/auth/register/client', userData);
        if (response.token) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
        }
        return response;
    },

    registerTeam: async (teamData) => {
        const response = await apiClient.post('/auth/register/team', teamData);
        if (response.token) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
        }
        return response;
    },

    login: async (email, password) => {
        const response = await apiClient.post('/auth/login', { email, password });
        if (response.token) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
        }
        return response;
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    getCurrentUser: async () => {
        const response = await apiClient.get('/auth/me');
        return response;
    },
};