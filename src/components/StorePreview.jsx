import React from 'react';
import { MapPin, ArrowRight } from '@phosphor-icons/react';
import mapPreview from '../assets/map-preview.png';
import './StorePreview.css';

const StorePreview = () => {
    return (
        <section className="store-preview-section">
            <div className="container">
                <div className="store-preview-content">
                    <div className="store-text">
                        <h2>Trouvez une boutique<br />près de chez vous</h2>
                        <p>Nos experts vous accueillent sans rendez-vous pour un diagnostic immédiat.</p>
                        <a href="/locate" className="btn btn-secondary">
                            Voir la carte <ArrowRight weight="bold" />
                        </a>
                    </div>
                    <div className="store-map-visual" style={{ backgroundImage: `url(${mapPreview})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="map-pin-pulse">
                            <MapPin size={32} weight="fill" color="#0071E3" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorePreview;
