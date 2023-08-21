'use client';

import {ReactElement} from 'react';

import {motion, Transition, Variants} from 'framer-motion';

import styles from './popcorn.module.scss';

interface PopcornAnimationProps {
    baseDelay?: number;
    children: string;
}

export default function PopcornAnimation({baseDelay = 0, children}: PopcornAnimationProps): ReactElement {
    const variants: Variants = {
        hidden: {opacity: 0, y: 60, scale: 0.6, transformOrigin: 'bottom'},
        visible: {opacity: 1, y: 0, scale: 1},
    };

    const transition: Transition = {
        duration: 0.6,
        ease: [0.6, 0, 0.12, 1.8],
    };

    return (
        <>
            {children.split('').map((character, index) => (
                <motion.span
                    className={styles.character}
                    key={index}
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{...transition, delay: baseDelay + index * 0.1 + Math.random() / 6}}
                >
                    {character}
                </motion.span>
            ))}
        </>
    );
}
