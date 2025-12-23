import React from 'react';
import './Footer.css';
import { FacebookLogo, InstagramLogo, TwitterLogo } from '@phosphor-icons/react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="/repair">Réparation iPhone</a></li>
                            <li><a href="/repair">Réparation Mac</a></li>
                            <li><a href="/shop">Smartphones Reconditionnés</a></li>
                            <li><a href="/shop">Accessoires</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Entreprise</h4>
                        <ul>
                            <li><a href="/locate">Nos boutiques</a></li>
                            <li><a href="/contact">Carrières</a></li>
                            <li><a href="/contact">Presse</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="/legal">Mentions légales</a></li>
                        </ul>
                    </div>
                    <div className="footer-col social">
                        <h4>Suivez-nous</h4>
                        <div className="social-icons">
                            <a href="#"><FacebookLogo size={24} weight="fill" /></a>
                            <a href="#"><InstagramLogo size={24} weight="fill" /></a>
                            <a href="#"><TwitterLogo size={24} weight="fill" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Mobirep. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
