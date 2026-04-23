// frontend/src/components/common/Button.jsx
import React from 'react';
import styles from './Button.module.css';

export const Button = ({
                           children,
                           variant = 'primary',
                           size = 'md',
                           loading = false,
                           disabled = false,
                           fullWidth = false,
                           onClick,
                           type = 'button',
                           icon: Icon,
                           ...props
                       }) => {
    const buttonClasses = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        loading && styles.loading,
    ].filter(Boolean).join(' ');

    return (
        <button
            type={type}
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled || loading}
            {...props}
        >
            {loading && <span className={styles.spinner}></span>}
            {Icon && !loading && <Icon className={styles.icon} />}
            <span>{children}</span>
        </button>
    );
};