import React from 'react';
import styles from './Features.module.scss';
import { Zap, Shield, Smartphone, Globe, Layers, Users } from 'lucide-react';

const features = [
    {
        icon: <Zap size={24} />,
        title: 'Lightning Fast',
        description: 'Optimized for speed and performance, ensuring your users have the best experience possible.'
    },
    {
        icon: <Shield size={24} />,
        title: 'Secure by Default',
        description: 'Enterprise-grade security features built-in to protect your data and your users.'
    },
    {
        icon: <Smartphone size={24} />,
        title: 'Mobile First',
        description: 'Responsive design that looks great on any device, from mobile phones to large desktops.'
    },
    {
        icon: <Globe size={24} />,
        title: 'Global Scale',
        description: 'Deploy anywhere with our globally distributed infrastructure.'
    },
    {
        icon: <Layers size={24} />,
        title: 'Modular Architecture',
        description: 'Built with modular components that can be easily customized and extended.'
    },
    {
        icon: <Users size={24} />,
        title: 'Team Collaboration',
        description: 'Tools designed to help your team work better together.'
    }
];

export const Features: React.FC = () => {
    return (
        <section id="features" className={styles.features}>
            <div className={styles['features__container']}>
                <div className={styles['features__header']}>
                    <h2>Why Choose Us?</h2>
                    <p>Everything you need to build modern applications.</p>
                </div>

                <div className={styles['features__grid']}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles['features__item']}>
                            <div className={styles['features__icon']}>
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
