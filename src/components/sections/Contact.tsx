import React, { useState } from 'react';
import styles from './Contact.module.scss';
import { Input } from '@/components/ui/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import { Modal } from '@/components/ui/Modal/Modal';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setShowSuccessModal(true);
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles['contact__container']}>
                <div className={styles['contact__header']}>
                    <h2>Get in Touch</h2>
                    <p>Have questions? We'd love to hear from you.</p>
                </div>

                <form className={styles['contact__form']} onSubmit={handleSubmit} noValidate>
                    <Input
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        placeholder="Halo Dyatlov"
                    />
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        placeholder="info@haliltekin.dev"
                    />

                    <div className="input-wrapper">
                        <label htmlFor="message" style={{ fontSize: 'var(--font-size-sm)', fontWeight: 500, marginBottom: 'var(--spacing-xs)', display: 'block' }}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className={`
                ${styles['contact__input']} 
                ${errors.message ? 'border-red-500' : ''}
              `}
                            style={{
                                width: '100%',
                                padding: 'var(--spacing-sm) var(--spacing-md)',
                                fontSize: 'var(--font-size-base)',
                                fontFamily: 'var(--font-family-sans)',
                                border: `1px solid ${errors.message ? 'var(--color-error)' : 'var(--color-border)'}`,
                                borderRadius: 'var(--radius-md)',
                                backgroundColor: 'var(--color-background)',
                                color: 'var(--color-text)',
                                resize: 'vertical'
                            }}
                            placeholder="How can we help you?"
                        />
                        {errors.message && <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-error)', marginTop: 'var(--spacing-xs)', display: 'block' }}>{errors.message}</span>}
                    </div>

                    <Button type="submit" isLoading={isSubmitting} fullWidth>
                        Send Message
                    </Button>
                </form>

                <Modal
                    isOpen={showSuccessModal}
                    onClose={() => setShowSuccessModal(false)}
                    title="Success!"
                >
                    <p>Your message has been sent successfully. We'll get back to you soon.</p>
                    <div style={{ marginTop: 'var(--spacing-lg)', display: 'flex', justifyContent: 'flex-end' }}>
                        <Button onClick={() => setShowSuccessModal(false)}>Close</Button>
                    </div>
                </Modal>
            </div>
        </section>
    );
};
