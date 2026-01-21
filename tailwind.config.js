const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './pages/**/*.{html,js,ts}',
        './index.html',
        './css/**/*.{css}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                'primary-dark': 'var(--color-primary-dark)',
                'primary-light': 'var(--color-primary-light)',
                secondary: 'var(--color-secondary)',
                'secondary-dark': 'var(--color-secondary-dark)',
                'secondary-light': 'var(--color-secondary-light)',
                accent: 'var(--color-accent)',
                'accent-hover': 'var(--color-accent-hover)',
                'accent-light': 'var(--color-accent-light)',
                background: 'var(--color-background)',
                'background-elevated': 'var(--color-background-elevated)',
                'background-card': 'var(--color-background-card)',
                surface: 'var(--color-surface)',
                'surface-hover': 'var(--color-surface-hover)',
                'surface-active': 'var(--color-surface-active)',
                'text-primary': 'var(--color-text-primary)',
                'text-secondary': 'var(--color-text-secondary)',
                'text-tertiary': 'var(--color-text-tertiary)',
                'text-inverse': 'var(--color-text-inverse)',
                success: 'var(--color-success)',
                'success-light': 'var(--color-success-light)',
                warning: 'var(--color-warning)',
                'warning-light': 'var(--color-warning-light)',
                error: 'var(--color-error)',
                'error-light': 'var(--color-error-light)',
                border: 'var(--color-border)',
                'border-hover': 'var(--color-border-hover)',
            },
            fontFamily: {
                body: ['Inter', 'sans-serif'],
                headline: ['Space Grotesk', 'sans-serif'],
                code: ['Fira Code', 'monospace'],
                cta: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [
        plugin(function({ addUtilities, theme }) {
            const utilities = {
                '.bg-background': { backgroundColor: theme('colors.background') },
                '.bg-background-elevated': { backgroundColor: theme('colors.background-elevated') },
                '.bg-background-card': { backgroundColor: theme('colors.background-card') },
                '.text-text-primary': { color: theme('colors.text-primary') },
                '.text-text-secondary': { color: theme('colors.text-secondary') },
                '.text-text-tertiary': { color: theme('colors.text-tertiary') },
                '.text-text-inverse': { color: theme('colors.text-inverse') },
                '.bg-accent': { backgroundColor: theme('colors.accent') },
                '.bg-accent-hover': { backgroundColor: theme('colors.accent-hover') },
                '.bg-accent-light': { backgroundColor: theme('colors.accent-light') },
                '.border-border': { borderColor: theme('colors.border') },
                '.border-border-hover': { borderColor: theme('colors.border-hover') },
                '.ring-accent': { ringColor: theme('colors.accent') },
            };
            addUtilities(utilities, ['responsive', 'hover']);
        }),
    ],
};
