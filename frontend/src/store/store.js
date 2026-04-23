// frontend/src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import teamReducer from './slices/teamSlice';
import jobReducer from './slices/jobSlice';
import paymentReducer from './slices/paymentSlice';
import notificationReducer from './slices/notificationSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        teams: teamReducer,
        jobs: jobReducer,
        payments: paymentReducer,
        notifications: notificationReducer,
        ui: uiReducer,
    },
});