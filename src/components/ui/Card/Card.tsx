import React from 'react';
import styles from './Card.module.scss';
import clsx from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
    return (
        <div className={clsx(styles.card, className)} {...props}>
            {children}
        </div>
    );
};
