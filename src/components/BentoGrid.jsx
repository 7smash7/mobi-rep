import React from 'react';
import { Wrench, DeviceMobile, Headset } from '@phosphor-icons/react';
import imgRepair from '../assets/service-repair.png';
import imgShop from '../assets/service-shop.png';
import imgAcc from '../assets/service-accessories.png';
import './BentoGrid.css';

const BentoGrid = () => {
    return (
        <section className="section bg-subtle">
            <div className="container">
                <h2 className="section-title text-center">Nos Services</h2>
                <div className="bento-grid">

                    {/* Card 1: Réparation Express (Large) */}
                    <div className="bento-card repair-card glass-card">
                        <div className="card-bg-image" style={{ backgroundImage: `url(${imgRepair})` }}></div>
                        <div className="card-content">
                            <div className="icon-wrapper blue">
                                <Wrench size={32} />
                            </div>
                            <h3>Réparation Express</h3>
                            <p>Écran cassé, batterie fatiguée ? Retrouvez votre appareil comme neuf en 30 minutes.</p>
                            <a href="/repair" className="card-link">Estimer ma réparation &rarr;</a>
                        </div>
                    </div>

                    {/* Card 2: Vente Reconditionné (Medium) */}
                    <div className="bento-card shop-card glass-card">
                        <div className="card-bg-image" style={{ backgroundImage: `url(${imgShop})` }}></div>
                        <div className="badge">Garanti 1 an</div>
                        <div className="card-content">
                            <div className="icon-wrapper green">
                                <DeviceMobile size={32} />
                            </div>
                            <h3>Smartphones Reconditionnés</h3>
                            <p>Le meilleur de la tech, audité et certifié par nos experts.</p>
                            <a href="/shop" className="card-link">Voir le stock &rarr;</a>
                        </div>
                    </div>

                    {/* Card 3: Accessoires Premium (Small/Wide) */}
                    <div className="bento-card accessories-card glass-card">
                        <div className="card-bg-image" style={{ backgroundImage: `url(${imgAcc})` }}></div>
                        <div className="card-content">
                            <div className="icon-wrapper purple">
                                <Headset size={32} />
                            </div>
                            <h3>Accessoires</h3>
                            <p>Protection et audio haute fidélité.</p>
                            <a href="/shop" className="card-link">Découvrir &rarr;</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
