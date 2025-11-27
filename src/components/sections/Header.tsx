import React from 'react';
import styles from './Header.module.scss';
import { useTheme } from '@/hooks/useTheme';
import { Sun, Moon, Menu } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';

export const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={styles.header}>
            <div className={styles['header__container']}>
                <div className={styles['header__logo']}><strong> <em>Halo</em></strong>Product</div>

                <nav className={styles['header__nav']}>
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#faq">FAQ</a>
                    <a href="#contact">Contact</a>
                </nav>

                <div className={styles['header__actions']}>
                    <button
                        className={styles['header__theme-toggle']}
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    <div className="hidden md:block">
                        <Button size="sm">Get Started</Button>
                    </div>

                    <button className="md:hidden p-2" aria-label="Menu">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};
