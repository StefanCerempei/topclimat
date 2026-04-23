// frontend/src/contexts/AuthContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { authService } from '../services/auth.service';

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload, isAuthenticated: true, loading: false };
        case 'CLEAR_USER':
            return { ...state, user: null, isAuthenticated: false, loading: false };
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        isAuthenticated: false,
        loading: true,
    });

    useEffect(() => {
        const initAuth = async () => {
            const userStr = localStorage.getItem('user');
            if (userStr) {
                try {
                    const user = JSON.parse(userStr);
                    const currentUser = await authService.getCurrentUser();
                    dispatch({ type: 'SET_USER', payload: currentUser });
                } catch (error) {
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('refreshToken');
                    localStorage.removeItem('user');
                    dispatch({ type: 'CLEAR_USER' });
                }
            } else {
                dispatch({ type: 'CLEAR_USER' });
            }
        };
        initAuth();
    }, []);

    const login = async (email, password) => {
        const user = await authService.login(email, password);
        dispatch({ type: 'SET_USER', payload: user });
        return user;
    };

    const logout = async () => {
        await authService.logout();
        dispatch({ type: 'CLEAR_USER' });
    };

    const register = async (userData) => {
        const user = await authService.register(userData);
        dispatch({ type: 'SET_USER', payload: user });
        return user;
    };

    return (
        <AuthContext.Provider value={{ ...state, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};