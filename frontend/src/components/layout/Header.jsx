// frontend/src/components/layout/Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../common/Button';

export const Header = () => {
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        <h2>AC Marketplace</h2>
                    </Link>

                    <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                        <Link to="/teams">Echipe</Link>
                        <Link to="/about">Despre</Link>
                        <Link to="/contact">Contact</Link>

                        {isAuthenticated ? (
                            <>
                                {user?.role === 'client' && (
                                    <Link to="/client/dashboard">Dashboard</Link>
                                )}
                                {user?.role === 'team' && (
                                    <Link to="/team/dashboard">Dashboard</Link>
                                )}
                                {user?.role === 'admin' && (
                                    <Link to="/admin/dashboard">Admin</Link>
                                )}
                                <button onClick={handleLogout} className="nav-logout">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login">Login</Link>
                                <Button variant="primary" size="sm" onClick={() => navigate('/register')}>
                                    Înregistrare
                                </Button>
                            </>
                        )}
                    </nav>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            <style jsx>{`
        .header {
          background: white;
          box-shadow: var(--shadow-sm);
          position: sticky;
          top: 0;
          z-index: var(--z-sticky);
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--spacing-4) 0;
        }
        .logo h2 {
          margin: 0;
          color: var(--primary-color);
          font-size: var(--font-size-xl);
        }
        .nav-menu {
          display: flex;
          align-items: center;
          gap: var(--spacing-6);
        }
        .nav-menu a {
          color: var(--gray-700);
          transition: color var(--transition-fast);
        }
        .nav-menu a:hover {
          color: var(--primary-color);
        }
        .nav-logout {
          color: var(--gray-700);
          cursor: pointer;
          background: none;
          border: none;
          font-size: var(--font-size-md);
        }
        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .mobile-menu-btn span {
          width: 25px;
          height: 3px;
          background: var(--gray-800);
          transition: all var(--transition-fast);
        }
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex;
          }
          .nav-menu {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: white;
            flex-direction: column;
            padding: var(--spacing-6);
            transition: left var(--transition-base);
            z-index: var(--z-dropdown);
          }
          .nav-menu.active {
            left: 0;
          }
        }
      `}</style>
        </header>
    );
};