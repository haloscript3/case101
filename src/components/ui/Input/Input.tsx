import React, { forwardRef } from 'react';
import styles from './Input.module.scss';
import clsx from 'clsx';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, id, ...props }, ref) => {
        const inputId = id || props.name;

        return (
            <div className={clsx(styles['input-wrapper'], className)}>
                {label && (
                    <label htmlFor={inputId} className={styles['input-wrapper__label']}>
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    className={clsx(styles['input-wrapper__field'], {
                        [styles['input-wrapper__field--error']]: error,
                    })}
                    {...props}
                />
                {error && <span className={styles['input-wrapper__error']}>{error}</span>}
            </div>
        );
    }
);

Input.displayName = 'Input';
