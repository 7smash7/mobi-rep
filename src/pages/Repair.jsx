import React from 'react';
import DiagnosticWizard from '../components/DiagnosticWizard';

const Repair = () => {
    return (
        <div className="page-container" style={{ padding: '80px 0', minHeight: '80vh', background: 'var(--color-bg-subtle)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '40px' }} className="fade-in-up">
                    <h1 style={{ marginBottom: '16px', fontSize: '2.5rem' }}>Estimation & Réparation</h1>
                    <p style={{ color: 'var(--color-text-secondary)' }}>Obtenez un devis immédiat et réservez votre créneau.</p>
                </div>
                <DiagnosticWizard />
            </div>
        </div>
    );
};

export default Repair;
