import React, { useRef } from 'react';
import { Star, CaretLeft, CaretRight } from '@phosphor-icons/react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: 'Sophie D.',
        device: 'iPhone 13 Pro',
        text: 'Service incroyable. Mon écran était en miettes, il est ressorti comme neuf en 30 minutes. Le cadre est magnifique.',
        rating: 5
    },
    {
        id: 2,
        name: 'Thomas L.',
        device: 'MacBook Air M1',
        text: 'C’est rare de trouver une boutique aussi professionnelle. Transparence totale sur les prix et la réparation.',
        rating: 5
    },
    {
        id: 3,
        name: 'Camille R.',
        device: 'iPhone 11',
        text: 'J’ai acheté un iPhone reconditionné ici, impossible de le distinguer d’un neuf. Batterie à 100%. Je recommande.',
        rating: 5
    },
    {
        id: 4,
        name: 'Marc A.',
        device: 'Samsung S22',
        text: 'Réparation rapide et efficace. L\'équipe est super accueillante.',
        rating: 4
    }
];

const Testimonials = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 340; // Card width + gap
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="section testimonials-section">
            <div className="container">
                <div className="section-header-row">
                    <h2 className="section-title">Ce qu'ils disent de nous</h2>
                    <div className="carousel-controls">
                        <button className="nav-btn" onClick={() => scroll('left')} aria-label="Previous">
                            <CaretLeft size={24} />
                        </button>
                        <button className="nav-btn" onClick={() => scroll('right')} aria-label="Next">
                            <CaretRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="testimonials-scroll" ref={scrollRef}>
                    {testimonials.map((t) => (
                        <div key={t.id} className="testimonial-card glass-card">
                            <div className="t-rating">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} weight="fill" color={i < t.rating ? "#FFD700" : "#d1d1d6"} />
                                ))}
                            </div>
                            <p className="t-text">"{t.text}"</p>
                            <div className="t-footer">
                                <div className="t-name">{t.name}</div>
                                <div className="t-device">{t.device}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
