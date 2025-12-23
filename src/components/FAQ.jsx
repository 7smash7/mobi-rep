import React, { useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';
import './FAQ.css';

const faqData = [
    {
        question: "Combien de temps dure une réparation ?",
        answer: "Pour les pannes courantes (écran, batterie), la réparation est effectuée en 30 minutes environ en boutique. Pour les diagnostics plus complexes, comptez 24 à 48 heures."
    },
    {
        question: "Quelle est la garantie sur les réparations ?",
        answer: "Toutes nos réparations sont garanties à vie (hors casse et oxydation). Nous utilisons des pièces d'origine ou de qualité équivalente."
    },
    {
        question: "Faut-il prendre rendez-vous ?",
        answer: "Le rendez-vous n'est pas obligatoire, mais recommandé pour passer en priorité. Vous pouvez venir directement en boutique."
    },
    {
        question: "Vos appareils reconditionnés sont-ils garantis ?",
        answer: "Oui, tous nos smartphones reconditionnés sont garantis 1 an, avec une batterie certifiée à plus de 85% de sa capacité d'origine."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section faq-section">
            <div className="container faq-container">
                <h2 className="section-title text-center">Questions fréquentess</h2>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                            onClick={() => toggle(index)}
                        >
                            <div className="faq-question">
                                {item.question}
                                <CaretDown size={20} className="faq-icon" />
                            </div>
                            <div className="faq-answer">
                                <div className="faq-answer-inner">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
