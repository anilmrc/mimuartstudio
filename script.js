const config = window.MIMU_CONFIG || {};

const textBindings = [
    ['promoText', '.promo-text'],
    ['footerText', '.footer-text']
];

textBindings.forEach(([configKey, selector]) => {
    const element = document.querySelector(selector);
    const value = config[configKey];

    if (element && typeof value === 'string') {
        element.textContent = value;
    }
});

const buttonsList = document.querySelector('.buttons-list');
const buttons = Array.isArray(config.buttons) ? config.buttons : [];
const promoText = document.querySelector('.promo-text');

if (promoText) {
    const lastButtonDelay = buttons.length > 0 ? 2.1 + (buttons.length - 1) * 0.2 : 2.5;
    promoText.style.animationDelay = `${lastButtonDelay + 0.6}s`;
}

if (buttonsList) {
    buttons.forEach((button, index) => {
        if (!button || !button.label || !button.url || !button.icon) {
            return;
        }

        const link = document.createElement('a');
        const icon = document.createElement('img');
        const label = document.createElement('span');

        link.href = button.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'social-btn';
        link.style.animationDelay = `${2.1 + index * 0.2}s`;

        icon.src = button.icon;
        icon.alt = button.label;
        icon.className = ['social-icon', button.iconClass].filter(Boolean).join(' ');

        label.className = 'social-name';
        label.textContent = button.label;

        link.append(icon, label);
        buttonsList.appendChild(link);
    });
}
