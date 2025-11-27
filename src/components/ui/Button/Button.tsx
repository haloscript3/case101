import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    className,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    isLoading = false,
    disabled,
    ...props
}) => {
    const buttonClasses = clsx(
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${size}`],
        {
            [styles['button--full']]: fullWidth,
        },
        className
    );

    return (
        <button className={buttonClasses} disabled={disabled || isLoading} {...props}>
            {isLoading ? 'Loading...' : children}
        </button>
    );
};
