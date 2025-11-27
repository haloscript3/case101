import React from 'react';
import styles from './FAQ.module.scss';
import { Accordion } from '@/components/ui/Accordion/Accordion';

const faqItems = [
    {
        id: '1',
        title: 'What is ProductX?',
        content: 'ProductX is a comprehensive solution for building modern web applications with speed and efficiency.'
    },
    {
        id: '2',
        title: 'How much does it cost?',
        content: 'We offer a free tier for individuals and small projects. Our Pro plan starts at $29/month.'
    },
    {
        id: '3',
        title: 'Can I cancel anytime?',
        content: 'Yes, you can cancel your subscription at any time. No questions asked.'
    },
    {
        id: '4',
        title: 'Do you offer support?',
        content: 'Yes, we offer community support for all users and priority support for Pro and Enterprise customers.'
    }
];

export const FAQ: React.FC = () => {
    return (
        <section id="faq" className={styles.faq}>
            <div className={styles['faq__container']}>
                <div className={styles['faq__header']}>
                    <h2>Frequently Asked Questions</h2>
                    <p>Everything you need to know about the product and billing.</p>
                </div>

                <Accordion items={faqItems} allowMultiple />
            </div>
        </section>
    );
};
