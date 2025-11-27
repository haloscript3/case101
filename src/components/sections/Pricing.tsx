import React from 'react';
import styles from './Pricing.module.scss';
import { Card } from '@/components/ui/Card/Card';
import { Button } from '@/components/ui/Button/Button';
import { Check } from 'lucide-react';
import clsx from 'clsx';

const plans = [
    {
        name: 'Starter',
        price: '$0',
        features: ['1 Project', 'Basic Analytics', 'Community Support'],
        cta: 'Start Free',
        variant: 'outline' as const
    },
    {
        name: 'Pro',
        price: '$29',
        features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', 'Custom Domain'],
        popular: true,
        cta: 'Get Started',
        variant: 'primary' as const
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        features: ['Dedicated Support', 'SLA', 'Custom Integrations', 'SSO'],
        cta: 'Contact Sales',
        variant: 'outline' as const
    }
];

export const Pricing: React.FC = () => {
    return (
        <section id="pricing" className={styles.pricing}>
            <div className={styles['pricing__container']}>
                <div className={styles['pricing__header']}>
                    <h2>Simple Pricing</h2>
                    <p>Choose the plan that fits your needs.</p>
                </div>

                <div className={styles['pricing__grid']}>
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={clsx(styles['pricing__card'], {
                                [styles['pricing__card--popular']]: plan.popular
                            })}
                        >
                            {plan.popular && <span className={styles['pricing__badge']}>Most Popular</span>}
                            <h3 className={styles['pricing__plan']}>{plan.name}</h3>
                            <div className={styles['pricing__price']}>
                                {plan.price}<span>{plan.price !== 'Custom' ? '/mo' : ''}</span>
                            </div>
                            <ul className={styles['pricing__features']}>
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <Check size={16} /> {feature}
                                    </li>
                                ))}
                            </ul>
                            <Button variant={plan.variant} fullWidth>{plan.cta}</Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
