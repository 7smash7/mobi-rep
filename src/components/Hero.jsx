import React from 'react';
import { CaretRight } from '@phosphor-icons/react';
import heroImage from '../assets/hero.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container">
                <div className="hero-content fade-in-up">
                    <h1 className="hero-title">
                        L'expertise Apple <br />
                        pour votre smartphone
                    </h1>
                    <p className="hero-subtitle">
                        Réparation express, pièces d'origine et garantie à vie sur nos interventions.
                        Redonnez vie à votre appareil avec l'excellence Mobirep.
                    </p>
                    <div className="hero-actions">
                        <a href="/repair" className="btn btn-primary">
                            Réparer mon appareil
                        </a>
                        <a href="/shop" className="link-arrow">
                            Acheter un reconditionné <CaretRight size={16} weight="bold" />
                        </a>
                    </div>
                </div>
                <div className="hero-visual fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="hero-image-wrapper">
                        <img src={heroImage} alt="Réparation smartphone futuriste" className="hero-img" />
                        <div className="hero-glow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
