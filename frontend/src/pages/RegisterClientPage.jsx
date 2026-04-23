import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const RegisterClientPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        address: '',
        city: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validare
        if (formData.password !== formData.confirmPassword) {
            setError('Parolele nu coincid');
            return;
        }

        if (formData.password.length < 6) {
            setError('Parola trebuie să aibă minim 6 caractere');
            return;
        }

        setLoading(true);

        // Simulare înregistrare (aici vei face call-ul real la API)
        setTimeout(() => {
            const userData = {
                ...formData,
                role: 'client',
                createdAt: new Date().toISOString(),
            };

            // Salvează în localStorage pentru demo
            localStorage.setItem('user', JSON.stringify(userData));
            localStorage.setItem('accessToken', 'demo-token-client');

            setLoading(false);
            navigate('/');
        }, 1500);
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Înregistrare Client</h2>
                <p style={styles.subtitle}>Creează-ți cont pentru a găsi cea mai bună echipă de instalare AC</p>

                {error && <div style={styles.error}>{error}</div>}

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.row}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Prenume *</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder="Introdu prenumele"
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label style={styles.label}>Nume *</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder="Introdu numele"
                            />
                        </div>
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={styles.input}
                            placeholder="exemplu@email.com"
                        />
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Telefon *</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            style={styles.input}
                            placeholder="0722123456"
                        />
                    </div>

                    <div style={styles.row}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Adresă *</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder="Strada, numărul"
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label style={styles.label}>Oraș *</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder="București, Cluj, etc."
                            />
                        </div>
                    </div>

                    <div style={styles.row}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Parolă *</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder="Minim 6 caractere"
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label style={styles.label}>Confirmă Parola *</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder="Rescrie parola"
                            />
                        </div>
                    </div>

                    <button type="submit" disabled={loading} style={styles.button}>
                        {loading ? 'Se înregistrează...' : 'Înregistrare Client'}
                    </button>
                </form>

                <p style={styles.footer}>
                    Ai deja cont? <Link to="/login" style={styles.link}>Autentifică-te</Link>
                </p>
                <p style={styles.footer}>
                    Vrei să devii instalator? <Link to="/register/team" style={styles.link}>Înregistrează-te ca echipă</Link>
                </p>
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
        maxWidth: '700px',
    },
    title: {
        fontSize: '28px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '8px',
        color: '#333',
    },
    subtitle: {
        textAlign: 'center',
        color: '#666',
        marginBottom: '30px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    row: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        flex: 1,
    },
    label: {
        fontSize: '14px',
        fontWeight: '500',
        color: '#333',
    },
    input: {
        padding: '10px 12px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        fontSize: '14px',
        transition: 'border-color 0.3s',
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
        marginTop: '16px',
        transition: 'background-color 0.3s',
    },
    error: {
        backgroundColor: '#fee',
        color: '#dc2626',
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '16px',
        fontSize: '14px',
        textAlign: 'center',
    },
    footer: {
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '14px',
        color: '#666',
    },
    link: {
        color: '#667eea',
        textDecoration: 'none',
        fontWeight: '500',
    },
};