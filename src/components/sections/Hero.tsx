import React from 'react';
import styles from './Hero.module.scss';
import { Button } from '@/components/ui/Button/Button';
import heroDashboard from '@/assets/hero-dashboard.png';

export const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles['hero__container']}>
                <div className={styles['hero__content']}>
                    <h1 className={styles['hero__title']}>
                        Build Faster with Our Modern Solution
                    </h1>
                    <p className={styles['hero__description']}>
                        Experience the future of development with our cutting-edge platform.
                        Designed for speed, reliability, and scalability.
                    </p>
                    <div className={styles['hero__actions']}>
                        <Button size="lg">Get Started</Button>
                        <Button size="lg" variant="outline">Learn More</Button>
                    </div>
                </div>

                <div className={styles['hero__image']}>
                    <img
                        src={heroDashboard}
                        alt="Modern SaaS Dashboard Interface"
                        width="100%"
                        height="auto"
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    );
};
