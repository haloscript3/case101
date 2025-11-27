import React, { useState, useRef, useEffect } from 'react';
import styles from './Accordion.module.scss';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

export interface AccordionItem {
    id: string;
    title: string;
    content: React.ReactNode;
}

export interface AccordionProps {
    items: AccordionItem[];
    allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
    const [openIds, setOpenIds] = useState<Set<string>>(new Set());

    const toggleItem = (id: string) => {
        setOpenIds((prev) => {
            const newSet = new Set(allowMultiple ? prev : []);
            if (prev.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <div className={styles.accordion}>
            {items.map((item) => (
                <AccordionItem
                    key={item.id}
                    item={item}
                    isOpen={openIds.has(item.id)}
                    onToggle={() => toggleItem(item.id)}
                />
            ))}
        </div>
    );
};

interface AccordionItemProps {
    item: AccordionItem;
    isOpen: boolean;
    onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onToggle }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number | undefined>(isOpen ? undefined : 0);

    useEffect(() => {
        if (isOpen) {
            setHeight(contentRef.current?.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div className={styles['accordion__item']}>
            <button
                className={styles['accordion__trigger']}
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                {item.title}
                <ChevronDown
                    className={clsx(styles['accordion__icon'], {
                        [styles['accordion__icon--open']]: isOpen,
                    })}
                />
            </button>
            <div
                className={styles['accordion__content']}
                style={{ height: height }}
            >
                <div className={styles['accordion__content-inner']} ref={contentRef}>
                    {item.content}
                </div>
            </div>
        </div>
    );
};
