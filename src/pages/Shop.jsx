import React from 'react';
import ProductGrid from '../components/ProductGrid';

const Shop = () => {
    return (
        <div className="page-container section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '16px' }}>Boutique Reconditionné</h1>
                    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Des appareils d'exception, audités sur 42 points de contrôle.
                    </p>
                </div>
                <ProductGrid />
            </div>
        </div>
    );
};

export default Shop;
