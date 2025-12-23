import React, { useEffect, useState, useRef } from 'react';
import { Trophy, ShieldCheck, Heart } from '@phosphor-icons/react';
import './Stats.css';

const StatItem = ({ endValue, label, suffix = '', icon }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsVisible(true);
        }, { threshold: 0.5 });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const duration = 2000;
        const increment = endValue / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= endValue) {
                setCount(endValue);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, endValue]);

    return (
        <div className="stat-item" ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}>
            <div className="stat-icon-circle">{icon}</div>
            <div className="stat-number">{count.toLocaleString('fr-FR')}{suffix}</div>
            <div className="stat-label">{label}</div>
        </div>
    );
};

const Stats = () => {
    return (
        <section className="section stats-section">
            <div className="container stats-grid">
                <StatItem endValue={10000} suffix="+" label="Réparations effectuées" icon={<Trophy size={32} color="#FFD700" />} />
                <StatItem endValue={12} label="Garantie (mois)" icon={<ShieldCheck size={32} color="#0071E3" />} />
                <StatItem endValue={4.9} suffix="/5" label="Avis Google" icon={<Heart size={32} color="#FF2D55" weight="fill" />} />
            </div>
        </section>
    );
};

export default Stats;
