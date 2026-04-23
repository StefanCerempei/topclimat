import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const LoginPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulare autentificare
        setTimeout(() => {
            const user = localStorage.getItem('user');
            if (user) {
                const userData = JSON.parse(user);
                if (userData.email === formData.email) {
                    navigate('/');
                } else {
                    setError('Email sau parolă incorecte');
                }
            } else {
                setError('Cont inexistent. Te rugăm să te înregistrezi.');
            }
            setLoading(false);
        }, 1000);
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Autentificare</h2>

                {error && <div style={styles.error}>{error}</div>}

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={styles.input}
                            placeholder="email@exemplu.ro"
                        />
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Parolă</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={styles.input}
                            placeholder="********"
                        />
                    </div>

                    <button type="submit" disabled={loading} style={styles.button}>
                        {loading ? 'Se autentifică...' : 'Autentificare'}
                    </button>
                </form>

                <div style={styles.links}>
                    <Link to="/forgot-password" style={styles.link}>Ai uitat parola?</Link>
                    <span>sau</span>
                    <Link to="/register/client" style={styles.link}>Înregistrează-te</Link>
                </div>

                <div style={styles.divider}>
                    <span style={styles.dividerText}>Ești instalator?</span>
                </div>

                <button
                    onClick={() => navigate('/register/team')}
                    style={styles.teamButton}
                >
                    Înregistrează-ți echipa
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px',
    },
    card: {
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        width: '100%',
        maxWidth: '400px',
    },
    title: {
        fontSize: '28px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '30px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    label: {
        fontSize: '14px',
        fontWeight: '500',
        color: '#333',
    },
    input: {
        padding: '12px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        fontSize: '14px',
    },
    button: {
        padding: '12px',
        backgroundColor: '#667eea',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        marginTop: '10px',
    },
    error: {
        backgroundColor: '#fee',
        color: '#dc2626',
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '20px',
        fontSize: '14px',
        textAlign: 'center',
    },
    links: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
        fontSize: '14px',
    },
    link: {
        color: '#667eea',
        textDecoration: 'none',
    },
    divider: {
        marginTop: '20px',
        textAlign: 'center',
        position: 'relative',
    },
    dividerText: {
        backgroundColor: 'white',
        padding: '0 10px',
        color: '#999',
        fontSize: '14px',
    },
    teamButton: {
        width: '100%',
        padding: '12px',
        backgroundColor: 'transparent',
        color: '#667eea',
        border: '2px solid #667eea',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        marginTop: '20px',
    },
};