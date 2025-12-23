import React from 'react';
import { Envelope, Phone, WhatsappLogo, PaperPlaneRight } from '@phosphor-icons/react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="section page-container">
            <div className="container contact-wrapper">
                <div className="contact-header fade-in-up">
                    <h1>Nous contacter</h1>
                    <p>Une question ? Une demande spécifique ? Notre équipe vous répond sous 2h.</p>
                </div>

                <div className="contact-content">
                    {/* Direct Contact Cards */}
                    <div className="contact-cards fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <a href="tel:+33123456789" className="contact-card glass-card">
                            <div className="icon-box blue"><Phone size={32} weight="fill" /></div>
                            <h3>Appelez-nous</h3>
                            <p>01 23 45 67 89</p>
                        </a>

                        <a href="https://wa.me/33123456789" className="contact-card glass-card">
                            <div className="icon-box green"><WhatsappLogo size={32} weight="fill" /></div>
                            <h3>WhatsApp</h3>
                            <p>Chat direct</p>
                        </a>

                        <a href="mailto:contact@mobirep.fr" className="contact-card glass-card">
                            <div className="icon-box purple"><Envelope size={32} weight="fill" /></div>
                            <h3>Email</h3>
                            <p>contact@mobirep.fr</p>
                        </a>
                    </div>

                    {/* Contact Form */}
                    <div className="form-container glass-card fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <form onSubmit={(e) => { e.preventDefault(); alert('Message envoyé !'); }}>
                            <div className="form-group">
                                <label>Nom complet</label>
                                <input type="text" placeholder="Jean Dupont" required />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="jean@exemple.com" required />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="5" placeholder="Bonjour, je souhaiterais..." required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-submit">
                                Envoyer le message <PaperPlaneRight size={20} weight="fill" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
