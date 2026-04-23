import { configureStore, createSlice } from '@reduxjs/toolkit';

// Slice pentru autentificare
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(localStorage.getItem('user') || 'null'),
        isAuthenticated: !!localStorage.getItem('accessToken'),
        loading: false,
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
            state.loading = false;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = null;
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user');
        },
    },
});

// Slice pentru echipe (temporar)
const teamSlice = createSlice({
    name: 'teams',
    initialState: { teams: [], loading: false, error: null },
    reducers: {},
});

// Slice pentru joburi (temporar)
const jobSlice = createSlice({
    name: 'jobs',
    initialState: { jobs: [], loading: false, error: null },
    reducers: {},
});

// Slice pentru plăți (temporar)
const paymentSlice = createSlice({
    name: 'payments',
    initialState: { payments: [], loading: false, error: null },
    reducers: {},
});

// Slice pentru notificări (temporar)
const notificationSlice = createSlice({
    name: 'notifications',
    initialState: { notifications: [], unreadCount: 0 },
    reducers: {},
});

// Slice pentru UI (temporar)
const uiSlice = createSlice({
    name: 'ui',
    initialState: { theme: 'light', sidebarOpen: false, modalOpen: false },
    reducers: {},
});

export const { setUser, setLoading, setError, logout } = authSlice.actions;

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        teams: teamSlice.reducer,
        jobs: jobSlice.reducer,
        payments: paymentSlice.reducer,
        notifications: notificationSlice.reducer,
        ui: uiSlice.reducer,
    },
});