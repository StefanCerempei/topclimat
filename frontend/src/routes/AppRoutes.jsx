// frontend/src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { TeamsPage } from '../pages/TeamsPage';
import { TeamDetailPage } from '../pages/TeamDetailPage';
import { JobRequestPage } from '../pages/JobRequestPage';
import { PaymentPage } from '../pages/PaymentPage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ClientDashboardPage } from '../pages/ClientDashboardPage';
import { TeamDashboardPage } from '../pages/TeamDashboardPage';
import { AdminDashboardPage } from '../pages/AdminDashboardPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { PrivateRoute } from './PrivateRoute';
import { RoleBasedRoute } from './RoleBasedRoute';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/teams/:id" element={<TeamDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Protected Routes */}
            <Route element={<PrivateRoute />}>
                <Route path="/job-request" element={<JobRequestPage />} />
                <Route path="/payment/:jobId" element={<PaymentPage />} />

                {/* Client Routes */}
                <Route element={<RoleBasedRoute allowedRoles={['client']} />}>
                    <Route path="/client/dashboard" element={<ClientDashboardPage />} />
                </Route>

                {/* Team Routes */}
                <Route element={<RoleBasedRoute allowedRoles={['team']} />}>
                    <Route path="/team/dashboard" element={<TeamDashboardPage />} />
                </Route>

                {/* Admin Routes */}
                <Route element={<RoleBasedRoute allowedRoles={['admin']} />}>
                    <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
                </Route>
            </Route>

            {/* 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRoutes;