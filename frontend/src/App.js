import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterClientPage } from './pages/RegisterClientPage';
import { RegisterTeamPage } from './pages/RegisterTeamPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register/client" element={<RegisterClientPage />} />
            <Route path="/register/team" element={<RegisterTeamPage />} />
        </Routes>
    );
}

export default App;