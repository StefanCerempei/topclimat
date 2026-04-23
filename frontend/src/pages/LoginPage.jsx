// frontend/src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/slices/authSlice';
import { Button } from '../components/common/Button';

export const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await dispatch(login(formData)).unwrap();
            navigate('/');
        } catch (err) {
            setError('Email sau parolă incorecte');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="container">
                <div className="login-card">
                    <h2>Autentificare</h2>
                    {error && <div className="error-message">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="email@exemplu.ro"
                            />
                        </div>
                        <div className="form-group">
                            <label>Parolă</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="********"
                            />
                        </div>
                        <Button type="submit" fullWidth loading={loading}>
                            Autentificare
                        </Button>
                    </form>
                    <div className="login-links">
                        <Link to="/forgot-password">Ai uitat parola?</Link>
                        <Link to="/register">Nu ai cont? Înregistrează-te</Link>
                    </div>
                </div>
            </div>
            <style jsx>{`
        .login-page {
          min-height: calc(100vh - 200px);
          display: flex;
          align-items: center;
          padding: var(--spacing-8) 0;
        }
        .login-card {
          max-width: 400px;
          margin: 0 auto;
          background: white;
          padding: var(--spacing-8);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
        }
        .form-group {
          margin-bottom: var(--spacing-4);
        }
        .form-group label {
          display: block;
          margin-bottom: var(--spacing-2);
          font-weight: 500;
        }
        .form-group input {
          width: 100%;
          padding: var(--spacing-2) var(--spacing-3);
          border: 1px solid var(--gray-300);
          border-radius: var(--radius-md);
          font-size: var(--font-size-md);
        }
        .error-message {
          background: #fee;
          color: var(--danger-color);
          padding: var(--spacing-2) var(--spacing-3);
          border-radius: var(--radius-md);
          margin-bottom: var(--spacing-4);
        }
        .login-links {
          margin-top: var(--spacing-4);
          display: flex;
          justify-content: space-between;
        }
      `}</style>
        </div>
    );
};