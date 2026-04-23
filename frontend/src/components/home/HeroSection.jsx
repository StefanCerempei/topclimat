// frontend/src/components/home/HeroSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common/Button';

export const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Instalare AC profesională<br />
                        <span className="text-primary">cu garanție și rate</span>
                    </h1>
                    <p className="hero-subtitle">
                        Găsește cea mai bună echipă de instalatori AC în zona ta.
                        Oferim transparentă, calitate garantată și plată în rate.
                    </p>
                    <div className="hero-buttons">
                        <Button size="lg" onClick={() => navigate('/job-request')}>
                            Caută echipă
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => navigate('/teams')}>
                            Vezi echipele
                        </Button>
                    </div>
                    <div className="hero-stats">
                        <div>
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Lucrări finalizate</span>
                        </div>
                        <div>
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Echipe profesioniste</span>
                        </div>
                        <div>
                            <span className="stat-number">98%</span>
                            <span className="stat-label">Clienți mulțumiți</span>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
        .hero {
          padding: 80px 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        .hero-title {
          font-size: 48px;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .hero-subtitle {
          font-size: 18px;
          margin-bottom: 30px;
          opacity: 0.95;
        }
        .hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-bottom: 50px;
        }
        .hero-stats {
          display: flex;
          justify-content: space-between;
          gap: 40px;
          margin-top: 40px;
        }
        .hero-stats > div {
          flex: 1;
        }
        .stat-number {
          display: block;
          font-size: 32px;
          font-weight: bold;
        }
        .stat-label {
          font-size: 14px;
          opacity: 0.9;
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 32px;
          }
          .hero-buttons {
            flex-direction: column;
          }
          .hero-stats {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
        </section>
    );
};