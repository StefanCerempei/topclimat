import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h1 style={styles.title}>
                    AC Marketplace
                </h1>
                <p style={styles.subtitle}>
                    Platformă pentru instalare AC profesională
                </p>
                <p style={styles.description}>
                    Găsește cea mai bună echipă de instalatori sau înregistrează-ți echipa
                </p>

                <div style={styles.buttonGroup}>
                    <button
                        onClick={() => navigate('/register/client')}
                        style={styles.primaryButton}
                    >
                        Înregistrare Client
                    </button>
                    <button
                        onClick={() => navigate('/register/team')}
                        style={styles.secondaryButton}
                    >
                        Înregistrare Instalator
                    </button>
                </div>

                <div style={styles.loginLink}>
                    Ai deja cont? <button onClick={() => navigate('/login')} style={styles.linkButton}>Autentifică-te</button>
                </div>

                <div style={styles.features}>
                    <div style={styles.feature}>
                        <span style={styles.emoji}>✅</span>
                        <span>Instalare garantată</span>
                    </div>
                    <div style={styles.feature}>
                        <span style={styles.emoji}>💰</span>
                        <span>Plată în rate</span>
                    </div>
                    <div style={styles.feature}>
                        <span style={styles.emoji}>⭐</span>
                        <span>Echipe verificate</span>
                    </div>
                </div>
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
    content: {
        textAlign: 'center',
        color: 'white',
        maxWidth: '600px',
    },
    title: {
        fontSize: '56px',
        fontWeight: 'bold',
        marginBottom: '16px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
    },
    subtitle: {
        fontSize: '24px',
        marginBottom: '12px',
        opacity: 0.95,
    },
    description: {
        fontSize: '16px',
        marginBottom: '32px',
        opacity: 0.85,
    },
    buttonGroup: {
        display: 'flex',
        gap: '16px',
        justifyContent: 'center',
        marginBottom: '24px',
        flexWrap: 'wrap',
    },
    primaryButton: {
        padding: '14px 32px',
        fontSize: '16px',
        fontWeight: '600',
        backgroundColor: 'white',
        color: '#667eea',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    secondaryButton: {
        padding: '14px 32px',
        fontSize: '16px',
        fontWeight: '600',
        backgroundColor: 'transparent',
        color: 'white',
        border: '2px solid white',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'transform 0.2s, background-color 0.2s',
    },
    loginLink: {
        fontSize: '14px',
        marginBottom: '40px',
    },
    linkButton: {
        background: 'none',
        border: 'none',
        color: 'white',
        textDecoration: 'underline',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '600',
    },
    features: {
        display: 'flex',
        justifyContent: 'center',
        gap: '32px',
        flexWrap: 'wrap',
        marginTop: '20px',
    },
    feature: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '14px',
        backgroundColor: 'rgba(255,255,255,0.2)',
        padding: '8px 16px',
        borderRadius: '20px',
    },
    emoji: {
        fontSize: '20px',
    },
};