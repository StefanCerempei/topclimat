import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export const RegisterTeamPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        companyName: '',
        registrationNumber: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        leaderName: '',
        yearsOfExperience: '',
        services: [],
        city: '',
        address: '',
        description: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const servicesList = [
        'Instalare AC nou',
        'Service AC',
        'Curățare AC',
        'Încărcare gaz AC',
        'Demontare AC',
        'Montaj AC multi-split',
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            if (checked) {
                setFormData({ ...formData, services: [...formData.services, value] });
            } else {
                setFormData({ ...formData, services: formData.services.filter(s => s !== value) });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validări
        if (formData.password !== formData.confirmPassword) {
            setError('Parolele nu coincid');
            return;
        }

        if (formData.password.length < 6) {
            setError('Parola trebuie să aibă minim 6 caractere');
            return;
        }

        if (formData.services.length === 0) {
            setError('Selectați cel puțin un serviciu oferit');
            return;
        }

        setLoading(true);

        // Simulare înregistrare
        setTimeout(() => {
            const teamData = {
                ...formData,
                role: 'team',
                rating: 0,
                completedJobs: 0,
                createdAt: new Date().toISOString(),
            };

            localStorage.setItem('user', JSON.stringify(teamData));
            localStorage.setItem('accessToken', 'demo-token-team');

            setLoading(false);
            navigate('/');
        }, 1500);
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>Înregistrare Echipa Instalatori</h2>
                <p style={styles.subtitle}>Alătură-te platformei și găsește clienți pentru serviciile tale</p>

                {error && <div style={styles.error}>{error}</div>}

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.row}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Nume Companie *</label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder="Ex: AC Instal SRL"
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label style={styles.label}>Număr Înregistrare *</label>
                            <input
                                type="text"
                                name="registrationNumber"
                                value={formData.registrationNumber}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder="CUI / JXXXXXXXX"
                            />
                        </div>
                    </div>

                    <div style={styles.row}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder="contact@companie.ro"
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
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Nume Lider Echipa *</label>
                        <input
                            type="text"
                            name="leaderName"
                            value={formData.leaderName}
                            onChange={handleChange}
                            required
                            style={styles.input}
                            placeholder="Numele persoanei de contact"
                        />
                    </div>

                    <div style={styles.row}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Ani Experiență *</label>
                            <input
                                type="number"
                                name="yearsOfExperience"
                                value={formData.yearsOfExperience}
                                onChange={handleChange}
                                required
                                style={styles.input}
                                placeholder="Număr ani"
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
                                placeholder="Orașul principal de activitate"
                            />
                        </div>
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Adresă *</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            style={styles.input}
                            placeholder="Adresa completă"
                        />
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Descriere Companie *</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            style={styles.textarea}
                            placeholder="Descrieți serviciile oferite, echipa, experiența..."
                            rows="3"
                        />
                    </div>

                    <div style={styles.formGroup}>
                        <label style={styles.label}>Servicii Oferite *</label>
                        <div style={styles.checkboxGroup}>
                            {servicesList.map(service => (
                                <label key={service} style={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        value={service}
                                        checked={formData.services.includes(service)}
                                        onChange={handleChange}
                                        style={styles.checkbox}
                                    />
                                    {service}
                                </label>
                            ))}
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
                        {loading ? 'Se înregistrează...' : 'Înregistrare ca Echipa'}
                    </button>
                </form>

                <p style={styles.footer}>
                    Ai deja cont? <Link to="/login" style={styles.link}>Autentifică-te</Link>
                </p>
                <p style={styles.footer}>
                    Ești client? <Link to="/register/client" style={styles.link}>Înregistrează-te ca client</Link>
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
        maxWidth: '800px',
        maxHeight: '90vh',
        overflowY: 'auto',
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
    },
    textarea: {
        padding: '10px 12px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        fontSize: '14px',
        fontFamily: 'inherit',
        resize: 'vertical',
    },
    checkboxGroup: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '10px',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '8px',
    },
    checkboxLabel: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '14px',
        cursor: 'pointer',
    },
    checkbox: {
        width: '18px',
        height: '18px',
        cursor: 'pointer',
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