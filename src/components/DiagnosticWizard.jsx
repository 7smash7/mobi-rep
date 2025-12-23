import React, { useState } from 'react';
import { AppleLogo, AndroidLogo, BatteryCharging, Desktop, CheckCircle, ArrowLeft, DeviceMobile } from '@phosphor-icons/react';
import './DiagnosticWizard.css';

const DATA = {
    brands: [
        { id: 'apple', name: 'Apple', icon: <AppleLogo size={32} weight="fill" /> },
        { id: 'samsung', name: 'Samsung', icon: <AndroidLogo size={32} weight="fill" /> },
        { id: 'google', name: 'Google', icon: <DeviceMobile size={32} weight="fill" /> }, // Generic mobile for pixel
    ],
    models: {
        apple: [
            { id: 'iphone15promax', name: 'iPhone 15 Pro Max' },
            { id: 'iphone15pro', name: 'iPhone 15 Pro' },
            { id: 'iphone15', name: 'iPhone 15' },
            { id: 'iphone14promax', name: 'iPhone 14 Pro Max' },
            { id: 'iphone14', name: 'iPhone 14' },
            { id: 'iphone13', name: 'iPhone 13' },
            { id: 'iphone12', name: 'iPhone 12' },
            { id: 'iphone11', name: 'iPhone 11' },
        ],
        samsung: [
            { id: 's23ultra', name: 'Galaxy S23 Ultra' },
            { id: 's23', name: 'Galaxy S23' },
            { id: 's22ultra', name: 'Galaxy S22 Ultra' },
            { id: 's22', name: 'Galaxy S22' },
            { id: 'a54', name: 'Galaxy A54' },
        ],
        google: [
            { id: 'pixel8pro', name: 'Pixel 8 Pro' },
            { id: 'pixel8', name: 'Pixel 8' },
            { id: 'pixel7a', name: 'Pixel 7a' },
        ]
    },
    issues: [
        { id: 'screen', name: 'Écran / Vitre avant', price: 89, icon: <Desktop size={32} /> },
        { id: 'battery', name: 'Batterie / Autonomie', price: 49, icon: <BatteryCharging size={32} /> },
        { id: 'back', name: 'Vitre arrière', price: 99, icon: <Desktop size={32} /> },
        { id: 'connector', name: 'Connecteur de charge', price: 59, icon: <DeviceMobile size={32} /> },
    ]
};

const DiagnosticWizard = () => {
    const [step, setStep] = useState(1);
    const [selection, setSelection] = useState({ brand: null, model: null, issue: null });

    const handleSelect = (key, value) => {
        setSelection({ ...selection, [key]: value });
        setStep(step + 1);
    };

    const reset = () => {
        setStep(1);
        setSelection({ brand: null, model: null, issue: null });
    };

    const goBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const getPrice = () => {
        const base = selection.issue?.price || 0;
        // Mock price adjustment based on model
        const multiplier = selection.brand?.id === 'apple' ? 1.2 : 1.0;
        return Math.round(base * multiplier);
    };

    return (
        <div className="diagnostic-wizard glass-card fade-in-up">
            <div className="wizard-header">
                {step > 1 && step < 4 && (
                    <button onClick={goBack} className="back-btn"><ArrowLeft size={20} /></button>
                )}
                <h3>
                    {step === 1 && "Choisissez votre marque"}
                    {step === 2 && "Quel est votre modèle ?"}
                    {step === 3 && "Quelle est la panne ?"}
                    {step === 4 && "Votre estimation"}
                </h3>
                {/* Placeholder for progress bar if needed */}
            </div>

            <div className="wizard-content">
                {step === 1 && (
                    <div className="options-grid">
                        {DATA.brands.map(brand => (
                            <button key={brand.id} className="option-card" onClick={() => handleSelect('brand', brand)}>
                                <div className="option-icon">{brand.icon}</div>
                                <span>{brand.name}</span>
                            </button>
                        ))}
                    </div>
                )}

                {step === 2 && (
                    <div className="options-list">
                        {DATA.models[selection.brand.id].map(model => (
                            <button key={model.id} className="option-item" onClick={() => handleSelect('model', model)}>
                                <span>{model.name}</span>
                                <div className="arrow">&rarr;</div>
                            </button>
                        ))}
                    </div>
                )}

                {step === 3 && (
                    <div className="options-grid">
                        {DATA.issues.map(issue => (
                            <button key={issue.id} className="option-card" onClick={() => handleSelect('issue', issue)}>
                                <div className="option-icon">{issue.icon}</div>
                                <span>{issue.name}</span>
                            </button>
                        ))}
                    </div>
                )}

                {step === 4 && (
                    <div className="result-view">
                        <div className="result-icon">
                            <CheckCircle size={64} weight="fill" color="#34C759" />
                        </div>
                        <h4>Estimation pour {selection.brand.name} {selection.model.name}</h4>
                        <div className="result-price">{getPrice()} €</div>
                        <p className="result-note">Incluant pièces et main d'œuvre. Garantie à vie.</p>
                        <button className="btn btn-primary btn-block" onClick={() => alert('Prise de rendez-vous (Demo)')}>
                            Prendre rendez-vous
                        </button>
                        <button className="btn-text" onClick={reset}>Refaire une estimation</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DiagnosticWizard;
